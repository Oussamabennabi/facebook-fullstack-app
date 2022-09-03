import React from 'react'
import { Navbar } from '../layouts';
import FeaturesSidebar from '../layouts/sidbars/FeaturesSidebar'

const Bookmarks = () => {

      

  return (
    <div className="overflow-hidden h-screen">
      <Navbar />

      <main className="mt-14 h-[calc(100%-56px)]">
        <FeaturesSidebar />
      </main>
    </div>
  );
}

export default Bookmarks