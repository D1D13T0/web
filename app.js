const express = require("express");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const fs = require('fs');
const path = require('path');
const jsYaml = require('js-yaml');

const swaggerFilePath = path.join(__dirname, 'swagger.yaml');
const swaggerDocument = jsYaml.load(fs.readFileSync(swaggerFilePath, 'utf8'))

const app = express();

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Sou o Projeto de Node + Express');
});

const posts = [
  { id: 1, titulo: "Lançamento do novo sistema", descricao: "Confira as novidades do sistema...", autor: "Maria Silva", dataPublicacao: "2026-04-28", fotoAutor: "https://i.pravatar.cc/150?img=1" },
  { id: 2, titulo: "Dicas de produtividade", descricao: "Aprenda a organizar melhor seu dia...", autor: "João Souza", dataPublicacao: "2026-05-01", fotoAutor: "https://i.pravatar.cc/150?img=2" },
  { id: 3, titulo: "Tendências de tecnologia", descricao: "O que esperar do mercado tech em 2026...", autor: "Ana Costa", dataPublicacao: "2026-05-10", fotoAutor: "https://i.pravatar.cc/150?img=3" },
  { id: 4, titulo: "Inteligência Artificial no dia a dia", descricao: "Como a IA está mudando nossas rotinas...", autor: "Carlos Lima", dataPublicacao: "2026-05-02", fotoAutor: "https://i.pravatar.cc/150?img=4" },
  { id: 5, titulo: "Segurança digital", descricao: "Proteja seus dados na internet...", autor: "Fernanda Rocha", dataPublicacao: "2026-05-03", fotoAutor: "https://i.pravatar.cc/150?img=5" },
  { id: 6, titulo: "Node.js para iniciantes", descricao: "Primeiros passos com Node.js...", autor: "Pedro Alves", dataPublicacao: "2026-05-04", fotoAutor: "https://i.pravatar.cc/150?img=6" },
  { id: 7, titulo: "APIs REST na prática", descricao: "Como construir APIs do zero...", autor: "Juliana Mendes", dataPublicacao: "2026-05-05", fotoAutor: "https://i.pravatar.cc/150?img=7" },
  { id: 8, titulo: "Git e GitHub essencial", descricao: "Versionamento de código para todos...", autor: "Ricardo Souza", dataPublicacao: "2026-05-06", fotoAutor: "https://i.pravatar.cc/150?img=8" },
  { id: 9, titulo: "CSS moderno", descricao: "Flexbox, Grid e muito mais...", autor: "Camila Torres", dataPublicacao: "2026-05-07", fotoAutor: "https://i.pravatar.cc/150?img=9" },
  { id: 10, titulo: "JavaScript avançado", descricao: "Closures, promises e async/await...", autor: "Bruno Neves", dataPublicacao: "2026-05-08", fotoAutor: "https://i.pravatar.cc/150?img=10" },
  { id: 11, titulo: "Banco de dados SQL", descricao: "Fundamentos de consultas SQL...", autor: "Larissa Pinto", dataPublicacao: "2026-05-09", fotoAutor: "https://i.pravatar.cc/150?img=11" },
  { id: 12, titulo: "Docker para devs", descricao: "Containerização de aplicações...", autor: "Thiago Melo", dataPublicacao: "2026-05-10", fotoAutor: "https://i.pravatar.cc/150?img=12" },
  { id: 13, titulo: "React do zero", descricao: "Criando interfaces modernas...", autor: "Isabela Cruz", dataPublicacao: "2026-05-11", fotoAutor: "https://i.pravatar.cc/150?img=13" },
  { id: 14, titulo: "TypeScript na prática", descricao: "Tipagem estática no JavaScript...", autor: "Gabriel Santos", dataPublicacao: "2026-05-12", fotoAutor: "https://i.pravatar.cc/150?img=14" },
  { id: 15, titulo: "Clean Code", descricao: "Boas práticas de programação...", autor: "Patrícia Lima", dataPublicacao: "2026-05-13", fotoAutor: "https://i.pravatar.cc/150?img=15" },
  { id: 16, titulo: "DevOps na prática", descricao: "CI/CD e automação de deploys...", autor: "Marcos Vieira", dataPublicacao: "2026-05-14", fotoAutor: "https://i.pravatar.cc/150?img=16" },
  { id: 17, titulo: "UX Design para devs", descricao: "Como pensar na experiência do usuário...", autor: "Aline Ferreira", dataPublicacao: "2026-05-15", fotoAutor: "https://i.pravatar.cc/150?img=17" },
  { id: 18, titulo: "Testes automatizados", descricao: "Jest e testes unitários no Node.js...", autor: "Felipe Barbosa", dataPublicacao: "2026-05-16", fotoAutor: "https://i.pravatar.cc/150?img=18" },
  { id: 19, titulo: "MongoDB para iniciantes", descricao: "Banco de dados NoSQL na prática...", autor: "Vanessa Oliveira", dataPublicacao: "2026-05-17", fotoAutor: "https://i.pravatar.cc/150?img=19" },
  { id: 20, titulo: "Deploy no Render", descricao: "Publicando sua API gratuitamente...", autor: "Rafael Costa", dataPublicacao: "2026-05-18", fotoAutor: "https://i.pravatar.cc/150?img=20" },
  { id: 21, titulo: "Swagger na prática", descricao: "Documentando APIs com OpenAPI...", autor: "Tatiane Moura", dataPublicacao: "2026-05-19", fotoAutor: "https://i.pravatar.cc/150?img=21" },
  { id: 22, titulo: "Express.js avançado", descricao: "Middlewares e rotas avançadas...", autor: "Diego Carvalho", dataPublicacao: "2026-05-20", fotoAutor: "https://i.pravatar.cc/150?img=22" },
  { id: 23, titulo: "Arquitetura MVC", descricao: "Organizando seu projeto backend...", autor: "Renata Gomes", dataPublicacao: "2026-04-29", fotoAutor: "https://i.pravatar.cc/150?img=23" },
  { id: 24, titulo: "HTTP e REST explicados", descricao: "Entendendo os verbos HTTP...", autor: "Leonardo Dias", dataPublicacao: "2026-04-30", fotoAutor: "https://i.pravatar.cc/150?img=24" },
  { id: 25, titulo: "Autenticação com JWT", descricao: "Tokens de acesso no Node.js...", autor: "Mônica Araújo", dataPublicacao: "2026-04-27", fotoAutor: "https://i.pravatar.cc/150?img=25" },
  { id: 26, titulo: "Web Scraping com Node", descricao: "Coletando dados da web...", autor: "Sandro Farias", dataPublicacao: "2026-04-26", fotoAutor: "https://i.pravatar.cc/150?img=26" },
  { id: 27, titulo: "Programação funcional", descricao: "Map, filter e reduce na prática...", autor: "Priscila Lopes", dataPublicacao: "2026-04-25", fotoAutor: "https://i.pravatar.cc/150?img=27" },
  { id: 28, titulo: "WebSockets em tempo real", descricao: "Chat em tempo real com Socket.io...", autor: "Rodrigo Nunes", dataPublicacao: "2026-04-24", fotoAutor: "https://i.pravatar.cc/150?img=28" },
  { id: 29, titulo: "Microserviços", descricao: "Quebrando o monolito em serviços...", autor: "Claudia Ramos", dataPublicacao: "2026-04-23", fotoAutor: "https://i.pravatar.cc/150?img=29" },
  { id: 30, titulo: "Carreira em tecnologia", descricao: "Como crescer como desenvolvedor...", autor: "André Monteiro", dataPublicacao: "2026-04-22", fotoAutor: "https://i.pravatar.cc/150?img=30" },
];

app.get('/posts', (req, res) => {
  res.status(200).json(posts);
});

app.listen(3000, () => {
  console.log('running at http://localhost:3000')
})