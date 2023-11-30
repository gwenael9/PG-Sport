import { Category } from "@/types";
import { useState } from "react";
import { TrashIcon } from "@heroicons/react/24/outline";
import { PencilSquareIcon } from "@heroicons/react/24/outline";
import { CheckIcon } from "@heroicons/react/24/outline";
import { XCircleIcon } from "@heroicons/react/24/outline";
import { useUpdateCategoryMutation } from "@/graphql/generated/schema";

interface CategoryRowProps {
  category: Category;
  handleDeleteCategory: (id: number) => Promise<void>;
}
export default function CategoryRow({
  category: { id, name },
  handleDeleteCategory,
}: CategoryRowProps) {
  const [isEditing, setIsEditing] = useState(false);

  const [displayedName, setDisplayedName] = useState(name);

  const [updateCategory] = useUpdateCategoryMutation();

  const handleSave = async () => {
    try {
      if (displayedName) {
        await updateCategory({
          variables: { data: { name: displayedName }, categoryId: id },
        });
        setIsEditing(false);
      }
    } catch (err) {
      console.error(err);
      setDisplayedName(name);
    }
  };

  return (
    <tr className="bg-gray-100">

      <td className="py-2 px-20">
        {isEditing ? (
          <input
            type="text"
            className="input"
            value={displayedName}
            onChange={(e) => setDisplayedName(e.target.value)}
          />
        ) : (
          displayedName.toUpperCase()
        )}
      </td>

      <td className="py-2 px-20">

        {isEditing ? (
          <div>
            <button onClick={handleSave}>
              <CheckIcon width={24} height={24} />
            </button>
            <button
              onClick={() => {
                setIsEditing(false);
                setDisplayedName(name);
              }}
            >
              <XCircleIcon width={24} height={24} className="ml-2" />
            </button>
          </div>
        ) : (
          <div>
            <button className="bg-blue-500 text-white py-1 px-2 rounded-md" onClick={() => setIsEditing(true)}>
            <PencilSquareIcon width={24} height={24} />
            </button>

            <button className="bg-blue-500 text-white py-1 px-2 rounded-md" onClick={() => handleDeleteCategory(id)}>
                <TrashIcon width={24} height={24}  />            
            </button>
          </div>
        )}
      </td>

    </tr>
  );
}
