import styles from "@styles/bookDetail.module.css";

// TODO
// [ ] DetailBookWrapper 재사용 삭제 예정
// -> 불필요한 컴포넌트  + styles.bookDetail_wrapper 밖에 안 쓰면서 module 전체 import 되어있음
export default function DetailBookWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={styles.bookDetail_wrapper}>{children}</div>;
}
