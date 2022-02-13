class ArtGallery{
    constructor(creator){
        this.creator = creator;
        this.possibleArticles = { "picture":200,"photo":50,"item":250 };
        this.listOfArticles = [];
        this.guests = [];
    }

    addArticle( articleModel, articleName, quantity){
        if(Object.keys(this.possibleArticles).includes(articleModel.toLowerCase())){
            let index = this.listOfArticles.findIndex(e => e.articleModel == articleModel.toLowerCase() && e.articleName == articleName);

            if(index == -1){
                this.listOfArticles.push( {
                    articleName,
                    'articleModel' : articleModel.toLowerCase(),
                    quantity
                });
            } else {
                this.listOfArticles[index].quantity += quantity;
            }

            return `Successfully added article ${articleName} with a new quantity- ${quantity}.`;
        } else {
            throw new Error("This article model is not included in this gallery!");
        }
    }

    inviteGuest ( guestName, personality){
        let guest = this.guests.find(g => g.guestName == guestName);

        if(guest){
            throw new Error(`${guestName} has already been invited.`);
        } else {
            let points = {
                'Vip' : 500,
                'Middle' : 250
            };
            if(points[personality]){
                this.guests.push({
                    guestName,
                    'points' : points[personality],
                    'purchaseArticle' : 0 
                });
            } else {
                this.guests.push({
                    guestName,
                    'points' : 50,
                    'purchaseArticle' : 0 
                });
            }
            
        }

        return `You have successfully invited ${guestName}!`;
    }

    buyArticle ( articleModel, articleName, guestName){
        let article = this.listOfArticles.find(a => a.articleModel == articleModel.toLowerCase() && a.articleName == articleName);

        if(article){

            if(article.quantity == 0){
                return `The ${articleName} is not available.`;
            }

            let guest = this.guests.find(g => g.guestName == guestName);

            if(guest){
                let neededPoints = this.possibleArticles[article.articleModel];

                if(guest.points < neededPoints){
                    return "You need to more points to purchase the article.";
                } else {
                    guest.points -= neededPoints;
                    guest.purchaseArticle++;
                    article.quantity--;
                    return `${guestName} successfully purchased the article worth ${neededPoints} points.`
                }
            } else {
                return "This guest is not invited.";
            }
        } else {
            throw new Error("This article is not found.");
        }
    }

    showGalleryInfo (criteria){
        let result = '';
        if(criteria == 'article'){
            result += "Articles information:\n";
            result += this.listOfArticles.map(a => `${a.articleModel} - ${a.articleName} - ${a.quantity}`).join('\n');
        } else if(criteria == 'guest'){
            result += "Guests information:\n";
            result += this.guests.map(g => `${g.guestName} - ${g.purchaseArticle}`).join('\n');
        }

        return result;
    }
}

const artGallery = new ArtGallery('Curtis Mayfield'); 
artGallery.addArticle('picture', 'Mona Liza', 3);
artGallery.addArticle('Item', 'Ancient vase', 2);
artGallery.addArticle('picture', 'Mona Liza', 1);
artGallery.inviteGuest('John', 'Vip');
artGallery.inviteGuest('Peter', 'Middle');
artGallery.buyArticle('picture', 'Mona Liza', 'John');
artGallery.buyArticle('item', 'Ancient vase', 'Peter');
console.log(artGallery.showGalleryInfo('article'));
console.log(artGallery.showGalleryInfo('guest'));




