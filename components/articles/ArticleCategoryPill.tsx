"use client";

interface ArticleCategoryPillProps {
  isActive: boolean;
  categoryId: string;
  categoryName: string;
  onChangeCategory: (categoryId: string) => void;
}

const ArticleCategoryPill = ({
  isActive,
  categoryId,
  categoryName,
  onChangeCategory,
}: ArticleCategoryPillProps) => {
  return (
    <div
      onClick={() => onChangeCategory(categoryId)}
      className={`px-4 py-1 rounded-full  transition duration-200 ease-out cursor-pointer ${isActive ? "bg-primary-200 text-primary-600 hover:text-primary-600" :"bg-primary-700 hover:bg-white text-white hover:text-primary-300"}`}
    >
      <h5>{categoryName}</h5>
    </div>
  );
};

export default ArticleCategoryPill;
