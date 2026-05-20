// ═══════════════════════════════════════════════════════
//  STATE
// ═══════════════════════════════════════════════════════
const S = {
  user: null,
  page: 'dashboard',
  cart: [],
  selPayment: 'PIX',
  selClient: null,
  prodSearch: '',

  users: [
    {id:1,nome:'Admin Silva',email:'admin@stockflow.com',senha:'admin123',cargo:'ADMIN',ativo:true,createdAt:'2026-01-01'},
    {id:2,nome:'João Funcionário',email:'joao@stockflow.com',senha:'func123',cargo:'FUNCIONARIO',ativo:true,createdAt:'2026-01-15'}
  ],

  cats: [
    {id:1,nome:'Eletrônicos'},{id:2,nome:'Informática'},
    {id:3,nome:'Escritório'},{id:4,nome:'Móveis'},{id:5,nome:'Acessórios'}
  ],

  prods: [
    {id:1,nome:'Notebook Dell Inspiron 15',desc:'Notebook i5 16GB SSD 512GB',cod:'7891234567890',custo:2500,venda:3499.99,qtd:15,catId:2,ativo:true,data:'2026-01-15'},
    {id:2,nome:'Monitor LG 24" Full HD',desc:'Monitor IPS 75Hz HDMI',cod:'7891234567891',custo:600,venda:899.99,qtd:8,catId:2,ativo:true,data:'2026-01-20'},
    {id:3,nome:'Teclado Mecânico RGB',desc:'Switch Blue retroiluminado',cod:'7891234567892',custo:150,venda:249.99,qtd:3,catId:2,ativo:true,data:'2026-02-01'},
    {id:4,nome:'Mouse Logitech MX Master',desc:'Mouse sem fio ergonômico',cod:'7891234567893',custo:120,venda:199.99,qtd:20,catId:5,ativo:true,data:'2026-02-10'},
    {id:5,nome:'Cadeira Gamer Pro',desc:'Cadeira ergonômica reclinável 180°',cod:'7891234567894',custo:800,venda:1299.99,qtd:5,catId:4,ativo:true,data:'2026-02-15'},
    {id:6,nome:'Headset Sony WH-1000XM5',desc:'Fone over-ear noise cancelling',cod:'7891234567895',custo:200,venda:349.99,qtd:2,catId:1,ativo:true,data:'2026-03-01'},
    {id:7,nome:'Webcam Logitech C920',desc:'Webcam Full HD 1080p 30fps',cod:'7891234567896',custo:150,venda:249.99,qtd:12,catId:5,ativo:true,data:'2026-03-05'},
    {id:8,nome:'Impressora HP LaserJet M130fw',desc:'Multifuncional laser Wi-Fi',cod:'7891234567897',custo:400,venda:649.99,qtd:0,catId:1,ativo:false,data:'2026-03-10'},
    {id:9,nome:'HD Externo Seagate 2TB',desc:'USB 3.0 portátil',cod:'7891234567898',custo:250,venda:399.99,qtd:7,catId:2,ativo:true,data:'2026-03-15'},
    {id:10,nome:'Mesa de Escritório',desc:'Mesa L 180x140cm',cod:'7891234567899',custo:600,venda:990.00,qtd:4,catId:4,ativo:true,data:'2026-04-01'},
  ],

  clients: [
    {id:1,nome:'Maria Santos',cpf:'123.456.789-00',tel:'(21) 98765-4321',email:'maria@email.com',end:'Rua das Flores, 123 – Rio de Janeiro/RJ',data:'2026-01-10'},
    {id:2,nome:'Pedro Oliveira',cpf:'987.654.321-00',tel:'(21) 91234-5678',email:'pedro@email.com',end:'Av. Brasil, 456 – Niterói/RJ',data:'2026-01-25'},
    {id:3,nome:'Empresa ABC Ltda',cpf:'12.345.678/0001-99',tel:'(21) 3333-4444',email:'contato@abc.com.br',end:'Av. Central, 789 – Rio de Janeiro/RJ',data:'2026-02-05'},
    {id:4,nome:'Carla Rodrigues',cpf:'456.789.123-00',tel:'(21) 99876-5432',email:'carla@email.com',end:'Rua Nova, 321 – São Gonçalo/RJ',data:'2026-02-20'},
    {id:5,nome:'TechSolutions ME',cpf:'98.765.432/0001-10',tel:'(21) 4444-5555',email:'ti@techsol.com.br',end:'Rua Dev, 100 – Rio de Janeiro/RJ',data:'2026-03-01'},
  ],

  sales: [
    {id:1,cliId:1,cliNome:'Maria Santos',usr:'Admin Silva',total:3699.98,pag:'CARTÃO',status:'CONCLUÍDA',data:'2026-03-15',
      itens:[{pId:1,nome:'Notebook Dell Inspiron 15',qtd:1,vu:3499.99,sub:3499.99},{pId:4,nome:'Mouse Logitech MX Master',qtd:1,vu:199.99,sub:199.99}]},
    {id:2,cliId:2,cliNome:'Pedro Oliveira',usr:'João Funcionário',total:899.99,pag:'PIX',status:'CONCLUÍDA',data:'2026-04-02',
      itens:[{pId:2,nome:'Monitor LG 24" Full HD',qtd:1,vu:899.99,sub:899.99}]},
    {id:3,cliId:3,cliNome:'Empresa ABC Ltda',usr:'Admin Silva',total:749.97,pag:'DINHEIRO',status:'CONCLUÍDA',data:'2026-04-10',
      itens:[{pId:3,nome:'Teclado Mecânico RGB',qtd:3,vu:249.99,sub:749.97}]},
    {id:4,cliId:1,cliNome:'Maria Santos',usr:'Admin Silva',total:1649.98,pag:'CARTÃO',status:'CONCLUÍDA',data:'2026-04-22',
      itens:[{pId:5,nome:'Cadeira Gamer Pro',qtd:1,vu:1299.99,sub:1299.99},{pId:6,nome:'Headset Sony WH-1000XM5',qtd:1,vu:349.99,sub:349.99}]},
    {id:5,cliId:4,cliNome:'Carla Rodrigues',usr:'João Funcionário',total:649.97,pag:'PIX',status:'CONCLUÍDA',data:'2026-05-05',
      itens:[{pId:4,nome:'Mouse Logitech MX Master',qtd:2,vu:199.99,sub:399.98},{pId:7,nome:'Webcam Logitech C920',qtd:1,vu:249.99,sub:249.99}]},
    {id:6,cliId:5,cliNome:'TechSolutions ME',usr:'Admin Silva',total:2199.93,pag:'TRANSFERÊNCIA',status:'CONCLUÍDA',data:'2026-05-12',
      itens:[{pId:9,nome:'HD Externo Seagate 2TB',qtd:4,vu:399.99,sub:1599.96},{pId:7,nome:'Webcam Logitech C920',qtd:2,vu:249.99,sub:499.98}]},
  ],

  movs: [
    {id:1,pId:1,pNome:'Notebook Dell Inspiron 15',tipo:'ENTRADA',qtd:20,motivo:'Compra de fornecedor – NF 001',usr:'Admin Silva',data:'2026-01-15'},
    {id:2,pId:2,pNome:'Monitor LG 24" Full HD',tipo:'ENTRADA',qtd:10,motivo:'Compra de fornecedor – NF 002',usr:'Admin Silva',data:'2026-01-20'},
    {id:3,pId:3,pNome:'Teclado Mecânico RGB',tipo:'ENTRADA',qtd:10,motivo:'Compra de fornecedor – NF 003',usr:'Admin Silva',data:'2026-02-01'},
    {id:4,pId:4,pNome:'Mouse Logitech MX Master',tipo:'ENTRADA',qtd:25,motivo:'Compra de fornecedor – NF 004',usr:'Admin Silva',data:'2026-02-10'},
    {id:5,pId:5,pNome:'Cadeira Gamer Pro',tipo:'ENTRADA',qtd:6,motivo:'Compra de fornecedor – NF 005',usr:'Admin Silva',data:'2026-02-15'},
    {id:6,pId:1,pNome:'Notebook Dell Inspiron 15',tipo:'SAIDA',qtd:5,motivo:'Venda #0001 – Maria Santos',usr:'Admin Silva',data:'2026-03-15'},
    {id:7,pId:4,pNome:'Mouse Logitech MX Master',tipo:'SAIDA',qtd:1,motivo:'Venda #0001 – Maria Santos',usr:'Admin Silva',data:'2026-03-15'},
    {id:8,pId:2,pNome:'Monitor LG 24" Full HD',tipo:'SAIDA',qtd:2,motivo:'Venda #0002 – Pedro Oliveira',usr:'João Funcionário',data:'2026-04-02'},
    {id:9,pId:3,pNome:'Teclado Mecânico RGB',tipo:'SAIDA',qtd:3,motivo:'Venda #0003 – Empresa ABC Ltda',usr:'Admin Silva',data:'2026-04-10'},
    {id:10,pId:5,pNome:'Cadeira Gamer Pro',tipo:'SAIDA',qtd:1,motivo:'Venda #0004 – Maria Santos',usr:'Admin Silva',data:'2026-04-22'},
    {id:11,pId:6,pNome:'Headset Sony WH-1000XM5',tipo:'ENTRADA',qtd:3,motivo:'Compra de fornecedor – NF 006',usr:'Admin Silva',data:'2026-04-20'},
    {id:12,pId:6,pNome:'Headset Sony WH-1000XM5',tipo:'SAIDA',qtd:1,motivo:'Venda #0004 – Maria Santos',usr:'Admin Silva',data:'2026-04-22'},
  ],

  ids: {p:11,c:6,s:7,m:13,u:3},
  prodPage: 1, prodPageSize: 8,
  cliPage: 1, cliPageSize: 8,
  salePage: 1, salePageSize: 10,
  stockPage: 1, stockPageSize: 12,
};

// Chart instances
let ch1=null,ch2=null,ch3=null,ch4=null;
function destroyCharts(){[ch1,ch2,ch3,ch4].forEach(c=>{if(c){c.destroy()}});ch1=ch2=ch3=ch4=null;}

// ═══════════════════════════════════════════════════════
//  AUTH
// ═══════════════════════════════════════════════════════
function doLogin(){
  const email=document.getElementById('login-email').value.trim();
  const senha=document.getElementById('login-senha').value;
  const u=S.users.find(x=>x.email===email&&x.senha===senha&&x.ativo);
  if(!u){document.getElementById('login-error').classList.remove('hidden');return;}
  S.user=u;
  document.getElementById('login-page').classList.add('hidden');
  document.getElementById('app').classList.remove('hidden');
  const init=u.nome.split(' ').map(n=>n[0]).slice(0,2).join('');
  document.getElementById('sb-avatar').textContent=init;
  document.getElementById('sb-name').textContent=u.nome;
  document.getElementById('sb-role').textContent=u.cargo==='ADMIN'?'Administrador':'Funcionário';
  const isAdmin=u.cargo==='ADMIN';
  ['nav-reports','nav-users','nav-saleshistory','nav-admin-label','nav-analysis-label'].forEach(id=>{
    const el=g(id); if(el) el.classList.toggle('hidden',!isAdmin);
  });
  navigate('dashboard');
}

