"use client";

interface ArticleCategoryPillProps {
  categoryId: string;
  categoryName: string;
  onChangeCategory: (categoryId: string) => void;
}

const ArticleCategoryPill = ({
  categoryId,
  categoryName,
  onChangeCategory,
}: ArticleCategoryPillProps) => {
  return (
    <div
      onClick={() => onChangeCategory(categoryId)}
      className="px-4 py-1 rounded-full bg-primary-200 text-primary-600 hover:text-primary-600 hover:bg-white transition duration-200 ease-out cursor-pointer"
    >
      <h5>{categoryName}</h5>
    </div>
  );
};

export default ArticleCategoryPill;
