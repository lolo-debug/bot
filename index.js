const Discord = require("discord.js"); 
const { Client, RichEmbed } = require('discord.js');
const client = new Discord.Client();
var prefix = "*";

client.login("NjcwNjgzNjU0NzAzMjg0MjI2.Xix9Mg.Zrjq1wVHtQwdf9jORaqfgMH2k6I");

client.on('ready', async () => {
    console.log("connected")
    client.user.setStatus('je test')
    client.user.setPresence({
      
        game: {
            name: ' utilise la touche *help',
            type: "STREAMING",
            url: "https://www.twitch.tv/caredas_"
        }
    })
});


client.on("guildMemberRemove", user =>{
    let joinEmbed = new Discord.RichEmbed()
    .setColor("#00ff13")
    .setAuthor(user.user.username, user.user.displayAvatarURL)
    .setDescription("Au revoir " + user.user.username + " Tu me décois .")
    .setThumbnail(user.user.displayAvatarURL)
    .setFooter("ID du joueur : " + user.id + "." +
    "\n   Nous sommes maintenant " + user.guild.memberCount + ".")
    user.guild.channels.get("657908634696548353").send(joinEmbed)
});


client.on('message', message => {
    if(message.content.startsWith(prefix + "bvn")) {
        message.channel.send(" > **bienvenue  "+ message.author.username +" !**")
       
}});





client.on('message', message => {
    if(message.content.startsWith(prefix + " " )) {
        message.channel.send("> **bienvenue  "+ message.author.username +" !**")
}});




client.on('message', message => {
    if(message.content.startsWith(prefix + "bye")) {
        message.channel.send("> **ciao poto de la part de  "+ message.author.username +" !**")
}});



client.on('message', message => {
    if (message.content === prefix + "help"){
    var embed = new Discord.RichEmbed()
        .setTitle("Commande Bot\n")
        .setDescription("` *youtube` **Pour affiché le lien de ma chaîne**✅." +
        "`\n *help`** Pour faire cette touche**✅." +
        "`\n *musique`** Pour écouter une bonne musique**✅." +
        "`\n *info`** Pour afficher les infos du serveur**✅." +
        "`\n *playerinfo` **Pour affiché les infos du joueur**✅."  +        
        "`\n *event`**Pour crée un évent (détail de l'évent nn précisé)**✅." +
        "`\n *parn`**Pour dire que les partenariats sont fermés**✅." +
        "`\n *bvn` **Pour souhaiter la bienvenue**✅." +
        "`\n *bye` **Pour dire au revoir **✅." +
        "`\n *part ` **Pour dire que les partenariat sont ouvert **✅." +
        "`\n *clear` **Pour effacer des messages (max 100 à la fois)**✅." +
        "`\n *parn` **pour dire que les partenariats sont fermés**✅." +
        "`\n *quoi` **pour faire parler le bot **✅." +
        "`\n *debite` **pour dire qu'il va avoir un débitage **✅." +
        "`\n *ban` **Pour bannir un joueur**❌.")
        .setColor("#a300ff")
    message.channel.sendEmbed(embed)
    }
});
       
               
       

    client.on('message', message => {
        if(message.content.startsWith(prefix + "part")) {
            if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send("Access Denied :x: ")
            message.channel.send(" **Les partenariats sonts ouverts :white_check_mark:** ~~@everyone~~ ")
           
           
           
        }});        

      
      
        client.on('message', message => {
            if(message.content.startsWith(prefix + "musique")) {
                message.channel.send("https://www.youtube.com/watch?v=KEWRQ29elrg")
               
               
               
            }});        
    
    
    
    
    
    
    
    
    
    
    
    
    
        client.on('message', message => {
            if(message.content.startsWith(prefix + "quoi" )) {
                message.channel.send("**Bonjour c'est quoi ce serveur , je fais quoi ici ?**  ")
               
               
               
            }});        









        client.on('message', message => {
            if(message.content.startsWith(prefix + "parn")) {
                if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send("Access Denied :x: ")
                message.channel.send(" **Les partenariats sonts fermés :x: ** ~~@everyone~~ ")
               
               
               
            }});        






            client.on('message', message => {
                if(message.content.startsWith(prefix + "event")) {
                    if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send("Access Denied :x: ")
                    message.channel.send(" **Un évent vient d'être crée clique sur la réaction :green_circle: pour participer clique sur la réaction :red_circle: pour ne pas participer  ** ~~@everyone~~ ")
                   
                   
                   
                }});        
    
    

    
    
    
    
    
       client.on('message', message => {
    if(message.content.startsWith(prefix + "youtube")) {
        message.channel.send(" > **rejoin mon youtube** https://www.youtube.com/channel/UCKEsXiD0K5E94-JPXlVzZJA?view_as=subscriber " )

}});

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
        if (args[0].toLowerCase() === prefix + "clear") {
            if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("Access Denied :x:")
            let count = parseInt(args[1])
            if (!count) return message.channel.send("Veuillez indiquer un nombre de messages à supprimer")
            if (isNaN(count)) return message.channel.send("Veuillez indiquer un nombre valide")
            if (count < 1 || count > 100) return message.channel.send("Veuillez indiquer un nombre entre 1 et 100")
            message.channel.bulkDelete(count + 1, true)
        }
});