function doLogout(){
  S.user=null;S.cart=[];
  destroyCharts();
  document.getElementById('app').classList.add('hidden');
  document.getElementById('login-page').classList.remove('hidden');
  document.getElementById('login-error').classList.add('hidden');
}

// ═══════════════════════════════════════════════════════
//  NAVIGATION
// ═══════════════════════════════════════════════════════
function navigate(pg){
  const adminOnly=['reports','users','saleshistory'];
  if(adminOnly.includes(pg)&&S.user.cargo!=='ADMIN'){toast('Sem permissão para acessar esta área.','danger');return;}
  S.page=pg;
  destroyCharts();
  document.querySelectorAll('.nav-item').forEach(el=>el.classList.remove('active'));
  const ni=document.querySelector(`[data-page="${pg}"]`);
  if(ni) ni.classList.add('active');
  const mc=document.getElementById('main-content');
  const pages={dashboard:renderDashboard,products:renderProducts,clients:renderClients,
    sales:renderSales,stock:renderStock,reports:renderReports,users:renderUsers,saleshistory:renderSalesHistory};
  if(pages[pg]) pages[pg](mc);
  // close sidebar on mobile
  const sb=g('sidebar');if(sb) sb.classList.remove('open');
}

function toggleSidebar(){
  g('sidebar').classList.toggle('open');
}

// ═══════════════════════════════════════════════════════
//  DASHBOARD
// ═══════════════════════════════════════════════════════
function renderDashboard(mc){
  const activePrds=S.prods.filter(p=>p.ativo).length;
  const maio=S.sales.filter(s=>s.data.startsWith('2026-05'));
  const moRevenue=maio.reduce((a,s)=>a+s.total,0);
  const totalCli=S.clients.length;
  const lowStk=S.prods.filter(p=>p.qtd<=3&&p.ativo);
  const lowLen=lowStk.length;
  const totalRevAll=S.sales.reduce((a,s)=>a+s.total,0);

  mc.innerHTML=`
<div class="page">
  <div class="page-header">
    <div>
      <h1 class="page-title">Dashboard</h1>
      <div class="page-subtitle">Visão geral do negócio — Maio 2026</div>
    </div>
    <div style="display:flex;gap:8px">
      <button class="btn btn-secondary btn-sm" onclick="navigate('sales')">+ Nova Venda</button>
      <button class="btn btn-primary btn-sm" onclick="navigate('products')">+ Novo Produto</button>
    </div>
  </div>

  <div class="kpi-grid">
    <div class="kpi-card blue">
      <div class="kpi-icon">📦</div>
      <div class="kpi-label">Produtos Ativos</div>
      <div class="kpi-value">${activePrds}</div>
      <div class="kpi-change">↑ 2 novos em abril</div>
    </div>
    <div class="kpi-card green">
      <div class="kpi-icon">💰</div>
      <div class="kpi-label">Faturamento (Maio)</div>
      <div class="kpi-value" style="font-size:18px">R$ ${fmtCur(moRevenue)}</div>
      <div class="kpi-change" style="color:var(--success-light)">↑ +18% vs. abril</div>
    </div>
    <div class="kpi-card amber">
      <div class="kpi-icon">👥</div>
      <div class="kpi-label">Clientes Ativos</div>
      <div class="kpi-value">${totalCli}</div>
      <div class="kpi-change">↑ 1 novo este mês</div>
    </div>
    <div class="kpi-card red">
      <div class="kpi-icon">⚠️</div>
      <div class="kpi-label">Estoque Baixo</div>
      <div class="kpi-value">${lowLen}</div>
      <div class="kpi-change" style="color:${lowLen>0?'var(--danger-light)':'var(--text-secondary)'}">${lowLen>0?`${lowLen} produto(s) precisam reposição`:'Estoque normalizado'}</div>
    </div>
  </div>

  <div class="charts-grid">
    <div class="card">
      <div class="card-title">Faturamento Mensal — 2026</div>
      <div class="chart-container"><canvas id="ch-sales"></canvas></div>
    </div>
    <div class="card">
      <div class="card-title">Produtos Mais Vendidos</div>
      <div class="chart-container"><canvas id="ch-top"></canvas></div>
    </div>
  </div>

  ${lowLen>0?`<div class="alert alert-warning" style="margin-bottom:16px">⚠ Atenção: ${lowStk.map(p=>`<strong>${p.nome}</strong> (${p.qtd} un.)`).join(', ')} com estoque baixo. <button class="btn btn-warning btn-sm" style="margin-left:8px" onclick="navigate('stock')">Ver Estoque</button></div>`:''}

  <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:16px">
    <div class="card" style="padding:0">
      <div style="padding:14px 18px;border-bottom:1px solid var(--border);display:flex;justify-content:space-between;align-items:center">
        <span class="card-title" style="margin:0">Últimas Vendas</span>
        <button class="btn btn-secondary btn-sm" onclick="navigate('saleshistory')">Ver todas</button>
      </div>
      <div class="table-wrapper">
        <table>
          <thead><tr><th>#</th><th>Cliente</th><th>Total</th><th>Status</th></tr></thead>
          <tbody>
            ${[...S.sales].reverse().slice(0,5).map(s=>`
            <tr style="cursor:pointer" onclick="openSaleDetail(${s.id})">
              <td class="mono" style="color:var(--text-secondary);font-size:11px">#${String(s.id).padStart(4,'0')}</td>
              <td style="font-weight:500">${s.cliNome}</td>
              <td class="mono"><strong>R$ ${fmtCur(s.total)}</strong></td>
              <td><span class="badge badge-done">✓</span></td>
            </tr>`).join('')}
          </tbody>
        </table>
      </div>
    </div>

    <div class="card" style="padding:0">
      <div style="padding:14px 18px;border-bottom:1px solid var(--border)">
        <span class="card-title" style="margin:0">Alertas de Estoque Baixo</span>
      </div>
      <div class="table-wrapper">
        <table>
          <thead><tr><th>Produto</th><th>Qtd</th><th>Ação</th></tr></thead>
          <tbody>
            ${S.prods.filter(p=>p.qtd<=3&&p.ativo).slice(0,5).map(p=>`
            <tr>
              <td style="font-size:12px;font-weight:500">${p.nome.length>28?p.nome.slice(0,28)+'…':p.nome}</td>
              <td><span class="badge ${p.qtd===0?'badge-inactive':'badge-low'}">${p.qtd} un.</span></td>
              <td><button class="btn btn-secondary btn-sm" onclick="openEntryModal(${p.id})">+ Entrada</button></td>
            </tr>`).join('')}
            ${S.prods.filter(p=>p.qtd<=3&&p.ativo).length===0?`<tr><td colspan="3" style="text-align:center;padding:20px;color:var(--success-light);font-size:12px">✓ Estoque em dia</td></tr>`:''}
          </tbody>
        </table>
      </div>
    </div>
  </div>

  <div class="card" style="padding:16px 20px">
    <div class="card-title">Resumo Geral</div>
    <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:10px">
      <div class="mini-stat">
        <span class="mini-stat-label">Total Vendas</span>
        <span class="mini-stat-val">${S.sales.length}</span>
      </div>
      <div class="mini-stat">
        <span class="mini-stat-label">Faturamento Total</span>
        <span class="mini-stat-val" style="font-size:13px">R$ ${fmtCur(totalRevAll)}</span>
      </div>
      <div class="mini-stat">
        <span class="mini-stat-label">Ticket Médio</span>
        <span class="mini-stat-val" style="font-size:13px">R$ ${fmtCur(totalRevAll/S.sales.length)}</span>
      </div>
      <div class="mini-stat">
        <span class="mini-stat-label">Movimentações</span>
        <span class="mini-stat-val">${S.movs.length}</span>
      </div>
    </div>
  </div>
</div>`;

  const byMonth=new Array(6).fill(0);
  S.sales.forEach(s=>{const m=parseInt(s.data.split('-')[1])-1;if(m>=0&&m<6)byMonth[m]+=s.total;});
  const ctx1=document.getElementById('ch-sales').getContext('2d');
  ch1=new Chart(ctx1,{
    type:'bar',
    data:{labels:['Jan','Fev','Mar','Abr','Mai','Jun'],
      datasets:[{label:'Faturamento',data:byMonth,
        backgroundColor:'rgba(59,130,246,0.55)',borderColor:'rgba(59,130,246,0.9)',
        borderWidth:1,borderRadius:5}]},
    options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{display:false}},
      scales:{x:{grid:{color:'rgba(255,255,255,0.04)'},ticks:{color:'#6B85A0',font:{size:11}}},
        y:{grid:{color:'rgba(255,255,255,0.04)'},ticks:{color:'#6B85A0',font:{size:11},callback:v=>'R$'+Number(v).toLocaleString('pt-BR')}}}}
  });

  const ps={};
  S.sales.forEach(s=>s.itens.forEach(i=>{ps[i.nome]=(ps[i.nome]||0)+i.qtd;}));
  const top=Object.entries(ps).sort((a,b)=>b[1]-a[1]).slice(0,5);
  const ctx2=document.getElementById('ch-top').getContext('2d');
  ch2=new Chart(ctx2,{
    type:'doughnut',
    data:{labels:top.map(([n])=>n.length>22?n.slice(0,22)+'…':n),
      datasets:[{data:top.map(([,q])=>q),
        backgroundColor:['rgba(59,130,246,0.8)','rgba(16,185,129,0.8)','rgba(245,158,11,0.8)','rgba(167,139,250,0.8)','rgba(239,68,68,0.7)'],
        borderWidth:1,borderColor:'#0D1B2A'}]},
    options:{responsive:true,maintainAspectRatio:false,
      plugins:{legend:{position:'bottom',labels:{color:'#6B85A0',padding:8,font:{size:11}}}}}
  });
}

