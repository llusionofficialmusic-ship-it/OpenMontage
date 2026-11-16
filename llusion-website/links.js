/*
  ============================================================
  LLUSION WEBSITE: EDIT THIS FILE TO UPDATE THE SITE
  ============================================================
  Everything on the page comes from this one file.
  Change text or links between the quotes, save, and re-upload.
*/

window.SITE = {
  name: "LLusion",
  tagline: "producer · artist · lo-fi + good vibes",

  /* ---- FEATURED SPOT (the big card at the top) ----------------
     To promote something new, change these lines.
     - spotifyEmbed: paste any Spotify link (artist, album, track or
       playlist) to show a playable player. Leave "" to hide it.
     - Or leave spotifyEmbed "" and fill in title/text/url/button
       for a plain promo card (new merch, a show, a video...).     */
  featured: {
    label: "Listen now",
    spotifyEmbed: "https://open.spotify.com/artist/5XBb04uBpKPWPWC2jXgGqb",
    title: "",
    text: "",
    url: "",
    button: "",
  },

  /* ---- MAIN LINKS (buttons, top to bottom) -------------------
     icon options: spotify, applemusic, youtube, soundcloud,
     instagram, tiktok, bandlab, playlist, link, mail            */
  links: [
    { title: "Spotify",       url: "https://open.spotify.com/artist/5XBb04uBpKPWPWC2jXgGqb", icon: "spotify" },
    { title: "Apple Music",   url: "https://music.apple.com/us/artist/llusion/1232930591",    icon: "applemusic" },
    { title: "YouTube",       url: "https://www.youtube.com/c/LLusion",                       icon: "youtube" },
    { title: "SoundCloud",    url: "https://soundcloud.app.goo.gl/5ibwvC6tzcAp8JmJ6",         icon: "soundcloud" },
    { title: "Send me your songs on BandLab", url: "https://get-bandlab.app.link/llusion",    icon: "bandlab" },
    { title: "Interviews w/ LLusion", url: "https://youtube.com/playlist?list=PLcN1YbL2KxcY&si=-4xx89Kv1bG2sLyO", icon: "playlist" },
  ],

  /* ---- SOCIAL ICONS (small round icons under your name) ------ */
  socials: [
    { label: "Instagram", url: "https://www.instagram.com/llusionmusic/", icon: "instagram" },
    { label: "TikTok",    url: "https://vm.tiktok.com/ZMJ9HEt5K/",         icon: "tiktok" },
    { label: "YouTube",   url: "https://www.youtube.com/c/LLusion",        icon: "youtube" },
    { label: "Spotify",   url: "https://open.spotify.com/artist/5XBb04uBpKPWPWC2jXgGqb", icon: "spotify" },
  ],

  /* ---- CONTACT (leave "" to hide the button) ----------------- */
  contactEmail: "",
};
