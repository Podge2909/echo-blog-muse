
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

const CategoryList = ({ categories, title = "AI Topics" }: CategoryListProps) => {
  return (
    <div className="bg-white border border-border rounded-lg p-6 shadow-sm">
      <h3 className="text-lg font-bold mb-4">{title}</h3>
      <ul className="space-y-2">
        {categories.map((category) => (
          <li key={category.id} className="flex justify-between items-center">
            <NavLink 
              to={`/category/${category.slug}`}
              className="text-sm hover:text-blue-600 transition-colors"
            >
              {category.name}
            </NavLink>
            <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full">
              {category.count}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;