// ═══════════════════════════════════════════════════════
//  PRODUCTS
// ═══════════════════════════════════════════════════════
function renderProducts(mc,srch='',catF='',page=null){
  if(page!==null) S.prodPage=page;
  const isAdmin=S.user.cargo==='ADMIN';
  const list=S.prods.filter(p=>{
    const ms=p.nome.toLowerCase().includes(srch.toLowerCase())||p.cod.includes(srch)||p.desc.toLowerCase().includes(srch.toLowerCase());
    const mc2=!catF||String(p.catId)===catF;
    return ms&&mc2;
  });
  const totalPages=Math.max(1,Math.ceil(list.length/S.prodPageSize));
  if(S.prodPage>totalPages) S.prodPage=totalPages;
  const paged=list.slice((S.prodPage-1)*S.prodPageSize, S.prodPage*S.prodPageSize);

  mc.innerHTML=`
<div class="page">
  <div class="page-header">
    <div>
      <h1 class="page-title">Gestão de Produtos</h1>
      <div class="page-subtitle">${S.prods.length} produto(s) cadastrado(s)</div>
    </div>
    ${isAdmin?`<button class="btn btn-primary" onclick="openProdModal()">+ Novo Produto</button>`:''}
  </div>
  <div class="toolbar">
    <div class="search-box">
      <span class="search-icon">🔍</span>
      <input id="ps-srch" type="text" placeholder="Buscar por nome, código ou descrição..." value="${srch}"
        oninput="renderProducts(document.getElementById('main-content'),this.value,document.getElementById('ps-cat')?.value||'',1)">
    </div>
    <select class="form-control" id="ps-cat" style="width:170px"
      onchange="renderProducts(document.getElementById('main-content'),document.getElementById('ps-srch')?.value||'',this.value,1)">
      <option value="">Todas as categorias</option>
      ${S.cats.map(c=>`<option value="${c.id}" ${catF===String(c.id)?'selected':''}>${c.nome}</option>`).join('')}
    </select>
    <span style="font-size:12px;color:var(--text-secondary);margin-left:auto">${list.length} resultado(s)</span>
  </div>
  <div class="card" style="padding:0">
    <div class="table-wrapper">
      <table>
        <thead><tr><th>Código</th><th>Produto</th><th>Categoria</th><th>Custo</th><th>Venda</th><th>Estoque</th><th>Status</th><th>Ações</th></tr></thead>
        <tbody>
          ${paged.length===0?`<tr><td colspan="8"><div class="empty-state"><div class="ei">📦</div><p>Nenhum produto encontrado.</p></div></td></tr>`:
          paged.map(p=>{
            const cat=S.cats.find(c=>c.id===p.catId);
            const stk=p.qtd===0?'badge-inactive':p.qtd<=3?'badge-low':'badge-active';
            const stkLb=p.qtd===0?'⛔ Zerado':p.qtd<=3?`⚠ ${p.qtd} un.`:`${p.qtd} un.`;
            const margin=p.custo>0?Math.round(((p.venda-p.custo)/p.custo)*100):0;
            return`<tr>
              <td class="mono" style="font-size:11px;color:var(--text-secondary)">${p.cod||'–'}</td>
              <td><div style="font-weight:500">${p.nome}</div><div style="font-size:11px;color:var(--text-secondary)">${p.desc}</div></td>
              <td><span class="badge badge-neutral">${cat?.nome||'–'}</span></td>
              <td class="mono" style="font-size:12px;color:var(--text-secondary)">R$ ${p.custo.toFixed(2)}</td>
              <td class="mono"><strong>R$ ${fmtCur(p.venda)}</strong><div style="font-size:10px;color:var(--success-light);margin-top:1px">${margin>0?`+${margin}% margem`:''}</div></td>
              <td><span class="badge ${stk}">${stkLb}</span></td>
              <td><span class="badge ${p.ativo?'badge-active':'badge-inactive'}">${p.ativo?'✓ Ativo':'✗ Inativo'}</span></td>
              <td><div class="actions">
                <button class="btn btn-secondary btn-sm" onclick="openProdDetail(${p.id})" title="Visualizar">👁</button>
                <button class="btn btn-warning btn-sm" onclick="openProdModal(${p.id})">✏</button>
                ${isAdmin?`<button class="btn btn-danger btn-sm" onclick="confDel('prod',${p.id})">🗑</button>`:''}
              </div></td>
            </tr>`;
          }).join('')}
        </tbody>
      </table>
    </div>
    ${totalPages>1?renderPagination(S.prodPage,totalPages,`renderProducts(document.getElementById('main-content'),'${srch}','${catF}'`):''}
  </div>
</div>`;
}

function openProdDetail(id){
  const p=S.prods.find(x=>x.id===id);
  const cat=S.cats.find(c=>c.id===p.catId);
  const salesWith=S.sales.filter(s=>s.itens.some(i=>i.pId===id));
  const totalSold=S.movs.filter(m=>m.pId===id&&m.tipo==='SAIDA').reduce((a,m)=>a+m.qtd,0);
  const totalRev=salesWith.reduce((a,s)=>{const it=s.itens.find(i=>i.pId===id);return a+(it?it.sub:0);},0);
  showModal(`
  <div class="modal-header">
    <span class="modal-title">📦 Detalhes do Produto</span>
    <button class="modal-close" onclick="closeModal()">✕</button>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:14px">
    <div class="mini-stat"><span class="mini-stat-label">Preço de Venda</span><span class="mini-stat-val" style="color:var(--success-light)">R$ ${fmtCur(p.venda)}</span></div>
    <div class="mini-stat"><span class="mini-stat-label">Estoque Atual</span><span class="mini-stat-val" style="color:${p.qtd<=3?'var(--warning-light)':'var(--text-primary)'}">${p.qtd} un.</span></div>
    <div class="mini-stat"><span class="mini-stat-label">Total Vendido</span><span class="mini-stat-val">${totalSold} un.</span></div>
    <div class="mini-stat"><span class="mini-stat-label">Receita Gerada</span><span class="mini-stat-val" style="font-size:13px">R$ ${fmtCur(totalRev)}</span></div>
  </div>
  <table style="width:100%;font-size:12px">
    <tr><td style="color:var(--text-secondary);padding:4px 0">Nome</td><td style="font-weight:500">${p.nome}</td></tr>
    <tr><td style="color:var(--text-secondary);padding:4px 0">Categoria</td><td>${cat?.nome||'–'}</td></tr>
    <tr><td style="color:var(--text-secondary);padding:4px 0">Código</td><td class="mono">${p.cod||'–'}</td></tr>
    <tr><td style="color:var(--text-secondary);padding:4px 0">Preço Custo</td><td class="mono">R$ ${p.custo.toFixed(2)}</td></tr>
    <tr><td style="color:var(--text-secondary);padding:4px 0">Margem</td><td style="color:var(--success-light)">${p.custo>0?Math.round(((p.venda-p.custo)/p.custo)*100):0}%</td></tr>
    <tr><td style="color:var(--text-secondary);padding:4px 0">Status</td><td><span class="badge ${p.ativo?'badge-active':'badge-inactive'}">${p.ativo?'Ativo':'Inativo'}</span></td></tr>
    <tr><td style="color:var(--text-secondary);padding:4px 0">Cadastro</td><td>${fmtDate(p.data)}</td></tr>
  </table>
  <div class="modal-footer">
    <button class="btn btn-secondary" onclick="closeModal()">Fechar</button>
    <button class="btn btn-warning" onclick="closeModal();openProdModal(${p.id})">✏ Editar</button>
  </div>`);
}

function openProdModal(id=null){
  const p=id?S.prods.find(x=>x.id===id):null;
  showModal(`
  <div class="modal-header">
    <span class="modal-title">${p?'✏ Editar Produto':'+ Novo Produto'}</span>
    <button class="modal-close" onclick="closeModal()">✕</button>
  </div>
  <div class="form-group">
    <label class="form-label">Nome do Produto *</label>
    <input class="form-control" id="pf-nome" value="${p?.nome||''}" placeholder="Nome do produto">
  </div>
  <div class="form-group">
    <label class="form-label">Descrição</label>
    <input class="form-control" id="pf-desc" value="${p?.desc||''}" placeholder="Breve descrição">
  </div>
  <div class="form-row">
    <div class="form-group">
      <label class="form-label">Código de Barras</label>
      <input class="form-control" id="pf-cod" value="${p?.cod||''}" placeholder="EAN-13">
    </div>
    <div class="form-group">
      <label class="form-label">Categoria *</label>
      <select class="form-control" id="pf-cat">
        ${S.cats.map(c=>`<option value="${c.id}" ${p?.catId===c.id?'selected':''}>${c.nome}</option>`).join('')}
      </select>
    </div>
  </div>
  <div class="form-row">
    <div class="form-group">
      <label class="form-label">Preço de Custo (R$)</label>
      <input class="form-control" id="pf-custo" type="number" step="0.01" min="0" value="${p?.custo||''}">
    </div>
    <div class="form-group">
      <label class="form-label">Preço de Venda (R$) *</label>
      <input class="form-control" id="pf-venda" type="number" step="0.01" min="0.01" value="${p?.venda||''}">
    </div>
  </div>
  <div class="form-row">
    <div class="form-group">
      <label class="form-label">Qtd. em Estoque *</label>
      <input class="form-control" id="pf-qtd" type="number" min="0" value="${p?.qtd??0}">
    </div>
    <div class="form-group">
      <label class="form-label">Status</label>
      <select class="form-control" id="pf-ativo">
        <option value="true" ${p?.ativo!==false?'selected':''}>Ativo</option>
        <option value="false" ${p?.ativo===false?'selected':''}>Inativo</option>
      </select>
    </div>
  </div>
  <div class="modal-footer">
    <button class="btn btn-secondary" onclick="closeModal()">Cancelar</button>
    <button class="btn btn-primary" onclick="saveProd(${id??'null'})">💾 Salvar Produto</button>
  </div>`);
}

function saveProd(id){
  const nome=g('pf-nome').value.trim();
  const venda=parseFloat(g('pf-venda').value);
  const qtd=parseInt(g('pf-qtd').value);
  if(!nome){toast('Nome é obrigatório.','danger');return;}
  if(!venda||venda<=0){toast('Preço de venda deve ser maior que zero.','danger');return;}
  if(isNaN(qtd)||qtd<0){toast('Quantidade em estoque inválida.','danger');return;}
  const dup=S.prods.find(p=>p.nome.toLowerCase()===nome.toLowerCase()&&p.id!==id);
  if(dup){toast('Já existe um produto com este nome.','danger');return;}
  if(id){
    const p=S.prods.find(x=>x.id===id);
    Object.assign(p,{nome,desc:g('pf-desc').value,cod:g('pf-cod').value,catId:parseInt(g('pf-cat').value),
      custo:parseFloat(g('pf-custo').value)||0,venda,qtd,ativo:g('pf-ativo').value==='true'});
    toast('Produto atualizado com sucesso!','success');
  } else {
    S.prods.push({id:S.ids.p++,nome,desc:g('pf-desc').value,cod:g('pf-cod').value,
      catId:parseInt(g('pf-cat').value),custo:parseFloat(g('pf-custo').value)||0,venda,qtd,
      ativo:g('pf-ativo').value==='true',data:today()});
    toast('Produto cadastrado com sucesso!','success');
  }
  closeModal();renderProducts(document.getElementById('main-content'));
}

// ═══════════════════════════════════════════════════════
//  CLIENTS
// ═══════════════════════════════════════════════════════
function renderClients(mc,srch='',page=null){
  if(page!==null) S.cliPage=page;
  const isAdmin=S.user.cargo==='ADMIN';
  const list=S.clients.filter(c=>
    c.nome.toLowerCase().includes(srch.toLowerCase())||
    c.cpf.includes(srch)||c.tel.includes(srch)||c.email.toLowerCase().includes(srch.toLowerCase())
  );
  const totalPages=Math.max(1,Math.ceil(list.length/S.cliPageSize));
  if(S.cliPage>totalPages) S.cliPage=totalPages;
  const paged=list.slice((S.cliPage-1)*S.cliPageSize, S.cliPage*S.cliPageSize);

  mc.innerHTML=`
<div class="page">
  <div class="page-header">
    <div>
      <h1 class="page-title">Gestão de Clientes</h1>
      <div class="page-subtitle">${S.clients.length} cliente(s) cadastrado(s)</div>
    </div>
    <button class="btn btn-primary" onclick="openCliModal()">+ Novo Cliente</button>
  </div>
  <div class="toolbar">
    <div class="search-box">
      <span class="search-icon">🔍</span>
      <input type="text" placeholder="Buscar por nome, CPF ou telefone..." value="${srch}"
        oninput="renderClients(document.getElementById('main-content'),this.value,1)">
    </div>
    <span style="font-size:12px;color:var(--text-secondary);margin-left:auto">${list.length} resultado(s)</span>
  </div>
  <div class="card" style="padding:0">
    <div class="table-wrapper">
      <table>
        <thead><tr><th>Cliente</th><th>CPF / CNPJ</th><th>Telefone</th><th>Email</th><th>Cadastro</th><th>Compras</th><th>Ações</th></tr></thead>
        <tbody>
          ${paged.length===0?`<tr><td colspan="7"><div class="empty-state"><div class="ei">👥</div><p>Nenhum cliente encontrado.</p></div></td></tr>`:
          paged.map(c=>{
            const cliSales=S.sales.filter(s=>s.cliId===c.id);
            return`<tr>
            <td><div style="display:flex;align-items:center;gap:9px">
              <div style="width:30px;height:30px;border-radius:50%;background:var(--accent-dim);display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:600;color:var(--accent-light);flex-shrink:0">${initials(c.nome)}</div>
              <span style="font-weight:500">${c.nome}</span>
            </div></td>
            <td class="mono" style="font-size:12px">${c.cpf}</td>
            <td>${c.tel}</td>
            <td style="color:var(--text-secondary);font-size:12px">${c.email}</td>
            <td style="color:var(--text-secondary);font-size:12px">${fmtDate(c.data)}</td>
            <td><span class="badge badge-accent">${cliSales.length} venda(s)</span></td>
            <td><div class="actions">
              <button class="btn btn-secondary btn-sm" onclick="openCliDetail(${c.id})">👁</button>
              <button class="btn btn-warning btn-sm" onclick="openCliModal(${c.id})">✏</button>
              ${isAdmin?`<button class="btn btn-danger btn-sm" onclick="confDel('cli',${c.id})">🗑</button>`:''}
            </div></td>
          </tr>`;}).join('')}
        </tbody>
      </table>
    </div>
    ${totalPages>1?renderPagination(S.cliPage,totalPages,`renderClients(document.getElementById('main-content'),'${srch}'`):''}
  </div>
</div>`;
}

function openCliDetail(id){
  const c=S.clients.find(x=>x.id===id);
  const cliSales=S.sales.filter(s=>s.cliId===id);
  const totalSpent=cliSales.reduce((a,s)=>a+s.total,0);
  showModal(`
  <div class="modal-header">
    <span class="modal-title">👤 Perfil do Cliente</span>
    <button class="modal-close" onclick="closeModal()">✕</button>
  </div>
  <div style="display:flex;align-items:center;gap:14px;margin-bottom:18px">
    <div style="width:50px;height:50px;border-radius:50%;background:var(--accent-dim);border:2px solid var(--accent-light);display:flex;align-items:center;justify-content:center;font-size:18px;font-weight:700;color:var(--accent-light)">${initials(c.nome)}</div>
    <div>
      <div style="font-weight:600;font-size:16px">${c.nome}</div>
      <div style="font-size:12px;color:var(--text-secondary)">${c.email}</div>
    </div>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:14px">
    <div class="mini-stat"><span class="mini-stat-label">Total de Compras</span><span class="mini-stat-val">${cliSales.length}</span></div>
    <div class="mini-stat"><span class="mini-stat-label">Total Gasto</span><span class="mini-stat-val" style="font-size:13px;color:var(--success-light)">R$ ${fmtCur(totalSpent)}</span></div>
  </div>
  <table style="width:100%;font-size:12px;margin-bottom:14px">
    <tr><td style="color:var(--text-secondary);padding:4px 0;width:100px">CPF/CNPJ</td><td class="mono">${c.cpf}</td></tr>
    <tr><td style="color:var(--text-secondary);padding:4px 0">Telefone</td><td>${c.tel}</td></tr>
    <tr><td style="color:var(--text-secondary);padding:4px 0">Endereço</td><td>${c.end||'–'}</td></tr>
    <tr><td style="color:var(--text-secondary);padding:4px 0">Cadastro</td><td>${fmtDate(c.data)}</td></tr>
  </table>
  ${cliSales.length>0?`
  <div style="font-size:11px;font-weight:700;text-transform:uppercase;color:var(--text-secondary);letter-spacing:.07em;margin-bottom:8px">Histórico de Compras</div>
  <div style="display:flex;flex-direction:column;gap:4px;max-height:140px;overflow-y:auto">
    ${cliSales.map(s=>`
    <div style="display:flex;justify-content:space-between;padding:7px 10px;background:var(--bg-elevated);border-radius:6px;font-size:12px">
      <span>#${String(s.id).padStart(4,'0')} · ${fmtDate(s.data)}</span>
      <span class="mono" style="color:var(--success-light)">R$ ${fmtCur(s.total)}</span>
    </div>`).join('')}
  </div>`:''} 
  <div class="modal-footer">
    <button class="btn btn-secondary" onclick="closeModal()">Fechar</button>
    <button class="btn btn-warning" onclick="closeModal();openCliModal(${id})">✏ Editar</button>
  </div>`);
}

function openCliModal(id=null){
  const c=id?S.clients.find(x=>x.id===id):null;
  showModal(`
  <div class="modal-header">
    <span class="modal-title">${c?'✏ Editar Cliente':'+ Novo Cliente'}</span>
    <button class="modal-close" onclick="closeModal()">✕</button>
  </div>
  <div class="form-group">
    <label class="form-label">Nome Completo / Razão Social *</label>
    <input class="form-control" id="cf-nome" value="${c?.nome||''}" placeholder="Nome do cliente">
  </div>
  <div class="form-row">
    <div class="form-group">
      <label class="form-label">CPF / CNPJ *</label>
      <input class="form-control" id="cf-cpf" value="${c?.cpf||''}" placeholder="000.000.000-00">
    </div>
    <div class="form-group">
      <label class="form-label">Telefone</label>
      <input class="form-control" id="cf-tel" value="${c?.tel||''}" placeholder="(00) 00000-0000">
    </div>
  </div>
  <div class="form-group">
    <label class="form-label">Email</label>
    <input class="form-control" id="cf-email" type="email" value="${c?.email||''}" placeholder="email@cliente.com">
  </div>
  <div class="form-group">
    <label class="form-label">Endereço</label>
    <input class="form-control" id="cf-end" value="${c?.end||''}" placeholder="Rua, nº – Cidade/UF">
  </div>
  <div class="modal-footer">
    <button class="btn btn-secondary" onclick="closeModal()">Cancelar</button>
    <button class="btn btn-primary" onclick="saveCli(${id??'null'})">💾 Salvar Cliente</button>
  </div>`);
}

function saveCli(id){
  const nome=g('cf-nome').value.trim();
  const cpf=g('cf-cpf').value.trim();
  if(!nome){toast('Nome é obrigatório.','danger');return;}
  if(!cpf){toast('CPF/CNPJ é obrigatório.','danger');return;}
  if(id){
    const c=S.clients.find(x=>x.id===id);
    Object.assign(c,{nome,cpf,tel:g('cf-tel').value,email:g('cf-email').value,end:g('cf-end').value});
    toast('Cliente atualizado!','success');
  } else {
    S.clients.push({id:S.ids.c++,nome,cpf,tel:g('cf-tel').value,email:g('cf-email').value,end:g('cf-end').value,data:today()});
    toast('Cliente cadastrado!','success');
  }
  closeModal();renderClients(document.getElementById('main-content'));
}

// ═══════════════════════════════════════════════════════
//  SALES / PDV
// ═══════════════════════════════════════════════════════
function renderSales(mc){
  mc.innerHTML=`
<div class="page" style="padding-bottom:0;height:100%">
  <div class="page-header">
    <div>
      <h1 class="page-title">PDV – Ponto de Venda</h1>
      <div class="page-subtitle">Registre uma nova venda</div>
    </div>
  </div>
  <div class="pdv-layout">
    <!-- LEFT -->
    <div class="pdv-left">
      <div class="card" style="flex-shrink:0">
        <div class="card-title">Buscar e Adicionar Produto</div>
        <div style="display:flex;gap:8px;align-items:flex-end;flex-wrap:wrap">
          <div style="flex:1;min-width:200px;position:relative" class="prod-search-wrapper">
            <input class="form-control" type="text" id="pdv-search-input" placeholder="🔍 Digite o nome do produto..."
              oninput="pdvSearchInput(this.value)" autocomplete="off">
            <div id="pdv-search-dropdown" class="prod-search-dropdown hidden"></div>
            <input type="hidden" id="pdv-prod-id">
          </div>
          <div style="width:90px;flex-shrink:0">
            <input class="form-control" type="number" id="pdv-qty" min="1" value="1" placeholder="Qtd">
          </div>
          <button class="btn btn-primary" style="flex-shrink:0" onclick="addCart()">+ Adicionar</button>
        </div>
        <div id="pdv-alert" class="hidden" style="margin-top:10px"></div>
      </div>
      <div class="card" style="flex:1;min-height:0;padding:0;display:flex;flex-direction:column;overflow:hidden">
        <div style="padding:12px 18px 10px;border-bottom:1px solid var(--border);display:flex;align-items:center;justify-content:space-between;flex-shrink:0">
          <span class="card-title" style="margin:0">🛒 Carrinho de Compras</span>
          <button class="btn btn-danger btn-sm" onclick="clearCart()">🗑 Limpar</button>
        </div>
        <div class="table-wrapper" style="flex:1;overflow-y:auto">
          <table class="cart-table">
            <thead><tr><th>Produto</th><th>Qtd</th><th>Preço Unit.</th><th>Subtotal</th><th></th></tr></thead>
            <tbody id="cart-body"></tbody>
          </table>
        </div>
      </div>
    </div>
    <!-- RIGHT -->
    <div class="pdv-right">
      <div class="card" style="flex-shrink:0">
        <div class="card-title">Cliente (opcional)</div>
        <select class="form-control" id="pdv-cli" onchange="S.selClient=parseInt(this.value)||null">
          <option value="">Selecione um cliente...</option>
          ${S.clients.map(c=>`<option value="${c.id}">${c.nome}</option>`).join('')}
        </select>
      </div>
      <div class="pdv-total-section" style="flex-shrink:0">
        <div class="card-title">Resumo da Venda</div>
        <div class="total-row">
          <span style="color:var(--text-secondary)">Itens no carrinho</span>
          <span id="pdv-cnt" class="mono">0 item(s)</span>
        </div>
        <div class="total-row">
          <span style="color:var(--text-secondary)">Subtotal</span>
          <span id="pdv-sub" class="mono">R$ 0,00</span>
        </div>
        <div class="total-row">
          <span style="color:var(--text-secondary)">Desconto</span>
          <span class="mono">R$ 0,00</span>
        </div>
        <div class="total-row grand">
          <span>TOTAL</span>
          <span id="pdv-total" style="color:var(--success-light)">R$ 0,00</span>
        </div>
        <div style="margin-top:12px">
          <div class="form-label" style="margin-bottom:7px">Forma de Pagamento</div>
          <div class="payment-options">
            <div class="pay-opt sel" onclick="selPay(this,'PIX')">💸 PIX</div>
            <div class="pay-opt" onclick="selPay(this,'CARTÃO')">💳 Cartão</div>
            <div class="pay-opt" onclick="selPay(this,'DINHEIRO')">💵 Dinheiro</div>
            <div class="pay-opt" onclick="selPay(this,'TRANSFERÊNCIA')">🏦 Transf.</div>
          </div>
        </div>
        <button class="btn btn-success btn-block" onclick="finalizeSale()"
          style="margin-top:14px;padding:13px;font-size:15px;font-weight:600">
          ✓ Finalizar Venda
        </button>
      </div>
      <!-- Recent sales -->
      <div class="card" style="padding:0;flex-shrink:0">
        <div style="padding:10px 16px;border-bottom:1px solid var(--border);display:flex;justify-content:space-between;align-items:center">
          <span class="card-title" style="margin:0">Vendas Recentes</span>
          <button class="btn btn-secondary btn-sm" onclick="navigate('saleshistory')">Ver todas</button>
        </div>
        ${[...S.sales].reverse().slice(0,4).map(s=>`
        <div style="padding:9px 16px;border-bottom:1px solid var(--border);display:flex;justify-content:space-between;align-items:center;cursor:pointer" onclick="openSaleDetail(${s.id})">
          <div>
            <div style="font-size:12px;font-weight:500">${s.cliNome}</div>
            <div style="font-size:11px;color:var(--text-secondary)">${fmtDate(s.data)} · ${s.pag}</div>
          </div>
          <span class="mono" style="font-size:13px;font-weight:500;color:var(--success-light)">R$ ${fmtCur(s.total)}</span>
        </div>`).join('')}
      </div>
    </div>
  </div>
</div>`;
  refreshCart();
}

// PDV Dynamic search
function pdvSearchInput(val){
  S.prodSearch=val;
  const dd=g('pdv-search-dropdown');
  g('pdv-prod-id').value='';
  if(!val||val.length<1){dd.classList.add('hidden');return;}
  const results=S.prods.filter(p=>p.ativo&&p.qtd>0&&
    (p.nome.toLowerCase().includes(val.toLowerCase())||p.cod.includes(val)));
  if(results.length===0){
    dd.innerHTML=`<div class="prod-search-item" style="color:var(--text-secondary)">Nenhum produto encontrado</div>`;
    dd.classList.remove('hidden');return;
  }
  dd.innerHTML=results.slice(0,8).map(p=>`
  <div class="prod-search-item" onclick="selectPdvProduct(${p.id},'${p.nome.replace(/'/g,"\\'")}')">
    <div>
      <div style="font-weight:500">${p.nome}</div>
      <div class="ps-stock">Estoque: ${p.qtd} un.</div>
    </div>
    <div class="ps-price">R$ ${fmtCur(p.venda)}</div>
  </div>`).join('');
  dd.classList.remove('hidden');
}

function selectPdvProduct(id,nome){
  g('pdv-search-input').value=nome;
  g('pdv-prod-id').value=id;
  g('pdv-search-dropdown').classList.add('hidden');
  g('pdv-qty').focus();
}

function addCart(){
  const pId=parseInt(g('pdv-prod-id').value);
  const qty=parseInt(g('pdv-qty').value);
  const alertEl=g('pdv-alert');
  if(!pId){setPdvAlert('Selecione um produto.','warning');return;}
  if(!qty||qty<1){setPdvAlert('Informe uma quantidade válida.','warning');return;}
  const prod=S.prods.find(p=>p.id===pId);
  const existing=S.cart.find(i=>i.pId===pId);
  const inCart=existing?existing.qtd:0;
  if(inCart+qty>prod.qtd){
    setPdvAlert(`Quantidade indisponível em estoque. Disponível: ${prod.qtd} un. (${inCart} já no carrinho).`,'danger');return;
  }
  alertEl.classList.add('hidden');
  if(existing){existing.qtd+=qty;existing.sub=+(existing.qtd*existing.vu).toFixed(2);}
  else{S.cart.push({pId,nome:prod.nome,qtd:qty,vu:prod.venda,sub:+(qty*prod.venda).toFixed(2)});}
  g('pdv-search-input').value='';g('pdv-prod-id').value='';g('pdv-qty').value='1';
  toast(`${prod.nome} adicionado ao carrinho.`,'info');
  refreshCart();
}

function setPdvAlert(msg,type){
  const el=g('pdv-alert');
  el.className=`alert alert-${type}`;el.textContent=msg;el.classList.remove('hidden');
}

function removeCartItem(pId){S.cart=S.cart.filter(i=>i.pId!==pId);refreshCart();}
function clearCart(){if(S.cart.length===0)return;S.cart=[];refreshCart();toast('Carrinho limpo.','info');}

function refreshCart(){
  const tbody=g('cart-body');if(!tbody)return;
  const total=S.cart.reduce((a,i)=>a+i.sub,0);
  if(S.cart.length===0){
    tbody.innerHTML=`<tr><td colspan="5"><div class="empty-state" style="padding:24px"><div class="ei">🛒</div><p>Nenhum produto adicionado ainda.</p></div></td></tr>`;
  } else {
    tbody.innerHTML=S.cart.map(i=>`
    <tr>
      <td style="font-weight:500">${i.nome}</td>
      <td><input type="number" min="1" value="${i.qtd}" style="width:55px;background:var(--bg-elevated);border:1px solid var(--border-strong);border-radius:5px;color:var(--text-primary);padding:3px 6px;font-size:12px;text-align:center"
        onchange="updateCartQty(${i.pId},this.value)"></td>
      <td class="mono">R$ ${i.vu.toFixed(2)}</td>
      <td class="mono"><strong>R$ ${i.sub.toFixed(2)}</strong></td>
      <td><button class="btn btn-danger btn-sm" onclick="removeCartItem(${i.pId})">✕</button></td>
    </tr>`).join('');
  }
  const fmt='R$ '+total.toLocaleString('pt-BR',{minimumFractionDigits:2});
  upd('pdv-cnt',`${S.cart.length} item(s)`);
  upd('pdv-sub',fmt);upd('pdv-total',fmt);
}

function updateCartQty(pId, newQty){
  const qty=parseInt(newQty);
  const prod=S.prods.find(p=>p.id===pId);
  const item=S.cart.find(i=>i.pId===pId);
  if(!item||isNaN(qty)||qty<1){refreshCart();return;}
  if(qty>prod.qtd){toast(`Estoque disponível: ${prod.qtd} un.`,'warning');item.qtd=prod.qtd;}
  else{item.qtd=qty;}
  item.sub=+(item.qtd*item.vu).toFixed(2);
  refreshCart();
}

function selPay(el,type){
  document.querySelectorAll('.pay-opt').forEach(o=>o.classList.remove('sel'));
  el.classList.add('sel');S.selPayment=type;
}

function finalizeSale(){
  if(S.cart.length===0){toast('Adicione produtos ao carrinho antes de finalizar.','danger');return;}
  const total=+(S.cart.reduce((a,i)=>a+i.sub,0).toFixed(2));
  const cli=S.selClient?S.clients.find(c=>c.id===S.selClient):null;

  S.cart.forEach(item=>{
    const prod=S.prods.find(p=>p.id===item.pId);
    prod.qtd-=item.qtd;
    S.movs.push({id:S.ids.m++,pId:item.pId,pNome:item.nome,tipo:'SAIDA',qtd:item.qtd,
      motivo:`Venda #${String(S.ids.s).padStart(4,'0')} – ${cli?.nome||'Sem cliente'}`,
      usr:S.user.nome,data:today()});
  });

  const sale={id:S.ids.s++,cliId:S.selClient,cliNome:cli?.nome||'Sem cliente',
    usr:S.user.nome,total,pag:S.selPayment,status:'CONCLUÍDA',data:today(),
    itens:S.cart.map(i=>({...i}))};
  S.sales.push(sale);
  S.cart=[];S.selClient=null;

  toast(`✓ Venda #${String(sale.id).padStart(4,'0')} concluída — Total: R$ ${fmtCur(sale.total)}`,'success');
  renderSales(document.getElementById('main-content'));
}

// ═══════════════════════════════════════════════════════
//  SALES HISTORY
// ═══════════════════════════════════════════════════════
function renderSalesHistory(mc, srch='', pagF='', page=null){
  if(page!==null) S.salePage=page;
  const list=[...S.sales].reverse().filter(s=>{
    const ms=s.cliNome.toLowerCase().includes(srch.toLowerCase())||
      s.usr.toLowerCase().includes(srch.toLowerCase())||
      String(s.id).padStart(4,'0').includes(srch)||
      s.pag.toLowerCase().includes(srch.toLowerCase());
    const mp=!pagF||s.pag===pagF;
    return ms&&mp;
  });
  const totalPages=Math.max(1,Math.ceil(list.length/S.salePageSize));
  if(S.salePage>totalPages) S.salePage=totalPages;
  const paged=list.slice((S.salePage-1)*S.salePageSize, S.salePage*S.salePageSize);
  const totalRev=S.sales.reduce((a,s)=>a+s.total,0);

  mc.innerHTML=`
<div class="page">
  <div class="page-header">
    <div>
      <h1 class="page-title">Histórico de Vendas</h1>
      <div class="page-subtitle">${S.sales.length} venda(s) registrada(s) · Faturamento total: R$ ${fmtCur(totalRev)}</div>
    </div>
    <button class="btn btn-primary" onclick="navigate('sales')">+ Nova Venda (PDV)</button>
  </div>
  <div class="toolbar">
    <div class="search-box">
      <span class="search-icon">🔍</span>
      <input type="text" placeholder="Buscar por cliente, usuário, pagamento..." value="${srch}"
        oninput="renderSalesHistory(document.getElementById('main-content'),this.value,document.getElementById('sh-pag')?.value||'',1)">
    </div>
    <select class="form-control" id="sh-pag" style="width:150px"
      onchange="renderSalesHistory(document.getElementById('main-content'),document.querySelector('.search-box input')?.value||'',this.value,1)">
      <option value="">Todos os pagamentos</option>
      ${['PIX','CARTÃO','DINHEIRO','TRANSFERÊNCIA'].map(p=>`<option value="${p}" ${pagF===p?'selected':''}>${p}</option>`).join('')}
    </select>
    <span style="font-size:12px;color:var(--text-secondary);margin-left:auto">${list.length} resultado(s)</span>
  </div>
  <div class="card" style="padding:0">
    <div class="table-wrapper">
      <table>
        <thead><tr><th>#</th><th>Cliente</th><th>Vendedor</th><th>Data</th><th>Itens</th><th>Pagamento</th><th>Total</th><th>Status</th><th>Ações</th></tr></thead>
        <tbody>
          ${paged.length===0?`<tr><td colspan="9"><div class="empty-state"><div class="ei">🧾</div><p>Nenhuma venda encontrada.</p></div></td></tr>`:
          paged.map(s=>`
          <tr>
            <td class="mono" style="color:var(--text-secondary);font-size:11px">#${String(s.id).padStart(4,'0')}</td>
            <td style="font-weight:500">${s.cliNome}</td>
            <td style="font-size:12px;color:var(--text-secondary)">${s.usr}</td>
            <td style="color:var(--text-secondary);font-size:12px">${fmtDate(s.data)}</td>
            <td style="font-size:12px">${s.itens.length} item(s)</td>
            <td><span class="badge badge-accent">${s.pag}</span></td>
            <td class="mono"><strong>R$ ${fmtCur(s.total)}</strong></td>
            <td><span class="badge badge-done">✓ ${s.status}</span></td>
            <td><button class="btn btn-secondary btn-sm" onclick="openSaleDetail(${s.id})">👁 Detalhes</button></td>
          </tr>`).join('')}
        </tbody>
      </table>
    </div>
    ${totalPages>1?renderPagination(S.salePage,totalPages,`renderSalesHistory(document.getElementById('main-content'),'${srch}','${pagF}'`):''}
  </div>
</div>`;
}

function openSaleDetail(id){
  const s=S.sales.find(x=>x.id===id);
  if(!s) return;
  showModal(`
  <div class="modal-header">
    <span class="modal-title">🧾 Venda #${String(s.id).padStart(4,'0')}</span>
    <button class="modal-close" onclick="closeModal()">✕</button>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:14px">
    <div class="mini-stat"><span class="mini-stat-label">Cliente</span><span class="mini-stat-val" style="font-size:13px">${s.cliNome}</span></div>
    <div class="mini-stat"><span class="mini-stat-label">Data</span><span class="mini-stat-val" style="font-size:13px">${fmtDate(s.data)}</span></div>
    <div class="mini-stat"><span class="mini-stat-label">Forma de Pagamento</span><span class="mini-stat-val" style="font-size:13px">${s.pag}</span></div>
    <div class="mini-stat"><span class="mini-stat-label">Vendedor</span><span class="mini-stat-val" style="font-size:13px">${s.usr}</span></div>
  </div>
  <div style="font-size:11px;font-weight:700;text-transform:uppercase;color:var(--text-secondary);letter-spacing:.07em;margin-bottom:8px">Itens da Venda</div>
  <div class="table-wrapper" style="margin-bottom:14px">
    <table>
      <thead><tr><th>Produto</th><th>Qtd</th><th>Vlr. Unit.</th><th>Subtotal</th></tr></thead>
      <tbody>
        ${s.itens.map(i=>`
        <tr>
          <td style="font-size:13px">${i.nome}</td>
          <td class="mono">${i.qtd}</td>
          <td class="mono">R$ ${i.vu.toFixed(2)}</td>
          <td class="mono" style="font-weight:600">R$ ${fmtCur(i.sub)}</td>
        </tr>`).join('')}
      </tbody>
    </table>
  </div>
  <div style="background:var(--bg-elevated);border-radius:8px;padding:12px 14px">
    <div class="total-row" style="font-size:14px">
      <span style="color:var(--text-secondary)">Subtotal (${s.itens.length} item(s))</span>
      <span class="mono">R$ ${fmtCur(s.total)}</span>
    </div>
    <div class="total-row grand" style="font-size:16px">
      <span>TOTAL PAGO</span>
      <span style="color:var(--success-light)">R$ ${fmtCur(s.total)}</span>
    </div>
  </div>
  <div class="modal-footer">
    <button class="btn btn-secondary" onclick="closeModal()">Fechar</button>
    <button class="btn btn-primary" onclick="printSale(${s.id})">🖨 Imprimir</button>
  </div>`);
}

function printSale(id){
  const s=S.sales.find(x=>x.id===id);
  if(!s)return;
  const w=window.open('','_blank','width=600,height=700');
  w.document.write(`<!DOCTYPE html><html><head><title>Recibo #${String(s.id).padStart(4,'0')}</title>
  <style>body{font-family:monospace;font-size:13px;padding:30px;color:#000;background:#fff}
  h1{font-size:18px;margin-bottom:4px}h2{font-size:14px;color:#555;margin-bottom:16px}
  table{width:100%;border-collapse:collapse;margin:14px 0}
  th{text-align:left;border-bottom:1px solid #000;padding:4px 0;font-size:11px}
  td{padding:5px 0;font-size:12px;border-bottom:1px solid #eee}
  .total{text-align:right;font-weight:bold;font-size:16px;margin-top:12px}
  .info{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:14px;font-size:12px}
  .info div{padding:6px;background:#f5f5f5;border-radius:4px}
  .lbl{font-size:10px;text-transform:uppercase;color:#888;display:block;margin-bottom:2px}
  </style></head><body>
  <h1>StockFlow</h1>
  <h2>Recibo de Venda #${String(s.id).padStart(4,'0')}</h2>
  <div class="info">
    <div><span class="lbl">Cliente</span>${s.cliNome}</div>
    <div><span class="lbl">Data</span>${fmtDate(s.data)}</div>
    <div><span class="lbl">Vendedor</span>${s.usr}</div>
    <div><span class="lbl">Pagamento</span>${s.pag}</div>
  </div>
  <table><thead><tr><th>Produto</th><th>Qtd</th><th>Unitário</th><th>Subtotal</th></tr></thead>
  <tbody>${s.itens.map(i=>`<tr><td>${i.nome}</td><td>${i.qtd}</td><td>R$ ${i.vu.toFixed(2)}</td><td>R$ ${fmtCur(i.sub)}</td></tr>`).join('')}</tbody>
  </table>
  <div class="total">TOTAL: R$ ${fmtCur(s.total)}</div>
  <p style="margin-top:30px;font-size:11px;color:#888;text-align:center">Gerado pelo StockFlow em ${new Date().toLocaleString('pt-BR')}</p>
  <script>window.print();window.close();<\/script>
  </body></html>`);
  w.document.close();
  toast('Recibo aberto para impressão.','info');
}

// ═══════════════════════════════════════════════════════
//  STOCK
// ═══════════════════════════════════════════════════════
function renderStock(mc,filter='ALL',page=null){
  if(page!==null) S.stockPage=page;
  const list=filter==='ALL'?[...S.movs]:[...S.movs].filter(m=>m.tipo===filter);
  const listRev=[...list].reverse();
  const totalPages=Math.max(1,Math.ceil(listRev.length/S.stockPageSize));
  if(S.stockPage>totalPages) S.stockPage=totalPages;
  const paged=listRev.slice((S.stockPage-1)*S.stockPageSize, S.stockPage*S.stockPageSize);

  const entradas=S.movs.filter(m=>m.tipo==='ENTRADA').reduce((a,m)=>a+m.qtd,0);
  const saidas=S.movs.filter(m=>m.tipo==='SAIDA').reduce((a,m)=>a+m.qtd,0);
  const zeroed=S.prods.filter(p=>p.qtd===0&&p.ativo).length;

  mc.innerHTML=`
<div class="page">
  <div class="page-header">
    <div>
      <h1 class="page-title">Controle de Estoque</h1>
      <div class="page-subtitle">Histórico completo de movimentações</div>
    </div>
    <button class="btn btn-primary" onclick="openEntryModal()">+ Entrada de Estoque</button>
  </div>
  <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-bottom:18px">
    <div class="card" style="display:flex;align-items:center;gap:12px">
      <div style="font-size:26px">📥</div>
      <div><div class="kpi-label">Total Entradas</div><div class="kpi-value" style="font-size:22px;color:var(--success-light)">${entradas}</div></div>
    </div>
    <div class="card" style="display:flex;align-items:center;gap:12px">
      <div style="font-size:26px">📤</div>
      <div><div class="kpi-label">Total Saídas</div><div class="kpi-value" style="font-size:22px;color:var(--danger-light)">${saidas}</div></div>
    </div>
    <div class="card" style="display:flex;align-items:center;gap:12px">
      <div style="font-size:26px">⛔</div>
      <div><div class="kpi-label">Produtos Zerados</div><div class="kpi-value" style="font-size:22px;color:var(--warning-light)">${zeroed}</div></div>
    </div>
  </div>
  <div class="toolbar">
    <div style="display:flex;gap:6px">
      <button class="btn ${filter==='ALL'?'btn-primary':'btn-secondary'} btn-sm" onclick="renderStock(document.getElementById('main-content'),'ALL',1)">Todas (${S.movs.length})</button>
      <button class="btn ${filter==='ENTRADA'?'btn-primary':'btn-secondary'} btn-sm" onclick="renderStock(document.getElementById('main-content'),'ENTRADA',1)">Entradas (${S.movs.filter(m=>m.tipo==='ENTRADA').length})</button>
      <button class="btn ${filter==='SAIDA'?'btn-primary':'btn-secondary'} btn-sm" onclick="renderStock(document.getElementById('main-content'),'SAIDA',1)">Saídas (${S.movs.filter(m=>m.tipo==='SAIDA').length})</button>
    </div>
  </div>
  <div class="card" style="padding:0">
    <div class="table-wrapper">
      <table>
        <thead><tr><th>#</th><th>Produto</th><th>Tipo</th><th>Quantidade</th><th>Motivo</th><th>Responsável</th><th>Data</th></tr></thead>
        <tbody>
          ${paged.map(m=>`
          <tr>
            <td class="mono" style="color:var(--text-secondary);font-size:11px">#${String(m.id).padStart(4,'0')}</td>
            <td style="font-weight:500">${m.pNome}</td>
            <td><span class="badge ${m.tipo==='ENTRADA'?'badge-entrada':'badge-saida'}">${m.tipo==='ENTRADA'?'↑':'↓'} ${m.tipo}</span></td>
            <td class="mono" style="font-weight:700;color:${m.tipo==='ENTRADA'?'var(--success-light)':'var(--danger-light)'}">${m.tipo==='ENTRADA'?'+':'–'}${m.qtd}</td>
            <td style="color:var(--text-secondary);font-size:12px;max-width:220px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap" title="${m.motivo}">${m.motivo}</td>
            <td style="font-size:12px">${m.usr}</td>
            <td style="color:var(--text-secondary);font-size:12px">${fmtDate(m.data)}</td>
          </tr>`).join('')}
        </tbody>
      </table>
    </div>
    ${totalPages>1?renderPagination(S.stockPage,totalPages,`renderStock(document.getElementById('main-content'),'${filter}'`):''}
  </div>
</div>`;
}

function openEntryModal(preselId=null){
  showModal(`
  <div class="modal-header">
    <span class="modal-title">📥 Registrar Entrada de Estoque</span>
    <button class="modal-close" onclick="closeModal()">✕</button>
  </div>
  <div class="form-group">
    <label class="form-label">Produto *</label>
    <select class="form-control" id="ef-prod">
      <option value="">Selecione o produto...</option>
      ${S.prods.filter(p=>p.ativo).map(p=>`<option value="${p.id}" ${preselId===p.id?'selected':''}>${p.nome} — estoque atual: ${p.qtd} un.</option>`).join('')}
    </select>
  </div>
  <div class="form-row">
    <div class="form-group">
      <label class="form-label">Quantidade *</label>
      <input class="form-control" type="number" id="ef-qty" min="1" value="1">
    </div>
    <div class="form-group">
      <label class="form-label">Data da Entrada</label>
      <input class="form-control" type="date" id="ef-data" value="${today()}">
    </div>
  </div>
  <div class="form-group">
    <label class="form-label">Motivo / Nota Fiscal *</label>
    <input class="form-control" id="ef-motivo" placeholder="Ex: Compra de fornecedor – NF 007">
  </div>
  <div class="modal-footer">
    <button class="btn btn-secondary" onclick="closeModal()">Cancelar</button>
    <button class="btn btn-success" onclick="saveEntry()">📥 Confirmar Entrada</button>
  </div>`);
}

function saveEntry(){
  const pId=parseInt(g('ef-prod').value);
  const qty=parseInt(g('ef-qty').value);
  const motivo=g('ef-motivo').value.trim();
  if(!pId){toast('Selecione um produto.','danger');return;}
  if(!qty||qty<1){toast('Quantidade inválida.','danger');return;}
  if(!motivo){toast('Informe o motivo da entrada.','danger');return;}
  const prod=S.prods.find(p=>p.id===pId);
  prod.qtd+=qty;
  S.movs.push({id:S.ids.m++,pId,pNome:prod.nome,tipo:'ENTRADA',qtd,motivo,usr:S.user.nome,data:g('ef-data').value||today()});
  toast(`Entrada de ${qty} un. de "${prod.nome}" registrada! Estoque: ${prod.qtd} un.`,'success');
  closeModal();renderStock(document.getElementById('main-content'));
}

// ═══════════════════════════════════════════════════════
//  REPORTS
// ═══════════════════════════════════════════════════════
function renderReports(mc){
  const totalRev=S.sales.reduce((a,s)=>a+s.total,0);
  const totalSales=S.sales.length;
  const avgTicket=totalRev/totalSales;

  const ps={};
  S.sales.forEach(s=>s.itens.forEach(i=>{
    if(!ps[i.nome])ps[i.nome]={qtd:0,rev:0};
    ps[i.nome].qtd+=i.qtd;ps[i.nome].rev+=i.sub;
  }));
  const top=Object.entries(ps).sort((a,b)=>b[1].rev-a[1].rev).slice(0,6);
  const maxR=top[0]?.[1].rev||1;

  const byMon={};
  S.sales.forEach(s=>{const k=s.data.slice(0,7);byMon[k]=(byMon[k]||0)+s.total;});
  const months=Object.keys(byMon).sort();

  const byPay={};
  S.sales.forEach(s=>{byPay[s.pag]=(byPay[s.pag]||0)+1;});

  const byCat={};
  S.sales.forEach(s=>s.itens.forEach(i=>{
    const prod=S.prods.find(p=>p.id===i.pId);
    if(prod){const cat=S.cats.find(c=>c.id===prod.catId);const k=cat?.nome||'Outros';byCat[k]=(byCat[k]||0)+i.sub;}
  }));

  mc.innerHTML=`
<div class="page">
  <div class="page-header">
    <div>
      <h1 class="page-title">Relatórios</h1>
      <div class="page-subtitle">Análise de vendas, produtos e estoque</div>
    </div>
    <button class="btn btn-secondary" onclick="window.print()">🖨 Imprimir Relatório</button>
  </div>

  <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-bottom:18px">
    <div class="kpi-card green">
      <div class="kpi-icon">💰</div>
      <div class="kpi-label">Faturamento Total</div>
      <div class="kpi-value" style="font-size:18px">R$ ${fmtCur(totalRev)}</div>
      <div class="kpi-change">Acumulado 2026</div>
    </div>
    <div class="kpi-card blue">
      <div class="kpi-icon">🧾</div>
      <div class="kpi-label">Total de Vendas</div>
      <div class="kpi-value">${totalSales}</div>
      <div class="kpi-change">Vendas finalizadas</div>
    </div>
    <div class="kpi-card amber">
      <div class="kpi-icon">📊</div>
      <div class="kpi-label">Ticket Médio</div>
      <div class="kpi-value" style="font-size:18px">R$ ${fmtCur(avgTicket)}</div>
      <div class="kpi-change">Por venda</div>
    </div>
  </div>

  <div class="reports-grid">
    <div class="card">
      <div class="card-title">Evolução de Faturamento Mensal</div>
      <div class="chart-container" style="height:200px"><canvas id="rch1"></canvas></div>
    </div>
    <div class="card">
      <div class="card-title">Formas de Pagamento</div>
      <div class="chart-container" style="height:200px"><canvas id="rch2"></canvas></div>
    </div>
  </div>

  <div class="reports-grid">
    <div class="card">
      <div class="card-title">Faturamento por Categoria</div>
      <div class="chart-container" style="height:200px"><canvas id="rch3"></canvas></div>
    </div>
    <div class="card">
      <div class="card-title">Resumo por Vendedor</div>
      <div style="display:flex;flex-direction:column;gap:8px;margin-top:6px">
        ${S.users.map(u=>{
          const uSales=S.sales.filter(s=>s.usr===u.nome);
          const uRev=uSales.reduce((a,s)=>a+s.total,0);
          const pct=totalRev>0?Math.round(uRev/totalRev*100):0;
          return`<div>
            <div style="display:flex;justify-content:space-between;margin-bottom:3px;font-size:12px">
              <span style="font-weight:500">${u.nome}</span>
              <span class="mono" style="color:var(--success-light)">R$ ${fmtCur(uRev)} (${pct}%)</span>
            </div>
            <div class="progress-wrap"><div class="progress-bar" style="width:${pct}%;background:var(--accent-light)"></div></div>
            <div style="font-size:10px;color:var(--text-secondary);margin-top:2px">${uSales.length} venda(s)</div>
          </div>`;
        }).join('')}
      </div>
    </div>
  </div>

  <div class="card" style="margin-bottom:14px">
    <div class="card-title">Produtos Mais Vendidos — por Faturamento</div>
    <div style="display:flex;flex-direction:column;gap:12px;margin-top:6px">
      ${top.map(([name,d],i)=>`
      <div>
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px">
          <span style="font-size:13px;font-weight:500">${name.length>38?name.slice(0,38)+'…':name}</span>
          <div style="display:flex;align-items:center;gap:12px">
            <span style="font-size:11px;color:var(--text-secondary)">${d.qtd} un. vendidas</span>
            <span class="mono" style="font-size:13px;font-weight:600;color:var(--success-light)">R$ ${fmtCur(d.rev)}</span>
          </div>
        </div>
        <div class="progress-wrap"><div class="progress-bar" style="width:${Math.round(d.rev/maxR*100)}%;background:${['#3B82F6','#10B981','#F59E0B','#A78BFA','#EF4444','#06B6D4'][i]}"></div></div>
      </div>`).join('')}
    </div>
  </div>

  <div class="card">
    <div class="card-title">⚠ Estoque Baixo — Necessitam Reposição</div>
    <div class="table-wrapper" style="margin-top:8px">
      <table>
        <thead><tr><th>Produto</th><th>Categoria</th><th>Qtd. Atual</th><th>Preço Venda</th><th>Situação</th><th>Ação</th></tr></thead>
        <tbody>
          ${S.prods.filter(p=>p.qtd<=3&&p.ativo).map(p=>{
            const cat=S.cats.find(c=>c.id===p.catId);
            return`<tr>
              <td style="font-weight:500">${p.nome}</td>
              <td><span class="badge badge-neutral">${cat?.nome||'–'}</span></td>
              <td class="mono" style="font-weight:700;color:${p.qtd===0?'var(--danger-light)':'var(--warning-light)'}">${p.qtd} un.</td>
              <td class="mono">R$ ${p.venda.toFixed(2)}</td>
              <td><span class="badge ${p.qtd===0?'badge-inactive':'badge-low'}">${p.qtd===0?'⛔ Sem estoque':'⚠ Estoque baixo'}</span></td>
              <td><button class="btn btn-primary btn-sm" onclick="openEntryModal(${p.id})">+ Repor</button></td>
            </tr>`;
          }).join('')}
          ${S.prods.filter(p=>p.qtd<=3&&p.ativo).length===0?`<tr><td colspan="6" style="text-align:center;padding:20px;color:var(--success-light)">✓ Todos os produtos têm estoque adequado.</td></tr>`:''}
        </tbody>
      </table>
    </div>
  </div>
</div>`;

  const monLabels=months.map(m=>{const mo=parseInt(m.split('-')[1]);
    return['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'][mo-1];});

  const ctx1=document.getElementById('rch1').getContext('2d');
  ch3=new Chart(ctx1,{type:'line',
    data:{labels:monLabels,datasets:[{label:'Faturamento',data:months.map(m=>byMon[m]),
      borderColor:'rgba(59,130,246,0.9)',backgroundColor:'rgba(59,130,246,0.08)',
      borderWidth:2,fill:true,tension:0.4,pointBackgroundColor:'#3B82F6',pointRadius:4}]},
    options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{display:false}},
      scales:{x:{grid:{color:'rgba(255,255,255,0.04)'},ticks:{color:'#6B85A0',font:{size:11}}},
        y:{grid:{color:'rgba(255,255,255,0.04)'},ticks:{color:'#6B85A0',font:{size:11},callback:v=>'R$'+Number(v).toLocaleString('pt-BR')}}}}});

  const ctx2=document.getElementById('rch2').getContext('2d');
  ch4=new Chart(ctx2,{type:'doughnut',
    data:{labels:Object.keys(byPay),datasets:[{data:Object.values(byPay),
      backgroundColor:['rgba(16,185,129,0.8)','rgba(59,130,246,0.8)','rgba(245,158,11,0.8)','rgba(167,139,250,0.8)'],
      borderWidth:1,borderColor:'#0D1B2A'}]},
    options:{responsive:true,maintainAspectRatio:false,
      plugins:{legend:{position:'right',labels:{color:'#6B85A0',font:{size:11},padding:10}}}}});

  const ctx3=document.getElementById('rch3').getContext('2d');
  new Chart(ctx3,{type:'bar',
    data:{labels:Object.keys(byCat),datasets:[{data:Object.values(byCat),
      backgroundColor:['rgba(59,130,246,0.7)','rgba(16,185,129,0.7)','rgba(245,158,11,0.7)','rgba(167,139,250,0.7)','rgba(239,68,68,0.7)'],
      borderWidth:1,borderRadius:4}]},
    options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{display:false}},
      scales:{x:{grid:{color:'rgba(255,255,255,0.04)'},ticks:{color:'#6B85A0',font:{size:10}}},
        y:{grid:{color:'rgba(255,255,255,0.04)'},ticks:{color:'#6B85A0',font:{size:10},callback:v=>'R$'+Number(v).toLocaleString('pt-BR')}}}}});
}

