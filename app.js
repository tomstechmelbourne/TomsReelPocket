/* Tom's Reel Pocket — the collection on the phone, offline.
   Data comes from Tom's Reel as TomsReel-Pocket.json ("Update"); changes go back as
   TomsReel-Changes-<time>.json ("Send to computer"). Nothing is sent to any server. */
"use strict";
const VERSION = "1.0.0";

// ------------------------------------------------------------------ texts (English main, Vietnamese second)
const T = {
  en: {
    search_ph: "Do I have it? Name or barcode…", scan: "Scan", close: "Close", scan_type: "Type the barcode instead",
    tab_search: "Search", tab_fav: "Favourites", tab_wish: "Wish list", tab_more: "Update",
    all: "All", have_it: "✓ You already have it", have_n: "{n} matches in your collection",
    not_have: "✗ Not in your collection", not_have_sub: "Nothing matches “{q}”.",
    on_wish: "On your wish list", max_price: "pay at most ${p}", add_wish: "+ Add to wish list", bought: "I just bought it",
    kept: "kept in {w}", lent: "lent to {w}", items: "{n} items", no_fav: "No favourites yet. Tap ☆ on any item.",
    wish_title: "Wish list", wish_empty: "Nothing on the wish list. Search for something you don't have and tap “Add to wish list”.",
    wish_add: "Add to wish list", wish_edit: "Change", f_title: "Title", f_artist: "Artist / director", f_format: "Format",
    f_year: "Year", f_max: "Pay at most ($)", f_barcode: "Barcode", f_notes: "Notes", f_price: "Price paid ($)",
    f_store: "Where", save: "Save", cancel: "Cancel", delete: "Delete", need_title: "Please type the title.",
    bought_title: "I just bought it", bought_saved: "Saved. It goes into Tom's Reel next time you “Send to computer”.",
    wish_saved: "Saved to the wish list.", deleted: "Removed.",
    welcome: "Welcome to Tom's Reel Pocket",
    welcome_text: "On the computer, open Tom's Reel → “Phone (Pocket)” → “Send to phone”. Then tap “Update from Tom's Reel” here and pick TomsReel-Pocket.json in Google Drive.",
    update: "Update from Tom's Reel", update_text: "Pick TomsReel-Pocket.json (Google Drive → Tom's Reel folder).",
    updated: "Updated: {n} items, {w} on the wish list.", bad_file: "That is not a Tom's Reel Pocket file.",
    send: "Send to computer", send_text: "Saves your wish list changes, things you bought and favourites as a file. Save it in Google Drive → Tom's Reel folder, then in Tom's Reel press “Take in phone changes”.",
    nothing_to_send: "Nothing new to send.", pending: "{n} change(s) waiting to go to the computer.", all_sent: "Everything is in Tom's Reel.",
    last_update: "Collection from: {d}", never: "not yet", text_size: "Text size", about: "About",
    about_text: "Tom's Reel Pocket {v} · One of Tom's Tech Products. Idea: Tom's Tech · Built by Claude (Anthropic). Your collection stays on this phone.",
    install: "Add Pocket to the home screen: Chrome menu ⋮ → “Add to Home screen”.",
    no_detector: "This browser can't read barcodes with the camera. Open Pocket in Chrome, or type the barcode.",
    camera_no: "The camera could not be opened: {e}", point_camera: "Point the camera at the barcode",
    fav_on: "★ Added to favourites", fav_off: "Removed from favourites", shared: "File ready — save it to Google Drive.",
    by_format: "Browse", rating: "rating", counts: "In the collection",
  },
  vi: {
    search_ph: "Đã có chưa? Gõ tên hoặc mã vạch…", scan: "Quét", close: "Đóng", scan_type: "Gõ mã vạch thay vì quét",
    tab_search: "Tìm", tab_fav: "Ưu thích", tab_wish: "Muốn mua", tab_more: "Cập nhật",
    all: "Tất cả", have_it: "✓ Tom đã có món này", have_n: "{n} món khớp trong bộ sưu tập",
    not_have: "✗ Chưa có trong bộ sưu tập", not_have_sub: "Không có món nào khớp “{q}”.",
    on_wish: "Đang trong Muốn mua", max_price: "giá tối đa ${p}", add_wish: "+ Thêm vào Muốn mua", bought: "Vừa mua",
    kept: "cất ở {w}", lent: "cho {w} mượn", items: "{n} món", no_fav: "Chưa có món Ưu thích. Bấm ☆ ở món bất kỳ.",
    wish_title: "Muốn mua", wish_empty: "Chưa có món nào. Tìm một món chưa có rồi bấm “Thêm vào Muốn mua”.",
    wish_add: "Thêm vào Muốn mua", wish_edit: "Sửa", f_title: "Tên", f_artist: "Nghệ sĩ / đạo diễn", f_format: "Định dạng",
    f_year: "Năm", f_max: "Giá tối đa ($)", f_barcode: "Mã vạch", f_notes: "Ghi chú", f_price: "Giá đã trả ($)",
    f_store: "Mua ở đâu", save: "Lưu", cancel: "Hủy", delete: "Xóa", need_title: "Hãy gõ tên.",
    bought_title: "Vừa mua", bought_saved: "Đã lưu. Món này sẽ vào Tom's Reel khi Tom bấm “Gửi về máy tính”.",
    wish_saved: "Đã lưu vào Muốn mua.", deleted: "Đã bỏ.",
    welcome: "Chào mừng đến với Tom's Reel Pocket",
    welcome_text: "Trên máy tính, mở Tom's Reel → “Điện thoại (Pocket)” → “Gửi sang điện thoại”. Rồi bấm “Cập nhật từ Tom's Reel” ở đây và chọn TomsReel-Pocket.json trong Google Drive.",
    update: "Cập nhật từ Tom's Reel", update_text: "Chọn file TomsReel-Pocket.json (Google Drive → thư mục Tom's Reel).",
    updated: "Đã cập nhật: {n} món, {w} món Muốn mua.", bad_file: "Đây không phải file của Tom's Reel Pocket.",
    send: "Gửi về máy tính", send_text: "Lưu các thay đổi Muốn mua, món vừa mua và Ưu thích thành một file. Lưu file vào Google Drive → thư mục Tom's Reel, rồi trong Tom's Reel bấm “Nhận thay đổi từ điện thoại”.",
    nothing_to_send: "Chưa có gì mới để gửi.", pending: "{n} thay đổi đang chờ gửi về máy tính.", all_sent: "Mọi thứ đã vào Tom's Reel.",
    last_update: "Dữ liệu từ: {d}", never: "chưa có", text_size: "Cỡ chữ", about: "Giới thiệu",
    about_text: "Tom's Reel Pocket {v} · One of Tom's Tech Products. Ý tưởng: Tom's Tech · Xây dựng bởi Claude (Anthropic). Bộ sưu tập chỉ nằm trên điện thoại này.",
    install: "Thêm Pocket ra màn hình chính: menu Chrome ⋮ → “Thêm vào màn hình chính”.",
    no_detector: "Trình duyệt này không đọc được mã vạch bằng camera. Hãy mở Pocket bằng Chrome, hoặc gõ mã vạch.",
    camera_no: "Không mở được camera: {e}", point_camera: "Đưa camera vào mã vạch",
    fav_on: "★ Đã thêm vào Ưu thích", fav_off: "Đã bỏ khỏi Ưu thích", shared: "File đã sẵn sàng — hãy lưu vào Google Drive.",
    by_format: "Xem theo", rating: "điểm", counts: "Trong bộ sưu tập",
  },
};
const FORMATS = ["VHS", "VINYL", "CASSETTE", "CD", "VCD", "DVD", "BLURAY", "UHD", "OTHER"];
const FMT = {
  en: {VHS: "VHS", VINYL: "Vinyl", CASSETTE: "Cassette", CD: "CD", VCD: "VCD", DVD: "DVD", BLURAY: "Blu-ray", UHD: "4K UHD", OTHER: "Other"},
  vi: {VHS: "VHS", VINYL: "Đĩa than", CASSETTE: "Băng cassette", CD: "CD", VCD: "VCD", DVD: "DVD", BLURAY: "Blu-ray", UHD: "4K UHD", OTHER: "Khác"},
};

