import { useState, useEffect } from 'react';
import { GamifiedCaptcha } from 'react-gamified-captcha';
import { auth, createUserWithEmailAndPassword, isFirebaseConfigured } from './lib/firebase';

const SELECTED_GAMES = [
  "https://conversion.business/sunny-day-maze/",
  "https://conversion.business/smack-that-donkey/",
  "https://conversion.business/danger-point/",
  "https://conversion.business/trend-catcher/",
  "https://conversion.business/turtle-stacker/"
];

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [gameUrl, setGameUrl] = useState('');

  useEffect(() => {
    // Randomize the game once on the client
    const randomGame = SELECTED_GAMES[Math.floor(Math.random() * SELECTED_GAMES.length)] || "https://conversion.business/sunny-day-maze/";
    setGameUrl(randomGame);
  }, []);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!captchaVerified) {
      setError('Please complete the human verification check first.');
      return;
    }
    
    setLoading(true);
    setError('');

    try {
      if (!isFirebaseConfigured()) {
        if (import.meta.env.PROD) {
          console.error("CRITICAL ERROR: Application deployed to production without Firebase credentials. Mock Mode is disabled in production to prevent fake data pollution.");
          setError("Site Configuration Error: The database is currently unavailable. Please contact the administrator.");
          return;
        }
        // QA Fallback Mode
        console.warn('Firebase not configured. Mock registration successful.');
        await new Promise(r => setTimeout(r, 800));
        alert('Mock Dashboard Login Success!');
        return;
      }

      await createUserWithEmailAndPassword(auth, email, password);
      alert('Dashboard Login Success!');
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      setError(err.message || 'Registration failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-5 pt-16 pb-24 bg-background text-foreground">
      <div className="w-full max-w-md bg-surface border border-border p-8 rounded-2xl shadow-2xl relative overflow-hidden">
        {/* Decorative Top Line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-blue-500" />
        
        <h2 className="text-3xl font-bold mb-2">Create Account</h2>
        <p className="text-muted mb-8 text-sm">Start your free trial today. (React SPA Edition)</p>

        <form onSubmit={handleRegister} className="flex flex-col gap-5">
          {error && <div className="bg-red-500/10 text-red-500 p-3 rounded-lg text-sm border border-red-500/20">{error}</div>}
          
          <div>
            <label className="block text-sm font-medium mb-1.5 text-foreground/80">Work Email</label>
            <input 
              type="email" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-background border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors text-sm"
              placeholder="name@company.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1.5 text-foreground/80">Password</label>
            <input 
              type="password" 
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-background border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors text-sm"
              placeholder="••••••••"
            />
          </div>

          <div className="mt-2">
            <p className="text-sm font-medium mb-2.5 text-foreground/80">Verification</p>
            {gameUrl ? (
              <GamifiedCaptcha 
                siteKey={import.meta.env.VITE_CAPTCHA_SITE_KEY || "demo_tenant"}
                gameUrl={gameUrl}
                onHumanVerified={(payload) => {
                  console.log("Human verified successfully! Secure payload:", payload);
                  setCaptchaVerified(true);
                  setError('');
                }}
              />
            ) : (
              <div className="h-[400px] w-full bg-surface border border-border rounded-xl flex items-center justify-center animate-pulse text-muted">
                Selecting Security Validation...
              </div>
            )}
          </div>

          <button 
            type="submit" 
            disabled={!captchaVerified || loading}
            className="w-full bg-primary text-primary-foreground py-3.5 rounded-lg font-bold hover:brightness-110 transition-all disabled:opacity-50 disabled:cursor-not-allowed mt-2 shadow-[0_0_15px_rgba(59,130,246,0.2)] disabled:shadow-none"
          >
            {loading ? 'Creating Account...' : 'Complete Setup'}
          </button>

          <p className="text-center text-sm text-muted mt-4">
            Already have an account? <a href="#" className="text-primary hover:underline">Log in</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default App;