// ═══════════════════════════════════════════════════════
//  USERS (ADMIN ONLY)
// ═══════════════════════════════════════════════════════
function renderUsers(mc){
  mc.innerHTML=`
<div class="page">
  <div class="page-header">
    <div>
      <h1 class="page-title">Gestão de Usuários</h1>
      <div class="page-subtitle">Controle de acesso ao sistema</div>
    </div>
    <button class="btn btn-primary" onclick="openUserModal()">+ Novo Usuário</button>
  </div>
  <div class="card" style="padding:0">
    <div class="table-wrapper">
      <table>
        <thead><tr><th>Usuário</th><th>Email</th><th>Cargo</th><th>Status</th><th>Cadastro</th><th>Ações</th></tr></thead>
        <tbody>
          ${S.users.map(u=>`
          <tr>
            <td><div style="display:flex;align-items:center;gap:10px">
              <div style="width:32px;height:32px;border-radius:50%;background:${u.cargo==='ADMIN'?'var(--purple-dim)':'var(--accent-dim)'};display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;color:${u.cargo==='ADMIN'?'var(--purple-light)':'var(--accent-light)'}">${initials(u.nome)}</div>
              <span style="font-weight:500">${u.nome}</span>
            </div></td>
            <td style="color:var(--text-secondary);font-size:13px">${u.email}</td>
            <td><span class="badge ${u.cargo==='ADMIN'?'role-badge-admin':'role-badge-func'}">${u.cargo==='ADMIN'?'🔑 Administrador':'👷 Funcionário'}</span></td>
            <td><span class="badge ${u.ativo?'badge-active':'badge-inactive'}">${u.ativo?'✓ Ativo':'✗ Inativo'}</span></td>
            <td style="color:var(--text-secondary);font-size:12px">${fmtDate(u.createdAt||'2026-01-01')}</td>
            <td><div class="actions">
              <button class="btn btn-warning btn-sm" onclick="openUserModal(${u.id})">✏ Editar</button>
              ${u.id!==S.user.id?`<button class="btn btn-danger btn-sm" onclick="toggleUser(${u.id})">${u.ativo?'⛔ Desativar':'✓ Ativar'}</button>`:'<span style="font-size:11px;color:var(--text-muted)">Conta atual</span>'}
            </div></td>
          </tr>`).join('')}
        </tbody>
      </table>
    </div>
  </div>
  <div class="card" style="margin-top:12px">
    <div class="card-title">Permissões por Perfil</div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:6px">
      <div style="background:var(--bg-elevated);border-radius:8px;padding:14px;border:1px solid rgba(167,139,250,0.2)">
        <div style="font-weight:600;color:var(--purple-light);margin-bottom:8px">🔑 ADMIN</div>
        ${['Acesso a todos os módulos','Cadastrar/editar/excluir produtos','Cadastrar/editar/excluir clientes','Registrar vendas','Gerenciar estoque','Visualizar relatórios financeiros','Gerenciar usuários'].map(p=>`<div style="font-size:12px;color:var(--text-secondary);padding:3px 0">✓ ${p}</div>`).join('')}
      </div>
      <div style="background:var(--bg-elevated);border-radius:8px;padding:14px;border:1px solid rgba(59,130,246,0.2)">
        <div style="font-weight:600;color:var(--accent-light);margin-bottom:8px">👷 FUNCIONÁRIO</div>
        ${['Registrar vendas no PDV','Consultar produtos','Consultar clientes','Registrar entradas de estoque','Ver histórico de movimentações'].map(p=>`<div style="font-size:12px;color:var(--text-secondary);padding:3px 0">✓ ${p}</div>`).join('')}
        ${['Excluir produtos ou clientes','Visualizar relatórios financeiros','Gerenciar usuários'].map(p=>`<div style="font-size:12px;color:var(--danger-light);padding:3px 0;opacity:.7">✗ ${p}</div>`).join('')}
      </div>
    </div>
  </div>
</div>`;
}