// ------------------------------------------------------------------ state
const S = {data: null, pending: [], lang: "en", scale: 1, view: "search", fmt: "", q: "", lastSent: ""};

function t(key, args) {
  let s = (T[S.lang] && T[S.lang][key]) || T.en[key] || key;
  if (args) for (const k in args) s = s.split("{" + k + "}").join(args[k]);
  return s;
}
const fmtLabel = f => (FMT[S.lang] || FMT.en)[f || "OTHER"] || f || "";
const esc = s => String(s == null ? "" : s).replace(/[&<>"']/g, c => ({"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"}[c]));
const plain = s => String(s || "").normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/đ/g, "d").replace(/Đ/g, "D").toLowerCase();
const digits = s => String(s || "").replace(/\D/g, "");
const sameCode = (a, b) => { a = digits(a).replace(/^0+/, ""); b = digits(b).replace(/^0+/, ""); return !!a && a === b; };
const uid = () => (crypto.randomUUID ? crypto.randomUUID() : Date.now().toString(36) + Math.random().toString(36).slice(2));
const $ = id => document.getElementById(id);

// ------------------------------------------------------------------ storage (IndexedDB; survives offline)
let dbp = null;
function db() {
  if (!dbp) dbp = new Promise((ok, bad) => {
    const r = indexedDB.open("tomsreel-pocket", 1);
    r.onupgradeneeded = () => r.result.createObjectStore("kv");
    r.onsuccess = () => ok(r.result);
    r.onerror = () => bad(r.error);
  });
  return dbp;
}
async function kvGet(k) {
  const d = await db();
  return new Promise((ok, bad) => { const r = d.transaction("kv").objectStore("kv").get(k); r.onsuccess = () => ok(r.result); r.onerror = () => bad(r.error); });
}
async function kvSet(k, v) {
  const d = await db();
  return new Promise((ok, bad) => { const tx = d.transaction("kv", "readwrite"); tx.objectStore("kv").put(v, k); tx.oncomplete = () => ok(); tx.onerror = () => bad(tx.error); });
}
async function savePending() { await kvSet("pending", S.pending); renderTabs(); }

// ------------------------------------------------------------------ derived views
function items() { return (S.data && S.data.items) || []; }

function isFav(it) {
  let on = !!it.favorite;
  for (const c of S.pending) if (c.type === "fav" && c.item_id === it.id) on = !!c.on;
  return on;
}

function wishes() {
  const list = ((S.data && S.data.wishlist) || []).map(w => ({...w, key: "w" + w.id}));
  const gone = new Set();
  for (const c of S.pending) {
    if (c.type === "wish_add") list.push({...c.wish, local: c.id, key: "l" + c.id});
    else if (c.type === "wish_edit") { const w = list.find(x => x.id === c.wish_id); if (w) Object.assign(w, c.wish); }
    else if (c.type === "wish_del") gone.add(c.wish_id);
    else if (c.type === "bought" && c.wish_id) gone.add(c.wish_id);
  }
  return list.filter(w => !gone.has(w.id)).sort((a, b) => plain(a.title).localeCompare(plain(b.title)));
}

function boughtHere() {
  return S.pending.filter(c => c.type === "bought").map(c => ({...c.item, id: "b" + c.id, justBought: true}));
}

function search(q) {
  q = q.trim();
  if (!q) return [];
  const all = items().concat(boughtHere());
  const d = digits(q);
  if (d.length >= 8 && d.length >= q.replace(/\s/g, "").length - 1) {
    const hits = all.filter(it => sameCode(it.barcode, d));
    if (hits.length) return hits;
  }
  const words = plain(q).split(/\s+/).filter(Boolean);
  const scored = [];
  for (const it of all) {
    const title = plain(it.title) + " " + plain(it.original_title);
    const hay = title + " " + plain([it.artist, it.year, it.label, it.catalog_no, it.barcode].join(" "));
    if (words.every(w => hay.includes(w))) {
      const sc = title.startsWith(words.join(" ")) ? 0 : (words.every(w => title.includes(w)) ? 1 : 2);
      scored.push([sc, plain(it.title), it]);
    }
  }
  scored.sort((a, b) => a[0] - b[0] || a[1].localeCompare(b[1]));
  return scored.map(x => x[2]);
}

// ------------------------------------------------------------------ rendering
const ICONS = {
  search: '<circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.5" y2="16.5"/>',
  fav: '<path d="M12 2.8l2.8 5.8 6.4.9-4.6 4.5 1.1 6.3L12 17.3l-5.7 3 1.1-6.3-4.6-4.5 6.4-.9z"/>',
  wish: '<path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><path d="M3 6h18M16 10a4 4 0 0 1-8 0"/>',
  more: '<path d="M21 12a9 9 0 1 1-3-6.7L21 8M21 3v5h-5"/>',
};
function svg(name) {
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${ICONS[name]}</svg>`;
}

function renderTabs() {
  const n = S.pending.length;
  $("tabs").innerHTML = ["search", "fav", "wish", "more"].map(v =>
    `<button data-view="${v}" class="${S.view === v ? "on" : ""}">${svg(v)}<span>${t("tab_" + v)}${
      v === "more" && n ? `<span class="badge">${n}</span>` : ""}</span></button>`).join("");
}

function thumb(it) {
  if (it.thumb) return `<img class="thumb" src="${it.thumb}" alt="">`;
  return `<div class="thumb">${esc(fmtLabel(it.format))}</div>`;
}

function ratingText(it) {
  if (it.rating_imdb) return `IMDb ${Number(it.rating_imdb).toFixed(1)}`;
  if (it.rating_dg) return `Discogs ${Number(it.rating_dg).toFixed(1)}/5`;
  return "";
}

function itemRow(it) {
  const meta = [it.year, it.location ? t("kept", {w: esc(it.location)}) : ""].filter(Boolean).join(" · ");
  const r = ratingText(it);
  const star = it.justBought ? "" :
    `<button class="star ${isFav(it) ? "on" : ""}" data-fav="${it.id}" aria-label="★">${isFav(it) ? "★" : "☆"}</button>`;
  return `<div class="row">${thumb(it)}<div class="txt">
    <div class="t">${esc(it.title)}</div>${it.artist ? `<div class="a">${esc(it.artist)}</div>` : ""}
    <div class="m"><span class="pill fmt">${esc(fmtLabel(it.format))}</span>${r ? `<span class="pill rate">★ ${r}</span>` : ""}${
      it.loan_to ? `<span class="pill loan">${t("lent", {w: esc(it.loan_to)})}</span>` : ""}${it.justBought ? `<span class="pill rate">${t("bought")}</span>` : ""} ${meta}</div>
    </div>${star}</div>`;
}

function wishRow(w) {
  const meta = [w.format ? fmtLabel(w.format) : "", w.year, w.max_price ? t("max_price", {p: w.max_price}) : ""].filter(Boolean).join(" · ");
  return `<div class="row"><div class="thumb" style="background:#FFF1D9;color:#7A4A00">♡</div><div class="txt">
    <div class="t">${esc(w.title)}</div>${w.artist ? `<div class="a">${esc(w.artist)}</div>` : ""}
    <div class="m">${esc(meta)}${w.notes ? " · " + esc(w.notes) : ""}</div></div>
    <div style="display:flex;flex-direction:column;gap:6px">
      <button class="btn primary" data-buywish="${w.key}">${t("bought")}</button>
      <button class="btn" data-editwish="${w.key}">${t("wish_edit")}</button></div></div>`;
}

function render() {
  renderTabs();
  $("searchrow").style.display = S.view === "search" ? "flex" : "none";
  const m = $("main");
  if (!S.data && S.view !== "more") {
    m.innerHTML = `<div class="card section"><h2>${t("welcome")}</h2><p>${t("welcome_text")}</p>
      <button class="btn primary block" data-act="update">${t("update")}</button><p>${t("install")}</p></div>`;
    return;
  }
  if (S.view === "search") return renderSearch(m);
  if (S.view === "fav") {
    const favs = items().filter(isFav).sort((a, b) => plain(a.title).localeCompare(plain(b.title)));
    m.innerHTML = `<h2>★ ${t("tab_fav")} · ${t("items", {n: favs.length})}</h2>` +
      (favs.length ? `<div class="list">${favs.map(itemRow).join("")}</div>` : `<div class="empty">${t("no_fav")}</div>`);
    return;
  }
  if (S.view === "wish") {
    const ws = wishes();
    m.innerHTML = `<div style="display:flex;align-items:center;gap:8px"><h2 style="flex:1">${t("wish_title")} · ${ws.length}</h2>
      <button class="btn primary" data-act="addwish">+</button></div>` +
      (ws.length ? `<div class="list">${ws.map(wishRow).join("")}</div>` : `<div class="empty">${t("wish_empty")}</div>`);
    return;
  }
  renderMore(m);
}

function renderSearch(m) {
  const q = S.q.trim();
  const chips = `<div class="chips"><button class="chip ${!S.fmt ? "on" : ""}" data-fmt="">${t("all")}</button>${
    FORMATS.filter(f => items().some(i => i.format === f)).map(f =>
      `<button class="chip ${S.fmt === f ? "on" : ""}" data-fmt="${f}">${esc(fmtLabel(f))}</button>`).join("")}</div>`;
  if (!q) {
    const list = items().filter(i => !S.fmt || i.format === S.fmt).sort((a, b) => plain(a.title).localeCompare(plain(b.title)));
    m.innerHTML = chips + `<div class="muted" style="margin-bottom:8px">${t("items", {n: list.length})}</div>` +
      `<div class="list">${list.slice(0, 300).map(itemRow).join("")}</div>`;
    return;
  }
  const hits = search(q).filter(i => !S.fmt || i.format === S.fmt);
  const wq = plain(q).split(/\s+/).filter(Boolean);
  const wishHits = wishes().filter(w => wq.every(x => plain(w.title + " " + (w.artist || "")).includes(x)) || sameCode(w.barcode, q));
  let v = "";
  if (hits.length) {
    const fm = [...new Set(hits.map(h => fmtLabel(h.format)))].join(", ");
    v = `<div class="verdict yes">${t("have_it")}<div class="sub">${t("have_n", {n: hits.length})} · ${esc(fm)}</div></div>`;
  } else {
    v = `<div class="verdict no">${t("not_have")}<div class="sub">${t("not_have_sub", {q: esc(q)})}</div>
      ${wishHits.length ? "" : `<div class="acts"><button class="btn" data-act="addwish-q">${t("add_wish")}</button>
      <button class="btn primary" data-act="bought-q">${t("bought")}</button></div>`}</div>`;
  }
  if (wishHits.length) {
    v += wishHits.map(w => `<div class="verdict wish">${t("on_wish")}: ${esc(w.title)}<div class="sub">${
      w.max_price ? t("max_price", {p: w.max_price}) : ""}${w.notes ? " · " + esc(w.notes) : ""}</div>
      <div class="acts"><button class="btn primary" data-buywish="${w.key}">${t("bought")}</button></div></div>`).join("");
  }
  m.innerHTML = chips + v + `<div class="list">${hits.slice(0, 200).map(itemRow).join("")}</div>`;
}

function renderMore(m) {
  const d = S.data;
  const when = d && d.exported ? new Date(d.exported).toLocaleString(S.lang === "vi" ? "vi-VN" : "en-AU") : t("never");
  const counts = d ? FORMATS.map(f => [f, items().filter(i => i.format === f).length]).filter(x => x[1]) : [];
  m.innerHTML = `
    <div class="card section"><h2>${t("update")}</h2><p>${t("update_text")}</p>
      <p><b>${t("last_update", {d: esc(when)})}</b></p>
      <button class="btn teal block" data-act="update">${t("update")}</button></div>
    <div class="card section"><h2>${t("send")}</h2><p>${t("send_text")}</p>
      <p><b>${S.pending.length ? t("pending", {n: S.pending.length}) : t("all_sent")}</b></p>
      <button class="btn primary block" data-act="send">${t("send")}</button></div>
    ${counts.length ? `<div class="card section"><h2>${t("counts")}</h2><p>${counts.map(([f, n]) =>
      `${esc(fmtLabel(f))}: <b>${n}</b>`).join(" · ")}</p></div>` : ""}
    <div class="card section"><h2>${t("text_size")}</h2><div class="sizes">${[1, 1.15, 1.3].map((s, i) =>
      `<button class="btn ${S.scale === s ? "on" : ""}" data-size="${s}">${["A", "A+", "A++"][i]}</button>`).join("")}</div></div>
    <div class="card section"><h2>${t("about")}</h2><p><b>Focus On One Thing And Do It Well</b></p>
      <p>${t("about_text", {v: VERSION})}</p><p>${t("install")}</p></div>
    <div class="foot">Tom's Reel Pocket ${VERSION}</div>`;
}

// ------------------------------------------------------------------ dialogs
function formatSelect(cur) {
  return `<select id="f_format"><option value="">—</option>${FORMATS.map(f =>
    `<option value="${f}" ${f === cur ? "selected" : ""}>${esc(fmtLabel(f))}</option>`).join("")}</select>`;
}
function field(id, label, val, type = "text", extra = "") {
  return `<div class="field"><label for="${id}">${label}</label><input id="${id}" type="${type}" value="${esc(val || "")}" ${extra}></div>`;
}
function openDialog(html, onSave, onDelete) {
  const dlg = $("dlg");
  $("dlgbody").innerHTML = html + `<div class="acts">${onDelete ? `<button class="btn danger" id="d_del" style="margin-right:auto">${t("delete")}</button>` : ""}
    <button class="btn" id="d_cancel">${t("cancel")}</button><button class="btn primary" id="d_save">${t("save")}</button></div>`;
  $("d_cancel").onclick = () => dlg.close();
  $("d_save").onclick = async () => { if (await onSave() !== false) dlg.close(); };
  if (onDelete) $("d_del").onclick = async () => { await onDelete(); dlg.close(); };
  dlg.showModal();
  const first = $("dlgbody").querySelector("input");
  if (first && !first.value) setTimeout(() => first.focus(), 50);
}
const val = id => ($(id) ? $(id).value.trim() : "");

function wishDialog(w, prefillTitle) {
  w = w || {};
  openDialog(`<h3>${w.key ? t("wish_edit") : t("wish_add")}</h3>
    ${field("f_title", t("f_title"), w.title || prefillTitle)}${field("f_artist", t("f_artist"), w.artist)}
    <div class="field"><label>${t("f_format")}</label>${formatSelect(w.format)}</div>
    ${field("f_year", t("f_year"), w.year, "number", 'inputmode="numeric"')}
    ${field("f_max", t("f_max"), w.max_price, "number", 'inputmode="decimal" step="0.01"')}
    ${field("f_barcode", t("f_barcode"), w.barcode, "text", 'inputmode="numeric"')}${field("f_notes", t("f_notes"), w.notes)}`,
  async () => {
    const wish = {title: val("f_title"), artist: val("f_artist"), format: val("f_format"), year: val("f_year"),
      max_price: val("f_max"), barcode: val("f_barcode"), notes: val("f_notes")};
    if (!wish.title) { toast(t("need_title")); return false; }
    if (w.local) { const c = S.pending.find(x => x.id === w.local); if (c) c.wish = wish; }
    else if (w.id) S.pending.push({id: uid(), type: "wish_edit", wish_id: w.id, wish, at: new Date().toISOString()});
    else S.pending.push({id: uid(), type: "wish_add", wish, at: new Date().toISOString()});
    await savePending(); toast(t("wish_saved")); render();
  },
  w.key ? async () => {
    if (w.local) S.pending = S.pending.filter(x => x.id !== w.local);
    else S.pending.push({id: uid(), type: "wish_del", wish_id: w.id, at: new Date().toISOString()});
    await savePending(); toast(t("deleted")); render();
  } : null);
}

function boughtDialog(base, wish) {
  base = base || {};
  openDialog(`<h3>${t("bought_title")}</h3>
    ${field("f_title", t("f_title"), base.title)}${field("f_artist", t("f_artist"), base.artist)}
    <div class="field"><label>${t("f_format")}</label>${formatSelect(base.format)}</div>
    ${field("f_price", t("f_price"), "", "number", 'inputmode="decimal" step="0.01"')}
    ${field("f_store", t("f_store"), localStorageGet("store") || "JB Hi-Fi")}
    ${field("f_barcode", t("f_barcode"), base.barcode, "text", 'inputmode="numeric"')}`,
  async () => {
    const item = {title: val("f_title"), artist: val("f_artist"), format: val("f_format") || "OTHER", price: val("f_price"),
      store: val("f_store"), barcode: val("f_barcode"), year: base.year || ""};
    if (!item.title) { toast(t("need_title")); return false; }
    localStorageSet("store", item.store);
    const ch = {id: uid(), type: "bought", item, at: new Date().toISOString()};
    if (wish && wish.local) S.pending = S.pending.filter(x => x.id !== wish.local);
    else if (wish && wish.id) ch.wish_id = wish.id;
    S.pending.push(ch);
    await savePending(); toast(t("bought_saved")); render();
  });
}
function localStorageGet(k) { try { return localStorage.getItem("trp_" + k); } catch (e) { return null; } }
function localStorageSet(k, v) { try { localStorage.setItem("trp_" + k, v); } catch (e) { /* private mode */ } }

// ------------------------------------------------------------------ update / send
async function importFile(file) {
  try {
    const data = JSON.parse(await file.text());
    if (!data || data.app !== "TomsReelPocket" || !Array.isArray(data.items)) throw new Error("bad");
    S.data = data;
    await kvSet("data", data);
    const applied = new Set(data.applied || []);
    S.pending = S.pending.filter(c => !applied.has(c.id));
    await savePending();
    toast(t("updated", {n: data.items.length, w: (data.wishlist || []).length}));
    render();
  } catch (e) {
    toast(t("bad_file"));
  }
}

async function sendChanges() {
  if (!S.pending.length) { toast(t("nothing_to_send")); return; }
  const now = new Date();
  const pad = n => String(n).padStart(2, "0");
  const stamp = `${now.getFullYear()}${pad(now.getMonth() + 1)}${pad(now.getDate())}-${pad(now.getHours())}${pad(now.getMinutes())}`;
  const body = JSON.stringify({app: "TomsReelPocket", schema: 1, sent: now.toISOString(), pocket: VERSION, changes: S.pending}, null, 1);
  const name = `TomsReel-Changes-${stamp}.json`;
  const file = new File([body], name, {type: "application/json"});
  try {
    if (navigator.canShare && navigator.canShare({files: [file]})) {
      await navigator.share({files: [file], title: name});
      toast(t("shared"));
      return;
    }
  } catch (e) {
    if (e && e.name === "AbortError") return;
  }
  const a = document.createElement("a");
  a.href = URL.createObjectURL(file);
  a.download = name;
  document.body.appendChild(a);
  a.click();
  setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 2000);
  toast(t("shared"));
}

