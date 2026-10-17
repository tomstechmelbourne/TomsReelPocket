/* Tom's Reel Pocket — the collection on the phone, offline.
   Data comes from Tom's Reel as TomsReel-Pocket.json ("Update"); changes go back as
   TomsReel-Changes-<time>.json ("Send to computer"). Nothing is sent to any server. */
"use strict";
const VERSION = "1.3.0";

// ------------------------------------------------------------------ texts (English main, Vietnamese second)
// Titles, tabs and buttons Use Title Case; hints and messages are normal sentences.
const T = {
  en: {
    search_ph: "Do I have it? Type a name…", close: "Close",
    tab_search: "Search", tab_fav: "Favourites", tab_wish: "Wish List", tab_more: "Update",
    all: "All", have_it: "✓ You already have it", near: "≈ Close match — is it this one?", near_sub: "The name is spelt a little differently. Check before you buy.",
    not_have: "✗ Not in your collection", not_have_sub: "Nothing matches “{q}”.",
    have: "Have", not_yet: "Not yet",
    on_wish: "On your wish list", max_price: "pay at most ${p}", add_wish: "+ Add To Wish List", bought: "I Just Bought It",
    kept: "kept in {w}", kept_no: "kept in {w} · no. {n}", lent: "lent to {w}", sealed: "Sealed",
    no_fav: "No favourites yet. Tap ☆ on any tape or disc.",
    wish_title: "Wish List", wish_empty: "Nothing on the wish list. Search for something you don't have and tap “Add To Wish List”.",
    wish_add: "Add To Wish List", wish_edit: "Change", f_title: "Title", f_artist: "Artist / Director", f_format: "Format",
    f_year: "Year", f_max: "Pay At Most ($)", f_barcode: "Barcode", f_notes: "Notes", f_price: "Price Paid ($)",
    f_store: "Where", save: "Save", cancel: "Cancel", delete: "Delete", need_title: "Please type the title.",
    bought_title: "I Just Bought It", bought_saved: "Saved. It goes into Tom's Reel next time you “Send To Computer”.",
    wish_saved: "Saved to the wish list.", deleted: "Removed.",
    welcome: "Welcome To Tom's Reel Pocket",
    welcome_text: "On the computer, open Tom's Reel → “Phone (Pocket)” → “Send To Phone”. Then tap “Update From Tom's Reel” here and pick TomsReel-Pocket.json in Google Drive.",
    update: "Update From Tom's Reel", update_text: "Pick TomsReel-Pocket.json (Google Drive → Tom's Reel folder).",
    updated: "Updated: {n}, {w} on the wish list.", bad_file: "That is not a Tom's Reel Pocket file.",
    send: "Send To Computer", send_text: "Saves your wish list changes, things you bought and favourites as a file. Save it in Google Drive → Tom's Reel folder, then in Tom's Reel press “Take In Phone Changes”.",
    nothing_to_send: "Nothing new to send.", pending: "{n} change(s) waiting to go to the computer.", all_sent: "Everything is in Tom's Reel.",
    last_update: "Collection from: {d}", never: "not yet", text_size: "Text Size", about: "About",
    about_text: "Tom's Reel Pocket {v} · One of Tom's Technology Solutions Products. Idea: Tom's Technology Solutions · Built by Claude (Anthropic). Your collection stays on this phone.",
    tape: "Tape", disc: "Disc", tapes: "tapes", discs: "discs", eps: "episodes {e}", se_have: "{have}/{total} {word}", se_missing: "missing {w} {n}", se_complete: "complete set {n}",
    install: "Add Pocket to the home screen: Chrome menu ⋮ → “Add to Home screen”.",
    look: "Light or dark follows your phone's setting.",
    fav_on: "★ Added to favourites", fav_off: "Removed from favourites", shared: "File ready — save it to Google Drive.",
    counts: "In The Collection",
    tab_people: "Artists", people_title: "Artists", people_empty: "No artists yet: update from Tom's Reel.",
    role_singer: "Singers & Bands", role_composer: "Composers", role_director: "Directors", role_actor: "Actors",
    p_have: "You have ({n})", p_missing: "Not yet ({n})", p_missing_none: "Open the artist in Tom's Reel and tap “Look Up Online” to see what you don't have yet.",
    p_back: "‹ All Artists", p_add: "+ Wish", p_born: "born {y}", p_find: "Find an artist…",
    k_album: "album", k_movie: "film", k_tv: "TV",
  },
  vi: {
    search_ph: "Đã có chưa? Gõ tên…", close: "Đóng",
    tab_search: "Tìm", tab_fav: "Ưu Thích", tab_wish: "Muốn Mua", tab_more: "Cập Nhật",
    all: "Tất Cả", have_it: "✓ Tom đã có rồi", near: "≈ Gần đúng — có phải băng đĩa này?", near_sub: "Tên gõ hơi khác một chút. Kiểm tra lại trước khi mua.",
    not_have: "✗ Chưa có trong bộ sưu tập", not_have_sub: "Không có băng đĩa nào khớp “{q}”.",
    have: "Đã có", not_yet: "Chưa có",
    on_wish: "Đang trong Muốn Mua", max_price: "giá tối đa ${p}", add_wish: "+ Thêm Vào Muốn Mua", bought: "Vừa Mua",
    kept: "cất ở {w}", kept_no: "cất ở {w} · số {n}", lent: "cho {w} mượn", sealed: "Nguyên Seal",
    no_fav: "Chưa có băng đĩa ưu thích. Bấm ☆ ở băng đĩa bất kỳ.",
    wish_title: "Muốn Mua", wish_empty: "Chưa có gì. Tìm một băng đĩa chưa có rồi bấm “Thêm Vào Muốn Mua”.",
    wish_add: "Thêm Vào Muốn Mua", wish_edit: "Sửa", f_title: "Tên", f_artist: "Nghệ Sĩ / Đạo Diễn", f_format: "Định Dạng",
    f_year: "Năm", f_max: "Giá Tối Đa ($)", f_barcode: "Mã Vạch", f_notes: "Ghi Chú", f_price: "Giá Đã Trả ($)",
    f_store: "Mua Ở Đâu", save: "Lưu", cancel: "Hủy", delete: "Xóa", need_title: "Hãy gõ tên.",
    bought_title: "Vừa Mua", bought_saved: "Đã lưu. Băng đĩa này sẽ vào Tom's Reel khi Tom bấm “Gửi Về Máy Tính”.",
    wish_saved: "Đã lưu vào Muốn Mua.", deleted: "Đã bỏ.",
    welcome: "Chào Mừng Đến Với Tom's Reel Pocket",
    welcome_text: "Trên máy tính, mở Tom's Reel → “Điện Thoại (Pocket)” → “Gửi Sang Điện Thoại”. Rồi bấm “Cập Nhật Từ Tom's Reel” ở đây và chọn TomsReel-Pocket.json trong Google Drive.",
    update: "Cập Nhật Từ Tom's Reel", update_text: "Chọn file TomsReel-Pocket.json (Google Drive → thư mục Tom's Reel).",
    updated: "Đã cập nhật: {n}, {w} trong Muốn Mua.", bad_file: "Đây không phải file của Tom's Reel Pocket.",
    send: "Gửi Về Máy Tính", send_text: "Lưu các thay đổi Muốn Mua, băng đĩa vừa mua và Ưu Thích thành một file. Lưu file vào Google Drive → thư mục Tom's Reel, rồi trong Tom's Reel bấm “Nhận Thay Đổi Từ Điện Thoại”.",
    nothing_to_send: "Chưa có gì mới để gửi.", pending: "{n} thay đổi đang chờ gửi về máy tính.", all_sent: "Mọi thứ đã vào Tom's Reel.",
    last_update: "Dữ liệu từ: {d}", never: "chưa có", text_size: "Cỡ Chữ", about: "Giới Thiệu",
    about_text: "Tom's Reel Pocket {v} · One of Tom's Technology Solutions Products. Ý tưởng: Tom's Technology Solutions · Xây dựng bởi Claude (Anthropic). Bộ sưu tập chỉ nằm trên điện thoại này.",
    tape: "Băng", disc: "Đĩa", tapes: "băng", discs: "đĩa", eps: "tập {e}", se_have: "{have}/{total} {word}", se_missing: "thiếu {w} {n}", se_complete: "đủ bộ {n}",
    install: "Thêm Pocket ra màn hình chính: menu Chrome ⋮ → “Thêm vào màn hình chính”.",
    look: "Sáng hay tối tự theo cài đặt của điện thoại.",
    fav_on: "★ Đã thêm vào Ưu Thích", fav_off: "Đã bỏ khỏi Ưu Thích", shared: "File đã sẵn sàng — hãy lưu vào Google Drive.",
    counts: "Trong Bộ Sưu Tập",
    tab_people: "Nghệ Sỹ", people_title: "Nghệ Sỹ", people_empty: "Chưa có nghệ sỹ: cập nhật từ Tom's Reel.",
    role_singer: "Ca Sĩ & Ban Nhạc", role_composer: "Nhạc Sĩ / Tác Giả", role_director: "Đạo Diễn", role_actor: "Diễn Viên",
    p_have: "Đã có ({n})", p_missing: "Chưa có ({n})", p_missing_none: "Mở nghệ sỹ này trong Tom's Reel và bấm “Tìm Thông Tin Trên Mạng” để biết những gì còn chưa có.",
    p_back: "‹ Tất Cả Nghệ Sỹ", p_add: "+ Muốn Mua", p_born: "sinh {y}", p_find: "Tìm nghệ sỹ…",
    k_album: "album", k_movie: "phim", k_tv: "phim bộ",
  },
};

