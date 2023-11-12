import { tagListState, unSetTierTagSelector } from '@/atoms/item';
import { ITag } from '@/interfaces/tag.interface';
import { handleOnDrag, handleOnDragOver } from '@/utils/drag-n-drop';
import { useRouter } from 'next/navigation';
import React, { HTMLAttributes, useCallback, useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import Tag from './tag';

function ItemList({ className }: HTMLAttributes<HTMLDivElement>) {
  const STORAGE_KEY = 'tlb_items';
  const router = useRouter();
  const [tagList, setTagList] = useRecoilState(tagListState);
  const unSetTierTag = useRecoilValue(unSetTierTagSelector);

  const getTags = useCallback(() => {
    const itemsStr = localStorage.getItem(STORAGE_KEY);
    const exItems = itemsStr ? (JSON.parse(itemsStr) as ITag[]) : [];
    setTagList(exItems);
  }, [setTagList]);

  useEffect(() => {
    getTags();
  }, [getTags]);

  function handleOnDrop(e: React.DragEvent<HTMLDivElement>) {
    const itemJSON = e.dataTransfer.getData('item');
    if (!itemJSON) return;
    const item = JSON.parse(itemJSON) as ITag;
    const removed = tagList.filter((tag) => tag.title !== item.title);
    setTagList([...removed, { title: item.title, tier: undefined }]);
  }
  return (
    <>
      <div
        className={`${className} h-full`}
        onDrop={handleOnDrop}
        onDragOver={handleOnDragOver}
      >
        <div className="flex flex-col justify-between h-full">
          <div className="p-2 border border-neutral-800 rounded-xl bg-neutral-950 h-full">
            <div className="flex flex-wrap gap-4 justify-start ">
              {unSetTierTag.map((tag) => (
                <Tag
                  key={tag.title}
                  {...tag}
                  draggable
                  onDragStart={(e) => handleOnDrag(e, tag)}
                />
              ))}
            </div>
          </div>
          <div className="my-4">
            <button
              className="p-2 bg-neutral-50 text-black rounded-md"
              onClick={() => router.push('/management')}
            >
              Manage Item
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ItemList;
