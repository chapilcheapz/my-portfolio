import React from 'react';

export default function SkillsSection() {
  return (
    <div id="skills" className="min-h-screen flex items-center justify-center relative z-10 p-12 bg-black/55 border-t border-white/5">
      <div className="max-w-5xl w-full space-y-10">
        {/* Header */}
        <div className="space-y-3">
          <div className="flex items-center space-x-3 text-xs font-mono tracking-widest text-gray-500 uppercase">
            <span className="w-8 h-[1px] bg-white/20"></span>
            <span>Expertise</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
            My <span className="font-serif italic font-light text-cyan-400">Skills</span>
          </h2>
          <p className="text-sm md:text-base text-gray-400 leading-relaxed font-light">
            The technologies and frameworks I use to craft digital experiences.
          </p>
        </div>

        {/* Khung lớn chứa các tag công nghệ */}
        <div className="bg-white/[0.02] border border-white/5 p-8 md:p-12 rounded-[32px] backdrop-blur-md shadow-2xl">
          <div className="flex flex-wrap gap-4">
            
            {/* HTML */}
            <div className="inline-flex items-center space-x-2.5 px-5 py-2.5 rounded-full border border-white/10 bg-white/[0.02] hover:bg-white/[0.06] hover:border-white/20 transition-all duration-300 cursor-default group">
              <svg className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="#e34f26"><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059-.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/></svg>
              <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300">HTML</span>
            </div>

            {/* CSS */}
            <div className="inline-flex items-center space-x-2.5 px-5 py-2.5 rounded-full border border-white/10 bg-white/[0.02] hover:bg-white/[0.06] hover:border-white/20 transition-all duration-300 cursor-default group">
              <svg className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="#1572b6"><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm5.09 9.802l.219 2.521h9.325l-.315 3.286-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.73-8.032H6.59zM5.14 4.44l.23 2.622h13.2l.23-2.622H5.14z"/></svg>
              <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300">CSS</span>
            </div>

            {/* JavaScript */}
            <div className="inline-flex items-center space-x-2.5 px-5 py-2.5 rounded-full border border-white/10 bg-white/[0.02] hover:bg-white/[0.06] hover:border-white/20 transition-all duration-300 cursor-default group">
              <svg className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="#f7df1e"><path d="M0 0h24v24H0V0zm22.034 18.268c-.175-1.127-.852-1.936-2.164-2.435-.647-.253-1.472-.439-2.034-.647-.648-.229-1.153-.439-1.153-.986 0-.556.415-.881.985-.881.583 0 .979.244 1.152.748.102.293.102.54.102 1.037h2.82c-.015-1.749-.937-2.999-2.766-3.417-.672-.153-1.639-.144-2.294.029-1.624.437-2.66 1.573-2.66 3.275 0 1.902 1.23 2.852 3.164 3.463.676.244 1.699.439 2.192.684.556.244.793.57.793 1.085 0 .683-.627 1.095-1.378 1.095-.923 0-1.554-.483-1.753-1.307-.123-.497-.077-.762-.077-1.377h-2.828c.047 1.081.025 1.807.454 2.623.768 1.4 2.28 2.031 4.126 2.031 2.382 0 4.078-1.136 4.078-3.416zM2.034 9.72h3.076v8.379c0 .762.063 1.488.5 2.016.326.398.814.61 1.45.61 1.258 0 1.902-.756 1.902-2.626v-8.379h3.076v8.437c0 3.496-1.77 5.119-4.896 5.119-1.401 0-2.684-.44-3.433-1.217-.665-.68-.838-1.574-.838-2.912V9.72z"/></svg>
              <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300">JavaScript</span>
            </div>

            {/* ReactJS */}
            <div className="inline-flex items-center space-x-2.5 px-5 py-2.5 rounded-full border border-white/10 bg-white/[0.02] hover:bg-white/[0.06] hover:border-white/20 transition-all duration-300 cursor-default group">
              <svg className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" viewBox="-11.5 -10.23 23 20.46" fill="none" stroke="#61dafb" strokeWidth="1.2"><circle cx="0" cy="0" r="2.05" fill="#61dafb"/><g stroke="#61dafb"><ellipse rx="11" ry="4.2"/><ellipse rx="11" ry="4.2" transform="rotate(60)"/><ellipse rx="11" ry="4.2" transform="rotate(120)"/></g></svg>
              <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300">ReactJS</span>
            </div>

            {/* NextJS */}
            <div className="inline-flex items-center space-x-2.5 px-5 py-2.5 rounded-full border border-white/10 bg-white/[0.02] hover:bg-white/[0.06] hover:border-white/20 transition-all duration-300 cursor-default group">
              <svg className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 180 180" fill="none"><circle cx="90" cy="90" r="90" fill="#000" stroke="#fff" strokeWidth="6"/><path d="M149.508 157.52L69.142 54H54v72h14.4V69.72l68.796 87.802c4.156-3.834 7.92-8.083 12.312-12.002zM126 54h14.4v72H126V54z" fill="#fff"/></svg>
              <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300">NextJS</span>
            </div>

            {/* Tailwind */}
            <div className="inline-flex items-center space-x-2.5 px-5 py-2.5 rounded-full border border-white/10 bg-white/[0.02] hover:bg-white/[0.06] hover:border-white/20 transition-all duration-300 cursor-default group">
              <svg className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="#06b6d4"><path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.002 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.513 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z"/></svg>
              <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300">Tailwind</span>
            </div>

            {/* bootstrap 5 */}
            <div className="inline-flex items-center space-x-2.5 px-5 py-2.5 rounded-full border border-white/10 bg-white/[0.02] hover:bg-white/[0.06] hover:border-white/20 transition-all duration-300 cursor-default group">
              <svg className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="#7952b3"><path fillRule="evenodd" clipRule="evenodd" d="M3.5 0C1.567 0 0 1.567 0 3.5v17C0 22.433 1.567 24 3.5 24h17c1.933 0 3.5-1.567 3.5-3.5v-17C24 1.567 22.433 0 20.5 0h-17zm13.14 12.188c1.026-.543 1.625-1.488 1.625-2.696 0-2.348-1.956-3.414-4.708-3.414H7.202v11.758h6.425c2.937 0 5.01-1.218 5.01-3.696 0-1.144-.766-1.948-1.997-1.952zm-6.284-4.148h2.368c1.393 0 2.203.493 2.203 1.536 0 1.036-.81 1.536-2.203 1.536h-2.368V8.04zm0 5.16h2.646c1.55 0 2.457.518 2.457 1.645 0 1.127-.907 1.645-2.457 1.645h-2.646v-3.29z"/></svg>
              <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300">bootstrap 5</span>
            </div>

            {/* PHP */}
            <div className="inline-flex items-center space-x-2.5 px-5 py-2.5 rounded-full border border-white/10 bg-white/[0.02] hover:bg-white/[0.06] hover:border-white/20 transition-all duration-300 cursor-default group">
              <svg className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="#777bb4"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2.93 12.83H7.41l.74-3.13h1.66c.86 0 1.36.43 1.36 1.09 0 .66-.46 2.04-2.06 2.04zm7.39-3.13h-1.66c-.86 0-1.36-.43-1.36-1.09 0-.66.46-2.04 2.06-2.04h1.66l-.7 3.13zm.88 3.13h-1.66l.74-3.13h1.66c.86 0 1.36.43 1.36 1.09 0 .66-.46 2.04-2.1 2.04z"/></svg>
              <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300">PHP</span>
            </div>

            {/* Python */}
            <div className="inline-flex items-center space-x-2.5 px-5 py-2.5 rounded-full border border-white/10 bg-white/[0.02] hover:bg-white/[0.06] hover:border-white/20 transition-all duration-300 cursor-default group">
              <svg className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="none"><path d="M11.898 0c-2.316 0-3.328.14-4.63.708-2.032.887-2.615 2.148-2.615 4.316v1.942H1.93C.864 8.966.196 9.873.047 11.233c-.22 2.015-.22 3.14 0 5.155.132 1.206.828 2.072 1.883 2.258h2.72v-1.92c0-2.368 1.943-4.312 4.312-4.312h4.593v-1.942H8.962V8.966c0-1.272 1.036-2.308 2.308-2.308h4.593c1.066 0 1.734-.907 1.883-2.268.22-2.015.22-3.14 0-5.155C17.615.932 16.92.066 15.864.066h-3.966zm-2.457 2.148c.552 0 .992.44.992.992 0 .553-.44.992-.992.992a.99.99 0 01-.992-.992c0-.552.44-.992.992-.992z" fill="#3776AB"/><path d="M12.102 24c2.316 0 3.328-.14 4.63-.708 2.032-.887 2.615-2.148 2.615-4.316v-1.942h2.723c1.066 0 1.734-.907 1.883-2.268.22-2.015.22-3.14 0-5.155-.132-1.206-.828-2.072-1.883-2.258h-2.72v1.92c0 2.368-1.943 4.312-4.312 4.312h-4.593v1.942h4.593v1.506c0 1.272-1.036 2.308-2.308 2.308H8.445c-1.066 0-1.734.907-1.883 2.268-.22 2.015-.22 3.14 0 5.155C6.69 23.068 7.385 24 8.441 24h3.661zm2.457-2.148a.99.99 0 01-.992-.992c0-.553.44-.992.992-.992.552 0 .992.44.992.992 0 .553-.44.992-.992.992z" fill="#FFE873"/></svg>
              <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300">Python</span>
            </div>

            {/* Laravel */}
            <div className="inline-flex items-center space-x-2.5 px-5 py-2.5 rounded-full border border-white/10 bg-white/[0.02] hover:bg-white/[0.06] hover:border-white/20 transition-all duration-300 cursor-default group">
              <svg className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="#FF2D20"><path d="M21.5 5.5l-9.5-5.5-9.5 5.5v11l9.5 5.5 9.5-5.5v-11zm-9.5 9.8l-7.5-4.3v-4.3l7.5 4.3v4.3zm8-4.6l-7.5 4.3v-4.3l7.5-4.3v4.3z"/></svg>
              <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300">Laravel</span>
            </div>

            {/* Django */}
            <div className="inline-flex items-center space-x-2.5 px-5 py-2.5 rounded-full border border-white/10 bg-white/[0.02] hover:bg-white/[0.06] hover:border-white/20 transition-all duration-300 cursor-default group">
              <svg className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="none"><rect width="24" height="24" rx="6" fill="#092e20"/><text x="12" y="16" fill="#44b78b" fontSize="12" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">dj</text></svg>
              <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300">Django</span>
            </div>

            {/* Docker */}
            <div className="inline-flex items-center space-x-2.5 px-5 py-2.5 rounded-full border border-white/10 bg-white/[0.02] hover:bg-white/[0.06] hover:border-white/20 transition-all duration-300 cursor-default group">
              <svg className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="#2496ed"><path d="M13.983 11.078h2.119c.102 0 .186-.084.186-.186V9.176c0-.102-.084-.186-.186-.186h-2.119c-.102 0-.186.084-.186.186v1.716c0 .102.084.186.186.186zM11.283 11.078h2.119c.102 0 .186-.084.186-.186V9.176c0-.102-.084-.186-.186-.186h-2.119c-.102 0-.186.084-.186.186v1.716c0 .102.084.186.186.186zM11.283 8.378h2.119c.102 0 .186-.084.186-.186V6.476c0-.102-.084-.186-.186-.186h-2.119c-.102 0-.186.084-.186.186v1.716c0 .102.084.186.186.186zM13.983 8.378h2.119c.102 0 .186-.084.186-.186V6.476c0-.102-.084-.186-.186-.186h-2.119c-.102 0-.186.084-.186.186v1.716c0 .102.084.186.186.186zM8.583 11.078h2.119c.102 0 .186-.084.186-.186V9.176c0-.102-.084-.186-.186-.186H8.583c-.102 0-.186.084-.186.186v1.716c0 .102.084.186.186.186zM8.583 8.378h2.119c.102 0 .186-.084.186-.186V6.476c0-.102-.084-.186-.186-.186H8.583c-.102 0-.186.084-.186.186v1.716c0 .102.084.186.186.186zM5.883 11.078h2.119c.102 0 .186-.084.186-.186V9.176c0-.102-.084-.186-.186-.186H5.883c-.102 0-.186.084-.186.186v1.716c0 .102.084.186.186.186zM16.683 8.378h2.119c.102 0 .186-.084.186-.186V6.476c0-.102-.084-.186-.186-.186h-2.119c-.102 0-.186.084-.186.186v1.716c0 .102.084.186.186.186zM22.447 10.378c-.288-.936-1.127-1.572-2.119-1.572h-1.526v2.272c0 .102.084.186.186.186h3.459c.102 0 .186-.084.186-.186v-.7zM.117 13.078c-.034.234-.051.468-.051.714 0 4.981 4.542 9.028 10.128 9.028 4.966 0 9.11-3.21 9.949-7.531H.117v-2.211z"/></svg>
              <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300">Docker</span>
            </div>

            {/* Git */}
            <div className="inline-flex items-center space-x-2.5 px-5 py-2.5 rounded-full border border-white/10 bg-white/[0.02] hover:bg-white/[0.06] hover:border-white/20 transition-all duration-300 cursor-default group">
              <svg className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="#f05032"><path d="M23.384 11.41L12.59.616a.824.824 0 00-1.168 0l-2.072 2.072 3.125 3.125a2.478 2.478 0 013.256 3.256l3.125 3.125a2.488 2.488 0 01-.168 3.498 2.488 2.488 0 01-3.498-.168l-3.125-3.125v4.542a2.483 2.483 0 01-1.7 2.378 2.483 2.483 0 01-3.11-1.7 2.483 2.483 0 011.7-3.11V9.567a2.483 2.483 0 01-1.7-2.378c0-.756.342-1.468.928-1.942L7.194 4.09.616 10.668a.824.824 0 000 1.168l10.794 10.794a.824.824 0 001.168 0l10.794-10.794a.822.822 0 00.012-1.17v.144z"/></svg>
              <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300">Git</span>
            </div>

            {/* GitHub */}
            <div className="inline-flex items-center space-x-2.5 px-5 py-2.5 rounded-full border border-white/10 bg-white/[0.02] hover:bg-white/[0.06] hover:border-white/20 transition-all duration-300 cursor-default group">
              <svg className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="#ffffff"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
              <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300">GitHub</span>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