function openUserModal(id=null){
  const u=id?S.users.find(x=>x.id===id):null;
  showModal(`
  <div class="modal-header">
    <span class="modal-title">${u?'✏ Editar Usuário':'+ Novo Usuário'}</span>
    <button class="modal-close" onclick="closeModal()">✕</button>
  </div>
  <div class="form-group">
    <label class="form-label">Nome Completo *</label>
    <input class="form-control" id="uf-nome" value="${u?.nome||''}" placeholder="Nome do usuário">
  </div>
  <div class="form-group">
    <label class="form-label">Email *</label>
    <input class="form-control" id="uf-email" type="email" value="${u?.email||''}" placeholder="email@empresa.com">
  </div>
  <div class="form-row">
    <div class="form-group">
      <label class="form-label">Senha ${u?'(deixe vazio para manter)':' *'}</label>
      <input class="form-control" id="uf-senha" type="password" placeholder="••••••••">
    </div>
    <div class="form-group">
      <label class="form-label">Cargo *</label>
      <select class="form-control" id="uf-cargo">
        <option value="ADMIN" ${u?.cargo==='ADMIN'?'selected':''}>Administrador</option>
        <option value="FUNCIONARIO" ${u?.cargo==='FUNCIONARIO'?'selected':''}>Funcionário</option>
      </select>
    </div>
  </div>
  <div class="form-group">
    <label class="form-label">Status</label>
    <select class="form-control" id="uf-ativo">
      <option value="true" ${u?.ativo!==false?'selected':''}>Ativo</option>
      <option value="false" ${u?.ativo===false?'selected':''}>Inativo</option>
    </select>
  </div>
  <div class="modal-footer">
    <button class="btn btn-secondary" onclick="closeModal()">Cancelar</button>
    <button class="btn btn-primary" onclick="saveUser(${id??'null'})">💾 Salvar</button>
  </div>`);
}

