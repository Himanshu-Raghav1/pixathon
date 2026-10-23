// levels.js - GLITCH Game Level Data & SVG Generators

const LEVELS = [
  {
    id: 1,
    title: "Round 01 // Spot the Glitch",
    subtitle: "PERCEPTION AUDIT: ODD-ONE-OUT",
    instruction: "Scan the neural circuit glyphs below. Three follow standard harmonic topology — one contains an anomalous corrupted trace. Select the glitch.",
    hint: "Observe the radial branch connections and terminal symmetry.",
    correctIndex: 2, // 0-based: 3rd option (Card 3)
    explanation: "Node 03 features a broken phase fracture on its lower-right terminal.",
    options: [
      {
        id: "glyph-a",
        label: "Node 01",
        description: "Harmonic Quad-Node",
        svg: `
          <svg viewBox="0 0 160 160" class="puzzle-svg">
            <defs>
              <linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#8b5cf6"/>
                <stop offset="100%" stop-color="#00ff88"/>
              </linearGradient>
            </defs>
            <!-- Outer Ring -->
            <circle cx="80" cy="80" r="66" fill="none" stroke="rgba(139,92,246,0.3)" stroke-width="2" stroke-dasharray="4 4"/>
            <polygon points="80,18 136,49 136,111 80,142 24,111 24,49" fill="none" stroke="#8b5cf6" stroke-width="2.5" opacity="0.8"/>
            <!-- Circuit Cross Lines -->
            <line x1="80" y1="28" x2="80" y2="132" stroke="#00ff88" stroke-width="2.5" stroke-linecap="round"/>
            <line x1="28" y1="80" x2="132" y2="80" stroke="#00ff88" stroke-width="2.5" stroke-linecap="round"/>
            <!-- Diagonal sub-traces -->
            <line x1="48" y1="48" x2="68" y2="68" stroke="rgba(139,92,246,0.7)" stroke-width="2"/>
            <line x1="112" y1="48" x2="92" y2="68" stroke="rgba(139,92,246,0.7)" stroke-width="2"/>
            <line x1="48" y1="112" x2="68" y2="92" stroke="rgba(139,92,246,0.7)" stroke-width="2"/>
            <line x1="112" y1="112" x2="92" y2="92" stroke="rgba(139,92,246,0.7)" stroke-width="2"/>
            <!-- 4 Terminal nodes -->
            <circle cx="80" cy="30" r="6" fill="#090b10" stroke="#00ff88" stroke-width="2.5"/>
            <circle cx="80" cy="130" r="6" fill="#090b10" stroke="#00ff88" stroke-width="2.5"/>
            <circle cx="30" cy="80" r="6" fill="#090b10" stroke="#00ff88" stroke-width="2.5"/>
            <circle cx="130" cy="80" r="6" fill="#090b10" stroke="#00ff88" stroke-width="2.5"/>
            <!-- Center Core -->
            <rect x="68" y="68" width="24" height="24" rx="4" fill="#151329" stroke="url(#g1)" stroke-width="2.5" transform="rotate(45 80 80)"/>
            <circle cx="80" cy="80" r="4" fill="#00ff88"/>
          </svg>
        `
      },
      {
        id: "glyph-b",
        label: "Node 02",
        description: "Harmonic Quad-Node",
        svg: `
          <svg viewBox="0 0 160 160" class="puzzle-svg">
            <!-- Outer Ring -->
            <circle cx="80" cy="80" r="66" fill="none" stroke="rgba(139,92,246,0.3)" stroke-width="2" stroke-dasharray="4 4"/>
            <polygon points="80,18 136,49 136,111 80,142 24,111 24,49" fill="none" stroke="#8b5cf6" stroke-width="2.5" opacity="0.8"/>
            <!-- Circuit Cross Lines -->
            <line x1="80" y1="28" x2="80" y2="132" stroke="#00ff88" stroke-width="2.5" stroke-linecap="round"/>
            <line x1="28" y1="80" x2="132" y2="80" stroke="#00ff88" stroke-width="2.5" stroke-linecap="round"/>
            <!-- Diagonal sub-traces -->
            <line x1="48" y1="48" x2="68" y2="68" stroke="rgba(139,92,246,0.7)" stroke-width="2"/>
            <line x1="112" y1="48" x2="92" y2="68" stroke="rgba(139,92,246,0.7)" stroke-width="2"/>
            <line x1="48" y1="112" x2="68" y2="92" stroke="rgba(139,92,246,0.7)" stroke-width="2"/>
            <line x1="112" y1="112" x2="92" y2="92" stroke="rgba(139,92,246,0.7)" stroke-width="2"/>
            <!-- 4 Terminal nodes -->
            <circle cx="80" cy="30" r="6" fill="#090b10" stroke="#00ff88" stroke-width="2.5"/>
            <circle cx="80" cy="130" r="6" fill="#090b10" stroke="#00ff88" stroke-width="2.5"/>
            <circle cx="30" cy="80" r="6" fill="#090b10" stroke="#00ff88" stroke-width="2.5"/>
            <circle cx="130" cy="80" r="6" fill="#090b10" stroke="#00ff88" stroke-width="2.5"/>
            <!-- Center Core -->
            <rect x="68" y="68" width="24" height="24" rx="4" fill="#151329" stroke="#8b5cf6" stroke-width="2.5" transform="rotate(45 80 80)"/>
            <circle cx="80" cy="80" r="4" fill="#00ff88"/>
          </svg>
        `
      },
      {
        id: "glyph-c",
        label: "Node 03",
        description: "Anomalous Node",
        isGlitch: true,
        svg: `
          <svg viewBox="0 0 160 160" class="puzzle-svg glitch-target">
            <!-- Outer Ring (severed) -->
            <circle cx="80" cy="80" r="66" fill="none" stroke="rgba(255,80,100,0.4)" stroke-width="2" stroke-dasharray="4 4"/>
            <polygon points="80,18 136,49 136,111 80,142 24,111 24,49" fill="none" stroke="#8b5cf6" stroke-width="2.5" opacity="0.8"/>
            <!-- Circuit Cross Lines (with broken fracture!) -->
            <line x1="80" y1="28" x2="80" y2="80" stroke="#00ff88" stroke-width="2.5" stroke-linecap="round"/>
            <line x1="28" y1="80" x2="132" y2="80" stroke="#00ff88" stroke-width="2.5" stroke-linecap="round"/>
            <!-- Corrupted bottom trace: broken zig-zag jog instead of straight line -->
            <polyline points="80,80 80,102 96,102 96,118 80,118 80,132" stroke="#ff3366" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"/>
            <!-- Diagonal sub-traces -->
            <line x1="48" y1="48" x2="68" y2="68" stroke="rgba(139,92,246,0.7)" stroke-width="2"/>
            <line x1="112" y1="48" x2="92" y2="68" stroke="rgba(139,92,246,0.7)" stroke-width="2"/>
            <line x1="48" y1="112" x2="68" y2="92" stroke="rgba(139,92,246,0.7)" stroke-width="2"/>
            <!-- Glitched disconnected diagonal -->
            <line x1="118" y1="118" x2="104" y2="104" stroke="#ff3366" stroke-width="2.5" stroke-dasharray="2 2"/>
            <!-- 4 Terminal nodes (one fractured) -->
            <circle cx="80" cy="30" r="6" fill="#090b10" stroke="#00ff88" stroke-width="2.5"/>
            <circle cx="80" cy="130" r="6" fill="#090b10" stroke="#ff3366" stroke-width="2.8"/>
            <circle cx="30" cy="80" r="6" fill="#090b10" stroke="#00ff88" stroke-width="2.5"/>
            <circle cx="130" cy="80" r="6" fill="#090b10" stroke="#00ff88" stroke-width="2.5"/>
            <!-- Center Core -->
            <rect x="68" y="68" width="24" height="24" rx="4" fill="#1e1124" stroke="#ff3366" stroke-width="2.5" transform="rotate(45 80 80)"/>
            <circle cx="80" cy="80" r="4" fill="#ff3366"/>
          </svg>
        `
      },
      {
        id: "glyph-d",
        label: "Node 04",
        description: "Harmonic Quad-Node",
        svg: `
          <svg viewBox="0 0 160 160" class="puzzle-svg">
            <!-- Outer Ring -->
            <circle cx="80" cy="80" r="66" fill="none" stroke="rgba(139,92,246,0.3)" stroke-width="2" stroke-dasharray="4 4"/>
            <polygon points="80,18 136,49 136,111 80,142 24,111 24,49" fill="none" stroke="#8b5cf6" stroke-width="2.5" opacity="0.8"/>
            <!-- Circuit Cross Lines -->
            <line x1="80" y1="28" x2="80" y2="132" stroke="#00ff88" stroke-width="2.5" stroke-linecap="round"/>
            <line x1="28" y1="80" x2="132" y2="80" stroke="#00ff88" stroke-width="2.5" stroke-linecap="round"/>
            <!-- Diagonal sub-traces -->
            <line x1="48" y1="48" x2="68" y2="68" stroke="rgba(139,92,246,0.7)" stroke-width="2"/>
            <line x1="112" y1="48" x2="92" y2="68" stroke="rgba(139,92,246,0.7)" stroke-width="2"/>
            <line x1="48" y1="112" x2="68" y2="92" stroke="rgba(139,92,246,0.7)" stroke-width="2"/>
            <line x1="112" y1="112" x2="92" y2="92" stroke="rgba(139,92,246,0.7)" stroke-width="2"/>
            <!-- 4 Terminal nodes -->
            <circle cx="80" cy="30" r="6" fill="#090b10" stroke="#00ff88" stroke-width="2.5"/>
            <circle cx="80" cy="130" r="6" fill="#090b10" stroke="#00ff88" stroke-width="2.5"/>
            <circle cx="30" cy="80" r="6" fill="#090b10" stroke="#00ff88" stroke-width="2.5"/>
            <circle cx="130" cy="80" r="6" fill="#090b10" stroke="#00ff88" stroke-width="2.5"/>
            <!-- Center Core -->
            <rect x="68" y="68" width="24" height="24" rx="4" fill="#151329" stroke="#8b5cf6" stroke-width="2.5" transform="rotate(45 80 80)"/>
            <circle cx="80" cy="80" r="4" fill="#00ff88"/>
          </svg>
        `
      }
    ]
  },
  {
    id: 2,
    title: "Round 02 // Reality Check",
    subtitle: "SPATIAL COGNITION: IMPOSSIBLE GEOMETRY",
    instruction: "Inspect the three isometric structural projections below. Two are valid physical 3D solids. One is an impossible optical paradox that violates Euclidean geometry. Identify the impossible structure.",
    hint: "Trace the depth and corner junctions continuously along each beam.",
    correctIndex: 1, // 0-based: 2nd option (Construct B: Penrose Triangle)
    explanation: "Construct B is the Penrose Triangle: its three perpendicular beams loop into an impossible 3D paradox.",
    options: [
      {
        id: "geo-cube",
        label: "Construct α",
        title: "Isometric Stepped Cube",
        description: "Euclidean 3D Solid",
        svg: `
          <svg viewBox="0 0 200 180" class="puzzle-svg">
            <!-- Perfectly valid isometric cube with bevels and hollow chamber -->
            <!-- Top Face -->
            <polygon points="100,20 160,55 100,90 40,55" fill="#1b1d36" stroke="#8b5cf6" stroke-width="2.5"/>
            <!-- Inner top indent -->
            <polygon points="100,40 135,60 100,80 65,60" fill="#0c0d1c" stroke="#00ff88" stroke-width="1.8"/>
            <!-- Left Face -->
            <polygon points="40,55 100,90 100,160 40,125" fill="#141527" stroke="#8b5cf6" stroke-width="2.5"/>
            <!-- Left Face accent lines -->
            <line x1="70" y1="72" x2="70" y2="142" stroke="rgba(0,255,136,0.4)" stroke-width="1.5" stroke-dasharray="3 3"/>
            <!-- Right Face -->
            <polygon points="100,90 160,55 160,125 100,160" fill="#202344" stroke="#8b5cf6" stroke-width="2.5"/>
            <!-- Right Face accent lines -->
            <line x1="130" y1="72" x2="130" y2="142" stroke="rgba(0,255,136,0.4)" stroke-width="1.5" stroke-dasharray="3 3"/>
            <!-- Center pillar -->
            <line x1="100" y1="90" x2="100" y2="160" stroke="#00ff88" stroke-width="2.5"/>
          </svg>
        `
      },
      {
        id: "geo-penrose",
        label: "Construct β",
        title: "Penrose Tribar",
        description: "Impossible Spatial Paradox",
        isImpossible: true,
        svg: `
          <svg viewBox="0 0 200 180" class="puzzle-svg glitch-target">
            <!-- Classic Impossible Penrose Tribar -->
            <!-- Beam 1: Top-Left to Bottom -->
            <polygon points="90,15 110,27 48,135 28,123" fill="#1a1c38" stroke="#8b5cf6" stroke-width="2"/>
            <!-- Beam 2: Bottom-Left to Bottom-Right -->
            <polygon points="28,123 162,123 142,159 10,159" fill="#121329" stroke="#8b5cf6" stroke-width="2"/>
            <!-- Beam 3: Bottom-Right to Top -->
            <polygon points="162,123 182,135 120,27 100,15" fill="#2d285c" stroke="#8b5cf6" stroke-width="2"/>
            
            <!-- Shaded Paradox Faces to clearly show impossible overlapping depth -->
            <!-- Inner Triangle Cutout -->
            <polygon points="100,52 64,115 136,115" fill="#090a10" stroke="#00ff88" stroke-width="2"/>
            
            <!-- Overlapping face illusion -->
            <polygon points="100,15 120,27 100,52" fill="#00ff88" opacity="0.3" stroke="#00ff88" stroke-width="1.5"/>
            <polygon points="28,123 48,135 64,115" fill="#00ff88" opacity="0.4" stroke="#00ff88" stroke-width="1.5"/>
            <polygon points="162,123 142,159 136,115" fill="#a855f7" opacity="0.4" stroke="#a855f7" stroke-width="1.5"/>

            <!-- Highlighting Paradox Corner Vertex -->
            <circle cx="100" cy="27" r="4" fill="#00ff88"/>
            <circle cx="38" cy="135" r="4" fill="#00ff88"/>
            <circle cx="152" cy="135" r="4" fill="#00ff88"/>
          </svg>
        `
      },
      {
        id: "geo-prism",
        label: "Construct γ",
        title: "Truncated Isometric Octahedron",
        description: "Euclidean 3D Solid",
        svg: `
          <svg viewBox="0 0 200 180" class="puzzle-svg">
            <!-- Fully valid 3D isometric truncated hexagonal pyramid / prism -->
            <!-- Top Platform -->
            <polygon points="100,25 135,42 135,65 100,82 65,65 65,42" fill="#25244a" stroke="#8b5cf6" stroke-width="2.5"/>
            <circle cx="100" cy="54" r="8" fill="#0c0d1c" stroke="#00ff88" stroke-width="2"/>
            <!-- Bottom Base -->
            <polygon points="100,90 170,125 170,145 100,165 30,145 30,125" fill="#131428" stroke="#8b5cf6" stroke-width="2.5"/>
            <!-- Side Connecting Faces -->
            <polygon points="65,65 100,82 100,165 30,145 30,125" fill="#171830" stroke="#8b5cf6" stroke-width="2"/>
            <polygon points="100,82 135,65 170,125 170,145 100,165" fill="#1e1e40" stroke="#8b5cf6" stroke-width="2"/>
            <!-- Front central seam -->
            <line x1="100" y1="82" x2="100" y2="165" stroke="#00ff88" stroke-width="2.5"/>
            <!-- Symmetry accent dots -->
            <circle cx="65" cy="65" r="3" fill="#00ff88"/>
            <circle cx="135" cy="65" r="3" fill="#00ff88"/>
            <circle cx="30" cy="125" r="3" fill="#8b5cf6"/>
            <circle cx="170" cy="125" r="3" fill="#8b5cf6"/>
          </svg>
        `
      }
    ]
  },
  {
    id: 3,
    title: "Round 03 // What Changed?",
    subtitle: "TEMPORAL MEMORY: CHANGE DETECTION",
    instruction: "Compare Scene Alpha (Reference) and Scene Beta (Altered). Exactly ONE subsystem asset in the station has mutated its configuration. Select the object that changed.",
    hint: "Cross-reference each quadrant: Top-Left (Quantum Reactor), Top-Right (Comm Radar), Bottom-Left (Cipher Key), Bottom-Right (Plasma Cell).",
    correctIndex: 1, // 0-based: 2nd item (Comm Radar Dish)
    explanation: "The Comm Radar in the upper-right quadrant rotated 180° and inverted its targeting beam.",
    scenes: {
      sceneA: {
        label: "SCENE α [REFERENCE]",
        svg: `
          <svg viewBox="0 0 340 240" class="scene-canvas">
            <!-- Background Grid & Frame -->
            <rect x="5" y="5" width="330" height="230" rx="8" fill="#0c0e18" stroke="#8b5cf6" stroke-width="1.5" stroke-dasharray="6 3"/>
            <line x1="170" y1="10" x2="170" y2="230" stroke="rgba(139,92,246,0.2)" stroke-width="1" stroke-dasharray="2 4"/>
            <line x1="10" y1="120" x2="330" y2="120" stroke="rgba(139,92,246,0.2)" stroke-width="1" stroke-dasharray="2 4"/>
            <text x="15" y="24" fill="#8b5cf6" font-size="10" font-family="monospace" letter-spacing="1">CONSOLE α // ACTIVE</text>

            <!-- Asset 1: Quantum Reactor (Top-Left: x=35, y=35) -->
            <g id="sceneA-reactor" transform="translate(45, 35)">
              <rect x="0" y="0" width="75" height="70" rx="6" fill="#14162b" stroke="#8b5cf6" stroke-width="1.5"/>
              <text x="37" y="14" fill="#9d9bb8" font-size="7.5" text-anchor="middle" font-family="monospace">REACTOR</text>
              <circle cx="37" cy="42" r="18" fill="#1b1338" stroke="#8b5cf6" stroke-width="2"/>
              <polygon points="37,28 47,42 37,56 27,42" fill="#8b5cf6" opacity="0.8"/>
              <circle cx="37" cy="42" r="4" fill="#00ff88"/>
            </g>

            <!-- Asset 2: Comm Radar Dish (Top-Right: x=215, y=35) -->
            <!-- In Scene A: Radar points UP-RIGHT (Angle ~ -35 deg) -->
            <g id="sceneA-radar" transform="translate(220, 35)">
              <rect x="0" y="0" width="75" height="70" rx="6" fill="#14162b" stroke="#8b5cf6" stroke-width="1.5"/>
              <text x="37" y="14" fill="#9d9bb8" font-size="7.5" text-anchor="middle" font-family="monospace">RADAR</text>
              <line x1="37" y1="58" x2="37" y2="40" stroke="#8b5cf6" stroke-width="3"/>
              <!-- Dish pointing UP-RIGHT -->
              <path d="M 22 28 Q 38 46 54 32" fill="none" stroke="#00ff88" stroke-width="3.5" stroke-linecap="round"/>
              <line x1="38" y1="39" x2="52" y2="24" stroke="#00ff88" stroke-width="2"/>
              <circle cx="53" cy="23" r="3" fill="#00ff88"/>
              <!-- Broadcast wave arc -->
              <path d="M 52 16 A 12 12 0 0 1 64 28" fill="none" stroke="#00ff88" stroke-width="1.5" stroke-dasharray="2 2"/>
            </g>

            <!-- Asset 3: Security Cipher Key (Bottom-Left: x=45, y=140) -->
            <g id="sceneA-key" transform="translate(45, 140)">
              <rect x="0" y="0" width="75" height="70" rx="6" fill="#14162b" stroke="#8b5cf6" stroke-width="1.5"/>
              <text x="37" y="14" fill="#9d9bb8" font-size="7.5" text-anchor="middle" font-family="monospace">CIPHER</text>
              <rect x="18" y="24" width="39" height="36" rx="4" fill="#1e183a" stroke="#8b5cf6" stroke-width="1.5"/>
              <!-- 3 Cyan Data bars -->
              <line x1="24" y1="33" x2="51" y2="33" stroke="#00ff88" stroke-width="2.5" stroke-linecap="round"/>
              <line x1="24" y1="42" x2="45" y2="42" stroke="#00ff88" stroke-width="2.5" stroke-linecap="round"/>
              <line x1="24" y1="51" x2="51" y2="51" stroke="#00ff88" stroke-width="2.5" stroke-linecap="round"/>
            </g>

            <!-- Asset 4: Plasma Battery (Bottom-Right: x=220, y=140) -->
            <g id="sceneA-battery" transform="translate(220, 140)">
              <rect x="0" y="0" width="75" height="70" rx="6" fill="#14162b" stroke="#8b5cf6" stroke-width="1.5"/>
              <text x="37" y="14" fill="#9d9bb8" font-size="7.5" text-anchor="middle" font-family="monospace">BATTERY</text>
              <!-- Cylinder canister -->
              <rect x="22" y="24" width="31" height="38" rx="5" fill="#121829" stroke="#8b5cf6" stroke-width="1.8"/>
              <rect x="28" y="20" width="19" height="4" rx="1.5" fill="#8b5cf6"/>
              <!-- 3 solid vertical charge cells -->
              <rect x="26" y="32" width="6" height="22" rx="1.5" fill="#00ff88"/>
              <rect x="35" y="32" width="6" height="22" rx="1.5" fill="#00ff88"/>
              <rect x="44" y="32" width="6" height="22" rx="1.5" fill="#00ff88"/>
            </g>
          </svg>
        `
      },
      sceneB: {
        label: "SCENE β [MUTATED]",
        svg: `
          <svg viewBox="0 0 340 240" class="scene-canvas">
            <!-- Background Grid & Frame -->
            <rect x="5" y="5" width="330" height="230" rx="8" fill="#0c0e18" stroke="#ff3366" stroke-width="1.5" stroke-dasharray="6 3"/>
            <line x1="170" y1="10" x2="170" y2="230" stroke="rgba(255,51,102,0.2)" stroke-width="1" stroke-dasharray="2 4"/>
            <line x1="10" y1="120" x2="330" y2="120" stroke="rgba(255,51,102,0.2)" stroke-width="1" stroke-dasharray="2 4"/>
            <text x="15" y="24" fill="#ff3366" font-size="10" font-family="monospace" letter-spacing="1">CONSOLE β // SCANNING</text>

            <!-- Asset 1: Quantum Reactor (IDENTICAL) -->
            <g id="sceneB-reactor" transform="translate(45, 35)">
              <rect x="0" y="0" width="75" height="70" rx="6" fill="#14162b" stroke="#8b5cf6" stroke-width="1.5"/>
              <text x="37" y="14" fill="#9d9bb8" font-size="7.5" text-anchor="middle" font-family="monospace">REACTOR</text>
              <circle cx="37" cy="42" r="18" fill="#1b1338" stroke="#8b5cf6" stroke-width="2"/>
              <polygon points="37,28 47,42 37,56 27,42" fill="#8b5cf6" opacity="0.8"/>
              <circle cx="37" cy="42" r="4" fill="#00ff88"/>
            </g>

            <!-- Asset 2: Comm Radar Dish (CHANGED!! Points DOWN-LEFT instead of UP-RIGHT) -->
            <g id="sceneB-radar" transform="translate(220, 35)" class="mutated-target">
              <rect x="0" y="0" width="75" height="70" rx="6" fill="#14162b" stroke="#8b5cf6" stroke-width="1.5"/>
              <text x="37" y="14" fill="#9d9bb8" font-size="7.5" text-anchor="middle" font-family="monospace">RADAR</text>
              <line x1="37" y1="58" x2="37" y2="40" stroke="#8b5cf6" stroke-width="3"/>
              <!-- Dish pointing DOWN-LEFT (Altered!) -->
              <path d="M 20 48 Q 36 34 52 48" fill="none" stroke="#ff3366" stroke-width="3.5" stroke-linecap="round"/>
              <line x1="36" y1="41" x2="22" y2="55" stroke="#ff3366" stroke-width="2"/>
              <circle cx="21" cy="56" r="3" fill="#ff3366"/>
              <!-- Broadcast wave arc flipped downwards -->
              <path d="M 14 56 A 12 12 0 0 1 26 68" fill="none" stroke="#ff3366" stroke-width="1.5" stroke-dasharray="2 2"/>
            </g>

            <!-- Asset 3: Security Cipher Key (IDENTICAL) -->
            <g id="sceneB-key" transform="translate(45, 140)">
              <rect x="0" y="0" width="75" height="70" rx="6" fill="#14162b" stroke="#8b5cf6" stroke-width="1.5"/>
              <text x="37" y="14" fill="#9d9bb8" font-size="7.5" text-anchor="middle" font-family="monospace">CIPHER</text>
              <rect x="18" y="24" width="39" height="36" rx="4" fill="#1e183a" stroke="#8b5cf6" stroke-width="1.5"/>
              <!-- 3 Cyan Data bars -->
              <line x1="24" y1="33" x2="51" y2="33" stroke="#00ff88" stroke-width="2.5" stroke-linecap="round"/>
              <line x1="24" y1="42" x2="45" y2="42" stroke="#00ff88" stroke-width="2.5" stroke-linecap="round"/>
              <line x1="24" y1="51" x2="51" y2="51" stroke="#00ff88" stroke-width="2.5" stroke-linecap="round"/>
            </g>

            <!-- Asset 4: Plasma Battery (IDENTICAL) -->
            <g id="sceneB-battery" transform="translate(220, 140)">
              <rect x="0" y="0" width="75" height="70" rx="6" fill="#14162b" stroke="#8b5cf6" stroke-width="1.5"/>
              <text x="37" y="14" fill="#9d9bb8" font-size="7.5" text-anchor="middle" font-family="monospace">BATTERY</text>
              <rect x="22" y="24" width="31" height="38" rx="5" fill="#121829" stroke="#8b5cf6" stroke-width="1.8"/>
              <rect x="28" y="20" width="19" height="4" rx="1.5" fill="#8b5cf6"/>
              <!-- 3 solid vertical charge cells -->
              <rect x="26" y="32" width="6" height="22" rx="1.5" fill="#00ff88"/>
              <rect x="35" y="32" width="6" height="22" rx="1.5" fill="#00ff88"/>
              <rect x="44" y="32" width="6" height="22" rx="1.5" fill="#00ff88"/>
            </g>
          </svg>
        `
      }
    },
    options: [
      {
        id: "item-reactor",
        label: "Subsystem 01",
        title: "Quantum Reactor",
        description: "Upper-left quadrant",
        iconSvg: `
          <svg viewBox="0 0 60 60" class="subsystem-mini-icon">
            <circle cx="30" cy="30" r="16" fill="#1b1338" stroke="#8b5cf6" stroke-width="2"/>
            <polygon points="30,18 39,30 30,42 21,30" fill="#8b5cf6" opacity="0.8"/>
            <circle cx="30" cy="30" r="4" fill="#00ff88"/>
          </svg>
        `
      },
      {
        id: "item-radar",
        label: "Subsystem 02",
        title: "Comm Radar Dish",
        description: "Upper-right quadrant",
        isChanged: true,
        iconSvg: `
          <svg viewBox="0 0 60 60" class="subsystem-mini-icon">
            <line x1="30" y1="46" x2="30" y2="30" stroke="#8b5cf6" stroke-width="2.5"/>
            <path d="M 18 20 Q 30 36 42 24" fill="none" stroke="#00ff88" stroke-width="3" stroke-linecap="round"/>
            <circle cx="41" cy="18" r="3" fill="#00ff88"/>
          </svg>
        `
      },
      {
        id: "item-cipher",
        label: "Subsystem 03",
        title: "Security Cipher Key",
        description: "Lower-left quadrant",
        iconSvg: `
          <svg viewBox="0 0 60 60" class="subsystem-mini-icon">
            <rect x="15" y="15" width="30" height="30" rx="3" fill="#1e183a" stroke="#8b5cf6" stroke-width="1.8"/>
            <line x1="20" y1="23" x2="40" y2="23" stroke="#00ff88" stroke-width="2" stroke-linecap="round"/>
            <line x1="20" y1="30" x2="35" y2="30" stroke="#00ff88" stroke-width="2" stroke-linecap="round"/>
            <line x1="20" y1="37" x2="40" y2="37" stroke="#00ff88" stroke-width="2" stroke-linecap="round"/>
          </svg>
        `
      },
      {
        id: "item-battery",
        label: "Subsystem 04",
        title: "Plasma Battery",
        description: "Lower-right quadrant",
        iconSvg: `
          <svg viewBox="0 0 60 60" class="subsystem-mini-icon">
            <rect x="18" y="16" width="24" height="30" rx="4" fill="#121829" stroke="#8b5cf6" stroke-width="1.8"/>
            <rect x="23" y="13" width="14" height="3" rx="1" fill="#8b5cf6"/>
            <rect x="22" y="24" width="4" height="15" rx="1" fill="#00ff88"/>
            <rect x="28" y="24" width="4" height="15" rx="1" fill="#00ff88"/>
            <rect x="34" y="24" width="4" height="15" rx="1" fill="#00ff88"/>
          </svg>
        `
      }
    ]
  }
];
