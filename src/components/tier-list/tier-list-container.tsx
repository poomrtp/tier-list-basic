'use client';

import TierTable from './tier-table';
import ItemList from './item-list';

function TierListContainer() {
  return (
    <div className="grid grid-cols-12 gap-4 w-full">
      <ItemList className="col-span-3" />
      <TierTable className="col-span-9" />
    </div>
  );
}

export default TierListContainer;