function saveUser(id){
  const nome=g('uf-nome').value.trim();
  const email=g('uf-email').value.trim();
  const senha=g('uf-senha').value;
  if(!nome){toast('Nome é obrigatório.','danger');return;}
  if(!email){toast('Email é obrigatório.','danger');return;}
  const dup=S.users.find(u=>u.email===email&&u.id!==id);
  if(dup){toast('Já existe usuário com este email.','danger');return;}
  if(id){
    const u=S.users.find(x=>x.id===id);
    Object.assign(u,{nome,email,cargo:g('uf-cargo').value,ativo:g('uf-ativo').value==='true'});
    if(senha) u.senha=senha;
    toast('Usuário atualizado!','success');
  } else {
    if(!senha){toast('Senha é obrigatória para novo usuário.','danger');return;}
    S.users.push({id:S.ids.u++,nome,email,senha,cargo:g('uf-cargo').value,ativo:true,createdAt:today()});
    toast('Usuário criado!','success');
  }
  closeModal();renderUsers(document.getElementById('main-content'));
}

function toggleUser(id){
  const u=S.users.find(x=>x.id===id);
  u.ativo=!u.ativo;
  toast(`Usuário ${u.ativo?'ativado':'desativado'} com sucesso.`,u.ativo?'success':'warning');
  renderUsers(document.getElementById('main-content'));
}

