// SOFDIM — section components

const NBSP_THIN = '\u202F'; // narrow no-break space
const fmtPrice = (n) => {
  if (n == null) return '—';
  return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, NBSP_THIN);
};

const PRICES = {
  100: { '0.6': 2464, '0.8': 3555, '1.0': 4263 },
  110: { '0.6': 2709, '0.8': 3911, '1.0': 4694 },
  120: { '0.6': 2960, '0.8': 4268, '1.0': 5123 },
  130: { '0.6': 3207, '0.8': 4623, '1.0': 5549 },
  140: { '0.6': 3452, '0.8': 4975, '1.0': 5979 },
  150: { '0.6': 3704, '0.8': 5339, '1.0': 6404 },
  160: { '0.6': null, '0.8': 5694, '1.0': null },
  180: { '0.6': 4435, '0.8': 6401, '1.0': 7682 },
  200: { '0.6': 4932, '0.8': 7115, '1.0': 8537 },
  220: { '0.6': 5453, '0.8': 7857, '1.0': 9421 },
  230: { '0.6': 5669, '0.8': 8177, '1.0': 9816 },
  250: { '0.6': 7301, '0.8': 10571, '1.0': 13126 },
  300: { '0.6': 9806, '0.8': 14447, '1.0': 17749 },
  350: { '0.6': null, '0.8': 14774, '1.0': 18339 },
};
const DIAMETERS = [100, 110, 120, 130, 140, 150, 160, 180, 200, 220, 230, 250, 300, 350];
const THICKNESSES = [
  { id: '0.6', label: `0,6${NBSP_THIN}мм` },
  { id: '0.8', label: `0,8${NBSP_THIN}мм` },
  { id: '1.0', label: `1${NBSP_THIN}мм` },
];

// ============== TOP BAR ==============
function TopBar() {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <header className={`topbar ${scrolled ? 'topbar--scrolled' : ''}`}>
      <div className="topbar__inner">
        <a href="#top" className="logo">
          <span className="logo__mark">◢◣</span>
          <span className="logo__text">SOFDIM</span>
        </a>
        <nav className="nav">
          <a href="#features">Преимущества</a>
          <a href="#config">Диаметры</a>
          <a href="#kit">Каталог</a>
          <a href="#order">Как заказать</a>
          <a href="#faq">FAQ</a>
        </nav>
        <div className="topbar__right">
          <a href="tel:+380668698159" className="phone">
            <PhoneIcon size={14} color="#FFFFFF"/>
            <span>+380 66 869 81 59</span>
          </a>
          <a href="viber://chat?number=+380668698159" className="msg-icon msg-icon--viber" aria-label="Viber">
            <ViberIcon size={20}/>
          </a>
          <a href="https://t.me/sofdim" className="msg-icon msg-icon--tg" aria-label="Telegram">
            <TelegramIcon size={20}/>
          </a>
        </div>
      </div>
    </header>
  );
}

