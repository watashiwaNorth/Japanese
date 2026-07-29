function esc(s){ return s ? String(s).replace(/[&<>"']/g, function(m){ return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]; }) : ''; }

function render(){
  // Logo
  var logoCircle = NAV.logo && NAV.logo !== "https://picsum.photos/id/20/800/600" && NAV.logo.indexOf("FILE_ID")===-1
    ? '<div class="logo-circle"><img src="'+esc(NAV.logo)+'" alt="logo"></div>'
    : '<div class="logo-circle">危</div>';
  document.getElementById('logoEl').innerHTML = logoCircle+'<div class="logo-text"><span class="logo-name">'+esc(NAV.logoText)+'</span><span class="logo-sub">Japanese Club</span></div>';

  // Nav links
  document.getElementById('navLinks').innerHTML = NAV.links.map(function(l){
    return '<a href="'+esc(l.href)+'"'+(l.cta?' class="nav-cta"':'')+'>'+esc(l.text)+'</a>';
  }).join('');

  // Hero
  document.getElementById('heroEyebrow').textContent = HERO.eyebrow;
  document.getElementById('heroTitle').innerHTML = HERO.title;
  document.getElementById('heroJp').textContent = HERO.titleJp;
  document.getElementById('heroDesc').textContent = HERO.desc;
  document.getElementById('heroBtnText').textContent = HERO.btnText;
  document.getElementById('heroStats').innerHTML = (HERO.stats||[]).map(function(s){
    return '<div><div class="stat-num">'+esc(s.num)+'</div><div class="stat-label">'+esc(s.label)+'</div></div>';
  }).join('');
  if(HERO.bg && HERO.bg.indexOf("FILE_ID")===-1){
    var hBg = document.getElementById('heroBg');
    hBg.innerHTML = '<img src="'+esc(HERO.bg)+'" alt="Hero">';
  }

  // Marquee
  var mItems = ['Baka Danger','日本語','JLPT N5～N1','Hiragana','Katakana','Kanji','Kaiwa','Shodo','Budaya Jepang','和の心','SMKN 8 Jakarta'];
  var mAll = mItems.concat(mItems);
  document.getElementById('marqueeTrack').innerHTML = mAll.map(function(t){
    return '<span class="marquee-item"><span class="marquee-dot"></span>'+t+'</span>';
  }).join('');

  // About image
  var aWrap = document.getElementById('aboutImgWrap');
  if(ABOUT.mainImg && ABOUT.mainImg.indexOf("FILE_ID")===-1){
    var acc = ABOUT.accentImg && ABOUT.accentImg.indexOf("FILE_ID")===-1 ? '<img class="img-accent" src="'+esc(ABOUT.accentImg)+'" alt="Suasana kelas">' : '';
    aWrap.innerHTML = '<div class="img-deco"></div><img class="img-main" src="'+esc(ABOUT.mainImg)+'" alt="Belajar bersama">'+acc;
  }

  // About text
  document.getElementById('aboutTitle').textContent = ABOUT.title;
  document.getElementById('aboutP1').textContent = ABOUT.paragraph1;
  document.getElementById('aboutQuote').textContent = ABOUT.quote;
  var misiHtml = VISIMISI.misi.map(function(m){ return '• '+esc(m); }).join('<br>');
  document.getElementById('vmContent').innerHTML = '<strong>Visi:</strong> '+esc(VISIMISI.visi)+'<br><br><strong>Misi:</strong><br>'+misiHtml;

  // Cards
  document.getElementById('cardsGrid').innerHTML = CARDS.map(function(c){
    return '<div class="card"><span class="card-num">'+esc(c.num)+'</span><div class="card-icon"><i class="'+esc(c.icon)+'"></i></div><h3 class="card-title">'+esc(c.title)+'</h3><ul class="card-list">'+c.items.map(function(i){return '<li>'+esc(i)+'</li>';}).join('')+'</ul></div>';
  }).join('');

  // Activities
  document.getElementById('actList').innerHTML = ACTIVITIES.list.map(function(a){
    return '<li class="act-item"><div class="act-icn"><i class="'+esc(a.icon)+'"></i></div><div class="act-text"><strong>'+esc(a.title)+'</strong><span>'+esc(a.detail||'')+'</span></div></li>';
  }).join('');
  var actEl = document.getElementById('actImgEl');
  if(ACTIVITIES.img && ACTIVITIES.img.indexOf("FILE_ID")===-1){
    actEl.innerHTML = '<img class="act-img" src="'+esc(ACTIVITIES.img)+'" alt="Kegiatan Baka Danger">';
  } else {
    actEl.innerHTML = '<div class="act-placeholder"><i class="fas fa-camera"></i><p>Foto kegiatan<br>Tambahkan di ACTIVITIES.img</p></div>';
  }

  // Gallery tabs
  var tabs = [{id:'ALL',name:'Semua'}].concat(GROUPS);
  document.getElementById('gtabs').innerHTML = tabs.map(function(g){
    return '<button class="gtab'+(activeGroup===g.id?' active':'')+'" data-gid="'+esc(g.id)+'">'+esc(g.name)+'</button>';
  }).join('');
  document.querySelectorAll('.gtab').forEach(function(btn){
    btn.addEventListener('click', function(){ activeGroup = btn.dataset.gid; renderGallery(); });
  });
  renderGallery();

  // Team
  document.getElementById('teamGrid').innerHTML = TEAM.map(function(m){
    var hasPhoto = m.photo && m.photo.indexOf("FILE_ID")===-1 && m.photo !== "https://picsum.photos/id/20/800/600";
    var av = hasPhoto ? '<img src="'+esc(m.photo)+'" alt="'+esc(m.name)+'">' : '<i class="'+esc(m.icon||'fas fa-user')+'"></i>';
    return '<div class="tcard"><div class="tav">'+av+'</div><div class="tname">'+esc(m.name)+'</div><div class="tpos">'+esc(m.position)+'</div><div class="tdesc">'+esc(m.desc||'')+'</div></div>';
  }).join('');

  // Footer logo
  var fLogoCircle = NAV.logo && NAV.logo !== "https://picsum.photos/id/20/800/600" && NAV.logo.indexOf("FILE_ID")===-1
    ? '<div class="logo-circle"><img src="'+esc(NAV.logo)+'" alt="logo"></div>'
    : '<div class="logo-circle">危</div>';
  document.getElementById('footerLogo').innerHTML = fLogoCircle+'<div class="logo-text"><span class="logo-name" style="color:#fff">'+esc(NAV.logoText)+'</span><span class="logo-sub" style="color:var(--aka-light)">Japanese Club</span></div>';
  document.getElementById('footerDesc').textContent = FOOTER.description;
  document.getElementById('socialRow').innerHTML =
    '<a href="'+esc(FOOTER.youtube)+'" class="social-a" target="_blank" rel="noopener noreferrer"><i class="fab fa-youtube"></i></a>'+
    '<a href="'+esc(FOOTER.instagram)+'" class="social-a" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram"></i></a>'+
    '<a href="mailto:'+esc(FOOTER.email)+'" class="social-a"><i class="fas fa-envelope"></i></a>';
  document.getElementById('finfo').innerHTML =
    '<li><i class="fas fa-map-marker-alt"></i><span>'+esc(FOOTER.address)+'</span></li>'+
    '<li><i class="fas fa-phone-alt"></i><span>'+esc(FOOTER.phone)+'</span></li>'+
    '<li><i class="fas fa-envelope"></i><span>'+esc(FOOTER.email)+'</span></li>'+
    '<li><i class="fas fa-chalkboard-teacher"></i><span>'+esc(FOOTER.sensei)+'</span></li>';
  document.getElementById('fctaDesc').textContent = FOOTER.description;
  document.getElementById('fctaBtn').textContent = FOOTER.ctaBtnText;
  document.getElementById('footerCopy').textContent = FOOTER.copyright;
}

function renderGallery(){
  var filtered = activeGroup==='ALL' ? GALLERY : GALLERY.filter(function(g){ return g.group===activeGroup; });
  var gc = document.getElementById('galleryContent');
  if(!filtered.length){
    gc.innerHTML = '<div class="gallery-empty"><i class="fas fa-camera-retro"></i><p>Belum ada foto di grup ini.<br>Tambahkan foto menggunakan petunjuk di bagian GALLERY.</p></div>';
    return;
  }
  gc.innerHTML = '<div class="gallery-grid">'+filtered.map(function(item, idx){
    var imgSrc = (item.img && item.img.indexOf("FILE_ID")===-1) ? item.img : "https://picsum.photos/id/20/600/450";
    return '<div class="gitem" data-idx="'+idx+'"><img src="'+esc(imgSrc)+'" alt="'+esc(item.title)+'" loading="lazy"><div class="goverlay"><h4>'+esc(item.title)+'</h4><p>'+esc(item.desc)+'</p></div><div class="gzoom"><i class="fas fa-expand"></i></div></div>';
  }).join('')+'</div>';
  gc.querySelectorAll('.gitem').forEach(function(el){
    el.addEventListener('click', function(){ 
      var idx = parseInt(el.dataset.idx);
      openLB(filtered, idx);
    });
  });
}

function openLB(items, idx){ lbItems=items; lbIdx=idx; showLB(); document.getElementById('lb').classList.add('open'); document.body.style.overflow='hidden'; }
function closeLB(){ document.getElementById('lb').classList.remove('open'); document.body.style.overflow=''; }
function showLB(){
  var it = lbItems[lbIdx]; if(!it) return;
  var imgSrc = (it.img && it.img.indexOf("FILE_ID")===-1) ? it.img : "https://picsum.photos/id/20/800/600";
  document.getElementById('lbImg').src = imgSrc;
  document.getElementById('lbTitle').textContent = it.title;
  document.getElementById('lbDesc').textContent = it.desc||'';
  var grp = GROUPS.find(function(g){ return g.id===it.group; });
  document.getElementById('lbTag').textContent = (grp ? grp.name : 'Galeri') + '  ·  Baka Danger';
}
document.getElementById('lbClose').onclick = closeLB;
document.getElementById('lb').onclick = function(e){ if(e.target===e.currentTarget) closeLB(); };
document.getElementById('lbPrev').onclick = function(){ lbIdx=(lbIdx-1+lbItems.length)%lbItems.length; showLB(); };
document.getElementById('lbNext').onclick = function(){ lbIdx=(lbIdx+1)%lbItems.length; showLB(); };
document.addEventListener('keydown', function(e){
  if(!document.getElementById('lb').classList.contains('open')) return;
  if(e.key==='Escape') closeLB();
  if(e.key==='ArrowLeft') document.getElementById('lbPrev').click();
  if(e.key==='ArrowRight') document.getElementById('lbNext').click();
});

window.addEventListener('scroll', function(){
  document.getElementById('nav').classList.toggle('scrolled', scrollY>60);
  document.getElementById('scrollTop').classList.toggle('show', scrollY>400);
});
document.getElementById('burgerBtn').addEventListener('click', function(){
  document.getElementById('navLinks').classList.toggle('open');
});
document.getElementById('scrollTop').addEventListener('click', function(){
  window.scrollTo({top:0,behavior:'smooth'});
});
document.addEventListener('click', function(e){
  if(e.target.closest && e.target.closest('#navLinks a'))
    document.getElementById('navLinks').classList.remove('open');
});

render();