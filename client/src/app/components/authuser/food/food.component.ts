import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ModalComponent } from '../../sharedcomponents/modal/modal.component';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {}

  selectedItem: any = [
    { 
      title: "Rice and Beans", 
      price: 3000, 
      image: "https://www.goya.com/media/4027/pink-beans-and-rice1.jpg?quality=80",
      oldprice: 5000,
      desc: "West African Rice and Beans",    
    }
  ]

  allFood = [
    { 
      title: "Beans", 
      price: 3000, 
      image: "https://www.goya.com/media/4027/pink-beans-and-rice1.jpg?quality=80",
      oldprice: 5000,
      desc: "West African Rice and Beans",    
    },
    { 
      title: "Rice", 
      price: 3000, 
      image: "https://www.goya.com/media/4027/pink-beans-and-rice1.jpg?quality=80",
      oldprice: 5000,
      desc: "West African Rice and Beans",    
    },
    { 
      title: "Yam", 
      price: 3000, 
      image: "https://www.goya.com/media/4027/pink-beans-and-rice1.jpg?quality=80",
      oldprice: 5000,
      desc: "West African Rice and Beans",    
    },
    { 
      title: "Cassava", 
      price: 3000, 
      image: "https://www.goya.com/media/4027/pink-beans-and-rice1.jpg?quality=80",
      oldprice: 5000,
      desc: "West African Rice and Beans",    
    },
    { 
      title: "Honey", 
      price: 3000, 
      image: "https://www.goya.com/media/4027/pink-beans-and-rice1.jpg?quality=80",
      oldprice: 5000,
      desc: "West African Rice and Beans",    
    },
    { 
      title: "Others", 
      price: 3000, 
      image: "https://www.goya.com/media/4027/pink-beans-and-rice1.jpg?quality=80",
      oldprice: 5000,
      desc: "West African Rice and Beans",    
    },
    { 
      title: "and Beans", 
      price: 3000, 
      image: "https://www.goya.com/media/4027/pink-beans-and-rice1.jpg?quality=80",
      oldprice: 5000,
      desc: "West African Rice and Beans",    
    },
    { 
      title: "Rice and Beans", 
      price: 3000, 
      image: "https://www.goya.com/media/4027/pink-beans-and-rice1.jpg?quality=80",
      oldprice: 5000,
      desc: "West African Rice and Beans",    
    },
    { 
      title: "Rice and Beans", 
      price: 3000, 
      image: "https://www.goya.com/media/4027/pink-beans-and-rice1.jpg?quality=80",
      oldprice: 5000,
      desc: "West African Rice and Beans",    
    },
    { 
      title: "Rice and Beans", 
      price: 3000, 
      image: "https://www.goya.com/media/4027/pink-beans-and-rice1.jpg?quality=80",
      oldprice: 5000,
      desc: "West African Rice and Beans",    
    },
    { 
      title: "Rice and Beans", 
      price: 3000, 
      image: "https://www.goya.com/media/4027/pink-beans-and-rice1.jpg?quality=80",
      oldprice: 5000,
      desc: "West African Rice and Beans",    
    },
    { 
      title: "Rice and Beans", 
      price: 3000, 
      image: "https://www.goya.com/media/4027/pink-beans-and-rice1.jpg?quality=80",
      oldprice: 5000,
      desc: "West African Rice and Beans",    
    },
    { 
      title: "Rice and Beans", 
      price: 3000, 
      image: "https://www.goya.com/media/4027/pink-beans-and-rice1.jpg?quality=80",
      oldprice: 5000,
      desc: "West African Rice and Beans",    
    },
    { 
      title: "Rice and Beans", 
      price: 3000, 
      image: "https://www.goya.com/media/4027/pink-beans-and-rice1.jpg?quality=80",
      oldprice: 5000,
      desc: "West African Rice and Beans",    
    },
    { 
      title: "Rice and Beans", 
      price: 3000, 
      image: "https://www.goya.com/media/4027/pink-beans-and-rice1.jpg?quality=80",
      oldprice: 5000,
      desc: "West African Rice and Beans",    
    },
    { 
      title: "Rice and Beans", 
      price: 3000, 
      image: "https://www.goya.com/media/4027/pink-beans-and-rice1.jpg?quality=80",
      oldprice: 5000,
      desc: "West African Rice and Beans",    
    },
    { 
      title: "Rice and Beans", 
      price: 3000, 
      image: "https://www.goya.com/media/4027/pink-beans-and-rice1.jpg?quality=80",
      oldprice: 5000,
      desc: "West African Rice and Beans",    
    },
    { 
      title: "Rice and Beans", 
      price: 3000, 
      image: "https://www.goya.com/media/4027/pink-beans-and-rice1.jpg?quality=80",
      oldprice: 5000,
      desc: "West African Rice and Beans",    
    },
    { 
      title: "Rice and Beans", 
      price: 3000, 
      image: "https://www.goya.com/media/4027/pink-beans-and-rice1.jpg?quality=80",
      oldprice: 5000,
      desc: "West African Rice and Beans",    
    },
    { 
      title: "Rice and Beans", 
      price: 3000, 
      image: "https://www.goya.com/media/4027/pink-beans-and-rice1.jpg?quality=80",
      oldprice: 5000,
      desc: "West African Rice and Beans",    
    },
    { 
      title: "Rice and Beans", 
      price: 3000, 
      image: "https://www.goya.com/media/4027/pink-beans-and-rice1.jpg?quality=80",
      oldprice: 5000,
      desc: "West African Rice and Beans",    
    },
    { 
      title: "Rice and Beans", 
      price: 3000, 
      image: "https://www.goya.com/media/4027/pink-beans-and-rice1.jpg?quality=80",
      oldprice: 5000,
      desc: "West African Rice and Beans",    
    },
    { 
      title: "Rice and Beans", 
      price: 3000, 
      image: "https://www.goya.com/media/4027/pink-beans-and-rice1.jpg?quality=80",
      oldprice: 5000,
      desc: "West African Rice and Beans",    
    },
    { 
      title: "Rice and Beans", 
      price: 3000, 
      image: "https://www.goya.com/media/4027/pink-beans-and-rice1.jpg?quality=80",
      oldprice: 5000,
      desc: "West African Rice and Beans",    
    },
 

  ]

  registerOrder(item: any): void {
    console.log(item)
    this.selectedItem.push(item);
    console.log(this.selectedItem)
    console.log("hadfsl")
    const dialogRef = this.dialog.open(ModalComponent)


  }

}
