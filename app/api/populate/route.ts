// import { NextResponse } from 'next/server';
// import { createClient } from "@/utils/supabase/server";
// const supabase = createClient();

// const BANKS_API_URL = 'https://brasilapi.com.br/api/banks/v1';
// const STATES_API_URL = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados';
// const CITIES_API_URL = (uf: string) => `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`;

// // Tipos para banco de dados
// interface Subcategoria {
//   nome: string;
//   subcategorias?: Subcategoria[];
// }

// interface Categoria {
//   nome: string;
//   subcategorias?: Subcategoria[];
// }

// interface Bank {
//   name: string;
//   code: string;
//   fullName: string;
// }

// interface State {
//   id: number;
//   nome: string;
//   sigla: string;
// }

// interface City {
//   nome: string;
// }

// const categorias: Categoria[] = [
//   {
//     nome: "Alimentos e Bebidas",
//     subcategorias: [
//       {
//         nome: "Alimentos Frescos",
//         subcategorias: [
//           { nome: "Frutas" },
//           { nome: "Verduras e Legumes" },
//           { nome: "Carnes e Aves" },
//           { nome: "Pescados" },
//           { nome: "Outros" }
//         ]
//       },
//       {
//         nome: "Comida Caseira",
//         subcategorias: [
//           { nome: "Marmitas" },
//           { nome: "Lanches" },
//           { nome: "Doces e Sobremesas" },
//           { nome: "Outros" }
//         ]
//       },
//       {
//         nome: "Bebidas",
//         subcategorias: [
//           { nome: "Sucos Naturais" },
//           { nome: "Bebidas Artesanais" },
//           { nome: "Outros" }
//         ]
//       },
//       { nome: "Outros" }
//     ]
//   },
//   {
//     nome: "Eletrônicos e Informática",
//     subcategorias: [
//       {
//         nome: "Celulares e Tablets",
//         subcategorias: [
//           { nome: "Smartphones" },
//           { nome: "Tablets" },
//           { nome: "Acessórios" },
//           { nome: "Outros" }
//         ]
//       },
//       {
//         nome: "Computadores e Acessórios",
//         subcategorias: [
//           { nome: "Desktops" },
//           { nome: "Notebooks" },
//           { nome: "Componentes" },
//           { nome: "Outros" }
//         ]
//       },
//       {
//         nome: "TV, Áudio e Vídeo",
//         subcategorias: [
//           { nome: "Televisores" },
//           { nome: "Home Theaters" },
//           { nome: "Projetores" },
//           { nome: "Outros" }
//         ]
//       },
//       { nome: "Outros" }
//     ]
//   },
//   {
//     nome: "Moda e Acessórios",
//     subcategorias: [
//       {
//         nome: "Roupas",
//         subcategorias: [
//           { nome: "Masculino" },
//           { nome: "Feminino" },
//           { nome: "Infantil" },
//           { nome: "Outros" }
//         ]
//       },
//       {
//         nome: "Calçados",
//         subcategorias: [
//           { nome: "Masculino" },
//           { nome: "Feminino" },
//           { nome: "Infantil" },
//           { nome: "Outros" }
//         ]
//       },
//       {
//         nome: "Acessórios",
//         subcategorias: [
//           { nome: "Bolsas" },
//           { nome: "Óculos" },
//           { nome: "Relógios" },
//           { nome: "Outros" }
//         ]
//       },
//       { nome: "Outros" }
//     ]
//   },
//   {
//     nome: "Casa e Jardim",
//     subcategorias: [
//       {
//         nome: "Móveis",
//         subcategorias: [
//           { nome: "Sofás" },
//           { nome: "Mesas" },
//           { nome: "Cadeiras" },
//           { nome: "Outros" }
//         ]
//       },
//       {
//         nome: "Decoração",
//         subcategorias: [
//           { nome: "Quadros" },
//           { nome: "Tapetes" },
//           { nome: "Vasos" },
//           { nome: "Outros" }
//         ]
//       },
//       {
//         nome: "Jardinagem",
//         subcategorias: [
//           { nome: "Plantas" },
//           { nome: "Ferramentas de Jardim" },
//           { nome: "Vasos e Suportes" },
//           { nome: "Outros" }
//         ]
//       },
//       {
//         nome: "Ferramentas",
//         subcategorias: [
//           { nome: "Ferramentas Elétricas" },
//           { nome: "Ferramentas Manuais" },
//           { nome: "Caixas de Ferramentas" },
//           { nome: "Outros" }
//         ]
//       },
//       { nome: "Outros" }
//     ]
//   },
//   {
//     nome: "Saúde e Beleza",
//     subcategorias: [
//       {
//         nome: "Cuidados com a Pele",
//         subcategorias: [
//           { nome: "Cremes" },
//           { nome: "Protetor Solar" },
//           { nome: "Hidratantes" },
//           { nome: "Outros" }
//         ]
//       },
//       {
//         nome: "Cuidados com o Cabelo",
//         subcategorias: [
//           { nome: "Shampoos" },
//           { nome: "Condicionadores" },
//           { nome: "Tratamentos Capilares" },
//           { nome: "Outros" }
//         ]
//       },
//       {
//         nome: "Suplementos",
//         subcategorias: [
//           { nome: "Vitaminas" },
//           { nome: "Proteínas" },
//           { nome: "Suplementos Naturais" },
//           { nome: "Outros" }
//         ]
//       },
//       {
//         nome: "Equipamentos Médicos",
//         subcategorias: [
//           { nome: "Medidores de Pressão" },
//           { nome: "Termômetros" },
//           { nome: "Oxímetros" },
//           { nome: "Outros" }
//         ]
//       },
//       { nome: "Outros" }
//     ]
//   },
//   {
//     nome: "Veículos e Acessórios",
//     subcategorias: [
//       {
//         nome: "Carros",
//         subcategorias: [
//           { nome: "Sedans" },
//           { nome: "SUVs" },
//           { nome: "Hatchbacks" },
//           { nome: "Outros" }
//         ]
//       },
//       {
//         nome: "Motos",
//         subcategorias: [
//           { nome: "Scooters" },
//           { nome: "Motos Esportivas" },
//           { nome: "Motos Custom" },
//           { nome: "Outros" }
//         ]
//       },
//       {
//         nome: "Peças e Acessórios",
//         subcategorias: [
//           { nome: "Pneus" },
//           { nome: "Som Automotivo" },
//           { nome: "Capas e Acessórios Externos" },
//           { nome: "Outros" }
//         ]
//       },
//       { nome: "Outros" }
//     ]
//   },
//   {
//     nome: "Imóveis",
//     subcategorias: [
//       {
//         nome: "Apartamentos",
//         subcategorias: [
//           { nome: "Aluguel" },
//           { nome: "Venda" },
//           { nome: "Outros" }
//         ]
//       },
//       {
//         nome: "Casas",
//         subcategorias: [
//           { nome: "Aluguel" },
//           { nome: "Venda" },
//           { nome: "Outros" }
//         ]
//       },
//       {
//         nome: "Terrenos",
//         subcategorias: [
//           { nome: "Aluguel" },
//           { nome: "Venda" },
//           { nome: "Outros" }
//         ]
//       },
//       {
//         nome: "Comerciais",
//         subcategorias: [
//           { nome: "Escritórios" },
//           { nome: "Lojas" },
//           { nome: "Galpões" },
//           { nome: "Outros" }
//         ]
//       },
//       { nome: "Outros" }
//     ]
//   },
//   {
//     nome: "Serviços",
//     subcategorias: [
//       {
//         nome: "Consultoria",
//         subcategorias: [
//           { nome: "Consultoria Jurídica" },
//           { nome: "Consultoria Financeira" },
//           { nome: "Consultoria de Marketing" },
//           { nome: "Outros" }
//         ]
//       },
//       {
//         nome: "Reparos e Manutenções",
//         subcategorias: [
//           { nome: "Eletrônicos" },
//           { nome: "Veículos" },
//           { nome: "Imóveis" },
//           { nome: "Outros" }
//         ]
//       },
//       {
//         nome: "Aulas e Treinamentos",
//         subcategorias: [
//           { nome: "Cursos Online" },
//           { nome: "Aulas Particulares" },
//           { nome: "Treinamentos Profissionais" },
//           { nome: "Outros" }
//         ]
//       },
//       { nome: "Outros" }
//     ]
//   },
//   {
//     nome: "Indústria e Comércio",
//     subcategorias: [
//       {
//         nome: "Máquinas Industriais",
//         subcategorias: [
//           { nome: "Ferramentas Pesadas" },
//           { nome: "Geradores" },
//           { nome: "Equipamentos de Solda" },
//           { nome: "Outros" }
//         ]
//       },
//       {
//         nome: "Equipamentos Comerciais",
//         subcategorias: [
//           { nome: "Caixas Registradoras" },
//           { nome: "Freezers e Geladeiras Comerciais" },
//           { nome: "Máquinas de Café" },
//           { nome: "Outros" }
//         ]
//       },
//       {
//         nome: "Matérias-Primas",
//         subcategorias: [
//           { nome: "Madeira" },
//           { nome: "Aço e Metais" },
//           { nome: "Têxteis" },
//           { nome: "Outros" }
//         ]
//       },
//       { nome: "Outros" }
//     ]
//   }
// ];

