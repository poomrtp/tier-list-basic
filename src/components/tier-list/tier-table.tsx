'use client';
import React from 'react';
import { useRecoilState } from 'recoil';
import { tagListState } from '@/atoms/item';
import { ITag } from '@/interfaces/tag.interface';
import { handleOnDrag, handleOnDragOver } from '@/utils/drag-n-drop';
import Tag from './tag';

function TierTable({ className }: React.HTMLAttributes<HTMLDivElement>) {
  const [tagList, setTagList] = useRecoilState(tagListState);
  const tierList = ['S', 'A', 'B', 'C', 'D'];
  function handleOnDrop(e: React.DragEvent<HTMLDivElement>, tier: string) {
    const itemJSON = e.dataTransfer.getData('item');
    if (!itemJSON) return;
    const item = JSON.parse(itemJSON) as ITag;
    const removed = tagList.filter((tag) => tag.title !== item.title);
    setTagList([...removed, { title: item.title, tier }]);
  }
  return (
    <div className={`${className ?? ''} w-full h-full`}>
      <div className="p-1 border border-neutral-800 rounded-xl bg-neutral-950">
        {tierList.map((tier, i) => (
          <div key={tier} className="gap-2 m-1 bg-neutral-900 rounded-md">
            <div className="grid grid-cols-6 w-full ">
              <div
                className={`px-4 py-6 col-span-1 ${
                  i === 0 ? 'bg-neutral-200' : 'bg-neutral-700'
                } text-center content-center rounded-l-md`}
              >
                <span
                  className={`inline-block align-middle ${
                    i === 0 && 'text-black'
                  }`}
                >
                  {tier}
                </span>
              </div>
              <div
                className="p-2 col-span-5 flex flex-wrap justify-start gap-4"
                onDrop={(e) => handleOnDrop(e, tier)}
                onDragOver={handleOnDragOver}
              >
                {tagList.map((tag) => {
                  return (
                    tag?.tier === tier && (
                      <Tag
                        key={tag.title}
                        {...tag}
                        draggable
                        onDragStart={(e) => handleOnDrag(e, tag)}
                      />
                    )
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TierTable;
