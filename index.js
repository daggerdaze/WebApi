var nav = ["home", "employee_list", "add_employee", "update_employee", "delete_employee", "manage_department", "reports", "about_developer"];
var gid;

$(document).ready(function () {
    for (let i of nav) {
        $("#" + i).css("display", "none");
    }
    $("#home").css("display", "block");
    
});

$('body').on('click', "#home_nav", function () {
    for (let i of nav) {
        $("#" + i).css("display", "none");
    }
    console.log(nav);
    $("#home").css("display", "block");

});

$('body').on('click', "#employee_nav", function () {
    for (let i of nav) {
        $("#" + i).css("display", "none");
    }
      displayRec();
    $("#employee_list").css("display", "block");


});
  
$('body').on('click', "#delete_nav", function () {
    for (let i of nav) {
        $("#" + i).css("display", "none");
    }
    $("#delete_employee").css("display", "block");
});


$('body').on('click', "#depart_nav", function () {
    for (let i of nav) {
        $("#" + i).css("display", "none");
    }
    $("#manage_department").css("display", "block");

});


$('body').on('click', "#report_nav", function () {
    for (let i of nav) {
        $("#" + i).css("display", "none");
    }
    $("#reports").css("display", "block");

});

$('body').on('click', "#develop_nav", function () {
    for (let i of nav) {
        $("#" + i).css("display", "none");
    }
    $("#about_developer").css("display", "block");

});

$('#same').click(function () {
    if (document.getElementById('same').checked) {
        $('#cadd1a').val($('#padd1a').val());
        $('#cadd2a').val($('#padd2a').val());
    }
    else {
        $('#cadd1a').val('');
        $('#cadd2a').val('');
    }
});

// Display Record
function displayRec() {
    fetch('https://localhost:44398/api/employee')
        .then(response => response.json())
        .then(data => {

            console.log(data);
            var list = data;
            console.log(list);
            var j = 1;
            var text = '';
            for (let i of list) {
                text += '<tr><td>' + j +'</td><td>' /*+ "CR-00" */+ i.ID + '</td><td>' + i.EmployeeNo + '</td ><td>' + i.Name + '</td ><td>' + i.Email + '</td><td>' + i.Designation + '</td><td>' + i.HireDate + '</td><td> <i class="fa fa-trash text-danger" onclick="deletebtn(' + i.ID + ')"></i> <i class="fa fa-edit text-primary " onclick="editbtn(' + i.ID + ')"></i></td></tr>';
                j++;
            }
            $('#llist').html(text);
              page();
        //    find();
        //    $(function () {
        //        getpagination(5);
        //    });
        //    //Pagination Script will run when the table data is loaded
        //    var table = '#llist';
        //    $('#maxRows').on('change', function () {
        //        var maxrow = parseInt($(this).val());
        //        if (parseInt($(this).val()) == 5000) {
        //            maxrow = 10;
        //        }
        //        getpagination(maxrow);
        //    });
        //    function activePage() {
        //        var $el = $('[data-page].active');
        //        if ($el.length) {
        //            return $el.data('page');
        //        }
        //        return 0; // just needs to not exist so finder fails
        //    }
        //    $(function () {
        //        $('.prev-btn, .next-btn').on('click', function (e) {
        //            e.preventDefault();
        //            e.stopPropagation(); // prevent the parent event from firing
        //            var page = activePage() + ($(event.target).hasClass('prev-btn') ? -1 : 1);
        //            $('[data-page="' + page + '"]').trigger('click');
        //        });
        //    })
        //    function getpagination(maxows) {
        //        $('table tr:eq(0)').prepend('<th>S.No</th>');
        //        var id = 0;
        //        $('table tr:gt(0)').each(function () {
        //            id++;
        //            $(this).prepend('<td> ' + id + '</td>');
        //        })
        //        $('.pagination').html('')
        //        var trnum = 0;
        //        var maxrows = maxows;
        //        var totalrows = $(table)[0].rows.length;
        //        $(table + ' tr:gt(0)').each(function () {
        //            trnum++;
        //            if (trnum > maxrows) {
        //                $(this).hide()
        //            }
        //            if (trnum <= maxrows) {
        //                $(this).show();
        //            }
        //        });
        //        //if(totalrows > maxrows){
        //        var pagenum = Math.ceil(totalrows / maxrows);
        //        $('.pagination').append('<li class="page-item"><a class="page-link prev-btn" href="#">Previous</a></li>').show();
        //        for (var i = 1; i <= pagenum; i++) {
        //            $('.pagination').append('<li class="page-item" data-page="' + i + '"><a class="page-link" href="#">' + i + '</a></li>').show();
        //        }
        //        $('.pagination').append('<li class="page-item"><a class="page-link next-btn" href="#">Next</a></li>').show();
        //        //}
        //        $('.pagination li:first-child').addClass('active');
        //        $('.pagination li').on('click', function () {
        //            var pagenum = $(this).attr('data-page');
        //            var trIndex = 0;
        //            $('.pagination li').removeClass('active');
        //            $(this).addClass('active');
        //            $('table tr:gt(0)').each(function () {
        //                trIndex++;
        //                if (trIndex > (maxrows * pagenum) || trIndex <= ((maxrows * pagenum) - maxrows)) {
        //                    $(this).hide();
        //                } else {
        //                    $(this).show();
        //                }
        //            });
        //        });
        //    };
        });
}

        


