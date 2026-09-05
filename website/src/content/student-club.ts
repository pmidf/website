import { assets } from "@/content/assets";
import type { DepoimentoEstudante } from "@/types";

/* === Seção "Onde os gerentes de projeto se formam" ======================== */

export const O_QUE_E = {
  eyebrow: "O que é o Student Club",
  titulo: "Onde os gerentes de projeto se formam",
  paragrafos: [
    "O Student Club do PMI-DF foi o primeiro student club fundado do Brasil! Fundado em 2024, é um ambiente exclusivo para estudantes que querem desenvolver habilidades de gestão de projetos antes mesmo de entrar no mercado.",
    "Dizemos que o Student Club do PMI-DF é o lugar onde os gerentes de projetos se formam! Aqui você participa de encontros, eventos, treinamentos e projetos reais conduzidos por voluntários do capítulo, com acesso à comunidade do PMI-DF e a descontos exclusivos em filiação, eventos e certificações.",
  ],
  foto: {
    src: assets.studentClub.estudantes,
    alt: "Estudantes do PMI-DF Student Club reunidos em um encontro do clube",
    largura: 1400,
    altura: 788,
  },
};

/* === Depoimentos ========================================================== */

export const DEPOIMENTOS = {
  eyebrow: "Quem já passou por aqui",
  titulo: "O clube na voz de quem participa",
  descricao:
    "Estudantes que constroem o Student Club contam o que mudou na formação e na carreira.",
};

/**
 * Textos escritos pelos próprios estudantes, mantidos como vieram — a quebra
 * de parágrafos é a deles.
 */
export const DEPOIMENTOS_ESTUDANTES: DepoimentoEstudante[] = [
  {
    nome: "Hugo Queiroz",
    linkedin: "https://www.linkedin.com/in/melo-hugo/",
    foto: assets.studentClub.depoimentoHugo,
    paragrafos: [
      "Sou estudante de Engenharia de Software na UnB e, atualmente, lidero a gestão de projetos do nosso hackathon. Na prática, meu papel é orquestrar o time para garantir a máxima excelência nas entregas, além de desenhar e direcionar toda a estratégia por trás do evento. Essa experiência tem sido um divisor de águas na minha jornada, me tirou completamente da zona de conforto e tem acelerado meu aprendizado em liderança, estratégia e resolução de problemas complexos.",
    ],
  },
  {
    nome: "Ludmilla Sophia",
    linkedin: "https://www.linkedin.com/in/ludmilla-sophia-8a15b2384",
    foto: assets.studentClub.depoimentoLudmilla,
    paragrafos: [
      "Sou estudante de Ciência da Computação e venho me desenvolvendo cada vez mais na área de tecnologia, principalmente em front-end e UX. Dentro do Student Club, tive a oportunidade de aprender muito sobre gestão de projetos, organização, trabalho em equipe e sobre lidar com diferentes pessoas e realidades, o que contribuiu bastante para meu crescimento pessoal e profissional.",
      "Entrar para o Student Club mudou muito minha visão sobre meu futuro e sobre meu potencial. É um projeto pelo qual tenho muito carinho, porque me proporcionou oportunidades, aprendizado e contato com pessoas incríveis que me motivam diariamente a continuar evoluindo. Além do conhecimento técnico, aprendi experiências e habilidades que levarei para a vida, tanto no lado profissional quanto pessoal. Hoje, posso dizer que faço parte desse projeto com muito orgulho e gratidão.",
    ],
  },
  {
    nome: "Ana Carolina Madeira Fialho",
    linkedin: "https://www.linkedin.com/in/anacarolinafialho/",
    foto: assets.studentClub.depoimentoAna,
    paragrafos: [
      "Sou estudante de Engenharia de Software e faço parte do PMI-DF Student Club como Coordenadora de Gente e Gestão. Meu trabalho é ajudar a criar um ambiente mais acolhedor e engajado para os membros, promovendo integração, networking e desenvolvimento de habilidades.",
      "Participar do Student Club tem sido uma experiência muito especial para mim. Além de conhecer pessoas incríveis e construir amizades, tenho aprendido muito sobre gestão de projetos e desenvolvimento profissional. Foi através do clube que encontrei um direcionamento mais claro para a carreira que quero seguir.",
    ],
  },
  {
    nome: "Júlia Rosa",
    linkedin: "https://www.linkedin.com/in/juliaengineer",
    foto: assets.studentClub.depoimentoJulia,
    paragrafos: [
      "Sou estudante de Engenharia de Software e o Student Club foi um divisor de águas na minha trajetória. Foi por meio dessa experiência que tive a oportunidade de conhecer, na prática, a realidade da área de tecnologia, desenvolver competências importantes e compreender melhor os desafios e oportunidades da profissão.",
      "Além do aprendizado técnico e profissional, o programa teve um papel fundamental na minha preparação para o mercado, contribuindo diretamente para meu ingresso na área. O Student Club não apenas me mostrou o caminho que eu queria seguir, mas também me deu a confiança e as ferramentas necessárias para trilhá-lo. Essa experiência fortaleceu meu senso de pertencimento à comunidade de tecnologia, ampliou minha visão sobre as possibilidades da carreira e reforçou minha motivação para continuar aprendendo, evoluindo e construindo meu futuro profissional.",
    ],
  },
];


