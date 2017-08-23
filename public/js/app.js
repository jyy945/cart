var app = angular.module('app',[]);
app.controller('ctrl',['$scope','$http',function($scope,$http){
	$scope.content = '/views/products.html';
	$scope.num = 1;

	$scope.setLink = function(html){
		$scope.getCart();
		$scope.content = '/views/' + html + '.html';
	}

	$scope.setProduct = function(){
		$scope.product = this.product;
		$scope.content = '/views/product.html';
	}



	$scope.productNumAdd = function(){
		$scope.num += 1;
	}

	$scope.productNumSub = function(){
		$scope.num -= 1;
		if($scope.num < 0){
			$scope.num = 0;
		}
	}

	$scope.intoCart = function(){
		$scope.show = true;
 		$scope.cart_num = $scope.num;
 		$scope.num = 1;
 		var cartProduct = {
 			number : $scope.cart_num,
 			product : [$scope.product]
 		};
 		$http.post('/cart/update',{updateProduct : cartProduct}).success(function(data){
 			if(data){
 				alert('已加入购物车');
 			}else{
 				alert('操作失败，未能加入购物车');
 			}
 		}).error(function(){
 			alert('操作失败，未能加入购物车');
 		});
	}


	$http.get('/product/get').success(function(data){
		$scope.products = data;
	}).error(function(err){
		$scope.products = [];
	});
	$http.get('/cart/get').success(function(data){
			$scope.carts = data;
		}).error(function(err){
			$scope.carts = [];
		})


	$scope.getCart = function(){
		$http.get('/cart/get').success(function(data){
			$scope.carts = data;
 		}).error(function(err){
			$scope.carts = [];
		})
	};

	$scope.productRemove = function(){
		var pid = this.cart.product[0]._id;
		$http.post('/cart/remove',{pid : pid}).success(function(data){
			$scope.setLink('cart');
		}).error(function(err){
			alert('删除失败2');
		})
	};

	$scope.setOrder = function(){
		$http.post('/order/update').success(function(data){
			if(data){
				console.log(data);
				$scope.confirmCharge();
			}else{
				console.log('提交订单失败');
			}
		})
	}

	$scope.confirmCharge = function(){
		$http.post('/order/get').success(function(data){
			if(data){
				$scope.orders = data;
				$scope.content = '/views/order.html';
				console.log('获取订单成功');
			}else{
				console.log('获取订单失败');
			}
		}).error(function(){
			console.log('获取订单失败');
		})
	}

}]);