// // Função recursiva para popular categorias e subcategorias
// async function populateCategory(
//   category: Categoria | Subcategoria,
//   parentId: number | null = null
// ): Promise<void> {
//   const { data, error } = await supabase
//     .from('categorias') // Nome da tabela
//     .insert([{ nome: category.nome, categoria_pai_id: parentId }])
//     .select(); // Obtém o id da categoria inserida

//   if (error) {
//     throw new Error(`Erro ao salvar categoria: ${error.message}`);
//   }

//   const categoriaId = data[0]?.id;

//   if (category.subcategorias && category.subcategorias.length > 0) {
//     for (const subcategoria of category.subcategorias) {
//       await populateCategory(subcategoria, categoriaId);
//     }
//   }
// }

// // Função para popular todas as categorias
// async function populateCategories(): Promise<void> {
//   for (const category of categorias) {
//     await populateCategory(category);
//   }
// }

// async function populateBanks() {
//   const response = await fetch(BANKS_API_URL);

//   if (!response.ok) {
//     throw new Error('Erro ao buscar os dados da API dos Bancos.');
//   }

//   const bancos: Bank[] = await response.json();

//   for (const banco of bancos) {
//     const { name, code, fullName } = banco;

//     if(code){
//       const { error } = await supabase
//         .from('bancos_codigos')
//         .insert([{ nome_abreviado: name, nome_completo: fullName, codigo: code }]);