// ------------------------------------------------------------------ places in the chosen language
// "Shelf A - row 1" <-> "Kệ A - tầng 1", "Box 3" <-> "Thùng 3"; a name Tom wrote himself stays as written
const PLACE_WORDS = [["Shelf", "Kệ"], ["Box", "Thùng"], ["Row", "Tầng"], ["Cabinet", "Tủ"], ["Drawer", "Ngăn Kéo"], ["Crate", "Sọt"], ["Case", "Hộp"]];
function placeWord(w) {
  for (const [en, vi] of PLACE_WORDS) {
    for (const src of [en, vi]) {
      if (w.toLowerCase() === src.toLowerCase()) {
        const out = S.lang === "vi" ? vi : en;
        return w[0] === w[0].toUpperCase() ? out : out[0].toLowerCase() + out.slice(1);
      }
    }
  }
  return "";
}
function placeName(text) {
  if (!text) return "";
  const parts = String(text).trim().split(/(\s+-\s+|,\s+|\s+\/\s+)/);
  const out = [];
  for (let i = 0; i < parts.length; i++) {
    if (i % 2) { out.push(parts[i]); continue; }
    const m = parts[i].trim().match(/^(.+?)\s+([0-9A-Za-z]{1,4})$/);
    if (!m) return text;
    const w = placeWord(m[1]);
    if (!w) return text;
    out.push(w + " " + m[2]);
  }
  return out.join("");
}

