
import React, { useState } from 'react';
import PlayerHome from './screens/PlayerHome';
import MatchCardView from './screens/MatchCardView';
import ChallengeBoard from './screens/ChallengeBoard';
import OwnerDashboard from './screens/OwnerDashboard';
import AuthScreen from './screens/AuthScreen';

type View = 'PLAYER_HOME' | 'MATCH_CARD' | 'CHALLENGE_BOARD' | 'OWNER_DASHBOARD' | 'AUTH';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('PLAYER_HOME');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState<'PLAYER' | 'OWNER' | null>(null);

  const handleLogin = (role: 'PLAYER' | 'OWNER') => {
    setIsAuthenticated(true);
    setUserRole(role);
    setCurrentView(role === 'OWNER' ? 'OWNER_DASHBOARD' : 'PLAYER_HOME');
  };

  const renderView = () => {
    if (currentView === 'AUTH') {
      return <AuthScreen onLogin={handleLogin} onBack={() => setCurrentView('PLAYER_HOME')} />;
    }

    switch (currentView) {
      case 'PLAYER_HOME': return <PlayerHome />;
      case 'MATCH_CARD': return <MatchCardView />;
      case 'CHALLENGE_BOARD': return <ChallengeBoard />;
      case 'OWNER_DASHBOARD': return <OwnerDashboard />;
      default: return <PlayerHome />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <nav className="fixed bottom-0 left-0 right-0 bg-dark/80 backdrop-blur-xl border-t border-glass-border z-50 px-4 py-3 md:top-0 md:bottom-auto md:border-t-0 md:border-b">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center">
          <h1 className="text-pitch font-heading text-xl tracking-tighter hidden md:block">ARENUM</h1>
          <div className="flex gap-4 w-full md:w-auto justify-around md:justify-end items-center">
            <NavButton active={currentView === 'PLAYER_HOME'} onClick={() => setCurrentView('PLAYER_HOME')} label="Лента" icon="🏠" />
            <NavButton active={currentView === 'MATCH_CARD'} onClick={() => setCurrentView('MATCH_CARD')} label="Матч" icon="⚽" />
            <NavButton active={currentView === 'CHALLENGE_BOARD'} onClick={() => setCurrentView('CHALLENGE_BOARD')} label="Вызовы" icon="⚔️" />
            
            {isAuthenticated && userRole === 'OWNER' && (
              <NavButton active={currentView === 'OWNER_DASHBOARD'} onClick={() => setCurrentView('OWNER_DASHBOARD')} label="Панель" icon="📊" />
            )}

            {!isAuthenticated ? (
              <button 
                onClick={() => setCurrentView('AUTH')}
                className="bg-pitch text-black px-4 py-2 rounded-xl font-black text-[10px] uppercase tracking-widest hover:scale-105 transition-all ml-2"
              >
                Войти
              </button>
            ) : (
              <div className="flex items-center gap-2 ml-2 bg-glass border border-glass-border px-3 py-1.5 rounded-xl">
                <div className="w-6 h-6 rounded-full bg-pitch/20 flex items-center justify-center text-[10px]">👤</div>
                <span className="text-[10px] font-bold text-gray-400 hidden sm:inline">ПРОФИЛЬ</span>
              </div>
            )}
          </div>
        </div>
      </nav>
      <main className="flex-grow pt-4 pb-24 md:pt-24 md:pb-4">
        {renderView()}
      </main>
    </div>
  );
};

const NavButton = ({ active, onClick, label, icon }: { active: boolean, onClick: () => void, label: string, icon: string }) => (
  <button 
    onClick={onClick}
    className={`flex flex-col items-center gap-1 transition-all ${active ? 'text-pitch' : 'text-gray-400 hover:text-white'}`}
  >
    <span className="text-xl">{icon}</span>
    <span className="text-[10px] uppercase font-bold tracking-widest">{label}</span>
  </button>
);

export default App;
