var languages = [
	"English",
	"Español",
	"Español_Latino",
	"Português",
	"Deutsch",
	"日本",
	"简中",
	"繁中",
	"Français",
	"Italiano",
	"한국어",
	"Nederlands"
];
var lang_code = {
	"English": "en",
	"Español": "es",
	"Español_Latino": "el",
	"Português": "pt",
	"Deutsch": "de",
	"日本": "ja",
	"简中": "zhs",
	"繁中": "zht",
	"Français": "fr",
	"Italiano": "it",
	"한국어": "ko",
	"Nederlands": "ne"
}
var code_lang = {}
for(var n in lang_code)
	code_lang[lang_code[n]] = n;
var regional_suffix = ["Español", "Português", "Français", "Italiano"];
var trailing_fav = ["Español", "Português", "Français", "Italiano"];
var no_spaces = []//"日本", "简中", "繁中"];
var fallbacks = {
	"Español_Latino": "Español"
}
var currentLang = "English";
var fav_cats = 	[
	"Game", "Element", "AdventurePack", "MagicItem", "Trap",
	"Villain", "CreationCrystal", "LandVehicle", "SkyVehicle",
	"SeaVehicle", "Mini", "Lightcore", "EonsElite",
	"Variant"
]
var femme = {
	"Português": ["-a", "Forma Regional"],
	"Español": ["Eeveelución", "Poké Ball", "Forma Regional", "Ave Regional"],
	"Español_Latino": ["Eeveelución", "Poké Ball", "Forma Regional", "Ave Regional"],
	"Italiano": ["Eeveeluzione", "Forma Regionale", "Ultracreatura", "Poké Ball", "Nuova<br/>Evoluzione"],
	"Français": ["Ultra-Chimère", "Poké Ball", "Forme Régionale", "Nouvelle<br/>évolution", "Évolition"]
}
var font_sizes = {
	"Favorite": {
		"English": 18,
		"Français": 23,
		"Español": 25,
		"Italiano": 25,
		"Español_Latino": 25,
		"日本": 22,
		"한국어": 22,
		"Deutsch": 25,
		"Nederlands": 25
	},
	"FavAlone": {
		"English": 25,
		"한국어": 22
	},
	"Bug": {
		"English": 25,
		"Italiano": 20
	},
	"Ghost": {
		"English": 25,
		"Português": 23,
		"日本": 22,
		"Español": 23,
		"Español_Latino": 23
	},
	"Poison": {
		"English": 25,
		"Português": 23
	},
	"GimmickForm": {
		"English": 23,
		"Português": 20,
		"Español": 25,
		"Español_Latino": 25,
		"Deutsch": 20,
		"Italiano": 20,
		"日本": 18,
		"Nederlands": 21
	},
	"Fairy": {
		"English": 25,
		"日本": 18
	},
	"Psychic": {
		"English": 25,
		"日本": 20
	},
	"Dragon": {
		"English": 25,
		"日本": 22
	},
	"Fighting": {
		"English": 25,
		"日本": 22
	},
	"Normal": {
		"English": 25,
		"日本": 22
	},
	"Starter": {
		"English": 25
	},
	"Legend": {
		"English": 25,
		"Français": 23,
		"Deutsch": 20,
		"Italiano": 20
	}
}
function getTranslString (check) {
	if(!translatable[check])
		return "";
	var tr = translatable[check][currentLang];
	if(tr)
		return tr;
	tr = translatable[check][fallbacks[currentLang]];
	if(tr)
		return tr;
	return translatable[check]["English"];
}
var translatable = {
 "btnPrint": {
  "English": "Download Image",
  "Español": "Descargar imagen",
  "Português": "Baixe a imagem",
  "Deutsch": "Bild Herunterladen",
  "日本": "画像をダウンロード",
  "简中": "下载图片",
  "繁中": "下載圖片",
  "Français": "Télécharger l'image",
  "Italiano": "Scarica Immagine",
  "한국어": "이미지 다운로드",
  "Nederlands": "Sla op als plaatje"
 },
 "altLink": {
  "English": "Alternate download link",
  "Español": "Link alternativo de descarga",
  "Português": "Link alternativo para download",
  "Deutsch": "Andere Download Möglichkeit",
  "日本": "二次ダウンロード元",
  "简中": "备用下载链接",
  "繁中": "備用下載鏈接",
  "Français": "Lien alternatif de téléchargement",
  "Italiano": "Link di download alternativo",
  "한국어": "대체 다운로드 링크",
  "Nederlands": "Alternatieve download link"
 },
 "btnExport": {
  "English": "Export Choices",
  "Español": "Exportar selecciones",
  "Português": "Exportar Escolhas",
  "Deutsch": "Auswahl Exportieren",
  "日本": "選択を出力",
  "简中": "导出选项",
  "繁中": "匯出選項",
  "Français": "Exporter les choix",
  "Italiano": "Esporta Scelte",
  "한국어": "내보내기 선택",
  "Nederlands": "Exporteer je keuzes"
 },
 "btnLoad": {
  "English": "Import Choices",
  "Español": "Importar selecciones",
  "Português": "Importar Escolhas",
  "Deutsch": "Auswahl Importieren",
  "日本": "選択を読み込む",
  "简中": "导入选项",
  "繁中": "匯入選項",
  "Français": "Importer les choix",
  "Italiano": "Importa Scelte",
  "한국어": "가져오기 선택",
  "Nederlands": "Importeer je keuzes"
 },
 "btnReset": {
  "English": "Reset the grid!",
  "Español": "Reestablecer la cuadrícula",
  "Português": "Reset o quadro",
  "Deutsch": "Auswahl zurücksetzten!",
  "日本": "初期化",
  "简中": "重置表格",
  "繁中": "重置表格",
  "Français": "Réinitialiser la grille",
  "Italiano": "Ripristina la griglia",
  "한국어": "그리드 재설정",
  "Nederlands": "Reset het veld"
 },
 "gridConfirm": {
  "English": "Are you sure you want to reset the grid?",
  "Español": "¿Estás seguro de querer reestablecer la cuadricula?",
  "Português": "Tem certeza que deseja resetar o quadro?",
  "Deutsch": "Bist du dir sicher, dass du deine Auswahl zurücksetzten willst?",
  "日本": "本当に初期化しますか?",
  "简中": "你确定要重置表格吗？",
  "繁中": "您確定要重置表格嗎？",
  "Français": "Étes-vous sûrs que vous voulez réinitialiser la grille ?",
  "Italiano": "Sei sicuro di voler reimpostare la griglia?",
  "한국어": "그리드를 재설정하시겠습니까?",
  "Nederlands": "Weet je zeker dat je het hele veld wil resetten? Je verliest hiermee alles wat je ingevuld hebt."
 },
 "import": {
  "English": "# Don't like my choices? You can overrule them here!\n# Export Choices will put a text version of the grid here\n# Then you can edit the names and Import Choices to replace the images.\n# Most Pokemon are just their named capitalized, like SWELLOW.\n# Alternate forms have specific tags, like MEOWTH_2 for Galarian Meowth.\n# You can also use this to keep backups",
  "Español": "# ¿No te gustan mis selecciones? ¡Puedes cambiarlas aquí!\n# Exportar selecciones generará una versión de texto de la cuadrícula\n# Después podrás editar los nombres y darle click a Importar selecciones para reemplazar las imágenes.\n# La mayoría de Pokémon simplemente son su nombre en mayúsculas, como SWELLOW\n# Las formas alternativas tienen etiquetas específicas, como MEOWTH_2 para Meowth de Galar.\n# También puedes usar esto para realizar respaldos",
  "Português": "# Não gosta das minhas escolhas? Você pode anulá-las!\n# Exportar Escolhas irá colocar uma versão em texto do quadro aqui\n# Então você poderá editar os nomes e Importar Escolhas para substituir as imagens.\n# A maioria dos Pokémon são apenas seus nomes em letra maiúscula, como SWELLOW.\n# Formas Alternativas possuem tags específicas, como MEOWTH_2 para Meowth de Galar.\n# Você também pode usar isso para guardar cópias de segurança.",
  "Deutsch": "Dir geallen die Auswahlmöglichkeiten nicht? Du kannst sie hier überschreiben!\n# Beim Auswahl Exportieren entsteht hier eine Text-Version!\n# Dann kannst du die Namen bearbeiten und Auswahl Importieren um die Bilder zu ersetzen.\n# Die meisten Pokemon namen sind in Großbuchstaben und auf Englisch geschrieben.\n# Alternative Formen haben spezielle Namen, zum Beispiel MEOWTH_2 für galar Mauzi.\n# Du kannst den Text auch als Backup benutzen.",
  "日本": "# 製作者のポケ選が気に入らない場合はここで直接編集できます！\n# 「選択を出力」を押すと、ここにグリッドのテキスト版が生成されます。\n# それからここで編集して、「選択を読み込む」を押すと画像を入れ替えられます。\n# ほとんどのポケモンは「SWELLOW」などと、全大文字の英名です。\n# 別フォルムは「MEOWTH_2」などと、特殊なタグが使用されていることがあります。\n# この欄を使って、バックアップを取ることもできます。",
  "简中": "# 不喜欢作者的选项？可以在这里直接编辑！\n# 导出选项将会在这里生成一份文字版本的该表格\n# 这样就可以编辑名称并用导入选项替换图片。\n#大部分宝可梦的名字是大写的，比如“SWELLOW”\n# 而其他形态会有特殊的标签，比如“MEOWTH_2”代表伽勒尔喵喵。\n# 您也可以使用它来保留备份",
  "繁中": "# 不喜歡作者的選項？可以在這裡直接編輯！\n# 匯出選項將在此處放置該表格的文字版本\n# 然後您可以編輯名稱和匯入選項來替換圖像。\n# 大多數寶可夢的名字都是大寫的，例如SWELLOW。\n# 其他形態具有特定的標籤，例如伽勒爾喵喵是MEOWTH_2。\n# 您也可以使用它來保留備份",
  "Français": "# Vous n'aimez pas mes choix ? Vous pouvez les écraser ici !\n# Exporter les choix va mettre une version textuelle de la grille ici\n# Vous pouvez alors éditer les noms et Importer les choix pour remplacer les images.\n# La plupart des noms de Pokémon sont en majuscules, comme SWELLOW\n# Les formes alternatives ont des indices spéciaux, comme MEOWTH_2 pour Miaouss de Galar\n# Vous pouvez aussi l'utiliser pour sauvegarder vos choix",
  "Italiano": "# Non ti piacciono le mie scelte? Le puoi sovrascrivere qui!\n# Esporta Scelte metterà un versione di testo della griglia qui\n# Dopo puoi modificare i nomi e Importa Scelt per rimpiazzare le immagini.\n# La maggioranza dei Pokemon sono solo il loro nome in maiuscolo, per esempio SWELLOW.\n# Le forme alternative hanno nomi specifici, come MEOWTH_2 per Meowth Galariano.\n# Puoi anche usare questo per ritienere dei backup",
  "한국어": "",
  "Nederlands": "# Niet eens met deze keuzes? Je kan ze hier verranderen.<br/>#  De keuzes in het vlak worden hier onder in tekst aangegeven als je drukt op ‘exporteer je keuzes’.<br/># Je kan hier onder alles aanpassen en dan op ‘importeer je keuze’ klikken en dan past hij het meteen aan.<br/># De meeste namen zijn gewoon de normale naam volledig in hoofdletters, voorbeeld: SWELLOW.<br/># Andere vormen hebben speciale namen, voorbeeld MEOWTH_2 voor Galarian Meowth<br/># Dit kan je ook gebruiken om je voortgang op te slaan."
 },
 "btnRandom": {
  "English": "Randomize!",
  "Español": "Aleatorizar!",
  "Português": "Aleatório!",
  "Deutsch": "Zufallswahl!",
  "日本": "おまかせ",
  "简中": "随机！",
  "繁中": "隨機！",
  "Français": "Aléatoire !",
  "Italiano": "Casuale!",
  "한국어": "무작위의!",
  "Nederlands": "Willekeurig plaatsen!"
 },
 "Cookie1": {
  "English": "This site uses cookies to save your choices. You can disable them here.",
  "Español": "Este sitio usa cookies para guardar tus selecciones. Puedes desactivarlas aquí.",
  "Português": "Este site usa cookies para salvar suas escolhas. Você pode desativá-los aqui.",
  "Deutsch": "Diese Seite verwendet Cookies um deine Wahl zu speichern. Du kannst sie hier deaktivieren.",
  "日本": "このサイトでは、選択を保存するためにクッキーを使用しています。 ここでそのクッキーを無効にできます。",
  "简中": "本网站使用cookies来保存您的选择。 您可以在此处禁用它们。",
  "繁中": "本網站使用cookies來保存您的選擇。 您可以在此處禁用它們。",
  "Français": "Ce site utilise des cookies pour enregistrer vos choix. Vous pouvez les désactiver ici.",
  "Italiano": "Questo sito utilizza i cookie per salvare le tue scelte. Puoi disabilitarli qui.",
  "한국어": "이 사이트는 쿠키를 사용하여 선택 사항을 저장합니다. 여기에서 비활성화할 수 있습니다.",
  "Nederlands": "De site gebruikte cookies om je keuzes op te slaan. Hier zet je ze uit."
 },
 "Cookie2": {
  "English": "This site uses cookies to save your choices. You can enable them here.",
  "Español": "Este sitio usa cookies para guardar tus selecciones. Puedes habilitarlos aquí.",
  "Português": "Este site usa cookies para salvar suas escolhas. Você pode ativá-los aqui.",
  "Deutsch": "Diese Seite verwendet Cookies um deine Wahl zu speichern. Du kannst sie hier aktievieren.",
  "日本": "このサイトでは、選択を保存するためにクッキーを使用しています。 ここでそのクッキーを有効にできます。",
  "简中": "本网站使用cookies来保存您的选择。 您可以在此处启用它们。",
  "繁中": "本網站使用cookies來保存您的選擇。 您可以在此處啟用它們。",
  "Français": "Ce site utilise des cookies pour enregistrer vos choix. Vous pouvez les activer ici.",
  "Italiano": "Questo sito utilizza i cookie per salvare le tue scelte. Puoi abilitarli qui.",
  "한국어": "이 사이트는 쿠키를 사용하여 선택 사항을 저장합니다. 여기에서 활성화할 수 있습니다.",
  "Nederlands": "De site gebruikte cookies om je keuzes op te slaan. Hier zet je ze aan."
 },
 "Favorite": {
  "English": [
   "Favorite",
   "Favorite"
  ],
  "Español": [
   "Favorito",
   "Favorita"
  ],
  "Português": [
   "Favorito",
   "Favorita"
  ],
  "Deutsch": [
   "Lieblings",
   "Lieblings"
  ],
  "日本": [
   "推し",
   "推し"
  ],
  "简中": [
   "最喜欢的",
   "最喜欢的"
  ],
  "繁中": [
   "最喜歡的",
   "最喜歡的"
  ],
  "Français": [
   "Préféré",
   "Préférée"
  ],
  "Italiano": [
   "Preferito",
   "Preferita"
  ],
  "한국어": [
   "가장 좋아하는",
   "가장 좋아하는"
  ],
  "Nederlands": ["Favoriete", "Favoriete"]
 },
 "Game": {
  "English": "Game",
  "Español": "Favorito",
  "Português": "Favorito",
  "Deutsch": "Lieblings",
  "日本": "推し",
  "简中": "最喜欢的",
  "繁中": "最喜歡的",
  "Français": "Préféré",
  "Italiano": "Preferito",
  "한국어": "가장<br/>좋아하는",
  "Nederlands": "Favoriete"
 },
 "Element": {
  "English": "Element",
  "Español": "Equipo",
  "Português": "Equipe",
  "Deutsch": "Team",
  "日本": "パーティー",
  "简中": "同行宝可梦",
  "繁中": "同行寶可夢",
  "Français": "Équipe",
  "Italiano": "Squadra",
  "한국어": "지닌 포켓몬",
  "Nederlands": "Team"
 },
 "AdventurePack": {
  "English": "Adventure Pack",
  "Español": " Regional",
  "Português": " Regional",
  "Deutsch": "Regional ",
  "日本": "リージョンフォーム",
  "简中": "地区",
  "繁中": "地區",
  "Français": " Régional",
  "Italiano": " Regionale",
  "한국어": "지역 ",
  "Nederlands": "Regionaal"
 },
 "MagicItem": {
  "English": "Magic Item",
  "Español": "Ave Regional",
  "Português": "Pássaro Regional",
  "Deutsch": "Regionalvogel",
  "日本": "序盤鳥",
  "简中": "家门鸟",
  "繁中": "家門鳥",
  "Français": "Oiseau Régional",
  "Italiano": "Uccello Regionale",
  "한국어": "지역 새",
  "Nederlands": "Regionale vogel"
 },
 "Trap": {
  "English": "Trap",
  "Español": "Mamífero Regional",
  "Português": "Mamífero Regional",
  "Deutsch": "Route 1<br/>Normal Pokemon",
  "日本": "序盤ノーマル",
  "简中": "家门鼠",
  "繁中": "家門怪",
  "Français": "Mammifère Régional",
  "Italiano": "Mammifero Regionale",
  "한국어": "지역 포유류",
  "Nederlands": "Regionaal zoogdier"
 },
 "Villain": {
  "English": "Trappable Villain",
  "Español": "Bicho Regional",
  "Português": "Inseto Regional",
  "Deutsch": "Regionalkäfer",
  "日本": "序盤虫",
  "简中": "家门虫",
  "繁中": "家門蟲",
  "Français": "Insecte Régional",
  "Italiano": "Coleottero Regionale",
  "한국어": "지역 벌레",
  "Nederlands": "Regionaal insect"
 },
 "CreationCrystal": {
  "English": "Creation Crystal",
  "Español": "Fósil",
  "Português": "Fóssil",
  "Deutsch": "Fossil",
  "日本": "化石ポケモン",
  "简中": "化石宝可梦",
  "繁中": "化石",
  "Français": "Fossile",
  "Italiano": "Fossile",
  "한국어": "화석",
  "Nederlands": "Fossiel"
 },
 "LandVehicle": {
  "English": "Land Vehicle",
  "Español": "Forma Regional",
  "Português": "Forma Regional",
  "Deutsch": "Regionalform",
  "日本": "リージョン<br/>フォーム",
  "简中": "地区形态",
  "繁中": "地區型態",
  "Français": "Forme Régionale",
  "Italiano": "Forma Regionale",
  "한국어": "리전폼",
  "Nederlands": "Regionale form"
 },
 "SkyVehicle": {
  "English": "Sky Vehicle",
  "Español": "Gigamax",
  "Português": "Gigantamax",
  "Deutsch": "Gigadynamax",
  "日本": "キョダイマックス",
  "简中": "超极巨化",
  "繁中": "超極巨化",
  "Français": "Gigamax",
  "Italiano": "Gigamax",
  "한국어": "거다이맥스",
  "Nederlands": "Gigantamax"
 },
 "SeaVehicle": {
  "English": "Sea Vehicle",
  "Español": "Pokémon Singular",
  "Español_Latino": "Mítico",
  "Português": "Mítico",
  "Deutsch": "Mysteriös",
  "日本": "幻のポケモン",
  "简中": "幻之宝可梦",
  "繁中": "幻之寶可夢",
  "Français": "Pokémon Fabuleux",
  "Italiano": "Pokémon Misterioso",
  "한국어": "환상의 포켓몬",
  "Nederlands": "Mythische"
 },
 "Mini": {
  "English": "Mini",
  "Español": "Ultraente",
  "Português": "Ultracriatura",
  "Deutsch": "Ultra Bestie",
  "日本": "ウルトラビースト",
  "简中": "究极异兽",
  "繁中": "究極異獸",
  "Français": "Ultra-Chimère",
  "Italiano": "Ultracreatura",
  "한국어": "울트라비스트",
  "Nederlands": "Ultra Beast"
 },
 "Lightcore": {
  "English": "Lightcore",
  "Español": "Pokémon Paradoja",
  "Português": "Paradoxo",
  "Deutsch": "Paradox",
  "日本": "パラドックス",
  "简中": "悖谬宝可梦",
  "繁中": "悖謬寶可夢",
  "Français": "Pokémon Paradoxe",
  "Italiano": "Paradosso",
  "한국어": "패러독스",
  "Nederlands": "Paradox"
 },
 "EonsElite": {
  "English": "Eon's Elite",
  "Español": "Tipo",
  "Português": "Tipo",
  "Deutsch": "Type",
  "日本": "タイプ",
  "简中": "属性",
  "繁中": "屬性",
  "Français": "Type",
  "Italiano": "Tipo",
  "한국어": "타입",
  "Nederlands": "Type"
 },
 "Variant": {
  "English": "Variant",
  "Español": "Poké Ball",
  "Português": "Poké Bola",
  "Deutsch": "Pokéball",
  "日本": "モンスターボール",
  "简中": "精灵球",
  "繁中": "精靈球",
  "Français": "Poké Ball",
  "Italiano": "Poké Ball",
  "한국어": "몬스터볼",
  "Nederlands": "Pokébal"
 },
 "Air": {
  "English": "Air",
  "Español": "Normal",
  "Português": "Normal",
  "Deutsch": "Normal",
  "日本": "ノーマル",
  "简中": "一般",
  "繁中": "一般",
  "Français": "Normal",
  "Italiano": "Normale",
  "한국어": "노말",
  "Nederlands": "Normaal"
 },
 "Life": {
  "English": "Life",
  "Español": "Fuego",
  "Português": "Fogo",
  "Deutsch": "Feuer ",
  "日本": "ほのお ",
  "简中": "火",
  "繁中": "火",
  "Français": "Feu",
  "Italiano": " \tFuoco",
  "한국어": "불꽃",
  "Nederlands": "Vuur"
 },
 "Undead": {
  "English": "Undead",
  "Español": "Agua",
  "Português": "Água",
  "Deutsch": "Wasser",
  "日本": "みず",
  "简中": "水",
  "繁中": "水",
  "Français": "Eau",
  "Italiano": "Acqua",
  "한국어": "물",
  "Nederlands": "Water"
 },
 "Earth": {
  "English": "Earth",
  "Español": "Planta",
  "Português": "Planta",
  "Deutsch": "Pflanze",
  "日本": "くさ",
  "简中": "草",
  "繁中": "草",
  "Français": "Plante",
  "Italiano": "Erba",
  "한국어": "풀",
  "Nederlands": "Gras"
 },
 "Fire": {
  "English": "Fire",
  "Español": "Eléctrico",
  "Português": "Elétrico",
  "Deutsch": "Elektro",
  "日本": "でんき",
  "简中": "电",
  "繁中": "電",
  "Français": "Électrik",
  "Italiano": "Elettro",
  "한국어": " \t전기",
  "Nederlands": "Electrisch"
 },
 "Water": {
  "English": "Water",
  "Español": "Hielo",
  "Português": "Gelo",
  "Deutsch": "Eis",
  "日本": "こおり",
  "简中": "冰",
  "繁中": "冰",
  "Français": "Glace",
  "Italiano": "Ghiaccio",
  "한국어": " \t얼음",
  "Nederlands": "IJs"
 },
 "Magic": {
  "English": "Magic",
  "Español": "Lucha",
  "Português": "Luta",
  "Deutsch": "Kampf",
  "日本": "かくとう",
  "简中": "格斗",
  "繁中": "格鬥",
  "Français": "Combat",
  "Italiano": "Lotta",
  "한국어": "격투",
  "Nederlands": "Vecht"
 },
 "Tech": {
  "English": "Tech",
  "Español": "Veneno",
  "Português": "Venenoso",
  "Deutsch": "Gift",
  "日本": "どく",
  "简中": "毒",
  "繁中": "毒",
  "Français": "Poison",
  "Italiano": "Veleno",
  "한국어": "독",
  "Nederlands": "Gif"
 },
 "Light": {
  "English": "Light",
  "Español": "Tierra",
  "Português": "Terrestre",
  "Deutsch": "Boden",
  "日本": "じめん",
  "简中": "地面 ",
  "繁中": "地面 ",
  "Français": "Sol",
  "Italiano": "Terra",
  "한국어": "땅",
  "Nederlands": "Grond"
 },
 "Dark": {
  "English": "Dark",
  "Español": "Volador",
  "Português": "Voador",
  "Deutsch": "Flug",
  "日本": "ひこう",
  "简中": "飞行",
  "繁中": "飛行",
  "Français": "Vol",
  "Italiano": "Volante",
  "한국어": "비행",
  "Nederlands": "Vliegend"
 }
}