// ------------------------------------------------------------------ artists (same rules as Tom's Reel)
const ROLES = ["singer", "composer", "director", "actor"];
const NOT_PERSON = new Set(["various", "various artists", "va", "v.a.", "nhieu ca si", "nhieu nghe si", "unknown", "khong ro", "nhieu tac gia"]);
function splitNames(s) {
  return String(s || "").split(/\s*(?:\/|;|,|&|\+|\bfeat\.?|\bft\.?|\bvà\b|\band\b|\bwith\b)\s*/i)
    .map(x => x.replace(/^[\s.\-–—]+|[\s.\-–—]+$/g, "")).filter(x => x.length > 1 && !NOT_PERSON.has(plain(x)));
}
function isMusic(it) {
  const ct = it.content_type || "";
  return ["music", "karaoke", "concert"].includes(ct) || (!ct && MUSIC.includes(it.format));
}
function peopleOf(it) {
  const out = [];
  if (isMusic(it)) {
    splitNames(it.artist).forEach(n => out.push(["singer", n]));
    String(it.composers || "").split("\n").forEach(l => splitNames(l).forEach(n => out.push(["composer", n])));
  } else {
    splitNames(it.artist).forEach(n => out.push(["director", n]));
    splitNames(it.cast).slice(0, 8).forEach(n => out.push(["actor", n]));
  }
  const seen = new Set();
  return out.filter(([r, n]) => { const k = r + "|" + plain(n); if (seen.has(k)) return false; seen.add(k); return true; });
}
const FORMATS = ["VHS", "VINYL", "CASSETTE", "CD", "VCD", "DVD", "BLURAY", "UHD", "OTHER"];
const VIDEO = ["VHS", "VCD", "DVD", "BLURAY", "UHD"];
const MUSIC = ["VINYL", "CASSETTE", "CD"];
const TAPES = new Set(["VHS", "CASSETTE"]);
const FMT = {
  en: {VHS: "VHS", VINYL: "Vinyl", CASSETTE: "Cassette", CD: "CD", VCD: "VCD", DVD: "DVD", BLURAY: "Blu-ray", UHD: "4K UHD", OTHER: "Other"},
  vi: {VHS: "VHS", VINYL: "Đĩa Than", CASSETTE: "Băng Cassette", CD: "CD", VCD: "VCD", DVD: "DVD", BLURAY: "Blu-ray", UHD: "4K UHD", OTHER: "Khác"},
};

