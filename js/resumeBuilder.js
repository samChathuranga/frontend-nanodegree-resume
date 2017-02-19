// ============================= Bio data
var bio = {
	"name": "Sameera Chathuranga",
	"role": "Frontend developer",
	"contacts": {
		"mobile": "123-456-7890",
		"email": "c.a.sameera@gmail.com",
		"github": "https://github.com/samChathuranga",
		"twitter": "@hjskhkshd987sd897",
		"location": "Colombo"
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
				$("#footerContacts").append(formattedContact);
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
};

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


		$("#education").append (HTMLonlineClasses);
		$('#education').append (HTMLschoolStart);

		education.onlineCourses.forEach (function (online) {

			var formattedOnlineTitle = HTMLonlineTitle.replace ('%data%', online.title),
					formattedOnlineSchool = HTMLonlineSchool.replace ('%data%', online.school),
					renderedOnlineClass = formattedOnlineTitle + formattedOnlineSchool,
					formattedOnlineDate = HTMLonlineDates.replace ('%data%', online.dates),
					formattedOnlineUrl = HTMLonlineURL.replace ('%data%', online.url);

				$(".education-entry:last").append (renderedOnlineClass);
				$(".education-entry:last").append (formattedOnlineDate);
				$(".education-entry:last").append (formattedOnlineUrl);

		});

	}
};

// ============================= Work

var work = {
	jobs: [
		{
			"employer": "Rezgateway Inc",
			"title": "Frontend developer",
			"location": "Colombo - Sri Lanka",
			"dates": "2013 September, In progress",
			"description": "This is the work description",
		}
	],
	display: function () {

		$('#workExperience').append (HTMLworkStart);

		work.jobs.forEach (function (job) {

			var formattedEmployer = HTMLworkEmployer.replace ('%data%', job.employer),
					formattedWorkTitle = HTMLworkTitle.replace ('%data%', job.title),
					renderedTitle = formattedEmployer + formattedWorkTitle,
					formattedWorkDays = HTMLworkDates.replace ('%data%', job.dates),
					formattedWorkLocation = HTMLworkLocation.replace ('%data%', job.location),
					formattedDesc = HTMLworkDescription.replace ('%data%', job.description);

			$(".work-entry:last").append (renderedTitle);
			$(".work-entry:last").append (formattedWorkDays);
			$(".work-entry:last").append (formattedWorkLocation);
			$(".work-entry:last").append (formattedDesc);

		});

	}
};

// ============================= Work

var projects = {
	"projects": [
		{
			"title": "Udacity Online resume project",
			"dates": "2017 Jan - 2017 Feb",
			"description": "This is project description https://github.com/samChathuranga/frontend-nanodegree-resume",
			"images": ['images/197x148.gif', 'images/197x148.gif']
		}
	],
	"display": function () {

		$('#projects').append (HTMLprojectStart);

		projects.projects.forEach (function (project) {

			var formattedProjectTitle = HTMLprojectTitle.replace ('%data%', project.title),
					formattedProjectDates = HTMLprojectDates.replace ('%data%', project.dates),
					formattedProjDesc = HTMLprojectDescription.replace ('%data%', project.description);

			var projectImages = '';

			project.images.forEach (function (img) {
				projectImages += HTMLprojectImage.replace ('%data%', img);
			});

			$('.project-entry:last').append (formattedProjectTitle);
			$('.project-entry:last').append (formattedProjectDates);
			$('.project-entry:last').append (formattedProjDesc);
			$('.project-entry:last').append (projectImages);

		});

	}
};


bio.display ();
work.display ();
projects.display ();
education.display ();

$('#mapDiv').append (googleMap);
