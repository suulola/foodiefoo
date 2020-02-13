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

  allFood = [
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

  registerOrder(): void {
    console.log("hadfsl")
    const dialogRef = this.dialog.open(ModalComponent)


  }

}