// ============== HERO ==============
function Hero() {
  const [steel, setSteel] = React.useState('AISI 304');
  return (
    <section className="hero" id="top">
      <div className="hero__bg"/>
      <div className="hero__inner">
        <div className="hero__left">
          <div className="hero__chips">
            <span className="chip">Свой цех</span>
            <span className="chip">ДСТУ</span>
            <span className="chip">Гарантия</span>
          </div>
          <h1 className="hero__title">
            Дымоходы<br/>
            из нержавеющей<br/>
            <span className="hero__title-accent">стали</span>
          </h1>
          <p className="hero__sub">
            Готовые комплекты под твёрдотопливные, газовые котлы,
            камины и банные печи. Собственное производство в Украине.
          </p>

          <div className="hero__steel">
            <span className="hero__steel-label">Сталь</span>
            <div className="pillrow">
              {['AISI 201', 'AISI 304', 'AISI 321'].map(s => (
                <button
                  key={s}
                  className={`pill ${steel === s ? 'pill--active' : ''}`}
                  onClick={() => setSteel(s)}
                >{s}</button>
              ))}
            </div>
          </div>

          <div className="hero__cta">
            <a href="#config" className="btn btn--primary">
              Рассчитать комплект
              <ArrowIcon size={18}/>
            </a>
            <a href="#kit" className="btn btn--ghost">Смотреть каталог</a>
          </div>
        </div>
        <div className="hero__right">
          <HeroChimney/>
          <div className="hero__badge">
            <span className="hero__badge-num">3</span>
            <span className="hero__badge-lbl">типа стали<br/>под задачу</span>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============== USP STRIP ==============
function USP() {
  const items = [
    { t: 'Свой производственный цех', s: 'Полный цикл в Украине' },
    { t: 'Сталь AISI 201 / 304 / 321', s: 'Пищевая нержавейка' },
    { t: 'Сертификация ДСТУ', s: 'Документы на партию' },
    { t: 'Заводская гарантия', s: 'Отвечаем за качество' },
  ];
  return (
    <section className="usp">
      <div className="usp__inner">
        {items.map((it, i) => (
          <div key={i} className="usp__card">
            <div className="usp__num">0{i+1}</div>
            <div className="usp__t">{it.t}</div>
            <div className="usp__s">{it.s}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ============== FEATURES ==============
function Features() {
  const feats = [
    { Icon: FeatEngine, t: 'Инженерное решение', s: 'Комплект собирается под конкретный источник тепла и длину тяги' },
    { Icon: FeatSteel, t: '3 типа стали', s: 'AISI 201, 304, 321 — подбор под температуру и тип топлива' },
    { Icon: FeatInsulation, t: 'Базальтовая изоляция', s: 'Слой 25 или 50 мм в сэндвич-исполнении' },
    { Icon: FeatWarranty, t: 'Заводская гарантия', s: 'Прямой контакт с производителем без посредников' },
    { Icon: FeatTruck, t: 'Доставка 1–3 дня', s: 'Бесплатно по Украине от 8 000 ₴, «Нова пошта» и прямая отгрузка' },
  ];
  return (
    <section className="features" id="features">
      <div className="section__head">
        <span className="eyebrow">Почему SOFDIM</span>
        <h2 className="section__title">Не просто трубы — инженерное решение</h2>
      </div>
      <div className="features__grid">
        {feats.map((f, i) => (
          <div key={i} className="feat">
            <div className="feat__icon"><f.Icon size={28}/></div>
            <div className="feat__t">{f.t}</div>
            <div className="feat__s">{f.s}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ============== CONFIGURATOR ==============
function Configurator() {
  const [type, setType] = React.useState('single');
  const [dia, setDia] = React.useState(100);
  const [thk, setThk] = React.useState('0.6');
  const [priceAnim, setPriceAnim] = React.useState(0);

  const prices = PRICES[dia];
  const available = THICKNESSES.filter(t => prices[t.id] != null);

  // When diameter changes, auto-pick first available thickness
  React.useEffect(() => {
    if (prices[thk] == null) {
      const first = THICKNESSES.find(t => prices[t.id] != null);
      if (first) setThk(first.id);
    }
    setPriceAnim(a => a + 1);
  }, [dia]);

  React.useEffect(() => { setPriceAnim(a => a + 1); }, [thk]);

  const currentPrice = prices[thk];
  const thkLabel = THICKNESSES.find(t => t.id === thk)?.label || '';

  return (
    <section className="config" id="config">
      <div className="section__head">
        <span className="eyebrow">Подбор диаметра</span>
        <h2 className="section__title">Выбери размер —<br/>получи цену комплекта</h2>
      </div>

      <div className="config__card">
        {/* Type switcher */}
        <div className="config__typerow">
          <div className="typeswitch">
            <button
              className={`typeswitch__btn ${type === 'single' ? 'typeswitch__btn--active' : ''}`}
              onClick={() => setType('single')}
            >Одностенные</button>
            <button
              className={`typeswitch__btn ${type === 'sandwich' ? 'typeswitch__btn--active' : ''}`}
              onClick={() => setType('sandwich')}
            >
              Утеплённые <span className="typeswitch__badge">Скоро</span>
            </button>
          </div>
          <div className="config__meta">14 диаметров · 3 толщины</div>
        </div>

        {/* Diameter pills */}
        <div className="diapills">
          {DIAMETERS.map(d => (
            <button
              key={d}
              className={`diapill ${dia === d && type === 'single' ? 'diapill--active' : ''}`}
              onClick={() => { setDia(d); setType('single'); }}
              disabled={type === 'sandwich'}
            >
              <span className="diapill__sym">Ø</span>
              <span className="diapill__n">{d}</span>
            </button>
          ))}
        </div>

        {/* Main body */}
        <div className="config__body">
          <div className="config__left">
            <div className="ringbadge">
              <div className="ringbadge__ring">
                <div className="ringbadge__disk">
                  <div className="ringbadge__unit">мм</div>
                  <div key={`n-${dia}`} className="ringbadge__num">{dia}</div>
                </div>
              </div>
              <div className="ringbadge__cap">Внутренний<br/>диаметр</div>
            </div>
          </div>

          <div className="config__right">
            <h3 className="config__h3">
              Ø{dia}{NBSP_THIN}мм · <span className="config__h3-sub">одностенная</span>
            </h3>

            <div className="speclist">
              <div className="specrow">
                <span className="specrow__k">Внутренний диаметр</span>
                <span className="specrow__v">Ø{dia}{NBSP_THIN}мм</span>
              </div>
              <div className="specrow">
                <span className="specrow__k">Сталь</span>
                <span className="specrow__v">AISI 304 · пищевая</span>
              </div>
              <div className="specrow">
                <span className="specrow__k">Длина звена</span>
                <span className="specrow__v">1000{NBSP_THIN}мм</span>
              </div>
              <div className="specrow specrow--thk">
                <span className="specrow__k">Толщина стали</span>
                <div className="thkpills">
                  {THICKNESSES.map(t => {
                    const isAvail = prices[t.id] != null;
                    const isActive = thk === t.id && isAvail;
                    return (
                      <button
                        key={t.id}
                        className={`thkpill ${isActive ? 'thkpill--active' : ''} ${!isAvail ? 'thkpill--disabled' : ''}`}
                        onClick={() => isAvail && setThk(t.id)}
                        title={!isAvail ? 'Эта толщина доступна под заказ — уточните у менеджера' : ''}
                      >
                        {t.label}
                        {!isAvail && <span className="thkpill__dash">—</span>}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="priceblock">
              <div className="priceblock__lbl">Цена комплекта</div>
              <div className="priceblock__price">
                <span key={`p-${priceAnim}`} className="priceblock__num">
                  {fmtPrice(currentPrice)}
                </span>
                <span className="priceblock__cur">₴</span>
              </div>
              <div className="priceblock__sub">
                <span className="dot dot--ok"/> в наличии · доставка 1–3 дня
              </div>
            </div>

            <div className="config__cta">
              <button className="btn btn--primary btn--full">
                Заказать Ø{dia} · {thkLabel}
                <ArrowIcon size={18}/>
              </button>
              <div className="config__msgs">
                <a href="viber://chat?number=+380668698159" className="btn btn--viber">
                  <ViberIcon size={18}/> Viber
                </a>
                <a href="https://t.me/sofdim" className="btn btn--tg">
                  <TelegramIcon size={18}/> Telegram
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Sandwich overlay */}
        {type === 'sandwich' && (
          <div className="config__overlay">
            <div className="config__overlay-card">
              <div className="config__overlay-badge">Скоро</div>
              <h3>Конфигуратор сэндвич-комплектов</h3>
              <p>Появится в ближайшее время. Для расчёта утеплённого дымохода напишите менеджеру прямо сейчас.</p>
              <div className="config__msgs">
                <a href="viber://chat?number=+380668698159" className="btn btn--viber">
                  <ViberIcon size={18}/> Viber
                </a>
                <a href="https://t.me/sofdim" className="btn btn--tg">
                  <TelegramIcon size={18}/> Telegram
                </a>
              </div>
              <button className="linkbtn" onClick={() => setType('single')}>← Назад к одностенным</button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

// ============== KIT ==============
function Kit() {
  const items = [
    { Icon: CompPipe, t: 'Труба прямая' },
    { Icon: CompTee, t: 'Тройник 87°' },
    { Icon: CompElbow, t: 'Колено 45° / 90°' },
    { Icon: CompCap, t: 'Крышка-зонт' },
    { Icon: CompRevision, t: 'Ревизия' },
    { Icon: CompCondensate, t: 'Конденсатосборник' },
    { Icon: CompBracket, t: 'Кронштейн стеновой' },
    { Icon: CompClamp, t: 'Хомут соединительный' },
  ];
  return (
    <section className="kit" id="kit">
      <div className="section__head">
        <span className="eyebrow">Полный комплект</span>
        <h2 className="section__title">Всё, что нужно для монтажа под ключ</h2>
      </div>
      <div className="kit__grid">
        {items.map((it, i) => (
          <div key={i} className="kitcard">
            <div className="kitcard__icon"><it.Icon/></div>
            <div className="kitcard__t">{it.t}</div>
            <div className="kitcard__badge">Входит в комплект</div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ============== ORDER STEPS ==============
function OrderSteps() {
  const steps = [
    { n: 1, t: 'Заявка', s: 'Форма на сайте или сразу мессенджер — удобно вам' },
    { n: 2, t: 'Просчёт', s: 'Менеджер отвечает за 15–20 минут в рабочее время' },
    { n: 3, t: 'Отгрузка', s: '1–3 дня. Бесплатно по Украине от 8 000 ₴' },
  ];
  return (
    <section className="steps" id="order">
      <div className="section__head">
        <span className="eyebrow">Как заказать</span>
        <h2 className="section__title">Три шага до готового комплекта</h2>
      </div>
      <div className="steps__row">
        {steps.map((s, i) => (
          <div key={i} className="step">
            <div className="step__ring">
              <span>{s.n}</span>
            </div>
            <div className="step__t">{s.t}</div>
            <div className="step__s">{s.s}</div>
            {i < steps.length - 1 && <div className="step__line"/>}
          </div>
        ))}
      </div>
    </section>
  );
}

// ============== FORM ==============
function OrderForm() {
  const [sent, setSent] = React.useState(false);
  const [agree, setAgree] = React.useState(true);
  const [phone, setPhone] = React.useState('');

  const submit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section className="form" id="form">
      <div className="section__head">
        <span className="eyebrow">Заявка</span>
        <h2 className="section__title">Посчитаем комплект за 15 минут</h2>
      </div>

      <div className="form__card">
        {!sent ? (
          <form className="form__grid" onSubmit={submit}>
            <label className="field">
              <span className="field__lbl">Как к вам обращаться</span>
              <input type="text" className="field__in" placeholder="Ваше имя"/>
            </label>
            <label className="field">
              <span className="field__lbl">Телефон *</span>
              <div className="field__phone">
                <span className="field__prefix">+380</span>
                <input
                  type="tel"
                  className="field__in field__in--phone"
                  placeholder="66 123 45 67"
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                  required
                />
              </div>
            </label>
            <label className="field">
              <span className="field__lbl">Диаметр</span>
              <select className="field__in" defaultValue="">
                <option value="" disabled>Выберите...</option>
                {DIAMETERS.map(d => <option key={d} value={d}>Ø{d} мм</option>)}
                <option value="unknown">Не знаю</option>
              </select>
            </label>
            <label className="field">
              <span className="field__lbl">Источник тепла</span>
              <select className="field__in" defaultValue="">
                <option value="" disabled>Выберите...</option>
                <option>Твердотопливный котёл</option>
                <option>Газовый котёл</option>
                <option>Камин</option>
                <option>Банная печь</option>
                <option>Другое</option>
              </select>
            </label>
            <label className="field field--full">
              <span className="field__lbl">Комментарий</span>
              <textarea className="field__in field__in--area" rows={3} placeholder="Длина дымохода, особенности монтажа, вопросы..."/>
            </label>
            <label className="consent">
              <input type="checkbox" checked={agree} onChange={e => setAgree(e.target.checked)}/>
              <span>Согласен на обработку персональных данных</span>
            </label>
            <button type="submit" className="btn btn--primary btn--full btn--lg" disabled={!agree || !phone}>
              Отправить заявку <ArrowIcon size={18}/>
            </button>

            <div className="form__divider"><span>или напишите сразу в мессенджер</span></div>

            <div className="form__msgs">
              <a href="viber://chat?number=+380668698159" className="btn btn--viber btn--lg">
                <ViberIcon size={22}/> Написать в Viber
              </a>
              <a href="https://t.me/sofdim" className="btn btn--tg btn--lg">
                <TelegramIcon size={22}/> Написать в Telegram
              </a>
            </div>
          </form>
        ) : (
          <div className="form__success">
            <div className="form__success-icon">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <circle cx="24" cy="24" r="22" stroke="#FF6B1A" strokeWidth="2"/>
                <path d="M14 24l7 7 14-14" stroke="#FF6B1A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3>Заявка отправлена</h3>
            <p>Перезвоним за 15 минут в рабочее время. А пока можете написать нам в мессенджер — ответим сразу.</p>
            <button className="linkbtn" onClick={() => setSent(false)}>← Отправить ещё одну</button>
          </div>
        )}
      </div>
    </section>
  );
}

// ============== FAQ ==============
function FAQ() {
  const items = [
    { q: 'Какую сталь выбрать — 201, 304 или 321?', a: 'AISI 201 — для газовых котлов с невысокой температурой. AISI 304 — универсальный выбор, твёрдотопливные котлы и камины до 600 °C. AISI 321 — стабилизированная титаном, для банных печей и высоких температур до 850 °C.' },
    { q: 'Какую толщину стенки взять?', a: 'Для газовых котлов достаточно 0,6 мм. Для твердотопливных котлов и каминов — 0,8 мм. Для банных печей и длительной эксплуатации на высоких температурах — 1,0 мм.' },
    { q: 'Чем отличаются одностенные от сэндвич-дымоходов?', a: 'Одностенные — труба без утеплителя, подходит для внутренних участков дымохода и там, где поверхность не контактирует с горючими материалами. Сэндвич — двойная труба с базальтовой изоляцией 25 или 50 мм между стенками, используется снаружи дома и при проходе через перекрытия.' },
    { q: 'Сколько стоит доставка?', a: 'Бесплатная доставка по Украине при заказе от 8 000 ₴. Отправляем «Новой поштой» или прямой адресной доставкой. Срок — 1–3 рабочих дня с момента оплаты.' },
    { q: 'Есть ли гарантия?', a: 'Да, заводская гарантия на всю продукцию. Работаем напрямую с покупателем без посредников — по любым вопросам можно обратиться в производственный цех.' },
    { q: 'Как произвести монтаж — сами или мастер?', a: 'Комплект собирается без сварки на хомутах, монтаж реально выполнить самостоятельно, следуя инструкции. При сложной конфигурации (несколько этажей, проходы через перекрытия) рекомендуем пригласить мастера — можем порекомендовать проверенного специалиста в вашем регионе.' },
  ];
  const [open, setOpen] = React.useState(0);
  return (
    <section className="faq" id="faq">
      <div className="section__head">
        <span className="eyebrow">Частые вопросы</span>
        <h2 className="section__title">FAQ</h2>
      </div>
      <div className="faq__list">
        {items.map((it, i) => (
          <div key={i} className={`faqrow ${open === i ? 'faqrow--open' : ''}`}>
            <button className="faqrow__q" onClick={() => setOpen(open === i ? -1 : i)}>
              <span>{it.q}</span>
              <ChevronIcon open={open === i}/>
            </button>
            <div className="faqrow__a-wrap">
              <div className="faqrow__a">{it.a}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ============== FOOTER ==============
function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__col footer__col--brand">
          <a href="#top" className="logo logo--footer">
            <span className="logo__mark">◢◣</span>
            <span className="logo__text">SOFDIM</span>
          </a>
          <p className="footer__lede">
            Производство дымоходов из нержавеющей стали в Украине.
            Прямая отгрузка с цеха.
          </p>
          <div className="footer__dstu">ДСТУ · сертификат на партию</div>
        </div>

        <div className="footer__col">
          <div className="footer__h">Каталог</div>
          <a href="#config">Одностенные</a>
          <a href="#config">Сэндвич <span className="footer__pill">Скоро</span></a>
          <a href="#kit">Фитинги</a>
          <a href="#kit">Комплектующие</a>
        </div>

        <div className="footer__col">
          <div className="footer__h">Помощь</div>
          <a href="#faq">FAQ</a>
          <a href="#order">Как заказать</a>
          <a href="#form">Просчёт комплекта</a>
          <a href="#">Инструкция по монтажу</a>
        </div>

        <div className="footer__col footer__col--contact">
          <div className="footer__h">Контакты</div>
          <a href="tel:+380668698159" className="footer__phone">+380 66 869 81 59</a>
          <a href="mailto:hi@sofdim.com" className="footer__email">hi@sofdim.com</a>
          <div className="footer__msgrow">
            <a href="viber://chat?number=+380668698159" className="msg-icon msg-icon--viber msg-icon--lg" aria-label="Viber">
              <ViberIcon size={26}/>
            </a>
            <a href="https://t.me/sofdim" className="msg-icon msg-icon--tg msg-icon--lg" aria-label="Telegram">
              <TelegramIcon size={26}/>
            </a>
          </div>
          <div className="footer__hours">
            <div>Пн–Пт · 9:00–19:00</div>
            <div>Сб · 10:00–16:00</div>
            <div>Вс · выходной</div>
          </div>
        </div>
      </div>
      <div className="footer__strip">
        <div>© 2026 SOFDIM · Всі права захищені</div>
        <div className="footer__strip-right">
          <span>ДСТУ</span>
          <span>·</span>
          <a href="#">Политика конфиденциальности</a>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, {
  TopBar, Hero, USP, Features, Configurator, Kit, OrderSteps, OrderForm, FAQ, Footer
});