// ------------------------------------------------------------------ barcode scanner (Chrome on Android)
let stream = null, scanning = false;
async function openScanner() {
  if (!("BarcodeDetector" in window)) { toast(t("no_detector")); typeBarcode(); return; }
  let detector;
  try { detector = new BarcodeDetector({formats: ["ean_13", "ean_8", "upc_a", "upc_e"]}); }
  catch (e) { toast(t("no_detector")); typeBarcode(); return; }
  $("scanmsg").textContent = t("point_camera");
  $("scanner").style.display = "flex";
  try {
    stream = await navigator.mediaDevices.getUserMedia({video: {facingMode: "environment", width: {ideal: 1280}}, audio: false});
  } catch (e) {
    closeScanner(); toast(t("camera_no", {e: e.message || e.name})); return;
  }
  const video = $("video");
  video.srcObject = stream;
  await video.play().catch(() => {});
  scanning = true;
  const loop = async () => {
    if (!scanning) return;
    try {
      const codes = await detector.detect(video);
      const hit = codes.find(c => digits(c.rawValue).length >= 8);
      if (hit) {
        beep(); if (navigator.vibrate) navigator.vibrate(80);
        closeScanner();
        S.q = digits(hit.rawValue); $("q").value = S.q; S.view = "search"; render();
        return;
      }
    } catch (e) { /* frame not ready */ }
    setTimeout(loop, 220);
  };
  loop();
}
function closeScanner() {
  scanning = false;
  if (stream) stream.getTracks().forEach(tr => tr.stop());
  stream = null;
  $("scanner").style.display = "none";
}
function typeBarcode() {
  closeScanner();
  const q = $("q");
  q.setAttribute("inputmode", "numeric");
  q.value = ""; S.q = ""; render(); q.focus();
}
function beep() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const o = ctx.createOscillator(), g = ctx.createGain();
    o.frequency.value = 1320; g.gain.value = 0.12; o.connect(g); g.connect(ctx.destination);
    o.start(); o.stop(ctx.currentTime + 0.12);
  } catch (e) { /* no sound */ }
}

