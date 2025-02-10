Hooks.once('ready', () => {
    game.settings.set('pbta', 'hideRollMode', true);
    game.settings.set('pbta', 'hideRollFormula', true);
});
Hooks.on("renderSettings", (app, html) => {
  const links = {
    shop: {
      title: "Pasión de las Pasiones by Khelren - itch.io",
      url: "https://khelren.itch.io/pasion",
      iconClass: "fa-solid fa-cart-shopping"
    },

    donation: {
      title: "Ko-fi Khelren",
      url: "https://ko-fi.com/khelren",
      iconClass: "fa-regular fa-mug-hot fa-bounce"
    }
  };

  const createButton = (text, iconClass, url) => {
    const button = $(`<button><i class="${iconClass}"></i> ${text}</button>`);
    button.on("click", ev => {
      ev.preventDefault();
      window.open(url, "_blank");
    });
    return button;
  };

  const addLinkButton = (container, link) => {
    const button = createButton(link.title, link.iconClass, link.url);
    container.append(button);
  };

  const title = "Liens de soutien";
  const lotdSection = $(`<h2>${title}  <i class="fa-regular fa-heart"></i></h2>`);
  html.find("#settings-game").after(lotdSection);

  const lotdDiv = $(`<div></div>`);
  lotdSection.after(lotdDiv);

  Object.values(links).forEach(link => {
    addLinkButton(lotdDiv, link);
  });
});


