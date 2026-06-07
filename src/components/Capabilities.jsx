import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { 
  Lock, Server, Database, CreditCard, Users, ShieldCheck, FolderPlus, Zap, Cloud, 
  Check, ArrowRight 
} from 'lucide-react';

const capabilitiesData = [
  {
    id: 'auth',
    title: 'Authentication Systems',
    emoji: '🛡️',
    icon: Lock,
    logicDescription: 'Flow of credentials verification and secure route protection:',
    nodes: ['Client App', 'JWT Auth API', 'Database'],
    logic: [
      'User inputs details & creates an account',
      'Password gets salted and encrypted via bcrypt',
      'User logs in and credentials are checked',
      'System signs and issues a secure JWT token',
      'Browser stores token (e.g. HttpOnly Cookie)',
      'Protected API routes parse & verify the token',
      'Session terminated upon user logging out'
    ],
    features: [
      'User Registration & Schema',
      'Secure Login & Logout',
      'JWT Authentication Middleware',
      'Salted Password Hashing',
      'Forgot & Reset Password flows',
      'Email Verification',
      'Session Management'
    ]
  },
  {
    id: 'rest',
    title: 'REST API Development',
    emoji: '⚙️',
    icon: Server,
    logicDescription: 'Stateless communication request-response pattern:',
    nodes: ['Frontend JS', 'Express Router', 'Controller / DB'],
    logic: [
      'Frontend fires HTTP request (e.g. GET /movies)',
      'Router routes request to verified controller',
      'Validation middleware parses headers/params',
      'Controller queries DB (filters, pagination, sort)',
      'Backend formats response with HTTP status code'
    ],
    example: {
      title: 'Movie App CRUD API Example:',
      items: ['POST /movies (Create)', 'PUT /movies/:id (Update)', 'DELETE /movies/:id (Delete)', 'GET /movies (Read/Search)']
    },
    features: [
      'Full CRUD Endpoints',
      'Request Query Pagination',
      'Search & Text Indexing',
      'Multi-field Filtering & Sorting',
      'Strict Input Validation',
      'Centralized Error Handler'
    ]
  },
  {
    id: 'database',
    title: 'Database Architecture',
    emoji: '🗄️',
    icon: Database,
    logicDescription: 'Relational logic for a booking system:',
    nodes: ['API Server', 'Transaction Lock', 'Replica Sets'],
    logic: [
      'User requests a ticket booking',
      'Database verifies seat availability in real-time',
      'Transaction begins to prevent double-booking',
      'Creates Ticket record pointing to User and Movie',
      'Updates Movie availability counter'
    ],
    features: [
      'Strict Schema Design',
      'One-to-Many & Many-to-Many relations',
      'ACID Database Transactions',
      'Compound Database Indexes',
      'Aggregation Pipelines',
      'ORM/ODM (Prisma, Mongoose)'
    ]
  },
  {
    id: 'payment',
    title: 'Payment Integration',
    emoji: '💳',
    icon: CreditCard,
    logicDescription: 'E-commerce transactional checkout flow:',
    nodes: ['Checkout Page', 'Backend SDK', 'Stripe Gateway'],
    logic: [
      'User clicks Buy & initiates checkout',
      'Backend creates Order session with Payment Gateway',
      'User gets redirected to hosted secure checkout',
      'Payment is completed securely on Gateway servers',
      'Gateway sends webhook event with payment payload',
      'Backend webhook listener updates Order in Database'
    ],
    features: [
      'Payment Gateway (Stripe/Razorpay)',
      'Order Status Transitions',
      'Secure Webhook Signature Verify',
      'Transaction Log Audits',
      'Automatic Refund Support',
      'PDF Invoice Generation'
    ]
  },
  {
    id: 'rbac',
    title: 'Role-Based Access Control',
    emoji: '👥',
    icon: Users,
    logicDescription: 'Access level guard matching roles to resources:',
    nodes: ['Client View', 'Role Guard UI', 'Admin Assets'],
    logic: [
      'User logs in and acquires their role claims (e.g. Admin)',
      'Client displays views matching Admin permissions',
      'Admin hits protected API endpoints',
      'Role Guard Middleware checks if role has access rights',
      'Access allowed or blocked with 403 Forbidden status'
    ],
    features: [
      'Custom Token Role Claims',
      'Route Guard Middleware',
      'Granular Permission Checks',
      'Admin Dashboard Control',
      'Client-Side View Restrictions'
    ]
  },
  {
    id: 'security',
    title: 'Security Implementation',
    emoji: '🔐',
    icon: ShieldCheck,
    logicDescription: 'Hardening the application boundaries against threats:',
    nodes: ['Client Load', 'Rate Limiter WAF', 'Protected Core'],
    logic: [
      'Client submits a payload/request',
      'Rate limiter blocks request if exceeding threshold',
      'Security headers prevent clickjacking and XSS',
      'Validator sanitizes input to block script injections',
      'CORS configuration blocks requests from untrusted origins'
    ],
    features: [
      'Salted bcrypt Hashing',
      'API Request Rate Limiting',
      'Input Sanitization & Escaping',
      'Helmet.js Security Headers',
      'XSS & SQL Injection Protection',
      'Strict CORS Setup'
    ]
  },
  {
    id: 'files',
    title: 'File Management',
    emoji: '📁',
    icon: FolderPlus,
    logicDescription: 'Streaming files to scalable object storage:',
    nodes: ['File Selector', 'Multer Middleware', 'AWS S3 Cloud'],
    logic: [
      'User uploads file (image or document)',
      'Server verifies size, file format, and type',
      'File stream uploaded to AWS S3 / Cloudinary',
      'Cloud bucket returns public secure CDN URL',
      'URL stored in db; asset rendered in client'
    ],
    features: [
      'Multipart Form handling',
      'Strict File Validation rules',
      'Cloud Bucket uploads (S3/Cloudinary)',
      'Signed & Private File downloads',
      'On-the-fly Image Resizing'
    ]
  },
  {
    id: 'realtime',
    title: 'Real-Time Features',
    emoji: '⚡',
    icon: Zap,
    logicDescription: 'Bi-directional persistent communication:',
    nodes: ['Client Session', 'WebSocket Server', 'Broadcast Users'],
    logic: [
      'Client initiates WebSocket handshake connection',
      'Server acknowledges and saves socket connection ID',
      'Sender emits event (e.g. send message to room)',
      'Server checks active sockets in room subscription',
      'Instant broadcast of message to all connected clients'
    ],
    features: [
      'Socket.io / WS Server Setup',
      'Dynamic Chat Room creation',
      'Instant Push Notifications',
      'Real-time Typing Indicators',
      'Online/Offline presence indicators'
    ]
  },
  {
    id: 'devops',
    title: 'Deployment & Hosting',
    emoji: '🚀',
    icon: Cloud,
    logicDescription: 'Building, packaging and shipping code to production:',
    nodes: ['Git Actions CI', 'Webpack Builder', 'Cloud VM Server'],
    logic: [
      'Code pushed to main branch in GitHub',
      'CI/CD runs automated builds and tests',
      'Production code packed and sent to host server',
      'Database connects; environment secrets load',
      'Server starts; Nginx handles reverse proxy & SSL'
    ],
    features: [
      'PaaS Deploy (Vercel, Render)',
      'CI/CD pipeline triggers',
      'Secure Environment Variables',
      'SSL Certificate configuration',
      'Database connection strings',
      'Nginx Reverse Proxy & PM2'
    ]
  }
];

