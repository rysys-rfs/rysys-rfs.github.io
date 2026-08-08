import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX, Radio, Music, Shuffle, Repeat, Heart, Disc, Sparkles, Sliders, Maximize2, Minimize2 } from 'lucide-react';

export interface Track {
  id: string;
  title: string;
  artist: string;
  album: string;
  duration: number; // in seconds
  genre: 'Lo-Fi' | 'Ambient Synth' | 'Deep Focus' | 'Downtempo';
  coverGradient: string;
  bpm: number;
}

export const MusicPlayer: React.FC = () => {
  const playlist: Track[] = [
    {
      id: 'track-1',
      title: 'Midnight Syntax',
      artist: 'Ryne F. Shelton',
      album: 'Code & Chill Sessions Vol. 1',
      duration: 198,
      genre: 'Lo-Fi',
      coverGradient: 'from-indigo-600 to-purple-800',
      bpm: 78,
    },
    {
      id: 'track-2',
      title: 'Deep Focus Flow',
      artist: 'Ryne F. Shelton',
      album: 'Developer Mindset',
      duration: 245,
      genre: 'Deep Focus',
      coverGradient: 'from-cyan-600 to-blue-900',
      bpm: 65,
    },
    {
      id: 'track-3',
      title: 'Refactoring at 2 AM',
      artist: 'Ryne F. Shelton',
      album: 'Night Owl Engineer',
      duration: 185,
      genre: 'Downtempo',
      coverGradient: 'from-amber-600 to-rose-900',
      bpm: 82,
    },
    {
      id: 'track-4',
      title: 'Async Waves & Callbacks',
      artist: 'Ryne F. Shelton',
      album: 'Code & Chill Sessions Vol. 1',
      duration: 210,
      genre: 'Ambient Synth',
      coverGradient: 'from-emerald-600 to-teal-900',
      bpm: 72,
    },
    {
      id: 'track-5',
      title: 'Terminal Sunset',
      artist: 'Ryne F. Shelton',
      album: 'Lo-Fi Workspace',
      duration: 175,
      genre: 'Lo-Fi',
      coverGradient: 'from-violet-600 to-indigo-950',
      bpm: 80,
    },
  ];

  const [currentTrackIndex, setCurrentTrackIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [volume, setVolume] = useState<number>(0.7);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [isShuffle, setIsShuffle] = useState<boolean>(false);
  const [isRepeat, setIsRepeat] = useState<boolean>(false);
  const [favorites, setFavorites] = useState<Record<string, boolean>>({ 'track-1': true, 'track-2': true });
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [miniPlayerOpen, setMiniPlayerOpen] = useState<boolean>(true);

  const currentTrack = playlist[currentTrackIndex];

  // Web Audio API Synthesizer Refs
  const audioCtxRef = useRef<AudioContext | null>(null);
  const timerRef = useRef<number | null>(null);

  // Sound generator helper using Web Audio API
  const playProceduralChord = (freq: number) => {
    try {
      if (!audioCtxRef.current) {
        const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        audioCtxRef.current = new AudioContextClass();
      }

      if (audioCtxRef.current.state === 'suspended') {
        audioCtxRef.current.resume();
      }

      const ctx = audioCtxRef.current;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      // Soft warm synth waveform
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, ctx.currentTime);

      const effectiveVol = isMuted ? 0 : volume * 0.15; // smooth background volume
      gain.gain.setValueAtTime(0, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(effectiveVol, ctx.currentTime + 0.1);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1.8);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 2);
    } catch {
      // Audio fallback handling
    }
  };

  // Playback loop timer
  useEffect(() => {
    if (isPlaying) {
      timerRef.current = window.setInterval(() => {
        setCurrentTime((prev) => {
          if (prev >= currentTrack.duration) {
            handleNextTrack();
            return 0;
          }
          return prev + 1;
        });

        // Trigger synth chord notes periodically based on track BPM
        const notes = [220, 261.63, 293.66, 329.63, 392.00, 440.00]; // Am7 / C chords
        const randomNote = notes[Math.floor(Math.random() * notes.length)];
        playProceduralChord(randomNote);

      }, 1000);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, currentTrackIndex, volume, isMuted]);

  const togglePlay = () => {
    if (!isPlaying) {
      // Initialize AudioContext on user interaction
      if (!audioCtxRef.current) {
        const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        audioCtxRef.current = new AudioContextClass();
      }
      audioCtxRef.current.resume();
    }
    setIsPlaying(!isPlaying);
  };

  const handleNextTrack = () => {
    setCurrentTime(0);
    if (isShuffle) {
      const nextIdx = Math.floor(Math.random() * playlist.length);
      setCurrentTrackIndex(nextIdx);
    } else {
      setCurrentTrackIndex((prev) => (prev + 1) % playlist.length);
    }
  };

  const handlePrevTrack = () => {
    setCurrentTime(0);
    setCurrentTrackIndex((prev) => (prev - 1 + playlist.length) % playlist.length);
  };

  const toggleFavorite = (id: string) => {
    setFavorites((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const filteredPlaylist = selectedCategory === 'All'
    ? playlist
    : playlist.filter((t) => t.genre === selectedCategory);

  return (
    <section id="playlist" className="py-8 sm:py-10 bg-slate-50 text-slate-900 border-b-2 border-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
          <div className="space-y-1">
            <div className="neobrutal-badge bg-[#00482B] text-white border-slate-900 shadow-[2px_2px_0px_0px_#FFD100]">
              <Radio className="w-3 h-3 text-[#FFD100]" /> Curated Focus Audio Engine
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight font-mono">
              Engineering Focus Audio
            </h2>
          </div>

          {/* Genre Filters */}
          <div className="flex flex-wrap items-center gap-1.5">
            {['All', 'Lo-Fi', 'Ambient Synth', 'Deep Focus', 'Downtempo'].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-2.5 py-1 text-xs font-mono font-bold rounded border-2 transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#FFD100] text-slate-950 border-slate-900 shadow-[2px_2px_0px_0px_#00482B]'
                    : 'bg-white border-slate-900 text-slate-900 hover:bg-[#FFD100]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Music Player Compact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
          
          {/* Main Playing Track Compact Control Deck */}
          <div className="lg:col-span-5">
            <div className="p-4 sm:p-5 rounded-lg bg-white border-2 border-slate-900 shadow-[5px_5px_0px_0px_#00482B] relative overflow-hidden space-y-3.5 h-full flex flex-col justify-between">
              
              {/* Compact Disc Visual & Track Info */}
              <div className="flex items-center gap-4">
                {/* Compact Rotating Vinyl Disc */}
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded bg-slate-100 border-2 border-slate-900 flex items-center justify-center shrink-0 shadow-[2px_2px_0px_0px_#FFD100]">
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-slate-950 border-2 border-slate-900 flex items-center justify-center transition-transform duration-1000 ${isPlaying ? 'animate-spin' : ''}`} style={{ animationDuration: '8s' }}>
                    <div className="w-5 h-5 rounded-full bg-[#00482B] border border-[#FFD100] flex items-center justify-center">
                      <Disc className="w-3 h-3 text-[#FFD100]" />
                    </div>
                  </div>
                </div>

                {/* Track Title & Artist */}
                <div className="min-w-0 flex-1 space-y-0.5 font-mono">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] font-bold uppercase text-[#00482B] truncate">
                      {currentTrack.genre} • {currentTrack.bpm} BPM
                    </span>
                    <button
                      onClick={() => toggleFavorite(currentTrack.id)}
                      className="text-slate-500 hover:text-rose-600 transition-colors shrink-0"
                    >
                      <Heart className={`w-4 h-4 ${favorites[currentTrack.id] ? 'fill-rose-500 text-rose-500' : ''}`} />
                    </button>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 truncate">{currentTrack.title}</h3>
                  <p className="text-xs text-slate-800 truncate">{currentTrack.artist} — <span className="text-slate-600">{currentTrack.album}</span></p>
                </div>
              </div>

              {/* Equalizer Bar Overlay */}
              {isPlaying && (
                <div className="flex items-end justify-center gap-1 h-6 bg-slate-100 rounded p-1 border-2 border-slate-900 shadow-[2px_2px_0px_0px_#003865]">
                  {[40, 80, 50, 95, 60, 30, 85, 45, 90, 70, 55, 100, 65, 35, 80, 50].map((h, i) => (
                    <div
                      key={i}
                      className="w-1 bg-[#00482B] rounded-full transition-all duration-300"
                      style={{
                        height: `${Math.min(100, Math.max(20, (h * (currentTime % 5 + 1)) % 100))}%`,
                      }}
                    />
                  ))}
                </div>
              )}

              {/* Seek Progress Bar */}
              <div className="space-y-1">
                <div
                  className="w-full h-2 bg-slate-200 border-2 border-slate-900 rounded overflow-hidden cursor-pointer relative"
                  onClick={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const clickX = e.clientX - rect.left;
                    const pct = clickX / rect.width;
                    setCurrentTime(pct * currentTrack.duration);
                  }}
                >
                  <div
                    className="h-full bg-[#00482B] transition-all duration-150"
                    style={{ width: `${(currentTime / currentTrack.duration) * 100}%` }}
                  />
                </div>
                <div className="flex items-center justify-between text-[11px] font-mono font-bold text-slate-800">
                  <span>{formatTime(currentTime)}</span>
                  <span>{formatTime(currentTrack.duration)}</span>
                </div>
              </div>

              {/* Compact Playback Control Deck & Volume */}
              <div className="flex items-center justify-between pt-1 border-t-2 border-slate-900">
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setIsShuffle(!isShuffle)}
                    className={`p-1.5 rounded border-2 border-slate-900 transition-all ${isShuffle ? 'text-slate-950 bg-[#FFD100]' : 'text-slate-900 bg-slate-100 hover:bg-[#FFD100]'}`}
                    title="Shuffle"
                  >
                    <Shuffle className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => setIsRepeat(!isRepeat)}
                    className={`p-1.5 rounded border-2 border-slate-900 transition-all ${isRepeat ? 'text-slate-950 bg-[#FFD100]' : 'text-slate-900 bg-slate-100 hover:bg-[#FFD100]'}`}
                    title="Repeat"
                  >
                    <Repeat className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrevTrack}
                    className="p-1.5 rounded bg-slate-100 border-2 border-slate-900 text-slate-900 hover:bg-[#FFD100] shadow-[2px_2px_0px_0px_#00482B] transition-all"
                    title="Previous Track"
                  >
                    <SkipBack className="w-4 h-4" />
                  </button>

                  <button
                    id="music-play-pause-btn"
                    onClick={togglePlay}
                    className="neobrutal-btn-gold p-2"
                    title={isPlaying ? 'Pause' : 'Play'}
                  >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
                  </button>

                  <button
                    onClick={handleNextTrack}
                    className="p-1.5 rounded bg-slate-100 border-2 border-slate-900 text-slate-900 hover:bg-[#FFD100] shadow-[2px_2px_0px_0px_#00482B] transition-all"
                    title="Next Track"
                  >
                    <SkipForward className="w-4 h-4" />
                  </button>
                </div>

                {/* Compact Volume */}
                <div className="flex items-center gap-1.5 w-20">
                  <button
                    onClick={() => setIsMuted(!isMuted)}
                    className="text-slate-900 hover:text-[#00482B]"
                  >
                    {isMuted || volume === 0 ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
                  </button>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.05"
                    value={isMuted ? 0 : volume}
                    onChange={(e) => {
                      setVolume(parseFloat(e.target.value));
                      setIsMuted(false);
                    }}
                    className="w-full accent-[#00482B] h-1 bg-slate-200 rounded cursor-pointer"
                  />
                </div>
              </div>

            </div>
          </div>

          {/* Playlist Compact Track List */}
          <div className="lg:col-span-7">
            <div className="p-4 rounded-lg bg-white border-2 border-slate-900 space-y-2.5 h-full flex flex-col shadow-[4px_4px_0px_0px_#00482B]">
              <div className="flex items-center justify-between border-b-2 border-slate-900 pb-2">
                <h3 className="text-sm font-bold text-slate-900 font-mono flex items-center gap-2">
                  <Music className="w-4 h-4 text-[#00482B]" /> Tracklist ({filteredPlaylist.length})
                </h3>
                <span className="text-[10px] text-[#00482B] font-mono font-bold">Web Audio Synth Engine</span>
              </div>

              <div className="space-y-1.5 overflow-y-auto max-h-[220px] pr-1 flex-1">
                {filteredPlaylist.map((track, index) => {
                  const isCurrent = playlist[currentTrackIndex].id === track.id;
                  return (
                    <div
                      key={track.id}
                      onClick={() => {
                        setCurrentTrackIndex(playlist.findIndex((t) => t.id === track.id));
                        setCurrentTime(0);
                        setIsPlaying(true);
                      }}
                      className={`p-2.5 rounded border-2 border-slate-900 transition-all cursor-pointer flex items-center justify-between group ${
                        isCurrent
                          ? 'bg-[#FFD100] text-slate-950 shadow-[2px_2px_0px_0px_#00482B]'
                          : 'bg-slate-50 text-slate-900 hover:bg-slate-100'
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <span className="w-5 text-center text-[11px] font-mono text-slate-700 font-bold shrink-0">
                          {isCurrent && isPlaying ? (
                            <span className="flex items-end justify-center gap-0.5 h-3">
                              <span className="w-0.5 bg-slate-950 animate-pulse h-full" />
                              <span className="w-0.5 bg-slate-950 animate-pulse h-2/3" />
                              <span className="w-0.5 bg-slate-950 animate-pulse h-1/2" />
                            </span>
                          ) : (
                            `0${index + 1}`
                          )}
                        </span>

                        <div className="min-w-0">
                          <h4 className="text-xs font-bold font-mono transition-colors truncate text-slate-950">
                            {track.title}
                          </h4>
                          <span className="text-[11px] text-slate-700 block truncate">{track.artist}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 text-[11px] font-mono text-slate-800 shrink-0">
                        <span className="px-1.5 py-0.5 rounded bg-white border border-slate-900 text-[9px] text-slate-950 font-bold">
                          {track.genre}
                        </span>
                        <span className="font-bold">{formatTime(track.duration)}</span>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleFavorite(track.id);
                          }}
                          className="p-1 hover:text-rose-600 transition-colors"
                        >
                          <Heart className={`w-3.5 h-3.5 ${favorites[track.id] ? 'fill-rose-500 text-rose-500' : ''}`} />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

        </div>

        {/* Floating Mini Audio Player Widget anchored at bottom right */}
        {miniPlayerOpen && (
          <div className="fixed bottom-5 right-5 z-40 bg-white border-2 border-slate-900 rounded-lg shadow-[4px_4px_0px_0px_#00482B] p-3 w-72 hidden sm:block">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-1.5 text-[11px] font-mono font-bold text-[#00482B]">
                <Disc className={`w-3.5 h-3.5 ${isPlaying ? 'animate-spin' : ''}`} />
                <span>Focus Audio Engine</span>
              </div>
              <button
                onClick={() => setMiniPlayerOpen(false)}
                className="text-slate-900 hover:text-rose-600 text-xs p-0.5 font-mono font-bold"
                title="Minimize"
              >
                ✕
              </button>
            </div>

            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded bg-[#00482B] border border-slate-900 flex items-center justify-center shrink-0 shadow">
                <Music className="w-4 h-4 text-[#FFD100]" />
              </div>

              <div className="min-w-0 flex-1">
                <h5 className="text-xs font-bold font-mono text-slate-900 truncate">{currentTrack.title}</h5>
                <p className="text-[10px] text-slate-700 truncate">{currentTrack.artist}</p>
              </div>

              <button
                onClick={togglePlay}
                className="w-8 h-8 rounded bg-[#FFD100] border-2 border-slate-900 hover:bg-[#00482B] hover:text-white text-slate-950 flex items-center justify-center shrink-0 shadow-[2px_2px_0px_0px_#00482B]"
              >
                {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 ml-0.5" />}
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
