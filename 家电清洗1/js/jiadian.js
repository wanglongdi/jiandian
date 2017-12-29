$(function(){
	

	//清单个数总和
	function totalNum(){
		var sum=0;
		$('b.round').each(function(){
			sum+=Number($(this).text())
		})
		return sum;
	}
	//总计
	function totalMoney(){
		var sum=0;
		$('.jiadian_sel ul li').each(function(){
			var price=$(this).find('.price i').text();
			var num=$(this).find('b.round').text();
			sum+=Number(price)*Number(num);
		})
		var con='¥'+sum.toFixed(2);
		$('#jiadian_total b').html(con);
		$('#inputMoney').val(con);
	}
	//input
	function inputId(){
		var arr='';
		$('.jiadian_sel ul li').each(function(){
			var arrId=$(this).find('a').attr('tapy_id');
			var num=$(this).find('b.round').text();

			if(arr == ''){
				if(num !== '0'){
					//arr+='{tapyid:'+arrId+',num:'+num+'}';
					arr+='{\"tapyid\":\"'+arrId+'\",\"num\":\"'+num+'\"}';
				}

			}else{
				if(num !== '0'){
					//arr+=',{tapyid:'+arrId+',num:'+num+'}';
					arr+=',{\"tapyid\":\"'+arrId+'\",\"num\":\"'+num+'\"}';
				}
			}
			
		})
		$('#inputOrder').val('['+arr+']');
		//$('#inputOrder').attr('name','['+arr+']');
	}
	/*function inputId(){
		var arr=[];
		$('.jiadian_sel ul li').each(function(){
			var arrId=$(this).find('a').attr('tapy_id');
			var num=$(this).find('b.round').text();
			var arr0=[];
			if(num !== '0'){
				arr0=[arrId,num];
				arr.push(arr0);
			}
			
		})
		//console.log(arr);
		$('#inputOrder').attr('name',11);
	}*/
	//点击服务内容
	$('.jiadian_sel ul li').click(function(){
		var con=$(this).find('b.round');
		var num=Number(con.text());
		var name=$(this).find('.text').text();
		var price=$(this).find('.price i').text();
		num++;
		con.show().text(num);
		totalNum();
		totalMoney();
		inputId();
		if(totalNum()>0){
			$('#jiadian_wait,#remark').removeClass('hide').addClass('show');
		}
		if(num==1){
			var tt='<li><div class="text">'+name+'</div><div class="price">¥<i>'+price+'</i></div><div class="num"><b class="add"></b><input type="text" value="1" readonly /><b class="minus"></b></div></li>';
			$('#jiadian_wait ul').append(tt);
		}
		$('#jiadian_wait ul li').each(function(){
			var oText=$(this).find('.text').text();
			if(oText==name){
				$(this).find('input').val(num);
			}
		})
		//$('.jiadian_sel').find('.error').hide();
	})
	//袋洗清单
	function singleNum(oText,num){
		$('.jiadian_sel ul li').each(function(){
			var oName=$(this).find('.text').text();
			var con=$(this).find('b.round');
			if(oText==oName){
				con.text(num);
				if(num==0){
					con.hide();
				}
			}

		})
	}
	$('#jiadian_wait').on('click','.add',function(){
		var oParent=$(this).parents('li');
		var oInput=oParent.find('input');
		var oText=oParent.find('.text').text();
		var num=Number(oInput.val());
		num++;
		oInput.val(num);
		singleNum(oText,num);
		totalMoney();
		inputId();
		
	})
	$('#jiadian_wait').on('click','.minus',function(){
		var oParent=$(this).parents('li');
		var oInput=oParent.find('input');
		var oText=oParent.find('.text').text();
		var num=Number(oInput.val());
		num--;
		oInput.val(num);
		singleNum(oText,num);
		if(num==0){
			oParent.remove();
		}
		totalNum();
		if(totalNum()==0){
			$('#jiadian_wait,#remark').removeClass('show').addClass('hide');
		}
		totalMoney();
		inputId();
	})
	//删除
	$('#jiadian_del').click(function(){
		$('#jiadian_wait,#remark').removeClass('show').addClass('hide');
		$('#jiadian_wait ul li').remove();
		$('.jiadian_sel ul li').each(function(){
			$(this).find('b.round').hide();
			$(this).find('b.round').text('0');
		})
		totalMoney();
	})

	//列表展开
	$('.jiadian_kind').each(function(){
		var num=$(this).find('li').length;
		var open=$(this).find('.open');
		if(num<3){
			open.hide();
		}else{
			open.show();
		}
	})
	//列表隐藏
	$('.jiadian_kind ul li').each(function(){
		var num=$(this).index();
		if(num>1){
			$(this).hide();
		}
	})
	//点击展开
	$('.open').click(function(){
		$(this).parent().find('li').show();
		$(this).hide();
	})

	function errorShow(obj){
		$('#error').show().text(obj);
		setTimeout("$('#error').hide()",2000);
	}

	var date=new Date();
	var week=['星期日','星期一','星期二','星期三','星期四','星期五','星期六'];
	var showText='';
	var showData='';
	var obj='';
	var dataArr=[];
	var valArr=[];
	for(var i=0; i<7; i++){
		date.setDate(date.getDate()+1);
		if(i==0){
			showText='明天'+'('+(date.getMonth()+1)+'月'+date.getDate()+')';
			//showData='明天'+'('+date.getFullYear()+'年'+(date.getMonth()+1)+'月'+date.getDate()+')';
		}else{
			showText=week[date.getDay()]+'('+(date.getMonth()+1)+'月'+date.getDate()+')';
			
		}
		showData=date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate();
		dataArr.push(showText);
		valArr.push(showData);
		
	}
	//console.log(dataArr);
	//console.log(valArr);

	$('#input_time').picker({
		title: "请选择您的手机",
		 cols: [
		    {
		      textAlign: 'center',
		      values: dataArr
		    }
		  ]
	})
	
	//表单提交
	$('#subBtn').click(function(){
		
		var time_val=$('#input_time').val();
		var time_val0;
		var money=$('#jiadian_total').find('b').html();
		var textarea=$('textarea').val();
		var order=$('#inputOrder').val();
		var adressId=$('#adressId').attr('data-data');

		var name_val=$('#input_name').val();		
		var tel_val=$('#input_tel').val();
		//var city_val=$('#city-picker').val();
		var adr_val=$('#input_adr').val();
		var telReg = /^1\d{10}$/;


		//var arr=city_val.split(' ');
		//var province = arr[0];
        //var city = arr[1];
        //var area = arr[2] ? arr[2] : "";
        var city=$('#city-picker').val();
        var area=$('.area').val();
        
        for( var i=0;i<7;i++){
        	if(time_val==dataArr[i]){
        		time_val0=valArr[i];
        	}
        }

		var formParam={
			time: time_val0,
			name: name_val,
			tel: tel_val,
			province: province,
			city: city,
			area: area,
			address: adr_val,
			money: money,
			textarea: textarea,
			order: order,
			adressId: adressId

		};
		console.log(formParam);
		if(time_val == ''){
			errorShow('请选择服务时间');
			return false;
		}
		else if(name_val == ''){
			errorShow('请输入联系人');
			return false;
		}
		else if(tel_val == ''){
			errorShow('请输入电话号码');
			return false;
		}else if(!telReg.test(tel_val)){
			errorShow('请输入正确电话号码');
			return false;
		}
		else if(city== ''){
			errorShow('请选择城市');
			return false;
		}
		else if(area== ''){
			errorShow('请选择区域');
			return false;
		}
		else if(adr_val == ''){
			errorShow('请输入详细地址');
			return false;
		}
		else if(money == '¥0.00'){
			errorShow('请选择服务内容');
			return false;
		}else{
			console.log(1);
			$.ajax({
                type: "post",
                url: url,
                data: formParam,
                dataType: "json",
                success: function(data) {

                }

			})
		}
		
	})
	
	//$('#input_time,#selTime').mtimer();

	

})