// ═══════════════════════════════════════════════════════
//  DELETE (shared)
// ═══════════════════════════════════════════════════════
function confDel(type,id){
  const item=type==='prod'?S.prods.find(p=>p.id===id):S.clients.find(c=>c.id===id);
  showModal(`
  <div class="modal-header">
    <span class="modal-title" style="color:var(--danger-light)">⚠ Confirmar Exclusão</span>
    <button class="modal-close" onclick="closeModal()">✕</button>
  </div>
  <p style="color:var(--text-secondary);font-size:14px;margin-bottom:4px">
    Tem certeza que deseja excluir <strong style="color:var(--text-primary)">${item?.nome}</strong>?
  </p>
  <p style="color:var(--text-muted);font-size:12px">Esta ação não pode ser desfeita.</p>
  <div class="modal-footer">
    <button class="btn btn-secondary" onclick="closeModal()">Cancelar</button>
    <button class="btn btn-danger" onclick="doDel('${type}',${id})">🗑 Excluir permanentemente</button>
  </div>`);
}

function doDel(type,id){
  if(type==='prod'){
    S.prods=S.prods.filter(p=>p.id!==id);
    toast('Produto excluído.','success');
    closeModal();renderProducts(document.getElementById('main-content'));
  } else {
    S.clients=S.clients.filter(c=>c.id!==id);
    toast('Cliente excluído.','success');
    closeModal();renderClients(document.getElementById('main-content'));
  }
}

