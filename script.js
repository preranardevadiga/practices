$(document).ready(function () {
    $("#country").change(function () {
      const selectedCountry = $(this).val();
  
      if (selectedCountry !== "") 
      {
      alert("Country Selected..."+selectedCountry );
        // Make an AJAX call to fetch cities based on the selected country
        $.ajax({
		  url: `get-cities1.php?country=${selectedCountry}`,
		  type: "GET",
		  dataType: "json",
		  success: function (data) 
		  {
		    const cityDropdown = $("#city");
		    cityDropdown.empty();
	  
		    if (data.length > 0)
		    {
		      cityDropdown.append("<option value=''>Select</option>");
		      $.each(data, function (index, city) 
		      {
		        cityDropdown.append(
		          $("<option></option>").attr("value", city).text(city)
		        );
		      });

		      alert("Successfully loaded cities.");

		    } 
		    else 
		    {
		      cityDropdown.append("<option value=''>No cities available</option>");
		    }
		  },
		  error: function () 
		  {
		   // console.error("Error fetching cities.");
		   alert("Error fetching cities.");
		  },
             });
      } 
      else 
      {
        // Reset city dropdown if no country is selected
        $("#city").html("<option value=''>Select a country first</option>");
      }
    });
  });

  