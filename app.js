const corsOptions = {
  origin: 'https://manharshoppingmall.vercel.app',
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type'],
  credentials: true
};

app.use(cors(corsOptions));
app.options('*', cors(corsOptions)); 
