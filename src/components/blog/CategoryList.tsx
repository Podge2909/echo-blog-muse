
import { NavLink } from 'react-router-dom';

interface Category {
  id: string;
  name: string;
  slug: string;
  count: number;
}

interface CategoryListProps {
  categories: Category[];
  title?: string;
}

const CategoryList = ({ categories, title = "Categories" }: CategoryListProps) => {
  return (
    <div className="bg-white border border-border rounded-lg p-6">
      <h3 className="text-lg font-bold mb-4">{title}</h3>
      <ul className="space-y-2">
        {categories.map((category) => (
          <li key={category.id} className="flex justify-between items-center">
            <NavLink 
              to={`/category/${category.slug}`}
              className="text-sm hover:text-blog-highlight transition-colors"
            >
              {category.name}
            </NavLink>
            <span className="bg-blog-light text-blog-muted text-xs px-2 py-1 rounded-full">
              {category.count}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;