// "3 băng, 7 đĩa" / "3 tapes, 1 record, 6 discs" — never "món" / "items"
function countMedia(list) {
  let tapes = 0, recs = 0, discs = 0;
  for (const it of list) { const f = it.format || "OTHER"; if (TAPES.has(f)) tapes++; else if (f === "VINYL") recs++; else discs++; }
  const vi = S.lang === "vi";
  const parts = [];
  const word = (n, one, many) => `${n} ${n === 1 ? one : many}`;
  if (vi) {
    if (tapes) parts.push(`${tapes} băng`);
    if (recs + discs) parts.push(`${recs + discs} đĩa`);
    return parts.join(", ") || "0 băng đĩa";
  }
  if (tapes) parts.push(word(tapes, "tape", "tapes"));
  if (recs) parts.push(word(recs, "record", "records"));
  if (discs) parts.push(word(discs, "disc", "discs"));
  return parts.join(", ") || "0 tapes or discs";
}

// ------------------------------------------------------------------ TV series: Băng 1, 2, 3 / Đĩa I, II, III
const ROMAN = [[1000, "M"], [900, "CM"], [500, "D"], [400, "CD"], [100, "C"], [90, "XC"], [50, "L"], [40, "XL"], [10, "X"], [9, "IX"], [5, "V"], [4, "IV"], [1, "I"]];
function toRoman(n) { let o = ""; for (const [v, r] of ROMAN) while (n >= v) { o += r; n -= v; } return o; }
function fromRoman(s) {
  s = String(s || "").toUpperCase(); if (!/^[MDCLXVI]+$/.test(s)) return 0;
  const V = {M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1}; let t = 0, prev = 0;
  for (const ch of s.split("").reverse()) { const v = V[ch]; t += v < prev ? -v : v; prev = Math.max(prev, v); }
  return toRoman(t) === s ? t : 0;
}
function seriesInfo(name) { return ((S.data && S.data.series) || {})[name] || {}; }
const unitWord = f => (TAPES.has(f || "") ? t("tape") : t("disc"));
const numText = (n, roman) => (roman ? toRoman(n) : String(n));
function seriesShort(it) {
  if (!it.series || !it.series_no) return "";
  return `${unitWord(it.format)} ${numText(it.series_no, seriesInfo(it.series).roman)}`;
}
function seriesStatus(name) {
  const rows = items().filter(i => i.series === name);
  const info = seriesInfo(name);
  const have = [...new Set(rows.map(r => r.series_no).filter(Boolean))].sort((a, b) => a - b);
  const total = info.total || (have.length ? Math.max(...have) : 0);
  const fmts = new Set(rows.map(r => r.format));
  const word = fmts.size === 1 && TAPES.has([...fmts][0] || "") ? t("tapes") : t("discs");
  const W = fmts.size === 1 ? unitWord([...fmts][0]) : t("disc");
  const missing = []; for (let n = 1; n <= total; n++) if (!have.includes(n)) missing.push(numText(n, info.roman));
  const head = t("se_have", {have: have.length || rows.length, total: total || rows.length, word});
  if (total && !missing.length) return {text: t("se_complete", {n: head}), complete: true};
  return {text: head + (missing.length ? " · " + t("se_missing", {w: W, n: missing.slice(0, 8).join(", ")}) : ""), complete: false};
}
// "thần điêu tập 15" / "băng IV" / "disc 2"
function parseSeriesQuery(q) {
  let ep = 0, no = 0;
  q = q.replace(/\b(?:tập|tap|ep|eps|episode)\s*\.?\s*(\d+)\b/i, (m, n) => { ep = +n; return " "; });
  q = q.replace(/(?:^|\s)(?:băng|bang|đĩa|dia|tape|disc|disk|vol)\s*\.?\s*([0-9]+|[ivxlcdm]+)(?=\s|$)/i, (m, n) => {
    const v = /^\d+$/.test(n) ? +n : fromRoman(n); if (v) { no = v; return " "; } return m; });
  return {q: q.trim(), ep, no};
}
const epRanges = s => [...String(s || "").matchAll(/(\d+)\s*(?:[-–—~]\s*(\d+))?/g)].map(m => [+m[1], +(m[2] || m[1])]);
const hasEp = (it, ep) => epRanges(it.episodes).some(([a, b]) => a <= ep && ep <= b);

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

