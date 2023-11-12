import { DragEvent } from 'react';
import { TagProps } from '@/components/tier-list/tag';

export function handleOnDrag(e: DragEvent<HTMLDivElement>, tag: TagProps) {
  e.dataTransfer.setData('item', JSON.stringify(tag));
  e.dataTransfer.effectAllowed = 'move';
  e.dataTransfer.dropEffect = 'move';
}

export function handleOnDragOver(e: DragEvent<HTMLDivElement>) {
  e.preventDefault();
}
