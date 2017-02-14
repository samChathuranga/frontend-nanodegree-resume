// ============================= Bio data
var bio = {
	"name": "Sameera Chathuranga",
	"role": "Frontend developer",
	"contacts": {
		"mobile": "123-456-7890",
		"email": "c.a.sameera@gmail.com",
		"github": "https://github.com/samChathuranga",
		"twitter": "@hjskhkshd987sd897",
		"Location": "Colombo"
	},
	"welcomeMessage": "Hey, this is my welcome message",
	"skills": ["Web desiging", "ReactJS", "AngularJS"],
	"biopic": "images/fry.jpg",
	"display": function () {
		var formattedName = HTMLheaderName.replace ("%data%", bio.name),
				formattedRole = HTMLheaderRole.replace ("%data%", bio.role);

		$('#header').prepend (formattedRole);
		$('#header').prepend (formattedName);

		// Bio pic
		var formattedBioPic = HTMLbioPic.replace ('%data%', bio.biopic);
		$('#header').append (formattedBioPic);

		// Welcome messgae
		var formattedWelcomeMessage = HTMLwelcomeMsg.replace ('%data%', bio.welcomeMessage);
		$('#header').append (formattedWelcomeMessage);

		// Render contact details
		var renderContacts = function () {

			// '<li class="flex-item"><span class="orange-text">%contact%</span><span class="white-text">%data%</span></li>';
			Object.keys(bio.contacts).forEach(function(key) {
				var formattedContact = HTMLcontactGeneric.replace ('%contact%', key).replace ('%data%', bio.contacts[key]);
				$('#topContacts').append (formattedContact);
			});

		};

		renderContacts();

		// Render skills
		var renderSkills = function () {

			$('#header').append (HTMLskillsStart);

			// '<li class="flex-item"><span class="white-text">%data%</span></li>';
			Object.keys(bio.skills).forEach(function(key) {
				var formattedContact = HTMLskills.replace ('%data%', bio.skills[key]);
				$('#skills').append (formattedContact);
			});

		}
		renderSkills();

	}
}

// ============================= Education

var education = {
	"schools": [{
		"name": 'Dharmapala Vidyalaya',
		"location": "Pannipitiya",
		"degree": "Advanced Level",
		"majors":  ["GCE A/L Combined Maths"],
		"dates": "2007 - 2009"
	}],
	"onlineCourses": [{
		"title": "Frontend developer nano degree",
		"school": "Udacity",
		"dates": "2016 Oct - Present",
		"url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
	}],
	display: function () {


		$('#education').append (HTMLschoolStart);

		education.schools.forEach (function (school) {

			var formattedDegree = HTMLschoolDegree.replace ('%data%', school.degree),
					formattedSchoolName = HTMLschoolName.replace ('%data%', school.name),
					formattedSchoolNameAndDegre = formattedSchoolName + formattedDegree,
					formattedSchoolDates = HTMLschoolDates.replace ('%data%', school.dates),
					formattedSchoolLocation = HTMLschoolLocation.replace ('%data%', school.location);

			$(".education-entry:last").append (formattedSchoolNameAndDegre);
			$(".education-entry:last").append (formattedSchoolDates);
			$(".education-entry:last").append (formattedSchoolLocation);

			school.majors.forEach (function (major) {
				var formattedMajor = HTMLschoolMajor.replace ('%data%', major);
				$(".education-entry:last").append (formattedMajor);
			})

		});



	}
}


bio.display ();
education.display ();

// Appending skills
// if (bio.skills.length > 0 ) {
// 	$('#header').append (HTMLskillsStart);
//
// 	var formattedSkills = HTMLskills.replace ("%data%", bio.skills[0]);
// 	$('#skills').append (formattedSkills);
//
// 	formattedSkills = HTMLskills.replace ("%data%", bio.skills[1]);
// 	$('#skills').append (formattedSkills);
//
// 	formattedSkills = HTMLskills.replace ("%data%", bio.skills[2]);
// 	$('#skills').append (formattedSkills);
//
// 	formattedSkills = HTMLskills.replace ("%data%", bio.skills[3]);
// 	$('#skills').append (formattedSkills);
//
// }
//
//
// // Appending work experience
// function displayWork () {
//
// 	for (job in work.jobs) {
// 		$('#workExperience').append (HTMLworkStart);
//
// 		var formattedTitle = HTMLworkTitle.replace ('%data%', work.jobs[job].title)
// 				formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer),
// 				formattedEmployerTitle = formattedEmployer + formattedTitle;
//
// 		$(".work-entry:last").append(formattedEmployerTitle);
//
//
// 		var formattedDates = HTMLworkDates.replace ("%data%", work.jobs[job].workDates);
// 		$(".work-entry:last").append(formattedDates);
//
// 		var description = HTMLworkDescription.replace ("%data%", work.jobs[job].description)
// 	  $(".work-entry:last").append(description);
// 	}
//
// }
//
// displayWork ();