// Typo-tolerant search over the title, the original / Vietnamese title, artist, year, barcode.
// Each typed word must be found: exactly, as the start of a word, or with a small typing slip.
function editDistance(a, b, max) {
  if (Math.abs(a.length - b.length) > max) return max + 1;
  let prev = Array.from({length: b.length + 1}, (_, k) => k), prev2 = null;
  for (let i = 1; i <= a.length; i++) {
    const cur = [i];
    let best = i;
    for (let j = 1; j <= b.length; j++) {
      let v = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
      if (prev2 && i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) v = Math.min(v, prev2[j - 2] + 1);
      cur.push(v); if (v < best) best = v;
    }
    if (best > max) return max + 1;
    prev2 = prev; prev = cur;
  }
  return prev[b.length];
}
const slack = w => (w.length >= 8 ? 2 : w.length >= 4 ? 1 : 0);

// how well one typed word matches a text: 0 exact, 1 small slip, 9 no
function wordScore(w, words, squashed) {
  if (squashed.includes(w)) return 0;
  const k = slack(w);
  if (!k) return 9;
  for (const h of words) {
    if (editDistance(w, h, k) <= k) return 1;
    if (h.length > w.length && editDistance(w, h.slice(0, w.length), k) <= k) return 1;   // still typing
  }
  return 9;
}

function search(q) {
  q = q.trim();
  if (!q) return [];
  const all = items().concat(boughtHere());
  const d = digits(q);
  if (d.length >= 8 && d.length >= q.replace(/\s/g, "").length - 1) {
    const hits = all.filter(it => sameCode(it.barcode, d));
    if (hits.length) return hits.map(it => ({it, sc: 0}));
  }
  const sq = parseSeriesQuery(q);
  const qw = plain(sq.q).split(/[^a-z0-9]+/).filter(Boolean);
  const qs = qw.join("");
  if (!qw.length && !sq.ep && !sq.no) return [];
  const out = [];
  for (const it of all) {
    if (sq.ep && !hasEp(it, sq.ep)) continue;
    if (sq.no && it.series_no !== sq.no) continue;
    const titles = [plain(it.title), plain(it.original_title), plain(it.series)].filter(Boolean);
    const other = plain([it.artist, it.year, it.label, it.catalog_no, it.barcode, it.composers, it.cast].join(" "));
    const words = (titles.join(" ") + " " + other).split(/[^a-z0-9]+/).filter(Boolean);
    const squashed = titles.map(x => x.replace(/[^a-z0-9]/g, "")).join(" ") + " " + other;
    let total = 0;
    for (const w of qw) { const s = wordScore(w, words, squashed); if (s === 9) { total = 9; break; } total = Math.max(total, s); }
    if (total === 9 && qs.length >= 5) {            // "spiderman" for "Spider-Man", "batmanbegins"
      const sq = titles.map(x => x.replace(/[^a-z0-9]/g, ""));
      if (sq.some(x => x.includes(qs))) total = 0;
      else if (sq.some(x => editDistance(qs, x.slice(0, qs.length), slack(qs)) <= slack(qs))) total = 1;
    }
    if (total === 9) continue;
    const starts = titles.some(x => x.startsWith(qw.join(" "))) ? 0 : 1;
    out.push({it, sc: total * 2 + starts});
  }
  out.sort((a, b) => a.sc - b.sc || plain(a.it.title).localeCompare(plain(b.it.title)));
  return out;
}

// the same film / album on several formats: one card, formats you have and don't have
function works(hits) {
  const map = new Map();
  for (const h of hits) {
    const key = h.it.series ? "series|" + h.it.series :
      plain(h.it.original_title || h.it.title).replace(/[^a-z0-9]/g, "") + "|" + plain(h.it.artist).replace(/[^a-z0-9]/g, "");
    if (!map.has(key)) map.set(key, {key, items: [], sc: h.sc});
    const w = map.get(key); w.items.push(h.it); w.sc = Math.min(w.sc, h.sc);
  }
  return [...map.values()].sort((a, b) => a.sc - b.sc);
}

