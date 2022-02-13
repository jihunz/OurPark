$(function() {
		
	$(".cancel").click(() => {
		history.back();
	});
	
	item();

	$("form button").click(() => update());

})

//서버에서는 formData의 값이 null임 -> 콘솔 쿼리문의 파라미터 참고
function update() {
	const formData = new FormData($("form")[0]);
	const code = getCode();

    $.ajax(`../../rest/${code}`, {
        method: "PUT",
		data: formData,
		contentType: false,
		processData: false,
        success: result => {
			alert("수정 완료");
			location.href = `http://localhost:9090/ourpark/jsp/list`;
			return;
        },
        error: xhr => { alert(`오류 발생: ${xhr.statusText}`) }
    });

}

function item() {
	const code = getCode();

	$.ajax(`../../rest/list/${code}`, {
		method: "GET",
		dataType: "JSON",
		success: result => {
			$("#placeAddr").val(result.placeAddr);
			$("#placeName").val(result.placeName);
			$("#placeId").val(result.placeId);
			$(`#rating3-${result.rating}`).prop("checked", true);
			$("textarea").text(result.info);
		},
		error: xhr => { alert(`오류 발생: ${xhr.statusText}`) }
	});

}

function getCode() {
	const url = (location.href).split("/");

	return url[6];
}