export const MISSAO_VALORES = [
  {
    titulo: "Missão",
    descricao:
      "Aproximar estudantes de gerenciamento de projetos por meio de vivência prática, mentoria e contatos diretos com profissionais certificados do capítulo.",
    gradiente: "bg-[linear-gradient(180deg,#2A0A5C_0%,#4F17A8_100%)]",
  },
  {
    titulo: "Visão",
    descricao:
      "Ser a principal porta de entrada para a carreira de projetos no Distrito Federal, formando líderes preparados antes da primeira vaga.",
    gradiente: "bg-[linear-gradient(180deg,#012029_0%,#00799E_100%)]",
  },
  {
    titulo: "Valores",
    descricao:
      "Colaboração, aprendizado contínuo, diversidade e ética profissional — os mesmos princípios que orientam o PMI no mundo todo.",
    gradiente: "bg-[linear-gradient(180deg,#841E04_0%,#FF610F_100%)]",
  },
];

export const BENEFICIOS_STUDENT = [
  {
    titulo: "Networking internacional",
    descricao:
      "Conexão com student clubs de outros países e com a rede global de mais de 700 mil profissionais do PMI.",
    cor: "bg-[#4F17A8]",
  },
  {
    titulo: "Oportunidades de carreira",
    descricao:
      "Vagas, estágios e indicações que circulam primeiro dentro da comunidade do capítulo.",
    cor: "bg-[#1AC7FF]",
  },
  {
    titulo: "Descontos exclusivos",
    descricao:
      "Condições especiais na filiação ao PMI, em eventos do capítulo e em cursos preparatórios para certificação.",
    cor: "bg-[#FF610F]",
  },
  {
    titulo: "Eventos e workshops",
    descricao:
      "Acesso a webinars, meetups, visitas técnicas e ao PMI-DF Summit com condições de estudante.",
    cor: "bg-[#4F17A8]",
  },
  {
    titulo: "Prática em projetos reais",
    descricao:
      "Participação em projetos e comitês do capítulo, com entregas de verdade para colocar no currículo.",
    cor: "bg-[#1AC7FF]",
  },
];

export const PASSOS_STUDENT = [
  {
    titulo: "Inscreva-se",
    descricao:
      "Preencha o formulário do Student Club com seus dados acadêmicos. A participação é gratuita para estudantes.",
  },
  {
    titulo: "Valide seu vínculo",
    descricao:
      "Envie o comprovante de matrícula em curso de graduação ou pós reconhecido. A validação leva poucos dias.",
  },
  {
    titulo: "Entre na comunidade",
    descricao:
      "Você recebe acesso aos canais do clube, à agenda de encontros e ao calendário de mentorias do capítulo.",
  },
  {
    titulo: "Coloque em prática",
    descricao:
      "Escolha um comitê ou projeto do PMI-DF e comece a atuar com acompanhamento de voluntários experientes.",
  },
];

export const QUEM_PODE_PARTICIPAR = [
  "Matrícula ativa em graduação ou pós-graduação",
  "Qualquer área de formação, de engenharia a design",
  "Sem custo de adesão ao clube",
  "Disponibilidade para encontros mensais do capítulo",
];

export const FAQ_STUDENT = [
  {
    pergunta: "Preciso pagar para entrar no Student Club?",
    resposta:
      "Não. A participação no Student Club é gratuita para estudantes com vínculo acadêmico ativo.",
  },
  {
    pergunta: "Sou de um curso que não tem nada a ver com projetos. Posso participar?",
    resposta:
      "Sim. O clube é aberto a estudantes de diferentes áreas que queiram aprender sobre gestão, liderança e projetos.",
  },
  {
    pergunta: "Como o clube se relaciona com o PMI-DF e com o PMI Global?",
    resposta:
      "O Student Club é uma iniciativa local conectada ao capítulo PMI-DF, aproximando estudantes da comunidade profissional e da rede global do PMI.",
  },
  {
    pergunta: "Participar do clube vale PDUs ou algum certificado?",
    resposta:
      "Algumas atividades podem gerar certificados de participação. PDUs dependem das regras de cada evento e atividade.",
  },
  {
    pergunta: "Quanto tempo por mês preciso dedicar?",
    resposta:
      "A dedicação varia conforme sua participação, mas a recomendação é reservar tempo para encontros mensais e atividades práticas.",
  },
];