// ------------------------------------------------------------------ misc
let toastTimer = 0;
function toast(msg) {
  const el = $("toast");
  el.textContent = msg; el.classList.add("show");
  clearTimeout(toastTimer); toastTimer = setTimeout(() => el.classList.remove("show"), 3200);
}
function applyLang() {
  document.documentElement.lang = S.lang;
  document.querySelectorAll("[data-t]").forEach(el => { el.textContent = t(el.dataset.t); });
  $("q").placeholder = t("search_ph");
  document.querySelectorAll(".lang button").forEach(b => b.classList.toggle("on", b.dataset.lang === S.lang));
}
function findWish(key) { return wishes().find(w => w.key === key); }

document.addEventListener("click", async e => {
  const b = e.target.closest("button");
  if (!b) return;
  if (b.dataset.view) { S.view = b.dataset.view; render(); window.scrollTo(0, 0); return; }
  if (b.dataset.lang) { S.lang = b.dataset.lang; localStorageSet("lang", S.lang); applyLang(); render(); return; }
  if (b.dataset.fmt !== undefined) { S.fmt = b.dataset.fmt; render(); return; }
  if (b.dataset.size) { S.scale = Number(b.dataset.size); localStorageSet("scale", S.scale);
    document.documentElement.style.setProperty("--scale", S.scale); render(); return; }
  if (b.dataset.fav) {
    const it = items().find(i => String(i.id) === b.dataset.fav);
    if (!it) return;
    const on = !isFav(it);
    S.pending = S.pending.filter(c => !(c.type === "fav" && c.item_id === it.id));
    if (on !== !!it.favorite) S.pending.push({id: uid(), type: "fav", item_id: it.id, on, at: new Date().toISOString()});
    await savePending(); toast(on ? t("fav_on") : t("fav_off")); render(); return;
  }
  if (b.dataset.buywish) { const w = findWish(b.dataset.buywish); if (w) boughtDialog(w, w); return; }
  if (b.dataset.editwish) { const w = findWish(b.dataset.editwish); if (w) wishDialog(w); return; }
  switch (b.dataset.act) {
    case "update": $("filein").click(); break;
    case "send": sendChanges(); break;
    case "addwish": wishDialog(null, ""); break;
    case "addwish-q": wishDialog(null, /^\d{8,}$/.test(S.q.trim()) ? "" : S.q.trim()); break;
    case "bought-q": boughtDialog(/^\d{8,}$/.test(S.q.trim()) ? {barcode: S.q.trim()} : {title: S.q.trim()}); break;
  }
});
$("filein").addEventListener("change", e => { const f = e.target.files[0]; if (f) importFile(f); e.target.value = ""; });
let qTimer = 0;
$("q").addEventListener("input", e => { clearTimeout(qTimer); qTimer = setTimeout(() => { S.q = e.target.value; render(); }, 120); });
$("qclear").onclick = () => { $("q").value = ""; S.q = ""; $("q").setAttribute("inputmode", "search"); render(); $("q").focus(); };
$("scan").onclick = openScanner;
$("scanclose").onclick = closeScanner;
$("scantype").onclick = typeBarcode;

(async function start() {
  S.lang = localStorageGet("lang") || ((navigator.language || "").startsWith("vi") ? "vi" : "en");
  S.scale = Number(localStorageGet("scale")) || 1;
  document.documentElement.style.setProperty("--scale", S.scale);
  try {
    S.data = (await kvGet("data")) || null;
    S.pending = (await kvGet("pending")) || [];
  } catch (e) { S.data = null; S.pending = []; }
  applyLang();
  render();
  if ("serviceWorker" in navigator) navigator.serviceWorker.register("sw.js").catch(() => {});
})();
