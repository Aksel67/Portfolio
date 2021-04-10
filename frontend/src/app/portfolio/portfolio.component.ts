import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { ApiService } from '../api.service';
import { Portfolio } from '../portfolio';

@Component({
  selector: 'router-outlet',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
	portfolio: Portfolio[];
	selectedPortfolio: Portfolio = { id : null , nom: null, description: null, categorie_id: null, user_id: null}
	constructor(private apiService: ApiService) {
		this.apiService.readPortfolio().subscribe((portfolio: Portfolio[])=>{
		this.portfolio = portfolio;
		console.log(this.portfolio);
	}) }
	ngOnInit()
	{
	}
	createOrUpdatePortfolio(form){
		form.value.id = this.selectedPortfolio.id;
		form.value.nom = this.selectedPortfolio.nom;
		form.value.description = this.selectedPortfolio.description;
    	form.value.categorie_id = this.selectedPortfolio.categorie_id;
    	form.value.user_id = this.selectedPortfolio.user_id;
		if(this.selectedPortfolio && this.selectedPortfolio.id){
			this.apiService.updatePortfolio(form.value).subscribe((portfolio: Portfolio)=>{
			console.log("portfolio updated" , portfolio);
			this.apiService.readPortfolio().subscribe((portfolio: Portfolio[])=>{
				this.portfolio = portfolio;
			})
		});
	}
	else{
		this.apiService.createPortfolio(form.value).subscribe((portfolio: Portfolio)=>{
			console.log("portfolio created, ", portfolio);
			this.apiService.readPortfolio().subscribe((portfolio: Portfolio[])=>{
				this.portfolio = portfolio;
			})
		});
	}
}

selectPortfolio(portfolio: Portfolio){
	this.selectedPortfolio = portfolio;
}

/*deleteProduct(id){
	this.apiService.deleteProduct(id).subscribe((product: Product)=>{
		console.log("Product deleted, ", product);
		this.apiService.readProducts().subscribe((products: Product[])=>{
			this.products = products;
		})
	});
}*/
}
