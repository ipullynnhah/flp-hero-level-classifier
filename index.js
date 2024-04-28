const heroes = [
  { name: "Trickster", xp: 500 },
  { name: "Stryke", xp: 1500 },
  { name: "Pixel", xp: 3500 },
  { name: "Bolt", xp: 6000 },
  { name: "Seraph", xp: 7500 },
  { name: "Nightshade", xp: 8500 },
  { name: "Spectra", xp: 9500 },
  { name: "Nova", xp: 12000 }
];

let level = "";
for (let i = 0; i < heroes.length; i++) {
  const { name, xp } = heroes[i];
  if (xp <= 1000) level = "Ferro";
  else if (xp <= 2000) level = "Bronze";
  else if (xp <= 5000) level = "Prata";
  else if (xp <= 7000) level = "Ouro";
  else if (xp <= 8000) level = "Platina";
  else if (xp <= 9000) level = "Ascendente";
  else if (xp <= 10000) level = "Imortal";
  else level = "Radiante";

  console.log(`A heroína de nome ${name} está no nível de ${level}`);
}