client.on('message', message => {
    if(message.content.startsWith(prefix + "playerinfo")) {
        let embed = new Discord.RichEmbed()
        let mention = message.mentions.users.first()
        
        let messageauthor = message.author.id;
        let args = message.content.split(" ").slice(1);
        if(args === "help") return message.channel.send("`"+prefix+"stats <mention>` Permet d'afficher les stats de la personne mentionnée !\n\n`"+prefix+"stats` Permet d'afficher tes stats !")
          
        if(!mention) {
          let userCreateDate = (message.author.createdAt)
          let inscriptionDate = userCreateDate.toDateString()
          embed
            .setColor("#6699FF")
            .setAuthor(":bar_chart: Statistiques de membre :bar_chart: ", message.author.avatarURL)
            .addField(":busts_in_silhouette: Ton pseudo :", message.author.username)
            .addField(":hash: Ton tag :", `#${message.author.discriminator}`)
            .addField(`:id: Ton ID :`, messageauthor, true)
            .addField(`:calendar_spiral: Date d'inscription sur Discord :`, inscriptionDate)
            .setThumbnail(message.author.avatarURL)
            message.channel.send({ embed })
            } else {
            let userCreateDate = (mention.createdAt)
            let inscriptionDate = userCreateDate.toDateString()
            embed
            .setColor("#6699FF")
            .setAuthor(":bar_chart: Statistiques de membre :bar_chart: ", mention.avatarURL)
            .addField(":busts_in_silhouette: Pseudo :", mention.username)
            .addField(":hash: Tag du membre :", `#${mention.discriminator}`)
            .addField(`:id: ID du membre :`, mention.id, true)
            .addField(`:robot: Bot ? :`, mention.bot)
            .addField(`:calendar_spiral: Date d'inscription sur Discord :`, inscriptionDate)
            .setThumbnail(mention.avatarURL)  
            message.channel.send({ embed })
        }
    }
});

client.on("message",message =>  {
    if(message.content === prefix + "info"){
        var embed = new Discord.RichEmbed()
        .setDescription("Information du discord")
        .setTitle(`**Les informations du serveur !**`)
        .addField("**Nom :**", message.guild.name,true)
        .addField("**Acronyme :**", message.guild.nameAcronym,true)
        .addField(":id:**ID du serveur:**", message.guild.id,true)
        .addField(":construction_worker::skin-tone-1:**Propriétaire :**", message.guild.owner.user.tag, true)
        .addField(":flag_eu:**Region du serveur :**", message.guild.region, true)
        .addField(":wrench:**Niveau de vérification :**", message.guild.verificationLevel,true)
        .addField(":calendar:**Date de création du serveur :**", message.guild.createdAt.toDateString(),true)
        .addField(":lifter::skin-tone-1:**Nombre de membres :**", message.guild.members.size,true)
        .addField(":robot:**Nombre de bots :**", message.guild.members.filter(({ user }) => user.bot === true).size,true)
        .addField(":page_facing_up:**Nombre de salons :**", `**${message.guild.channels.filter(channel => channel.type === 'text').size}** textes - **${message.guild.channels.filter(channel => channel.type === 'voice').size}** audios`, true)
        .addField(":gem:**Nombre de rôles :**", message.channel.guild.roles.size, true)
        .addField(":grinning:**Nombre d'émojis :**", message.channel.guild.emojis.size, true)
        .addField(`:clock:**Date de ta venue sur ${message.guild.name} :**`, message.guild.member(message.author).joinedAt.toDateString(),true) 
        .setThumbnail(message.guild.iconURL)
        .setColor("0x0000FF")
    message.channel.sendEmbed(embed)
    }
});

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
    if (args[0].toLocaleLowerCase() === prefix + 'ban') {
       if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande ;(")
       let member = message.mentions.members.first()
       if (!member) return message.channel.send("Veuillez mentionner un utilisateur :x:")
       if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.owner.id) return message.channel.send("Vous ne pouvez pas bannir cet utilisateur :x:")
       if (!member.bannable) return message.channel.send("Tu ne peux pas bannir cet utilisateur 😎")
       message.guild.ban(member, {days: 8})
       message.channel.send('**' + member.user.username + '** a été banni :white_check_mark:')
    }
});
    


client.on('message', message => {
    if(message.content.startsWith(prefix + "debite")) {
        message.channel.send("  > **vien voc que je te débite venez les autres ~~@everyone~~ **")
       
       
       
    }});      
    
    
    client.on('message', message => {
        if(message.content.startsWith(prefix + "boost")) {
            message.channel.send("> **ce qui boost gagneront un serveur et une backup du serveur qu'il voudra**  ")
    }});

    client.on('message', message => {
    if(message.content.startsWith(prefix + "mp")) {
 
        var args = message.content.split(" ").slice(1);
        var msge = args.join(' ');

        if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.channel.send("❌ Tu n'as pas la permission d'utiliser cette commande!");
        if(!msge) return message.channel.send("Precise un message")

        var mpall = new Discord.RichEmbed()
        .setThumbnail(client.user.avatarURL)
        .setTimestamp()
        .addField("A lire", msge);
        message.delete()
        message.guild.members.map(m => m.send(mpall))
    }});