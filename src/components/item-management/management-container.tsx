'use client';

import React, { useCallback, useEffect } from 'react';
import { tagListState } from '@/atoms/item';
import { useRecoilState } from 'recoil';
import ItemListManagement from './item-list';
import Form from './form';
import { ITag } from '@/interfaces/tag.interface';

function ManagementContainer() {
  const STORAGE_KEY = 'tlb_items';
  const [tagList, setTagList] = useRecoilState(tagListState);

  const getTags = useCallback(() => {
    const itemsStr = localStorage.getItem(STORAGE_KEY);
    const exItems = itemsStr ? (JSON.parse(itemsStr) as ITag[]) : [];
    setTagList(exItems);
  }, [setTagList]);

  useEffect(() => {
    getTags();
  }, [getTags]);

  const handleCreate = (title: string) => {
    const newItem = { title, tier: undefined };
    const itemsStr = localStorage.getItem(STORAGE_KEY);
    const exItems = itemsStr ? (JSON.parse(itemsStr) as ITag[]) : [];
    const newItems = [...exItems, newItem];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newItems));
    setTagList(newItems);
    return;
  };

  const handleRemove = (removeTitle: string) => {
    const itemsStr = localStorage.getItem(STORAGE_KEY);
    const exItems = itemsStr ? (JSON.parse(itemsStr) as ITag[]) : [];
    const newItems = exItems.filter((item) => item.title !== removeTitle);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newItems));
    setTagList(newItems);
    return;
  };

  return (
    <div className="w-full flex flex-col">
      <Form className="flex justify-center" onCreate={handleCreate} />
      <ItemListManagement
        className="h-full w-full p-2 mt-4"
        itemList={tagList}
        onRemove={handleRemove}
      />
    </div>
  );
}

export default ManagementContainer;
