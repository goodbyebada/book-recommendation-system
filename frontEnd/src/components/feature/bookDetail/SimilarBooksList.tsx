import BookItem from "@components/common/item/BookItem";
import { navItemType } from "@utils/model/interfaceModel";
import styles from "@styles/detailInfo.module.css";
import { BookItemInterface } from "@utils/model/interfaceModel";
import { List } from "postcss/lib/list";

/**
 * 책 상세 페이지
 *
 * - " 이 책을 좋아한다면" 눌렀을 시 보여줄 , 현재 책과 밀접도가 높은 책 리스트 컴포넌트
 * @param param0
 * @returns
 */
export default function SimilarBooksList({ props }: { props: navItemType }) {
  const { idx, tagId, item, content, onClickBook } = props;
  const contentList = content as BookItem[];

  return (
    <div className={styles.book_list_container}>
      <div className={styles.book_list}>
        {contentList
          .map((e, idx) => (
            <BookItem
              bookInfo={e}
              key={idx}
              clickEvent={
                onClickBook !== null ? onClickBook : (bookItem: BookItem) => {}
              }
            />
          ))
          .sort(() => Math.random() - 0.5)}
      </div>
    </div>
  );
}
