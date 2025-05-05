
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
    <div className="bg-white border border-border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
      <h3 className="text-lg font-bold mb-4 text-blog-highlight">{title}</h3>
      <ul className="space-y-3">
        {categories.map((category) => (
          <li key={category.id} className="flex justify-between items-center">
            <NavLink 
              to={`/category/${category.slug}`}
              className="text-sm hover:text-blog-highlight transition-colors flex items-center"
            >
              <span className="w-2 h-2 rounded-full bg-blog-accent mr-2"></span>
              {category.name}
            </NavLink>
            <span className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-xs px-2 py-1 rounded-full">
              {category.count}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;
