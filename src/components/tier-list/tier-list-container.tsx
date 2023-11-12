'use client';

import TierTable from './tier-table';
import ItemList from './item-list';

function TierListContainer() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 w-full">
      <ItemList className="grid-cols-1 order-last md:order-first md:col-span-3" />
      <TierTable className="grid-cols-1 md:col-span-9" />
    </div>
  );
}

export default TierListContainer;
