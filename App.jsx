import React from 'react';
import BusinessBossBoard from './components/BusinessBossBoard';
import PlayerHUD from './components/PlayerHUD';
import AvatarLocker_Enhanced from './components/AvatarLocker_Enhanced';
import { useBizBucks } from './context/BizBucksContext';
import { useAvatar } from './context/AvatarContext';

const App = () => {
  const { bizBucks } = useBizBucks();
  const [showLocker, setShowLocker] = React.useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-white font-sans">
      <header className="flex justify-between items-center px-6 py-4 bg-white shadow-md border-b">
        <h1 className="text-2xl font-bold text-blue-700">ExcelGrades: BusinessBoss</h1>
        <div className="space-x-4">
          <button
            onClick={() => setShowLocker(false)}
            className={`px-4 py-2 rounded-xl ${!showLocker ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
          >
            Game
          </button>
          <button
            onClick={() => setShowLocker(true)}
            className={`px-4 py-2 rounded-xl ${showLocker ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
          >
            Avatar Locker
          </button>
        </div>
      </header>
      {showLocker ? <AvatarLocker_Enhanced /> : (
        <>
          <BusinessBossBoard />
          <PlayerHUD bizBucks={bizBucks} />
        </>
      )}
    </div>
  );
};

export default App;