// SVG System Diagram component with custom connections and flowing dashed packet animations
const SystemDiagram = ({ nodes }) => {
  return (
    <div className="w-full bg-white/50 dark:bg-zinc-950/80 border border-zinc-200 dark:border-zinc-900 rounded-xl p-4 flex items-center justify-center relative overflow-hidden h-36 transition-colors duration-300">
      {/* Inline styles for connection packet speed animations */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes dash {
          to {
            stroke-dashoffset: -20;
          }
        }
        .flow-line-anim {
          stroke-dasharray: 6, 4;
          animation: dash 1.2s linear infinite;
        }
      `}} />

      <svg width="100%" height="100%" viewBox="0 0 420 120" className="w-full h-full max-w-[420px]">
        {/* Connection Pathways */}
        {/* Node 1 to Node 2 */}
        <line x1="75" y1="50" x2="195" y2="50" className="stroke-zinc-200 dark:stroke-zinc-800 transition-colors" strokeWidth="2" />
        <line x1="75" y1="50" x2="195" y2="50" stroke="#8b5cf6" strokeWidth="1.5" className="flow-line-anim" />

        {/* Node 2 to Node 3 */}
        <line x1="225" y1="50" x2="345" y2="50" className="stroke-zinc-200 dark:stroke-zinc-800 transition-colors" strokeWidth="2" />
        <line x1="225" y1="50" x2="345" y2="50" stroke="#c084fc" strokeWidth="1.5" className="flow-line-anim" />

        {/* Node 1 (Client/Source) */}
        <circle cx="60" y="50" r="18" className="fill-white dark:fill-zinc-950 stroke-brand-primary transition-colors" strokeWidth="2" />
        <text x="60" y="54" fill="#8b5cf6" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="monospace">01</text>
        <text x="60" y="85" className="fill-zinc-550 dark:fill-zinc-400 font-sans font-medium text-[9px] transition-colors" textAnchor="middle">{nodes[0]}</text>

        {/* Node 2 (Router/Controller) */}
        <circle cx="210" y="50" r="18" className="fill-white dark:fill-zinc-950 stroke-brand-primary/80 transition-colors" strokeWidth="2" />
        <text x="210" y="54" fill="#a78bfa" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="monospace">02</text>
        <text x="210" y="85" className="fill-zinc-550 dark:fill-zinc-400 font-sans font-medium text-[9px] transition-colors" textAnchor="middle">{nodes[1]}</text>

        {/* Node 3 (Database/Target) */}
        <circle cx="360" y="50" r="18" className="fill-white dark:fill-zinc-950 stroke-brand-primary/60 transition-colors" strokeWidth="2" />
        <text x="360" y="54" fill="#c084fc" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="monospace">03</text>
        <text x="360" y="85" className="fill-zinc-550 dark:fill-zinc-400 font-sans font-medium text-[9px] transition-colors" textAnchor="middle">{nodes[2]}</text>
      </svg>
    </div>
  );
};

const Capabilities = () => {
  const [selectedCap, setSelectedCap] = useState(capabilitiesData[0]);

  return (
    <section id="capabilities" className="py-24 relative overflow-hidden bg-slate-50 dark:bg-brand-dark border-t border-zinc-200 dark:border-zinc-900 transition-colors duration-300">
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-brand-primary/5 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white tracking-tight font-display mb-4 transition-colors duration-300">Backend Expertise</h2>
            <div className="w-20 h-1 bg-brand-primary mx-auto rounded-full mb-6"></div>
            <p className="text-zinc-650 dark:text-zinc-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed transition-colors duration-300">
              Moving past simple language definitions, here is a visual mapping of the system solutions and request pipelines I can architecture.
            </p>
          </motion.div>
        </div>

        {/* Concept Comparison Blocks */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 max-w-3xl mx-auto"
        >
          {/* Traditional Keywords */}
          <div className="bg-white/40 dark:bg-zinc-950/20 border border-zinc-200 dark:border-zinc-900 p-5 rounded-xl flex flex-col justify-between hover:border-zinc-300 dark:hover:border-zinc-800 hover:shadow-sm transition-all duration-300">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-red-400/90 text-xs">❌</span>
                <h4 className="text-zinc-750 dark:text-zinc-300 font-bold text-sm tracking-wide transition-colors">Traditional Keyword Listing</h4>
              </div>
              <p className="text-zinc-550 dark:text-zinc-500 text-xs leading-relaxed transition-colors">
                Simple tool listing that fails to demonstrate understanding of system constraints and production workflows.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 mt-4 font-mono text-[10px] text-zinc-600 dark:text-zinc-400">
              <span className="px-2.5 py-1 bg-slate-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-850 rounded transition-colors">Node.js</span>
              <span className="px-2.5 py-1 bg-slate-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-850 rounded transition-colors">Express</span>
              <span className="px-2.5 py-1 bg-slate-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-850 rounded transition-colors">MongoDB</span>
              <span className="px-2.5 py-1 bg-slate-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-850 rounded transition-colors">JWT</span>
            </div>
          </div>

          {/* Practical Capabilities */}
          <div className="bg-white/40 dark:bg-zinc-950/20 border border-zinc-200 dark:border-zinc-900 p-5 rounded-xl flex flex-col justify-between hover:border-zinc-300 dark:hover:border-zinc-800 hover:shadow-sm transition-all duration-300">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-emerald-400/90 text-xs">✅</span>
                <h4 className="text-zinc-900 dark:text-white font-bold text-sm tracking-wide transition-colors">Capability-Driven Architecture</h4>
              </div>
              <p className="text-zinc-650 dark:text-zinc-400 text-xs leading-relaxed transition-colors">
                Demonstrating active control over security parameters, transactions, API request shapes, and system logic.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 mt-4 font-mono text-[10px] text-brand-primary">
              <span className="px-2.5 py-1 bg-brand-primary/5 dark:bg-zinc-900/60 border border-brand-primary/10 dark:border-zinc-850 rounded font-semibold transition-colors">Authentication Systems</span>
              <span className="px-2.5 py-1 bg-brand-primary/5 dark:bg-zinc-900/60 border border-brand-primary/10 dark:border-zinc-850 rounded font-semibold transition-colors">Payment Integrations</span>
              <span className="px-2.5 py-1 bg-brand-primary/5 dark:bg-zinc-900/60 border border-brand-primary/10 dark:border-zinc-850 rounded font-semibold transition-colors">REST APIs</span>
            </div>
          </div>
        </motion.div>

        {/* Interactive Systems Explorer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Navigation Controls (Left) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5">
            {capabilitiesData.map((cap) => {
              const Icon = cap.icon;
              const isSelected = selectedCap.id === cap.id;
              return (
                <button
                  key={cap.id}
                  onClick={() => setSelectedCap(cap)}
                  className={`w-full text-left p-3.5 rounded-xl flex items-center justify-between border transition-all duration-300 ${
                    isSelected 
                      ? 'bg-white dark:bg-zinc-950 border-brand-primary text-zinc-900 dark:text-white shadow-lg dark:shadow-xl shadow-brand-primary/5' 
                      : 'bg-white/40 dark:bg-zinc-950/30 border-zinc-200 dark:border-zinc-900 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 hover:border-zinc-300 dark:hover:border-zinc-800 hover:bg-white/80 dark:hover:bg-zinc-950/50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-lg">{cap.emoji}</span>
                    <span className="font-semibold text-xs sm:text-sm tracking-wide">{cap.title}</span>
                  </div>
                  <Icon className={`w-3.5 h-3.5 transition-all ${isSelected ? 'text-brand-primary scale-110' : 'text-zinc-500 dark:text-zinc-600'}`} />
                </button>
              );
            })}
          </div>

          {/* System Diagram & Specs Panel (Right) */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedCap.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="bg-white/50 dark:bg-zinc-950/30 border border-zinc-200 dark:border-zinc-900 p-6 md:p-8 rounded-2xl relative shadow-xl dark:shadow-2xl space-y-6 transition-all duration-300"
              >
                {/* Panel Header */}
                <div className="flex items-center justify-between border-b border-zinc-200 dark:border-zinc-900 pb-5 transition-colors">
                  <div className="flex items-center gap-3.5">
                    <div className="p-2.5 bg-brand-primary/10 border border-brand-primary/20 rounded-xl text-brand-primary">
                      <selectedCap.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-brand-primary uppercase tracking-wider block mb-0.5">Architecture specs</span>
                      <h3 className="text-xl font-bold text-zinc-900 dark:text-white font-display flex items-center gap-2 transition-colors">
                        {selectedCap.title}
                      </h3>
                    </div>
                  </div>
                  <span className="text-2xl">{selectedCap.emoji}</span>
                </div>

                {/* Connection Diagram */}
                <div>
                  <h4 className="text-[10px] font-bold text-zinc-550 dark:text-zinc-400 uppercase tracking-widest mb-3 transition-colors">📡 Active Request Pipeline</h4>
                  <SystemDiagram nodes={selectedCap.nodes} />
                </div>

                {/* Stepper Logic details */}
                <div className="space-y-4">
                  <h4 className="text-[10px] font-bold text-zinc-550 dark:text-zinc-400 uppercase tracking-widest border-t border-zinc-200 dark:border-zinc-900 pt-5 mb-1 transition-colors">
                    📋 Core Execution Stepper
                  </h4>
                  <div className="space-y-3.5">
                    {selectedCap.logic.map((step, idx) => (
                      <div key={idx} className="flex gap-4 items-start relative group">
                        {idx !== selectedCap.logic.length - 1 && (
                          <div className="absolute left-[11px] top-5 bottom-[-17px] w-[1px] bg-zinc-200 dark:bg-zinc-900 transition-colors"></div>
                        )}
                        <div className="flex-shrink-0 w-5.5 h-5.5 rounded-full bg-white dark:bg-zinc-950 border border-zinc-250 dark:border-zinc-850 flex items-center justify-center text-[10px] font-mono font-bold text-brand-primary z-10 transition-colors">
                          {idx + 1}
                        </div>
                        <p className="text-zinc-700 dark:text-zinc-300 text-xs sm:text-sm pt-0.5 leading-relaxed text-left transition-colors">
                          {step}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* API Example block */}
                {selectedCap.example && (
                  <div className="p-4 bg-slate-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-900 rounded-xl space-y-2.5 transition-colors">
                    <h5 className="text-[10px] font-bold text-brand-primary uppercase tracking-widest">
                      {selectedCap.example.title}
                    </h5>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 font-mono text-[10px] text-zinc-650 dark:text-zinc-400 text-left transition-colors">
                      {selectedCap.example.items.map((item, idx) => (
                        <div key={idx} className="bg-white dark:bg-zinc-900/60 p-2 rounded border border-zinc-200 dark:border-zinc-850 transition-colors">
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Production features list */}
                <div className="border-t border-zinc-200 dark:border-zinc-900 pt-5 space-y-3 transition-colors">
                  <h4 className="text-[10px] font-bold text-zinc-550 dark:text-zinc-400 uppercase tracking-widest transition-colors">
                    ⚡ Key Production Integrations
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {selectedCap.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 text-zinc-700 dark:text-zinc-300 text-left transition-colors">
                        <span className="text-brand-primary bg-brand-primary/10 p-0.5 rounded-full flex-shrink-0 border border-brand-primary/20">
                          <Check className="w-3 h-3" />
                        </span>
                        <span className="text-xs sm:text-sm font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Capabilities;