// ═══════════════════════════════════════════════════════
//  PAGINATION
// ═══════════════════════════════════════════════════════
function renderPagination(current,total,callbackBase){
  const pages=[];
  const delta=2;
  for(let i=1;i<=total;i++){
    if(i===1||i===total||Math.abs(i-current)<=delta) pages.push(i);
    else if(Math.abs(i-current)===delta+1) pages.push('...');
  }
  const unique=[...new Set(pages)];
  return `<div class="pagination" style="padding:10px 0">
    <button class="pg-btn" onclick="${callbackBase},${current-1})" ${current<=1?'disabled':''}>‹</button>
    ${unique.map(p=>p==='...'?`<span class="pg-info">…</span>`:
      `<button class="pg-btn ${p===current?'active':''}" onclick="${callbackBase},${p})">${p}</button>`).join('')}
    <button class="pg-btn" onclick="${callbackBase},${current+1})" ${current>=total?'disabled':''}>›</button>
    <span class="pg-info">${current}/${total}</span>
  </div>`;
}

// ═══════════════════════════════════════════════════════
//  MODAL
// ═══════════════════════════════════════════════════════
function showModal(html){
  g('modal-box').innerHTML=html;
  g('modal-overlay').classList.add('active');
}
function closeModal(){g('modal-overlay').classList.remove('active');}
function overlayClick(e){if(e.target===g('modal-overlay')) closeModal();}

// ═══════════════════════════════════════════════════════
//  TOAST
// ═══════════════════════════════════════════════════════
function toast(msg,type='info'){
  const c=g('toast-container');
  const el=document.createElement('div');
  el.className=`toast toast-${type}`;
  const icons={success:'✓',danger:'⚠',info:'ℹ',warning:'⚡'};
  const colors={success:'var(--success-light)',danger:'var(--danger-light)',info:'var(--accent-light)',warning:'var(--warning-light)'};
  el.innerHTML=`<span style="color:${colors[type]||colors.info};flex-shrink:0">${icons[type]||icons.info}</span><span>${msg}</span>`;
  c.appendChild(el);
  setTimeout(()=>{el.style.opacity='0';el.style.transition='opacity .35s';setTimeout(()=>el.remove(),400);},3800);
}

// ═══════════════════════════════════════════════════════
//  UTILS
// ═══════════════════════════════════════════════════════
function g(id){return document.getElementById(id)}
function upd(id,val){const el=g(id);if(el)el.textContent=val;}
function fmtDate(d){if(!d)return'–';const[y,m,dy]=d.split('-');return`${dy}/${m}/${y}`;}
function fmtCur(n){return Number(n).toLocaleString('pt-BR',{minimumFractionDigits:2,maximumFractionDigits:2});}
function today(){return new Date().toISOString().split('T')[0];}
function initials(nome){return nome.split(' ').map(n=>n[0]).filter(Boolean).slice(0,2).join('').toUpperCase();}

// ═══════════════════════════════════════════════════════
//  KEYBOARD
// ═══════════════════════════════════════════════════════
document.addEventListener('keydown',e=>{
  if(e.key==='Escape') closeModal();
});
document.getElementById('login-senha').addEventListener('keydown',e=>{
  if(e.key==='Enter') doLogin();
});
// Close PDV dropdown on click outside
document.addEventListener('click', e=>{
  const dd=g('pdv-search-dropdown');
  if(dd&&!dd.contains(e.target)&&e.target.id!=='pdv-search-input') dd.classList.add('hidden');
});