//       if (error) {
//         throw new Error(`Erro ao salvar banco: ${error.message}`);
//       }
//     }
//   }
// }

// async function populateStates() {
//   const response = await fetch(STATES_API_URL);

//   if (!response.ok) {
//     throw new Error('Erro ao buscar os estados na API do IBGE.');
//   }

//   const estados: State[] = await response.json();

//   for (const estado of estados) {
//     const { nome, sigla } = estado;

//     const { data, error } = await supabase
//       .from('estados')
//       .insert([{ nome, sigla }])
//       .select(); // Recupera o ID do estado recém inserido

//     if (error) {
//       throw new Error(`Erro ao salvar estado: ${error.message}`);
//     }

//     const estadoId = data[0]?.id;
//     await populateCities(estadoId, sigla); // Chama para popular cidades com o estadoId
//   }
// }

// async function populateCities(estadoId: number, sigla: string) {
//   const response = await fetch(CITIES_API_URL(sigla));

//   if (!response.ok) {
//     throw new Error(`Erro ao buscar as cidades para o estado ${sigla}.`);
//   }

//   const cidades: City[] = await response.json();

//   for (const cidade of cidades) {
//     const { error } = await supabase
//       .from('cidades')
//       .insert([{ nome: cidade.nome, estado_id: estadoId }]);

//     if (error) {
//       throw new Error(`Erro ao salvar cidade: ${error.message}`);
//     }
//   }
// }

// Função principal para executar tudo
export async function POST() {
  return;
  // try {
  //   await populateCategories();
  //   console.log('Categorias inseridas com sucesso!');

  //   await populateBanks();
  //   console.log('Bancos inseridos com sucesso!');

  //   await populateStates();
  //   console.log('Estados e cidades inseridos com sucesso!');

  //   return NextResponse.json({ message: 'População do banco de dados concluída com sucesso!' });
  // } catch (error: any) {
  //   console.error('Erro ao popular o banco de dados:', error);
  //   return NextResponse.json({ message: 'Erro ao popular o banco de dados', error: error.message }, { status: 500 });
  // }
}