// ------------------------------------------------------------------ rendering
const ICONS = {
  search: '<circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.5" y2="16.5"/>',
  fav: '<path d="M12 2.8l2.8 5.8 6.4.9-4.6 4.5 1.1 6.3L12 17.3l-5.7 3 1.1-6.3-4.6-4.5 6.4-.9z"/>',
  wish: '<path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><path d="M3 6h18M16 10a4 4 0 0 1-8 0"/>',
  more: '<path d="M21 12a9 9 0 1 1-3-6.7L21 8M21 3v5h-5"/>',
  people: '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0"/><circle cx="17" cy="9" r="2.5"/><path d="M16 14.2a5 5 0 0 1 5.5 4.8"/>',
};
function svg(name) {
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${ICONS[name]}</svg>`;
}

function renderTabs() {
  const n = S.pending.length;
  $("tabs").innerHTML = ["search", "fav", "people", "wish", "more"].map(v =>
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

function whereText(it) {
  if (!it.location) return "";
  const w = esc(placeName(it.location));
  return it.shelf_no ? t("kept_no", {w, n: it.shelf_no}) : t("kept", {w});
}

function itemRow(it) {
  const meta = [it.year, whereText(it)].filter(Boolean).join(" · ");
  const r = ratingText(it);
  const star = it.justBought ? "" :
    `<button class="star ${isFav(it) ? "on" : ""}" data-fav="${it.id}" aria-label="★">${isFav(it) ? "★" : "☆"}</button>`;
  return `<div class="row">${thumb(it)}<div class="txt">
    <div class="t">${esc(it.title)}</div>${it.artist ? `<div class="a">${esc(it.artist)}</div>` : ""}
    <div class="m"><span class="pill fmt">${esc(fmtLabel(it.format))}</span>${seriesShort(it) ? `<span class="pill rate">${esc(seriesShort(it))}</span>` : ""}${it.sealed ? `<span class="pill seal">${t("sealed")}</span>` : ""}${
      r ? `<span class="pill rate">★ ${r}</span>` : ""}${it.age_rating ? `<span class="pill loan">${esc(it.age_rating)}</span>` : ""}${
      it.loan_to ? `<span class="pill loan">${t("lent", {w: esc(it.loan_to)})}</span>` : ""}${it.justBought ? `<span class="pill rate">${t("bought")}</span>` : ""} ${meta}</div>
    </div>${star}</div>`;
}

// one film / album: which formats you have (with where they are) and which you don't
function workCard(w) {
  const first = w.items[0];
  const fams = new Set(w.items.map(i => (VIDEO.includes(i.format) ? "v" : MUSIC.includes(i.format) ? "m" : "o")));
  const family = fams.has("v") ? VIDEO : fams.has("m") ? MUSIC : [];
  const have = new Set(w.items.map(i => i.format || "OTHER"));
  const chipsHave = FORMATS.filter(f => have.has(f)).map(f => `<span class="fm have">✓ ${esc(fmtLabel(f))}</span>`).join("");
  const chipsNot = family.filter(f => !have.has(f)).map(f => `<span class="fm not">${esc(fmtLabel(f))}</span>`).join("");
  w.items.sort((a, b) => (a.series_no || 0) - (b.series_no || 0));
  const wheres = w.items.map(i => {
    const sn = seriesShort(i);
    const bits = [`<b>${esc(sn || fmtLabel(i.format))}</b>`, sn ? esc(fmtLabel(i.format)) : "", i.episodes ? t("eps", {e: esc(i.episodes)}) : "", whereText(i) || ""];
    if (i.sealed) bits.push(t("sealed"));
    if (i.loan_to) bits.push(t("lent", {w: esc(i.loan_to)}));
    const star = i.justBought ? "" : `<button class="star ${isFav(i) ? "on" : ""}" data-fav="${i.id}" aria-label="★" style="font-size:1.4rem;padding:0 4px">${isFav(i) ? "★" : "☆"}</button>`;
    return `<div class="where" style="display:flex;align-items:center;gap:6px"><span style="flex:1">${bits.filter(Boolean).join(" · ")}</span>${star}</div>`;
  }).join("");
  const alt = first.original_title && plain(first.original_title) !== plain(first.title) ? ` <span class="wa">(${esc(first.original_title)})</span>` : "";
  const st = first.series ? seriesStatus(first.series) : null;
  const sline = st ? `<div class="fmts"><span class="fm ${st.complete ? "have" : "not"}" style="${st.complete ? "" : "border:0;background:var(--amber-bg);color:var(--amber-text)"}">${esc(st.text)}</span></div>` : "";
  return `<div class="work"><div class="wt">${esc(first.series || first.title)}${alt}</div>${sline}
    <div class="wa">${esc([first.artist, first.year].filter(Boolean).join(" · "))}</div>
    <div class="fmts">${chipsHave}${chipsNot ? `<span class="fm not" style="border:0;padding-left:2px">${t("not_yet")}:</span>${chipsNot}` : ""}</div>
    ${wheres}</div>`;
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
  $("searchrow").style.display = S.view === "search" ? "block" : "none";
  const m = $("main");
  if (!S.data && S.view !== "more") {
    m.innerHTML = `<div class="card section"><h2>${t("welcome")}</h2><p>${t("welcome_text")}</p>
      <button class="btn primary block" data-act="update">${t("update")}</button><p>${t("install")}</p></div>`;
    return;
  }
  if (S.view === "search") return renderSearch(m);
  if (S.view === "fav") {
    const favs = items().filter(isFav).sort((a, b) => plain(a.title).localeCompare(plain(b.title)));
    m.innerHTML = `<h2>★ ${t("tab_fav")} · ${countMedia(favs)}</h2>` +
      (favs.length ? `<div class="list">${favs.map(itemRow).join("")}</div>` : `<div class="empty">${t("no_fav")}</div>`);
    return;
  }
  if (S.view === "people") return renderPeople(m);
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
    m.innerHTML = chips + `<div class="muted" style="margin-bottom:8px">${countMedia(list)}</div>` +
      `<div class="list">${list.slice(0, 300).map(itemRow).join("")}</div>`;
    return;
  }
  const hits = search(q).filter(h => !S.fmt || h.it.format === S.fmt);
  const sure = hits.filter(h => h.sc < 2), maybe = hits.filter(h => h.sc >= 2);
  const wq = plain(q).split(/\s+/).filter(Boolean);
  const wishHits = wishes().filter(w => wq.every(x => plain(w.title + " " + (w.artist || "")).includes(x)) || sameCode(w.barcode, q));
  let v = "";
  if (sure.length) {
    v = `<div class="verdict yes">${t("have_it")}<div class="sub">${countMedia(sure.map(h => h.it))}</div></div>` +
      works(sure).slice(0, 12).map(workCard).join("");
    if (maybe.length) v += `<div class="verdict near">${t("near")}<div class="sub">${t("near_sub")}</div></div>` +
      works(maybe).slice(0, 6).map(workCard).join("");
  } else if (maybe.length) {
    v = `<div class="verdict near">${t("near")}<div class="sub">${t("near_sub")}</div>
      ${wishHits.length ? "" : `<div class="acts"><button class="btn" data-act="addwish-q">${t("add_wish")}</button>
      <button class="btn primary" data-act="bought-q">${t("bought")}</button></div>`}</div>` + works(maybe).slice(0, 8).map(workCard).join("");
  } else {
    // "thần điêu tập 22": the series is here but not that tape / episode -> say which one is missing
    const sq = parseSeriesQuery(q);
    let sub = t("not_have_sub", {q: esc(q)});
    if (sq.ep || sq.no) {
      const words = plain(sq.q).split(/[^a-z0-9]+/).filter(Boolean);
      const set = [...new Set(items().filter(i => i.series && words.every(w => plain(i.series + " " + (i.original_title || "")).includes(w))).map(i => i.series))][0];
      if (set) sub = `${esc(set)}: ${esc(seriesStatus(set).text)}`;
    }
    v = `<div class="verdict no">${t("not_have")}<div class="sub">${sub}</div>
      ${wishHits.length ? "" : `<div class="acts"><button class="btn" data-act="addwish-q">${t("add_wish")}</button>
      <button class="btn primary" data-act="bought-q">${t("bought")}</button></div>`}</div>`;
  }
  if (wishHits.length) {
    v += wishHits.map(w => `<div class="verdict wish">${t("on_wish")}: ${esc(w.title)}<div class="sub">${
      w.max_price ? t("max_price", {p: w.max_price}) : ""}${w.notes ? " · " + esc(w.notes) : ""}</div>
      <div class="acts"><button class="btn primary" data-buywish="${w.key}">${t("bought")}</button></div></div>`).join("");
  }
  m.innerHTML = chips + v;
}

function personCard(name) {
  return ((S.data && S.data.people) || {})[plain(name).replace(/\s+/g, " ").trim()] || {};
}
function renderPeople(m) {
  if (S.person) {
    const {role, name} = S.person;
    const mine = items().filter(it => peopleOf(it).some(([r, n]) => plain(n) === plain(name)));
    const card = personCard(name);
    const yrs = card.born ? (card.died ? `${card.born} – ${card.died}` : t("p_born", {y: card.born})) : "";
    const miss = card.missing || [];
    m.innerHTML = `<button class="btn" data-act="people-back">${t("p_back")}</button>
      <h2 style="margin-top:10px">${esc(name)}</h2><div class="muted">${esc([t("role_" + role), yrs, card.place].filter(Boolean).join(" · "))}</div>
      <h2>${t("p_have", {n: mine.length})}</h2><div class="list">${mine.map(itemRow).join("")}</div>
      <h2>${t("p_missing", {n: miss.length})}</h2>` + (miss.length ? `<div class="list">${miss.map((w, i) =>
        `<div class="row"><div class="thumb" style="background:#FFF1D9;color:#7A4A00">♡</div><div class="txt"><div class="t">${esc(w.title)}</div>
        <div class="m">${esc([w.year, t("k_" + (w.kind || "album"))].filter(Boolean).join(" · "))}</div></div>
        <button class="btn primary" data-wishwork="${i}">${t("p_add")}</button></div>`).join("")}</div>` : `<div class="empty">${t("p_missing_none")}</div>`);
    return;
  }
  const groups = new Map();
  for (const it of items()) for (const [r, n] of peopleOf(it)) {
    const k = r + "|" + plain(n);
    if (!groups.has(k)) groups.set(k, {role: r, name: n, n: 0});
    groups.get(k).n++;
  }
  const q = plain(S.pq || "");
  const list = [...groups.values()].filter(g => !q || plain(g.name).includes(q))
    .sort((a, b) => ROLES.indexOf(a.role) - ROLES.indexOf(b.role) || plain(a.name).localeCompare(plain(b.name)));
  let html = `<h2>${t("people_title")} · ${groups.size}</h2>
    <input id="pq" type="search" placeholder="${t("p_find")}" value="${esc(S.pq || "")}" style="width:100%;box-sizing:border-box;margin-bottom:8px">`;
  if (!list.length) { m.innerHTML = html + `<div class="empty">${t("people_empty")}</div>`; return; }
  let last = "";
  for (const g of list) {
    if (g.role !== last) { last = g.role; html += `<h2 style="font-size:1rem;margin:14px 0 6px">${t("role_" + g.role)}</h2>`; }
    html += `<button class="btn block" style="text-align:left;margin:4px 0" data-person="${esc(g.role + "|" + g.name)}">${esc(g.name)} <span class="muted">(${g.n})</span></button>`;
  }
  m.innerHTML = html;
  const pq = $("pq");
  pq.oninput = () => { S.pq = pq.value; const pos = pq.selectionStart; renderPeople(m); const n = $("pq"); n.focus(); n.setSelectionRange(pos, pos); };
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
    ${counts.length ? `<div class="card section"><h2>${t("counts")}</h2><p><b>${countMedia(items())}</b></p><p>${counts.map(([f, n]) =>
      `${esc(fmtLabel(f))}: <b>${n}</b>`).join(" · ")}</p></div>` : ""}
    <div class="card section"><h2>${t("text_size")}</h2><div class="sizes">${[1, 1.15, 1.3].map((s, i) =>
      `<button class="btn ${S.scale === s ? "on" : ""}" data-size="${s}">${["A", "A+", "A++"][i]}</button>`).join("")}</div></div>
    <div class="card section"><h2>${t("about")}</h2><p><b>Focus On One Thing And Do It Well</b></p>
      <p>${t("about_text", {v: VERSION})}</p><p>${t("install")}</p><p>${t("look")}</p></div>
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
    toast(t("updated", {n: countMedia(data.items), w: (data.wishlist || []).length}));
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
  if (b.dataset.view) { S.view = b.dataset.view; if (b.dataset.view !== "people") S.person = null; render(); window.scrollTo(0, 0); return; }
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
  if (b.dataset.person) { const [role, ...rest] = b.dataset.person.split("|"); S.person = {role, name: rest.join("|")}; render(); window.scrollTo(0, 0); return; }
  if (b.dataset.wishwork !== undefined && S.person) {
    const w = (personCard(S.person.name).missing || [])[Number(b.dataset.wishwork)];
    if (w) wishDialog({title: w.title, artist: S.person.name, year: w.year, format: ["movie", "tv"].includes(w.kind) ? "DVD" : "CD"});
    return;
  }
  if (b.dataset.buywish) { const w = findWish(b.dataset.buywish); if (w) boughtDialog(w, w); return; }
  if (b.dataset.editwish) { const w = findWish(b.dataset.editwish); if (w) wishDialog(w); return; }
  switch (b.dataset.act) {
    case "update": $("filein").click(); break;
    case "people-back": S.person = null; render(); break;
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