//function getId() {
//    fetch('https://localhost:44398/api/employee')
//        .then(response => response.json())
//        .then(data => {

//            console.log('Hi');
//            var list = data;
//            console.log(list);
//            var text = '';
//            for (let i of list) {
//                text += ' <option value="' + i.ID + '">' + "CR-00" + i.ID +'</option>';
//            }

//            $('#srn').html(text);

//        });
//}

// Delete Employee
function deletebtn(id) {
    //console.log(typeof v);
    fetch('https://localhost:44398/api/employee/' + id, { method: 'DELETE' })
        .then(response => JSON.stringify(response))
        .then(data => {
            console.log(data);

            for (let i of nav) {
                $("#" + i).css("display", "none");
            }
            displayRec();
            $("#employee_list").css("display", "block");
        });

}

// Add New Employee
function addEmp(data) {
    console.log(data);
    fetch('https://localhost:44398/api/employee', {
        method: 'POST', body: JSON.stringify(data), headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then(response => response.json())
        //.then((res) => res.text())
        //.then((text) => text.length ? JSON.parse(text) : {})
        .then(data => {
            console.log('Success:', data);
            if (Object.keys(data).length === 0 ) {
                alert("Email or Employee-Code already exists");
                return;
            }
            if ($('#emp_code').val() == '' || $('#name').val() == '' || $('#email').val() == '' || $('#designation').val() == '' || $('#join_date').val() == '') {
                alert("Field is Empty");
                return;
            }
            else {

                alert("Employee added successfully");
            }
            for (let i of nav) {
                $("#" + i).css("display", "none");
            }
            displayRec();
            $("#employee_list").css("display", "block");
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Email or Employee-Code already exists');
        });

}

function ValidateEmail(mail,obj) {
    var regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (regex.test(mail)) {
        addemploy(obj);
        return true;
    }
    else {
        alert("You have entered an invalid email address!")
        return false;
    }
} 
function save() {
    var obj = {};
    obj.EmployeeNo = document.getElementById('emp_code').value;
    obj.Name = document.getElementById('name').value;
    obj.Email = document.getElementById('email').value;
    obj.Designation = document.getElementById('designation').value;
  
    obj.HireDate = document.getElementById('join_date').value;
   
    if (document.getElementById('per').checked) {
        obj.Padd1 = document.getElementById('padd1a').value;
        obj.Padd2 = document.getElementById('padd2a').value;
        if ($('#padd1a').val() == '' || $('#padd2a').val() == '') {
            alert("Please fill the address field ");
            return;
        }
    }
   
    if (document.getElementById('comm').checked) {
        obj.Cadd1 = document.getElementById('cadd1a').value;
        obj.Cadd2 = document.getElementById('cadd2a').value;
        if ($('#cadd1a').val() == '' || $('#cadd2a').val() == '') {
            alert("Please fill the address field ");
            return;
        }
    }
    console.log(obj);
    ValidateEmail(document.getElementById('email').value,obj);
    
}


// Update Record
function update() {
    var obj = {};
    obj.ID = document.getElementById("srn").value;
    obj.EmployeeNo = document.getElementById('emp_code1').value;
    obj.Name = document.getElementById('name1').value;
    obj.Email = document.getElementById('email1').value;
    obj.Designation = document.getElementById('designation1').value;
    
    obj.HireDate = document.getElementById('hdate1').value;
    if (document.getElementById('per1').checked) {
        obj.Padd1 = document.getElementById('padd1u').value;
        obj.Padd2 = document.getElementById('padd2u').value;
        if ($('#padd1u').val() == '' || $('#padd2u').val() == '') {
            alert("Please fill the address field ");
            return;
        }
    }
    if (document.getElementById('comm1').checked) {
        obj.Cadd1 = document.getElementById('cadd1u').value;
        obj.Cadd2 = document.getElementById('cadd2u').value;
        if ($('#cadd1u').val() == '' || $('#cadd2u').val() == '') {
            alert("Please fill the address field ");
            return;
        }
    }
    console.log(obj.ID);
    fetch('https://localhost:44398/api/employee', {
        method: 'PUT', body: JSON.stringify(obj), headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then(response => response.json())
        .then(data => {
       //     console.log('Success:', data);
            if (data && Object.keys(data).length === 0 && empty.constructor === Object) {
       //         data = null;
       //         data = undefined;
                alert("Email or Employee-Code already exists");
                return;
            }
            if ($('#name1').val() == '' || $('#designation1').val() == '' || $('#hdate1').val() == '') {
                alert("Field is Empty");
                return;
            }
            else {
                alert("Record Updated successfully");
            }
            console.log(obj.ID);
            console.log('Success:', data);
            for (let i of nav) {
                $("#" + i).css("display", "none");
            }
            displayRec();
            $("#employee_list").css("display", "block");
        })
        .catch(error => {
            console.error('Error:', error);
            alert("Error:" + error);

        });

}

//Edit Button
function editbtn(id) {

    fetch('https://localhost:44398/api/employee/' + id, { method: 'GET' })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            var list = data;

            console.log(list);
            document.getElementById('srn').value = list.ID;
            document.getElementById('emp_code1').value = list.EmployeeNo;
            document.getElementById('name1').value = list.Name;
            document.getElementById('email1').value = list.Email;
            document.getElementById('designation1').value = list.Designation;
            document.getElementById('hdate1').value = list.HireDate;
            document.getElementById('padd1u').value = list.Padd1;
            document.getElementById('padd2u').value = list.Padd2;
            document.getElementById('cadd1u').value = list.Cadd1;
            document.getElementById('cadd1u').value = list.Cadd2;
            for (let i of nav) {
                $("#" + i).css("display", "none");
            }
            $("#update_employee").css("display", "block");

        });


}
   //Searching

    $('#searchall').keyup(function () {
        // Search Text
        var search = $(this).val();

        // Hide all table tbody rows
        $('table tbody tr').hide();

        // Count total search result
        var len = $('table tbody tr:not(.notfound) td:contains("' + search + '")').length;

        if (len > 0) {
            // Searching text in columns and show match row
            $('table tbody tr:not(.notfound) td:contains("' + search + '")').each(function () {
                $(this).closest('tr').show();
            });
        } else {
            $('.notfound').show();
       //     displayRec();
    //        page();
        }
        //     initTable();
        
    });

    
function newbtn() {
    for (let i of nav) {
        $("#" + i).css("display", "none");
    }
    $("#add_employee").css("display", "block");
    //$("#padd1a").hide();
    //$("#padd2a").hide();
    //$("#per").click(function () {
    //    $("#padd1a").toggle();
    //    $("#padd2a").toggle();
    //});
    //fetch('https://localhost:44398/api/employee')
    //    .then(response => response.json())
    //    .then(data => {

    //        console.log(data);
    //        var list = data;
    //        console.log(list);
    //  //      var j = 1;
    //        var text = '';
    //        for (let i of list) {
    //            text += '<input value=" + "'+ "CR-00" + i.ID +'">' + "CR-00" + i.ID + '</input>';
    //   //         j++;
    //        }

    //        $('#emp_code').html(text);
    //    });
}

//Pagination
//function page() {
//    // Selectors for future use
//    var myTable = "#emplist";
//    var myTableBody = myTable + " tbody";
//    var myTableRows = myTableBody + " tr";
//    var myTableColumn = myTable + " th";

//    //$(myTableColumn).each(function () {
//    //    var width = $(this).width();
//    //    $(this).width(width + 40);
//    //});

//    // Set the first column as sorted ascending
//    //$(myTableColumn).eq(0).addClass("sorted-asc");

//    ////Sort the table using the current sorting order
//    //sortTable($(myTable), 0, "asc");

//    // Starting table state
//    function initTable() {
//        $(myTableBody).attr("data-pageSize", 5);
//        $(myTableBody).attr("data-firstRecord", 0);
//        $('#previous').hide();
//        $('#next').show();

//        // Start the pagination
//       paginate(parseInt($(myTableBody).attr("data-firstRecord"), 10),
//            parseInt($(myTableBody).attr("data-pageSize"), 10));
//    }


//    // Table sorting function
//    //function sortTable(table, column, order) {
//    //    var asc = order === 'asc';
//    //    var tbody = table.find('tbody');

//    //    // Sort the table using a custom sorting function by switching 
//    //    // the rows order, then append them to the table body
//    //    tbody.find('tr').sort(function (a, b) {
//    //        if (asc) {
//    //            return $('td:eq(' + column + ')', a).text()
//    //                .localeCompare($('td:eq(' + column + ')', b).text());
//    //        } else {
//    //            return $('td:eq(' + column + ')', b).text()
//    //                .localeCompare($('td:eq(' + column + ')', a).text());
//    //        }
//    //    }).appendTo(tbody);

//    //}

//    // Heading click
//    $(myTableColumn).click(function () {

//        // Remove the sort classes for all the column, but not the first
//        //$(myTableColumn).not($(this)).removeClass("sorted-asc sorted-desc");

//        //// Set or change the sort direction
//        //if ($(this).hasClass("sorted-asc") || $(this).hasClass("sorted-desc")) {
//        //    $(this).toggleClass("sorted-asc sorted-desc");
//        //} else {
//        //    $(this).addClass("sorted-asc");
//        //}

//        ////Sort the table using the current sorting order
//        //sortTable($(myTable),
//        //    $(this).index(),
//        //    $(this).hasClass("sorted-asc") ? "asc" : "desc");



//        // Start the pagination
//        paginate(parseInt($(myTableBody).attr("data-firstRecord"), 10),
//            parseInt($(myTableBody).attr("data-pageSize"), 10));
//    });

//    // Pager click
//    $("a.paginate").click(function (e) {
//        e.preventDefault();
//        var tableRows = $(myTableRows);
//        var tmpRec = parseInt($(myTableBody).attr("data-firstRecord"), 10);
//        var pageSize = parseInt($(myTableBody).attr("data-pageSize"), 10);

//        // Define the new first record
//        if ($(this).attr("id") == "next") {
//            tmpRec += pageSize;
//        } else {
//            tmpRec -= pageSize;
//        }
//        // The first record is < of 0 or > of total rows
//        if (tmpRec < 0 || tmpRec > tableRows.length) return

//        $(myTableBody).attr("data-firstRecord", tmpRec);
//        paginate(tmpRec, pageSize);
//    });

//    // Paging function
//    var paginate = function (start, size) {
//        var tableRows = $(myTableRows);
//        var end = start + size;
//        // Hide all the rows
//        tableRows.hide();
//        // Show a reduced set of rows using a range of indices.
//        tableRows.slice(start, end).show();
//        // Show the pager
//        $(".paginate").show();
//        // If the first row is visible hide prev
//        if (tableRows.eq(0).is(":visible")) $('#previous').hide();
//        // If the last row is visible hide next 
//        if (tableRows.eq(tableRows.length - 1).is(":visible")) $('#next').hide();
//    }

//    // Table starting state
//    initTable();
// //   displayRec();
// //   find();
//}



function page() {
    var myTable = "#emplist";
    var myTableBody = myTable + " tbody";
    var myTableRows = myTableBody + " tr";
    var myTableColumn = myTable + " th";

    // Starting table state
    function initTable() {
        $(myTableBody).attr("data-pageSize", 5);
        $(myTableBody).attr("data-firstRecord", 0);
        $('#previous').hide();
        $('#next').show();

        // Increment the table width for sort icon support


        // Start the pagination
        paginate(parseInt($(myTableBody).attr("data-firstRecord"), 10),
            parseInt($(myTableBody).attr("data-pageSize"), 10));
    }


    // Table sorting function
    //function sortTable(table, column, order) {


    //}

    // Heading click
    $(myTableColumn).click(function () {


        // Start the pagination
        paginate(parseInt($(myTableBody).attr("data-firstRecord"), 10),
            parseInt($(myTableBody).attr("data-pageSize"), 10));
    });

    // Pager click
    $("a.paginate").click(function (e) {
        e.preventDefault();
        var tableRows = $(myTableRows);
        var tmpRec = parseInt($(myTableBody).attr("data-firstRecord"), 10);
        var pageSize = parseInt($(myTableBody).attr("data-pageSize"), 10);

        // Define the new first record
        if ($(this).attr("id") == "next") {
            tmpRec += pageSize;
        } else {
            tmpRec -= pageSize;
        }
        // The first record is < of 0 or > of total rows
        if (tmpRec < 0 || tmpRec > tableRows.length) return

        $(myTableBody).attr("data-firstRecord", tmpRec);
        paginate(tmpRec, pageSize);
    });

    // Paging function
    var paginate = function (start, size) {
        var tableRows = $(myTableRows);
        var end = start + size;
        // Hide all the rows
        tableRows.hide();
        // Show a reduced set of rows using a range of indices.
        tableRows.slice(start, end).show();
        // Show the pager
        $(".paginate").show();
        // If the first row is visible hide prev
        if (tableRows.eq(0).is(":visible")) $('#previous').hide();
        // If the last row is visible hide next 
        if (tableRows.eq(tableRows.length - 1).is(":visible")) $('#next').hide();
    }

    // Table starting state
 //   displayRec();
//    find();
    initTable();
}



//paginator({
//    table: document.getElementById("emplist").getElementsByTagName("table")[0],
//    box: document.getElementById("box"),
//});










