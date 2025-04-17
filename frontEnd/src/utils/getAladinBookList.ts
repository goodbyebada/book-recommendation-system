export async function getAladinBookList(params: string) {
  try {
    const res = await fetch(`/api?${params}`);
    const data = await res.json();
    if (!data.success) throw data;

    return data.product;
  } catch (e) {
    return e;
  }
}
