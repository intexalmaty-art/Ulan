
import React, { useState } from 'react';

interface AuthScreenProps {
  onLogin: (role: 'PLAYER' | 'OWNER') => void;
  onBack: () => void;
}

const AuthScreen: React.FC<AuthScreenProps> = ({ onLogin, onBack }) => {
  const [isRegister, setIsRegister] = useState(false);
  const [role, setRole] = useState<'PLAYER' | 'OWNER'>('PLAYER');

  return (
    <div className="max-w-md mx-auto px-6 py-12 animate-in zoom-in-95 duration-300">
      <button onClick={onBack} className="text-gray-500 hover:text-white mb-8 flex items-center gap-2 transition-colors uppercase text-[10px] font-black tracking-widest">
        ← Назад
      </button>

      <div className="text-center mb-10">
        <h2 className="text-4xl font-heading font-black italic tracking-tighter text-white uppercase mb-2">
          {isRegister ? 'Регистрация' : 'Вход в Arenum'}
        </h2>
        <p className="text-gray-400 text-sm italic">Присоединяйся к главной футбольной экосистеме</p>
      </div>

      <div className="bg-glass border border-glass-border p-8 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
        {/* Role Selector */}
        <div className="flex p-1 bg-dark/50 rounded-2xl mb-8 border border-white/5">
          <button 
            onClick={() => setRole('PLAYER')}
            className={`flex-1 py-3 rounded-xl text-[10px] font-black uppercase transition-all ${role === 'PLAYER' ? 'bg-pitch text-black' : 'text-gray-500'}`}
          >
            Футболист
          </button>
          <button 
            onClick={() => setRole('OWNER')}
            className={`flex-1 py-3 rounded-xl text-[10px] font-black uppercase transition-all ${role === 'OWNER' ? 'bg-pitch text-black' : 'text-gray-500'}`}
          >
            Владелец поля
          </button>
        </div>

        <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); onLogin(role); }}>
          {isRegister && (
            <div>
              <label className="block text-[10px] font-black text-gray-500 uppercase mb-2 tracking-widest ml-1">Имя / Название организации</label>
              <input type="text" required className="w-full bg-dark/50 border border-glass-border rounded-xl p-4 text-sm focus:border-pitch outline-none transition-all" placeholder="Введите имя..." />
            </div>
          )}
          
          <div>
            <label className="block text-[10px] font-black text-gray-500 uppercase mb-2 tracking-widest ml-1">Email или Телефон</label>
            <input type="text" required className="w-full bg-dark/50 border border-glass-border rounded-xl p-4 text-sm focus:border-pitch outline-none transition-all" placeholder="shymkent@arenum.kz" />
          </div>

          <div>
            <label className="block text-[10px] font-black text-gray-500 uppercase mb-2 tracking-widest ml-1">Пароль</label>
            <input type="password" required className="w-full bg-dark/50 border border-glass-border rounded-xl p-4 text-sm focus:border-pitch outline-none transition-all" placeholder="••••••••" />
          </div>

          {isRegister && role === 'OWNER' && (
            <div>
              <label className="block text-[10px] font-black text-gray-500 uppercase mb-2 tracking-widest ml-1">Адрес поля</label>
              <input type="text" required className="w-full bg-dark/50 border border-glass-border rounded-xl p-4 text-sm focus:border-pitch outline-none transition-all" placeholder="Шымкент, мкр. Нурсат..." />
            </div>
          )}

          <button type="submit" className="w-full bg-pitch text-black font-black py-4 rounded-xl mt-6 uppercase text-xs tracking-widest shadow-lg hover:scale-[1.02] active:scale-95 transition-all">
            {isRegister ? 'Создать аккаунт' : 'Войти в систему'}
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-xs text-gray-500">
            {isRegister ? 'Уже есть аккаунт?' : 'Впервые в Arenum?'} 
            <button 
              onClick={() => setIsRegister(!isRegister)}
              className="ml-2 text-pitch font-bold hover:underline"
            >
              {isRegister ? 'Войти' : 'Создать аккаунт'}
            </button>
          </p>
        </div>
      </div>

      <div className="mt-12 grid grid-cols-2 gap-4 opacity-50">
        <div className="text-center p-4">
          <span className="text-2xl mb-2 block">🛡️</span>
          <p className="text-[9px] font-bold uppercase text-gray-400">Безопасность платежей</p>
        </div>
        <div className="text-center p-4">
          <span className="text-2xl mb-2 block">⚽</span>
          <p className="text-[9px] font-bold uppercase text-gray-400">Лучшие поля города</p>
        </div>
      </div>
    </div>
  );
};

export default AuthScreen;
