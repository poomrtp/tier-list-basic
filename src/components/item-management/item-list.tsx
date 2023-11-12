import { HTMLAttributes } from 'react';
import Tag from '../tier-list/tag';
import { ITag } from '@/interfaces/tag.interface';

interface ItemManagementProps {
  itemList: ITag[];
  onRemove: (title: string) => void;
}

function ItemListManagement({
  itemList,
  onRemove,
  className,
}: ItemManagementProps & HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`${
        className ?? ''
      } border border-neutral-800 rounded-xl bg-neutral-950`}
    >
      <div className="flex flex-wrap gap-4 justify-start">
        {itemList.map((item) => (
          <Tag key={item.title} title={item.title} onRemove={onRemove} />
        ))}
      </div>
    </div>
  );
}

export default ItemListManagement;