Hooks.once('pbtaSheetConfig', () => {
  // Disable the sheet config form.
  game.settings.set('pbta', 'sheetConfigOverride', true);
  // Define custom tags.
  game.pbta.tagConfigOverride = {
    // Tags available to any actor and item
    general: '[{"value":"fire"},{"value":"water"},{"value":"earth"},{"value":"air"}]',
    actor: {
      // Tags available to all actors
      all: '[{"value":"person"}]',
      // Tags available to a specific actor type set up on game.pbta.sheetConfig.actorTypes (e.g. "character", "npc")
      character: '[{"value":"mook"}]'
    },
    item: {
      // Tags available to all actors
      all: '[{"value":"consumable"}]',
      // Tags available to a specific item type (e.g. "equipment", "move")
      move: '[{"value":"sword"}]'
    }
  }
  // Replace the game.pbta.sheetConfig with your own version.
  game.pbta.sheetConfig = {
    "rollFormula": "2d6",
    "statToggle": {
        "label": "Épuisé",
        "modifier": 0
    },
    "rollShifting": true,
    "rollFormula": "2d6",
    "rollResults": {
        "success": {
            "start": 10,
            "end": null,
            "label": "Succès 10+ !"
        },
        "partial": {
            "start": 7,
            "end": 9,
            "label": "Succès 7+ !"
        },
        "failure": {
            "start": null,
            "end": 6,
            "label": "Râté..."
        }
    },
    "actorTypes": {
        "character": {
            "details": {
                "biography": {
                    "label": "Biographie",
                    "value": ""
                }
            },
            "stats": {},
            "attributes": {
                "questioncaballero": {
                    "label": "Ta question",
                    "description": null,
                    "customLabel": false,
                    "userLabel": false,
                    "playbook": "el-caballero",
                    "limited": false,
                    "position": "top",
                    "type": "LongText",
                    "value": ""
                },
                "questionjefe": {
                    "label": "Ta question",
                    "description": null,
                    "customLabel": false,
                    "userLabel": false,
                    "playbook": "el-jefe",
                    "limited": false,
                    "position": "top",
                    "type": "LongText",
                    "value": ""
                },
                "questionempleada": {
                    "label": "Ta question",
                    "description": null,
                    "customLabel": false,
                    "userLabel": false,
                    "playbook": "la-empleada",
                    "limited": false,
                    "position": "top",
                    "type": "LongText",
                    "value": ""
                },
                "questiondona": {
                    "label": "Ta question",
                    "description": null,
                    "customLabel": false,
                    "userLabel": false,
                    "playbook": "la-dona",
                    "limited": false,
                    "position": "top",
                    "type": "LongText",
                    "value": ""
                },
                "questionbelleza": {
                    "label": "Ta question",
                    "description": null,
                    "customLabel": false,
                    "userLabel": false,
                    "playbook": "la-belleza",
                    "limited": false,
                    "position": "top",
                    "type": "LongText",
                    "value": ""
                },
                "questiongemelo": {
                    "label": "Ta question",
                    "description": null,
                    "customLabel": false,
                    "userLabel": false,
                    "playbook": "el-gemelo",
                    "limited": false,
                    "position": "top",
                    "type": "LongText",
                    "value": ""
                },
                "apparencecaballero": {
                    "label": "Apparence",
                    "description": null,
                    "customLabel": false,
                    "userLabel": false,
                    "playbook": "el-caballero",
                    "limited": false,
                    "position": "top",
                    "type": "LongText",
                    "value": ""
                },
                "apparencejefe": {
                    "label": "Apparence",
                    "description": null,
                    "customLabel": false,
                    "userLabel": false,
                    "playbook": "el-jefe",
                    "limited": false,
                    "position": "top",
                    "type": "LongText",
                    "value": ""
                },
                "apparenceempleada": {
                    "label": "Apparence",
                    "description": null,
                    "customLabel": false,
                    "userLabel": false,
                    "playbook": "la-empleada",
                    "limited": false,
                    "position": "top",
                    "type": "LongText",
                    "value": ""
                },
                "apparencedona": {
                    "label": "Apparence",
                    "description": null,
                    "customLabel": false,
                    "userLabel": false,
                    "playbook": "la-dona",
                    "limited": false,
                    "position": "top",
                    "type": "LongText",
                    "value": ""
                },
                "apparencebelleza": {
                    "label": "Apparence",
                    "description": null,
                    "customLabel": false,
                    "userLabel": false,
                    "playbook": "la-belleza",
                    "limited": false,
                    "position": "top",
                    "type": "LongText",
                    "value": ""
                },
                "apparencegemelo": {
                    "label": "Apparence",
                    "description": null,
                    "customLabel": false,
                    "userLabel": false,
                    "playbook": "el-gemelo",
                    "limited": false,
                    "position": "top",
                    "type": "LongText",
                    "value": ""
                },
                "relationcaballero": {
                    "label": "Relations",
                    "description": null,
                    "customLabel": false,
                    "userLabel": false,
                    "playbook": "el-caballero",
                    "limited": false,
                    "position": "top",
                    "type": "LongText",
                    "value": ""
                },
                "relationjefe": {
                    "label": "Relations",
                    "description": null,
                    "customLabel": false,
                    "userLabel": false,
                    "playbook": "el-jefe",
                    "limited": false,
                    "position": "top",
                    "type": "LongText",
                    "value": ""
                },
                "relationempleada": {
                    "label": "Relations",
                    "description": null,
                    "customLabel": false,
                    "userLabel": false,
                    "playbook": "la-empleada",
                    "limited": false,
                    "position": "top",
                    "type": "LongText",
                    "value": ""
                },
                "relationdona": {
                    "label": "Relations",
                    "description": null,
                    "customLabel": false,
                    "userLabel": false,
                    "playbook": "la-dona",
                    "limited": false,
                    "position": "top",
                    "type": "LongText",
                    "value": ""
                },
                "relationbelleza": {
                    "label": "Relations",
                    "description": null,
                    "customLabel": false,
                    "userLabel": false,
                    "playbook": "la-belleza",
                    "limited": false,
                    "position": "top",
                    "type": "LongText",
                    "value": ""
                },
                "relationgemelo": {
                    "label": "Relations",
                    "description": null,
                    "customLabel": false,
                    "userLabel": false,
                    "playbook": "el-gemelo",
                    "limited": false,
                    "position": "top",
                    "type": "LongText",
                    "value": ""
                },
                "pretendants": {
                    "label": "Prétendants",
                    "description": "Coche ton amour",
                    "customLabel": false,
                    "userLabel": false,
                    "playbook": "la-empleada",
                    "limited": false,
                    "position": "left",
                    "type": "ListMany",
                    "condition": false,
                    "sort": false,
                    "options": {
                        "0": {
                            "label": "[Text]",
                            "value": false
                        },
                        "1": {
                            "label": "[Text]",
                            "value": false
                        }
                    }
                },
                "reseau": {
                    "label": "Ton réseau",
                    "description": null,
                    "customLabel": false,
                    "userLabel": false,
                    "playbook": "la-dona",
                    "limited": false,
                    "position": "left",
                    "type": "LongText",
                    "value": ""
                },
                "etatsgemelo": {
                    "label": "États",
                    "description": null,
                    "customLabel": false,
                    "userLabel": false,
                    "playbook": "el-gemelo",
                    "limited": false,
                    "position": "left",
                    "type": "ListMany",
                    "condition": false,
                    "sort": false,
                    "options": {
                        "0": {
                            "label": "Acculé : +1 pour agir en désespoir de cause, -2 pour exiger son dû.",
                            "value": false
                        },
                        "1": {
                            "label": "Circonspect : +1 pour manipuler un supérieur, -2 pour s’en prendre à autrui",
                            "value": false
                        },
                        "2": {
                            "label": "Déterminé : +1 pour accuser de mentir, -2 pour déclarer sa flamme avec passion",
                            "value": false
                        },
                        "3": {
                            "label": "Renfrogné : +1 pour exprimer ses sentiments à haute voix, -2 pour remarquer quelque chose d’incongru",
                            "value": false
                        }
                    }
                },
                "etatscaballero": {
                    "label": "États",
                    "description": null,
                    "customLabel": false,
                    "userLabel": false,
                    "playbook": "el-caballero",
                    "limited": false,
                    "position": "left",
                    "type": "ListMany",
                    "condition": false,
                    "sort": false,
                    "options": {
                        "0": {
                            "label": "Absorbé : +1 pour remarquer quelque chose d’incongru, -2 pour déclarer sa flamme avec passion",
                            "value": false
                        },
                        "1": {
                            "label": "Acculé : +1 pour agir en désespoir de cause, -2 pour exiger son dû",
                            "value": false
                        },
                        "2": {
                            "label": "Brutal : +1 pour s’en prendre à autrui, -2 pour exprimer ses sentiments à haute voix",
                            "value": false
                        },
                        "3": {
                            "label": "Réprobateur : +1 pour accuser de mentir, -2 pour manipuler un supérieur",
                            "value": false
                        }
                    }
                },
                "etatsempleada": {
                    "label": "États",
                    "description": null,
                    "customLabel": false,
                    "userLabel": false,
                    "playbook": "la-empleada",
                    "limited": false,
                    "position": "left",
                    "type": "ListMany",
                    "condition": false,
                    "sort": false,
                    "options": {
                        "0": {
                            "label": "Désespéré : +1 pour remarquer quelque chose d’incongru, -2 pour accuser de mentir",
                            "value": false
                        },
                        "1": {
                            "label": "Éperdu : +1 pour déclarer sa flamme avec passion, -2 pour agir en désespoir de cause",
                            "value": false
                        },
                        "2": {
                            "label": "Évasif : +1 pour manipuler un supérieur, -2 pour exiger son dû",
                            "value": false
                        },
                        "3": {
                            "label": "Introspectif : +1 pour exprimer ses sentiments à haute voix, -2 pour s’en prendre à autrui",
                            "value": false
                        }
                    }
                },
                "etatsdona": {
                    "label": "États",
                    "description": null,
                    "customLabel": false,
                    "userLabel": false,
                    "playbook": "la-dona",
                    "limited": false,
                    "position": "left",
                    "type": "ListMany",
                    "condition": false,
                    "sort": false,
                    "options": {
                        "0": {
                            "label": "Critique : +1 pour accuser de mentir, -2 pour s’en prendre à autrui",
                            "value": false
                        },
                        "1": {
                            "label": "Intransigeant : +1 pour exiger son dû, -2 pour manipuler un supérieur",
                            "value": false
                        },
                        "2": {
                            "label": "Pensif : +1 pour exprimer ses sentiments à haute voix, -2 pour déclarer sa flamme avec passion.",
                            "value": false
                        },
                        "3": {
                            "label": "Prudent : +1 pour remarquer quelque chose d’incongru, -2 pouragir en désespoir de cause",
                            "value": false
                        }
                    }
                },
                "etatsbelleza": {
                    "label": "États",
                    "description": null,
                    "customLabel": false,
                    "userLabel": false,
                    "playbook": "la-belleza",
                    "limited": false,
                    "position": "left",
                    "type": "ListMany",
                    "condition": false,
                    "sort": false,
                    "options": {
                        "0": {
                            "label": "Acharné : +1 pour exiger son dû, -2 pour agir en désespoir de cause.",
                            "value": false
                        },
                        "1": {
                            "label": "Furieux : +1 pour s’en prendre à autrui, -2 pour remarquer quelque chose d’incongru.",
                            "value": false
                        },
                        "2": {
                            "label": "Lascif : +1 pour déclarer sa flamme avec passion, -2 pour exprimer ses sentiments à haute voix",
                            "value": false
                        },
                        "3": {
                            "label": "Sournois : +1 pour manipuler un supérieur, -2 pour accuser de mentir.",
                            "value": false
                        }
                    }
                },
                "etatsjefe": {
                    "label": "États",
                    "description": null,
                    "customLabel": false,
                    "userLabel": false,
                    "playbook": "el-jefe",
                    "limited": false,
                    "position": "left",
                    "type": "ListMany",
                    "condition": false,
                    "sort": false,
                    "options": {
                        "0": {
                            "label": "Empressé : +1 pour agir en désespoir de cause, -2 pour accuser de mentir.",
                            "value": false
                        },
                        "1": {
                            "label": "Furieux : +1 pour s’en prendre à autrui, -2 pour remarquer quelque chose d’incongru",
                            "value": false
                        },
                        "2": {
                            "label": "Intransigeant : +1 pour exiger son dû, -2 pour manipuler un supérieur.",
                            "value": false
                        },
                        "3": {
                            "label": " Lascif : +1 pour déclarer sa flamme avec passion, -2 pour exprimer ses sentiments à haute voix.",
                            "value": false
                        }
                    }
                },
                "episodesjefe": {
                    "label": "Dans les épisodes précédents",
                    "description": null,
                    "customLabel": false,
                    "userLabel": false,
                    "playbook": "el-jefe",
                    "limited": false,
                    "position": "left",
                    "type": "ListMany",
                    "condition": false,
                    "sort": false,
                    "options": {
                        "0": {
                            "label": "Tu t’es montré tendre dans un moment de faiblesse devant un personnage",
                            "value": false
                        },
                        "1": {
                            "label": "Tu as juré de te venger de quelqu’un d’important",
                            "value": false
                        },
                        "2": {
                            "label": "Tu occupes une position temporaire à la tête d’une entreprise ou d’une fonction politique.",
                            "value": false
                        },
                        "3": {
                            "label": "Tu as révélé que tu connais l’un des secrets d’un personnage",
                            "value": false
                        },
                        "4": {
                            "label": "Tu as perdu quelque chose de précieux que tu dois impérativement récupérer",
                            "value": false
                        },
                        "5": {
                            "label": "Tu as perdu ton sang-froid et tu as blessé l’un de tes associés",
                            "value": false
                        },
                        "6": {
                            "label": "Tu as raffermi ton étreinte sur quelque chose jusqu’à le broyer",
                            "value": false
                        }
                    }
                },
                "episodesbelleza": {
                    "label": "Dans les épisodes précédents",
                    "description": null,
                    "customLabel": false,
                    "userLabel": false,
                    "playbook": "la-belleza",
                    "limited": false,
                    "position": "left",
                    "type": "ListMany",
                    "condition": false,
                    "sort": false,
                    "options": {
                        "0": {
                            "label": "Dans les bras d’un autre personnage, tu as repéré quelque chose dont tu veux t’emparer",
                            "value": false
                        },
                        "1": {
                            "label": "Tu as signé un contrat d’une signature pleine de fioritures.",
                            "value": false
                        },
                        "2": {
                            "label": "Tu as percuté quelque chose avec ta superbe voiture rutilante.",
                            "value": false
                        },
                        "3": {
                            "label": "Tu t’es lié(e) d’amitié avec quelqu’un de dangereux et de passionné.",
                            "value": false
                        },
                        "4": {
                            "label": "Dans un accès de fureur, tu as jeté ton verre de vin au visage d’un personnage.",
                            "value": false
                        },
                        "5": {
                            "label": "Tu es tombé(e) dans les bras d’un(e) amant(e) de rang inférieur.",
                            "value": false
                        },
                        "6": {
                            "label": "Tu as subrepticement glissé quelque chose dans les affaires d’un personnage",
                            "value": false
                        }
                    }
                },
                "episodesempleada": {
                    "label": "Dans les épisodes précédents",
                    "description": null,
                    "customLabel": false,
                    "userLabel": false,
                    "playbook": "la-empleada",
                    "limited": false,
                    "position": "left",
                    "type": "ListMany",
                    "condition": false,
                    "sort": false,
                    "options": {
                        "0": {
                            "label": "Il s’en est fallu de très peu que tu n’embrasses quelqu’un que tu ne devrais\npas.",
                            "value": false
                        },
                        "1": {
                            "label": "Tu as acquis la plus belle tenue élégante que tu as jamais vue.",
                            "value": false
                        },
                        "2": {
                            "label": "Tu as poussé un personnage à se mettre en colère et tu l’as blessé plus qu’escompté.",
                            "value": false
                        },
                        "3": {
                            "label": "Tu as intercepté une lettre destinée à un autre personnage.",
                            "value": false
                        },
                        "4": {
                            "label": "Tu as été témoin d’une chose horrible, mais tu ne sais pas qui l’a commise.",
                            "value": false
                        },
                        "5": {
                            "label": "Tu as caché quelque chose dans un endroit où, avec espoir, il sera en sécurité",
                            "value": false
                        },
                        "6": {
                            "label": "Tu as révélé à un proche un secret qui n’aurait pas dû être divulgué. ",
                            "value": false
                        }
                    }
                },
                "episodesdona": {
                    "label": "Dans les épisodes précédents",
                    "description": null,
                    "customLabel": false,
                    "userLabel": false,
                    "playbook": "la-dona",
                    "limited": false,
                    "position": "left",
                    "type": "ListMany",
                    "condition": false,
                    "sort": false,
                    "options": {
                        "0": {
                            "label": "Tu as ajouté ton nom sur un bail, un contrat ou un acte notarié.",
                            "value": false
                        },
                        "1": {
                            "label": "Tu as sincèrement réconforté un personnage dans le besoin",
                            "value": false
                        },
                        "2": {
                            "label": "Tu as remis une arme à un personnage, tout en lui susurrant des encouragements",
                            "value": false
                        },
                        "3": {
                            "label": "Tu as hurlé sur un personnage et l’as laissé désemparé",
                            "value": false
                        },
                        "4": {
                            "label": "Tu as sorti un personnage d’une mauvaise passe grâce à ton argent",
                            "value": false
                        },
                        "5": {
                            "label": "Tu as demandé de l’aide en paiement d’une dette, mais personne n’est venu à ton secours",
                            "value": false
                        },
                        "6": {
                            "label": "Tu as révélé tes véritables sentiments à quelqu’un à qui il ne fallait pas",
                            "value": false
                        }
                    }
                },
                "episodescaballero": {
                    "label": "Dans les épisodes précédents",
                    "description": null,
                    "customLabel": false,
                    "userLabel": false,
                    "playbook": "el-caballero",
                    "limited": false,
                    "position": "left",
                    "type": "ListMany",
                    "condition": false,
                    "sort": false,
                    "options": {
                        "0": {
                            "label": "Tu as été mêlé(e) à une bagarre dont tu es à peine sorti(e) vivant(e)",
                            "value": false
                        },
                        "1": {
                            "label": "Tu as découvert une lettre qui te lie fortement à quelqu’un",
                            "value": false
                        },
                        "2": {
                            "label": "Tu as laissé tes empreintes sur une arme qui a depuis disparu",
                            "value": false
                        },
                        "3": {
                            "label": "Tu as accepté de collaborer avec la police pour piéger quelqu’un.",
                            "value": false
                        },
                        "4": {
                            "label": "Tu as dévoilé un pan de ton passé sordide, les larmes aux yeux.",
                            "value": false
                        },
                        "5": {
                            "label": "Tu as vu deux personnes s’embrasser à travers une fenêtre.",
                            "value": false
                        },
                        "6": {
                            "label": "Tu as travaillé dur pour réparer quelque chose.",
                            "value": false
                        }
                    }
                },
                "episodesgemelo": {
                    "label": "Dans les épisodes précédents",
                    "description": null,
                    "customLabel": false,
                    "userLabel": false,
                    "playbook": "el-gemelo",
                    "limited": false,
                    "position": "left",
                    "type": "ListMany",
                    "condition": false,
                    "sort": false,
                    "options": {
                        "0": {
                            "label": "Tu es entré(e) dans le domicile de ton jumeau et tu as laissé quelque chose derrière toi",
                            "value": false
                        },
                        "1": {
                            "label": "Tu t’es battu(e) avec ton jumeau et l’un de vous a failli mourir.",
                            "value": false
                        },
                        "2": {
                            "label": "Tu as reçu une grosse somme d’argent d’un mystérieux bienfaiteur.",
                            "value": false
                        },
                        "3": {
                            "label": "Tu as obtenu la preuve de l’identité de tes parents",
                            "value": false
                        },
                        "4": {
                            "label": "Tu as été approché(e) par quelqu’un qui menace de révéler ton secret.",
                            "value": false
                        },
                        "5": {
                            "label": "Tu as espionné ton jumeau, sans savoir que quelqu’un t’observait.",
                            "value": false
                        },
                        "6": {
                            "label": "Tu t’es rendu(e) à un événement mondain en même temps que ton jumeau.",
                            "value": false
                        }
                    }
                },
                "progression": {
                    "label": "Progression",
                    "description": null,
                    "customLabel": false,
                    "userLabel": false,
                    "playbook": null,
                    "limited": false,
                    "position": "left",
                    "type": "ListMany",
                    "condition": false,
                    "sort": false,
                    "options": {
                        "0": {
                            "values": {
                                "0": {
                                    "value": false
                                },
                                "1": {
                                    "value": false
                                }
                            },
                            "label": "Prendre une nouvelle manœuvre de ton livret de personnage."
                        },
                        "1": {
                            "values": {
                                "0": {
                                    "value": false
                                },
                                "1": {
                                    "value": false
                                },
                                "2": {
                                    "value": false
                                }
                            },
                            "label": "Prendre une manœuvre d’un autre livret de personnage"
                        },
                        "2": {
                            "values": {
                                "0": {
                                    "value": false
                                },
                                "1": {
                                    "value": false
                                },
                                "2": {
                                    "value": false
                                }
                            },
                            "label": "Modifier un de tes états"
                        },
                        "3": {
                            "label": "Remplacer ta question de livret de personnage",
                            "value": false
                        },
                        "4": {
                            "values": {
                                "0": {
                                    "value": false
                                },
                                "1": {
                                    "value": false
                                },
                                "2": {
                                    "value": false
                                }
                            },
                            "label": "Introduire un nouveau PNJ"
                        },
                        "5": {
                            "values": {
                                "0": {
                                    "value": false
                                },
                                "1": {
                                    "value": false
                                }
                            },
                            "label": "Prendre le contrôle permanent d’un PNJ existant"
                        }
                    }
                }
            },
            "moveTypes": {
                "basic": {
                    "label": "Manœuvres de base",
                    "playbook": false,
                    "creation": true
                },
                "secondaires": {
                    "label": "Manœuvres secondaires",
                    "playbook": false,
                    "creation": true
                },
                "atout": {
                    "label": "Atout",
                    "playbook": false,
                    "creation": false
                },
                "playbook": {
                    "label": "Manœuvres de livret"
                }
            },
            "equipmentTypes": {
                "equipement": {
                    "label": "Equipement"
                }
            }
        },
        "npc": {
            "details": {
                "biography": {
                    "label": "Biographie",
                    "value": ""
                }
            },
            "attributes": {
                "accrochem": {
                    "label": "Accroche et manœuvre",
                    "description": null,
                    "customLabel": false,
                    "userLabel": false,
                    "playbook": null,
                    "limited": false,
                    "position": "left",
                    "type": "LongText",
                    "value": ""
                }
            },
            "moveTypes": {
                "npcmove": {
                    "label": "Manœuvre"
                }
            },
            "equipmentTypes": {
                "equipement": {
                    "label": "Equipement"
                }
            }
        }
    }
}
});