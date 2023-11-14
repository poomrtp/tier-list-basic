import React, { HTMLAttributes } from 'react';

export interface TagProps {
  title: string;
  onRemove?: (title: string) => void;
}

function Tag({
  title,
  onRemove,
  className,
  ...rest
}: HTMLAttributes<HTMLDivElement> & TagProps) {
  return (
    <div
      className={`${className} p-4 bg-neutral-800/80 rounded-xl flex justify-between place-items-center gap-4 cursor-grab`}
      {...rest}
    >
      <div>{title}</div>

      {onRemove && (
        <div className="cursor-pointer">
          <span
            className="text-red-700 pl-2"
            onClick={() => onRemove(`${title}`)}
          >
            X
          </span>
        </div>
      )}
    </div>
  );
}

export default Tag;