function writeEmpties() {
	var fs = require('fs');
	var holder = {}
	for(var l in languages) {
		holder[languages[l]] = {};
	}
	for(var t in translatable) {
		for(var l in languages) {
			var eng = translatable[t].English;
			var tra = translatable[t][languages[l]];
			if(!tra) {
				translatable[t][languages[l]] = "";
				tra = translatable[t][languages[l]];
			}
				
			if(eng != "") {
				if(typeof eng == "string" && eng.match(/\n/)) {
					var engs = eng.split("\n");
					var tras = tra.split("\n");
					for(var e in engs) {
						holder[languages[l]][engs[e].replace(/# /, "")] = (tras[e] || "")
					}
				}else{
					holder[languages[l]][eng] = tra;
				}
			}
		}
	}
	for(var l in holder) {
		if(Object.keys(holder[l]).length == 0)
			continue;
		fs.writeFile('./translating_strings/'+l+'.txt', converter(holder[l]), function(){})
	}
}
function converter(json) {
	let out = "";
	for(let k in json) {
		if(k == "Favorite,Favorite")
			continue;
		out += "English: " + k + "\nTranslation: " + json[k] + "\n\n";
	}
	return out;
}
function resolveFem(string, lang, arr) {
	if(femme[lang].includes(string))
		return arr[1];
	if(femme[lang].includes("-a") && string.match(/a$/))
		return arr[1];
	return arr[0];
}
function changeLang(lang) {
	if(code_lang[lang])
		lang = code_lang[lang];
	if(!languages.includes(lang) || lang == currentLang)
		return;
	currentLang = lang;
	var fallback = (fallbacks[lang] || "English");
	var favs = translatable["Favorite"][lang];
	if(!favs)
		favs = translatable["Favorite"][fallback];
	var use_femme = femme.hasOwnProperty(lang);
	for(let tr_id in translatable) {
		var tr_info = translatable[tr_id];
		var tr_ele = document.getElementById(tr_id);
		if(!tr_ele)
			continue;
		var tr_st = tr_info[lang];
		if(!tr_st)
			tr_st = tr_info[fallback];
		if(fav_cats.includes(tr_id)) {
			// Favorite Thing
			var fn = favs[0];
			if(use_femme)
				fn = resolveFem(tr_st, lang, favs)
			if(no_spaces.includes(lang)) {
				tr_st = fn + tr_st;
			}else if(trailing_fav.includes(lang)) {
				tr_st = tr_st + "<br/>" + fn;
			}else{
				tr_st = fn + "<br/>" + tr_st;
			}
			// deal with font size
			if(font_sizes["Favorite"][lang]) {
				tr_ele.style.fontSize = font_sizes["Favorite"][lang];
			}else{
				tr_ele.style.fontSize = font_sizes["Favorite"]["English"]
			}
		}
		if(tr_ele.type == "button") {
			tr_ele.value = tr_st;
		}else{
			tr_ele.innerHTML = tr_st;
		}
		// deal with font size
		if(font_sizes[tr_id]) {
			if(font_sizes[tr_id][lang]) {
				tr_ele.style.fontSize = font_sizes[tr_id][lang];
			}else{
				tr_ele.style.fontSize = font_sizes[tr_id]["English"]
			}
		}
	}

	let nextURL = new URL(location);
	nextURL.searchParams.delete("lang");
	if(lang != "English")
		nextURL.searchParams.set("lang", lang_code[lang]);
	var nextTitle = "Ultimate Favorite Pokemon Picker";
	var nextState = { additionalInformation: 'Updated the language parameter' };
	//document.getElementById("new_url").innerHTML = nextURL;
	//document.getElementById("new_url").href = nextURL;
	try{
		window.history.replaceState(nextState, nextTitle, nextURL);
	}catch(e){
		// unclear when this does and doesn't work
	}
}
function updateLang() {
	let langsel = document.getElementById("language-select");
	changeLang(langsel.value);
}

