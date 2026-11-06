"use strict";
(function(){
/* ---------- TECTOVA mark (v2.17.1) ---------- */
const TV_MARK='<img class="tv-l" src="assets/tectova-mark.png" alt="" width="34" height="34"><img class="tv-d" src="assets/tectova-mark-dark.png" alt="" width="34" height="34">';
/* ---------- i18n ---------- */
const T={
ar:{
 appName:'لوحة الفريق',co:'TECTOVA BIM & Engineering',
 tabTimer:'وقتي',tabTasks:'المهام',tabProjects:'المشاريع',tabTeam:'الفريق',tabReports:'التقارير',tabPayroll:'الرواتب',
 loading:'جارٍ التحميل…',needClaude:'افتح هذه الصفحة داخل Claude وسجّل الدخول لاستخدامها.',
 noAccess:'ليس لديك صلاحية الحفظ في هذه الصفحة. اطلب من المدير مشاركتها معك بصلاحية Editor.',
 setupTitle:'أهلاً بك في فريق TECTOVA',setupSub:'أدخل بياناتك مرة واحدة ليظهر اسمك في التقارير والمهام.',
 name:'الاسم الكامل',country:'البلد',role:'المسمّى الوظيفي',discipline:'الاختصاص',save:'حفظ',cancel:'إلغاء',delete:'حذف',confirmDel:'تأكيد الحذف',edit:'تعديل',close:'إغلاق',
 SY:'سوريا',EG:'مصر',DE:'ألمانيا',
 ARC:'معماري',STR:'إنشائي',MEP:'ميكانيك وكهرباء',COORD:'تنسيق BIM',DOC:'مخططات ووثائق',PM:'إدارة مشاريع',
 timerTitle:'المؤقت',project:'المشروع',task:'المهمة',noTask:'— بدون مهمة —',chooseProject:'اختر مشروعاً',note:'ملاحظة',notePh:'ماذا تعمل الآن؟',
 start:'ابدأ',stop:'أوقف واحفظ',manual:'إضافة وقت يدوياً',runningSince:'يعمل منذ',
 monthTotal:'ساعات الشهر',today:'اليوم',days:'أيام عمل',entries:'إدخالات',
 myEntries:'سجل الوقت',noEntries:'لا يوجد وقت مسجّل في هذا الشهر.',noEntriesSub:'ابدأ المؤقت أو أضف وقتاً يدوياً.',
 byProject:'التوزيع على المشاريع',
 date:'التاريخ',from:'من',to:'إلى',manualTitle:'إضافة وقت',errTime:'وقت النهاية يجب أن يكون بعد وقت البداية.',errProject:'اختر مشروعاً.',
 longRun:'المؤقت يعمل منذ أكثر من 10 ساعات. راجع الوقت قبل الحفظ.',
 newTask:'مهمة جديدة',editTask:'تعديل المهمة',title:'العنوان',assignee:'المسؤول',unassigned:'غير مسند',lod:'مستوى التفصيل LOD',estimate:'الساعات المقدّرة',due:'تاريخ التسليم',status:'الحالة',priority:'الأولوية',spec:'مواصفات المهمة',specPh:'المطلوب، المراجع، المخرجات، معايير القبول…',
 todo:'للتنفيذ',doing:'قيد العمل',review:'مراجعة',done:'منجزة',low:'منخفضة',normal:'عادية',high:'عالية',
 allProjects:'كل المشاريع',allPeople:'كل الفريق',mine:'مهامي',search:'بحث…',noTasks:'لا مهام',
 hoursSpent:'الساعات المصروفة',myHours:'ساعاتي',
 newProject:'مشروع جديد',editProject:'تعديل المشروع',code:'رمز المشروع',pname:'اسم المشروع',client:'العميل',location:'الموقع',budget:'الساعات المخططة',color:'اللون',
 active:'نشط',hold:'متوقف',closed:'مُغلق',noProjects:'لا توجد مشاريع بعد',noProjectsOwner:'أضف أول مشروع ليبدأ الفريق تسجيل الوقت عليه.',noProjectsEmp:'سيضيف المدير المشاريع قريباً.',
 used:'مستخدم',of:'من',hrsUnit:'س',
 localTime:'الوقت المحلي',workingOn:'يعمل الآن على',idle:'غير نشط',thisMonth:'هذا الشهر',inactive:'غير فعّال',editMember:'تعديل الموظف',activeMember:'موظف فعّال',
 inviteTitle:'كيف تضيف موظفاً',inviteBody:'من زر المشاركة في أعلى الصفحة شارك الرابط مع بريد الموظف بصلاحية <b>Editor</b> (أو Contributor إن كان ضمن مؤسستك في Claude). عند فتحه أول مرة يُدخل اسمه وبلده ويظهر هنا. لا تفعّل المشاركة عبر الرابط العام.',
 noMembers:'لم ينضم أحد بعد.',
 reportTitle:'التقرير الشهري',refresh:'تحديث',export:'تصدير CSV',teamHours:'ساعات الفريق',people:'موظفون',projectsWorked:'مشاريع',avgPerPerson:'متوسط للموظف',
 perEmployee:'حسب الموظف',perProject:'حسب المشروع',hours:'الساعات',share:'النسبة',contributors:'المساهمون',employee:'الموظف',breakdown:'التوزيع',noData:'لا توجد ساعات مسجّلة لهذا الشهر.',
 ownOnly:'هذا تقريرك الشخصي. تقرير الفريق الكامل يظهر للمدير فقط.',
 payTitle:'الرواتب',payPrivate:'هذه الصفحة تظهر لك وحدك. الخادم يرفض أي طلب لبيانات الرواتب من غير حساب المدير.',
 fx:'أسعار الصرف (مقابل 1 يورو)',fxNote:'أدخل السعر الذي تدفع به فعلياً. تُستخدم لتحويل الرواتب إلى اليورو.',
 payType:'نوع الأجر',monthly:'راتب شهري',hourly:'أجر بالساعة',amount:'المبلغ',currency:'العملة',target:'الساعات المستهدفة شهرياً',
 base:'الأساسي',bonus:'مكافأة',deduction:'خصم',net:'الصافي',netEur:'الصافي €',paid:'مدفوع',util:'الإشغال',setPay:'ضبط الأجر',notSet:'غير محدد',
 payTotal:'إجمالي الرواتب',paidTotal:'المدفوع',unpaidTotal:'المتبقي',laborCost:'تكلفة العمالة حسب المشروع',cost:'التكلفة €',costHr:'تكلفة الساعة €',
 fxMissing:'سعر الصرف غير مُدخل',paySettings:'إعدادات الأجر',
 saved:'تم الحفظ',deleted:'تم الحذف',saveFail:'تعذّر الحفظ. حاول مجدداً.',quota:'امتلأت مساحة البيانات. احذف بعض السجلات القديمة.',exported:'تم التصدير',dlUnavailable:'التصدير غير متاح هنا.',
 owner:'المدير',you:'أنت',tabProfile:"ملفي الشخصي",pfTitle:"ملفي الشخصي",pfMine:"بياناتي",pfNameNote:"الاسم والدور والفريق يعدّلها المدير.",phone:"رقم الهاتف",pfPhoneHint:"مع رمز الدولة. يُستخدم لربط تلغرام بمشاركة رقمك مع البوت. مثال:",pfEmailHint:"البريد هو اسم الدخول. لتغييره أدخل كلمة السر الحالية.",pfPassForEmail:"كلمة السر الحالية (لتغيير البريد)",pfSave:"حفظ البيانات",pfSaved:"تم حفظ بياناتك",pfTgTitle:"ربط تلغرام",pfTgM1:"الطريقة 1: بضغطة واحدة",pfTgM1Sub:"يفتح تلغرام على بوت الشركة، ثم اضغط «Start».",pfTgM2:"الطريقة 2: برقم الهاتف",pfTgM2Sub:"افتح البوت في تلغرام واضغط «مشاركة رقمي». يُربط حسابك إذا طابق الرقم المحفوظ هنا.",pfTgNeedPhone:"أضف رقم هاتفك واحفظه أولاً لاستخدام هذه الطريقة.",pfOpenBot:"فتح البوت",pfCheck:"تحقّق من الربط",pfNotifTitle:"الإشعارات",pfSecurity:"الأمان",pfPwSub:"غيّر كلمة السر من هنا.",badPhone:"رقم الهاتف غير صحيح. استخدم الأرقام فقط مع رمز الدولة.",pfTgOnLbl:"استلام الإشعارات على تلغرام",pfEmailOnLbl:"استلام بعض الإشعارات بالبريد",periodHours:'ساعات الفترة',printReport:"طباعة / PDF",total:"المجموع",month:"الشهر",less:"أقل",more:"أكثر",vChart:"مخطط",vTable:"جدول",filters:"التصفية",actual:"الفعلي",logged:"المسجّل",diffLbl:"الفرق",otherLbl:"أخرى",tasksN:"مهمة",weekLbl:"الأسبوع",budgetLbl:"الميزانية",pr_m0:"هذا الشهر",pr_m1:"الشهر الماضي",pr_q:"آخر 3 أشهر",pr_h:"آخر 6 أشهر",pr_y:"آخر 12 شهراً",pr_ytd:"منذ بداية السنة",pr_custom:"فترة مخصصة",allDisc:"كل الاختصاصات",rOverview:"نظرة عامة",rTrends:"الاتجاه الشهري",rDaily:"الحضور اليومي",rProjects:"تقرير مشروع",rUtil:"الإشغال",rBreakdown:"التوزيع",rTasks:"المهام",rCost:"التكلفة",vsPrev:"عن الفترة السابقة",approvedShare:"نسبة المعتمد",shareByProject:"توزيع الساعات على المشاريع",targetTick:"الخط الرأسي = الساعات المتوقعة",hoursPerMonth:"الساعات شهرياً",hoursPerWeek:"الساعات أسبوعياً",trendNeedsRange:"الاتجاه الشهري يحتاج فترة أطول من شهر. هذا توزيع الأسابيع للشهر المختار.",byProjectSub:"مقسّمة حسب المشروع",loggedVsExpected:"المسجّل مقابل المتوقع",perPersonTrend:"اتجاه كل موظف",smallMultiples:"مخطط صغير لكل موظف بنفس المقياس",dayOff:"عطلة أسبوعية",holidayLbl:"عطلة رسمية",leaveLbl:"إجازة",noEntryDay:"يوم عمل بدون تسجيل",dailyTitle:"خريطة الحضور اليومية",weeklyTitle:"خريطة الساعات الأسبوعية",weeklySub:"لفترة أطول من شهر تُعرض الأسابيع",missingDays:"أيام عمل بدون تسجيل",missingSub:"حتى اليوم",pickProjectHint:"اختر مشروعاً من خانة \"المشروع\" في الأعلى. يُعرض الآن المشروع الأكثر ساعات.",inPeriod:"في الفترة",allTimeHours:"كل الساعات",budgetUsed:"من الميزانية",budgetLeft:"المتبقي من الميزانية",burnUp:"الساعات التراكمية مقابل الميزانية",burnUpSub:"يبدأ من الساعات المسجّلة قبل الفترة",cumulative:"تراكمي",byPhase:"الساعات حسب المرحلة",targetTickBudget:"الخط الرأسي = ساعات المرحلة المخططة",noPhaseLbl:"بدون مرحلة",byPerson:"الساعات حسب الموظف",utilTitle:"الإشغال: المسجّل مقابل المتوقع",utilByMonth:"الإشغال شهرياً",utilByMonthSub:"الأزرق أقل من المتوقع، والأحمر عمل إضافي",under:"أقل",overtime:"إضافي",byDiscipline:"حسب الاختصاص",byCountry:"حسب البلد",byPhaseAll:"حسب المرحلة",taskLinked:"الساعات المرتبطة بمهمة",taskLinkedSub:"كلما زادت النسبة كانت التقارير أدق",withTask:"مرتبطة بمهمة",withoutTask:"بدون مهمة",matrixTitle:"الموظفون × المشاريع",matrixSub:"من يعمل على ماذا",estVsActual:"المقدّر مقابل الفعلي",allTimeNote:"كل الفترات، الأعلى تجاوزاً أولاً",tasksByStatus:"المهام حسب الحالة",overdueTitle:"مهام متأخرة",daysLate:"أيام التأخير",remainingWork:"العمل المتبقي (ساعات)",remainingWorkSub:"المقدّر ناقص المصروف للمهام المفتوحة",laborCostTotal:"تكلفة العمالة",topCostProject:"أعلى مشروع تكلفة",costPerMonth:"تكلفة العمالة شهرياً",costByProject:"التكلفة حسب المشروع",costByPerson:"التكلفة حسب الموظف",costHrTrend:"تكلفة الساعة شهرياً",demoEmpty:"تفريغ البيانات",demoRestore:"إعادة البيانات التجريبية",demoEmptied:"تم تفريغ البيانات. الحسابات فقط بقيت.",demoRestored:"تمت إعادة البيانات التجريبية.",pendingSt:'بانتظار قائد الفريق',lead_approvedSt:'بانتظار المدير',leaveBalance:'رصيد الإجازة السنوية',allowanceLbl:'الرصيد',usedLbl:'مستخدم',requestedLbl:'قيد الطلب',remainingLbl:'المتبقي',daysUnit:'يوم',noticeRule:'يُقدَّم الطلب قبل 14 يوماً على الأقل من بدايته. الإجازة المرضية مستثناة.',flowNote:'يوافق قائد الفريق أولاً، ثم المدير.',noticeErr:'يجب تقديم طلب الإجازة قبل 14 يوماً على الأقل من بدايته.',balanceErr:'رصيد الإجازة السنوية لا يكفي لهذه المدة.',noWdRange:'لا توجد أيام عمل في هذه الفترة.',waitLeadErr:'هذا الطلب ينتظر موافقة قائد الفريق أولاً.',alreadyDecided:'تم البت في هذا الطلب مسبقاً.',teamLeaderLbl:'قائد الفريق المباشر',anyLead:'— أي قائد فريق —',annualAllowance:'أيام الإجازة السنوية',stepLead:'قائد الفريق',stepMgr:'المدير',balancesTitle:'أرصدة الإجازة السنوية',waitingLead:'ينتظر قائد الفريق',leavesWaiting:'طلبات إجازة بانتظار قرارك',workDays:'أيام العمل',noWorkdays:'اختر يوم عمل واحداً على الأقل.',d6:'السبت',d0:'الأحد',d1:'الإثنين',d2:'الثلاثاء',d3:'الأربعاء',d4:'الخميس',d5:'الجمعة',tabApprovals:"الاعتماد",tabLeave:"الإجازات",tabCapacity:"الإشغال",submitWeek:"إرسال للاعتماد",st_open:"مفتوح",st_submitted:"بانتظار الاعتماد",st_approved:"معتمد",st_rejected:"أُعيد للتعديل",weeksTitle:"أسابيع الشهر",weekLockedMsg:"هذا الأسبوع مُرسل أو معتمد ولا يمكن تعديله. اطلب من قائد الفريق إعادته للتعديل.",timerRunningErr:"أوقف المؤقت قبل إرسال هذا الأسبوع.",alreadyApproved:"هذا الأسبوع معتمد مسبقاً.",futureWeek:"لا يمكن إرسال أسبوع لم يبدأ بعد.",approve:"اعتماد",reject:"إعادة للتعديل",rejectNote:"سبب الإعادة (اختياري)",pendingApprovals:"بانتظار قرارك",recentDecisions:"قرارات آخر 45 يوماً",noPending:"لا يوجد شيء بانتظار الاعتماد.",reopen:"إعادة فتح",apprCol:"المعتمد",approvalsNote:"يرسل كل موظف أسبوعه بعد انتهائه، فيُقفل ولا يمكن تعديله. الاعتماد يجعل الساعات نهائية للتقارير والرواتب.",leaveRequest:"طلب إجازة",kind:"النوع",annual:"سنوية",sick:"مرضية",unpaid:"بدون راتب",other:"أخرى",pendingSt:"بانتظار الموافقة",approvedSt:"موافق عليها",rejectedSt:"مرفوضة",myLeaves:"إجازاتي",teamLeaves:"إجازات الفريق",approveLeave:"موافقة",declineLeave:"رفض",cancelLeave:"إلغاء",noLeaves:"لا توجد إجازات.",workdaysN:"يوم عمل",sendRequest:"إرسال الطلب",holidays:"العطل الرسمية",addHoliday:"إضافة عطلة",holidayName:"اسم العطلة",seedDE:"إضافة عطل ألمانيا الاتحادية",seedNote:"عطل الولاية (مثل بافاريا) ومواعيد الأعياد في سوريا ومصر تُضاف يدوياً، لأنها تتغير كل سنة.",noHolidays:"لم تُضف عطل لهذا البلد في هذه السنة.",year:"السنة",badRange:"تاريخ النهاية قبل تاريخ البداية.",expected:"الساعات المتوقعة",dailyHours:"ساعات العمل اليومية",notifyLbl:"إرسال تذكيرات بالبريد",phase:"المرحلة",noPhase:"— بدون مرحلة —",phases:"مراحل المشروع",addPhase:"+ مرحلة",hoaiTpl:"مراحل HOAI",bimTpl:"مراحل BIM",phaseName:"اسم المرحلة",phaseHasEntries:"لا يمكن حذف مرحلة عليها ساعات مسجّلة.",phasesHint:"الساعات المخططة لكل مرحلة اختيارية.",folder:"رابط مجلد المشروع",links:"روابط (ACC، BIM 360، مجلد…) رابط في كل سطر",openFolder:"فتح المجلد",contract:"قيمة العقد",profitTitle:"ربحية المشاريع",laborToDate:"تكلفة العمالة حتى الآن",margin:"الربح",marginPct:"الهامش",costIncomplete:"ناقص: أجر أو سعر صرف غير مُدخل",profitNote:"التكلفة = أجر كل موظف في كل شهر موزّعاً حسب ساعاته على المشاريع، محوّلاً إلى اليورو بأسعار الصرف الحالية.",budgetWarn:"تجاوز 80% من الميزانية",budgetOver:"تجاوز الميزانية",comments:"التعليقات",addComment:"أضف تعليقاً…",send:"إرسال",noComments:"لا تعليقات بعد.",capTitle:"إشغال الفريق خلال 4 أسابيع",capNote:"الحمل = الساعات المتبقية من المهام المفتوحة موزّعة على أيام العمل حتى تاريخ التسليم. المتاح = أيام العمل × الساعات اليومية بعد العطل والإجازات.",unscheduled:"مهام مفتوحة بلا تاريخ تسليم",available:"متاح",load:"الحمل",later:"بعد ذلك",pdfReport:"PDF",payslip:"قسيمة",timeReport:"تقرير الساعات الشهري",payslipTitle:"قسيمة راتب",generated:"تاريخ الإصدار",signature:"التوقيع",period:"الفترة",entriesList:"تفاصيل الإدخالات",exportAcc:"تصدير للمحاسبة",employeeSig:"توقيع الموظف",managerSig:"توقيع المدير",automation:"الربط والتذكيرات",cronUrl:"رابط التذكيرات: أضفه في الاستضافة ضمن Cron Jobs ليُستدعى كل ساعة",exportUrl:"رابط برنامج المحاسبة (غيّر الشهر في آخره)",mailMissing:"لم يُضبط بريد المرسل (mail_from) في config.php، لذلك لن تُرسل التذكيرات.",copy:"نسخ",copied:"تم النسخ",keepSecret:"لا تشارك هذه الروابط، فهي تحتوي على مفاتيح سرية.",reminderAt:"يُرسل تذكير تسجيل الساعات الساعة",fxUsed:"سعر الصرف",rate:"الأجر",eurEquiv:"ما يعادل باليورو",status:"الحالة",weeksApproved:"الأسابيع المعتمدة",totalHours:"مجموع الساعات",signIn:'تسجيل الدخول',email:'البريد الإلكتروني',password:'كلمة السر',signOut:'خروج',changePw:'تغيير كلمة السر',oldPw:'كلمة السر الحالية',newPw:'كلمة السر الجديدة',newPw2:'تأكيد كلمة السر الجديدة',pwRule:'كلمة السر 8 أحرف على الأقل.',pwMismatch:'كلمتا السر غير متطابقتين.',pwChanged:'تم تغيير كلمة السر',mustChangeTitle:'اختر كلمة سر جديدة',mustChangeSub:'دخلت بكلمة سر مؤقتة من المدير. اختر كلمة سر خاصة بك للمتابعة.',badLogin:'البريد أو كلمة السر غير صحيحة.',tooMany:'محاولات كثيرة. حاول بعد 15 دقيقة.',netErr:'تعذّر الاتصال بالخادم. تحقق من الإنترنت وحاول مجدداً.',retry:'إعادة المحاولة',forbiddenErr:'ليست لديك صلاحية لهذا الإجراء.',projHasEntries:'لا يمكن حذف مشروع عليه ساعات مسجّلة. غيّر حالته إلى "مُغلق" بدلاً من ذلك.',emailTaken:'هذا البريد مستخدم لموظف آخر.',badOldPw:'كلمة السر الحالية غير صحيحة.',samePw:'اختر كلمة سر مختلفة عن الحالية.',badEmail:'البريد غير صحيح.',tooLong:'المدة أطول من 24 ساعة.',projClosed:'هذا المشروع مُغلق.',addMember:'إضافة موظف',tempPw:'كلمة سر مؤقتة',resetPw:'كلمة سر جديدة (اتركها فارغة لإبقاء الحالية)',sysRole:'الدور في الموقع',employeeRole:'موظف',memberAdded:'تمت إضافة الموظف. أرسل له رابط الموقع والبريد وكلمة السر المؤقتة.',addMemberHint:'أضف كل موظف ببريده وكلمة سر مؤقتة، ثم أرسل له رابط الموقع وبيانات الدخول. عند أول دخول يختار كلمة سر خاصة به.',lead:'قائد فريق',leadHint:'يضيف المشاريع والمهام',tasksLeadOnly:'يضيف المهام قادة الفرق والمدير. يمكنك تغيير حالة المهام المسندة إليك.',createdByLbl:'أنشأها',readOnlyTask:'تفاصيل المهمة',
},
en:{
 appName:'Team Desk',co:'TECTOVA BIM & Engineering',
 tabTimer:'My time',tabTasks:'Tasks',tabProjects:'Projects',tabTeam:'Team',tabReports:'Reports',tabPayroll:'Payroll',
 loading:'Loading…',needClaude:'Open this page in Claude and sign in to use it.',
 noAccess:'You can’t save on this page yet. Ask the manager to share it with you as Editor.',
 setupTitle:'Welcome to the TECTOVA team',setupSub:'Enter your details once so your name shows up in reports and tasks.',
 name:'Full name',country:'Country',role:'Job title',discipline:'Discipline',save:'Save',cancel:'Cancel',delete:'Delete',confirmDel:'Confirm delete',edit:'Edit',close:'Close',
 SY:'Syria',EG:'Egypt',DE:'Germany',
 ARC:'Architecture',STR:'Structure',MEP:'MEP',COORD:'BIM coordination',DOC:'Drawings & docs',PM:'Project management',
 timerTitle:'Timer',project:'Project',task:'Task',noTask:'— No task —',chooseProject:'Choose a project',note:'Note',notePh:'What are you working on?',
 start:'Start',stop:'Stop & save',manual:'Add time manually',runningSince:'Running since',
 monthTotal:'Hours this month',today:'Today',days:'Days worked',entries:'Entries',
 myEntries:'Time log',noEntries:'No time logged this month.',noEntriesSub:'Start the timer or add time manually.',
 byProject:'Split by project',
 date:'Date',from:'From',to:'To',manualTitle:'Add time',errTime:'End time must be after start time.',errProject:'Choose a project.',
 longRun:'The timer has been running for more than 10 hours. Check the times before saving.',
 newTask:'New task',editTask:'Edit task',title:'Title',assignee:'Assignee',unassigned:'Unassigned',lod:'Level of development (LOD)',estimate:'Estimated hours',due:'Due date',status:'Status',priority:'Priority',spec:'Task specification',specPh:'Scope, references, deliverables, acceptance criteria…',
 todo:'To do',doing:'In progress',review:'Review',done:'Done',low:'Low',normal:'Normal',high:'High',
 allProjects:'All projects',allPeople:'Whole team',mine:'My tasks',search:'Search…',noTasks:'No tasks',
 hoursSpent:'Hours spent',myHours:'My hours',
 newProject:'New project',editProject:'Edit project',code:'Project code',pname:'Project name',client:'Client',location:'Location',budget:'Planned hours',color:'Colour',
 active:'Active',hold:'On hold',closed:'Closed',noProjects:'No projects yet',noProjectsOwner:'Add your first project so the team can log time against it.',noProjectsEmp:'The manager will add projects soon.',
 used:'used',of:'of',hrsUnit:'h',
 localTime:'Local time',workingOn:'Working on',idle:'Not tracking',thisMonth:'This month',inactive:'Inactive',editMember:'Edit team member',activeMember:'Active team member',
 inviteTitle:'How to add someone',inviteBody:'Use the Share button at the top of the page and invite the person’s email as <b>Editor</b> (or Contributor if they are in your Claude organisation). The first time they open it they enter their name and country and appear here. Don’t turn on sharing by public link.',
 noMembers:'Nobody has joined yet.',
 reportTitle:'Monthly report',refresh:'Refresh',export:'Export CSV',teamHours:'Team hours',people:'People',projectsWorked:'Projects',avgPerPerson:'Average per person',
 perEmployee:'By employee',perProject:'By project',hours:'Hours',share:'Share',contributors:'Contributors',employee:'Employee',breakdown:'Breakdown',noData:'No hours logged for this month.',
 ownOnly:'This is your own report. The full team report is visible to the manager only.',
 payTitle:'Payroll',payPrivate:'Only you can see this page. The server refuses payroll requests from any account other than the manager’s.',
 fx:'Exchange rates (per 1 EUR)',fxNote:'Enter the rate you actually pay at. Used to convert salaries to euros.',
 payType:'Pay type',monthly:'Monthly salary',hourly:'Hourly rate',amount:'Amount',currency:'Currency',target:'Target hours per month',
 base:'Base',bonus:'Bonus',deduction:'Deduction',net:'Net',netEur:'Net €',paid:'Paid',util:'Utilisation',setPay:'Set pay',notSet:'Not set',
 payTotal:'Total payroll',paidTotal:'Paid',unpaidTotal:'Outstanding',laborCost:'Labour cost by project',cost:'Cost €',costHr:'Cost per hour €',
 fxMissing:'Exchange rate missing',paySettings:'Pay settings',
 saved:'Saved',deleted:'Deleted',saveFail:'Couldn’t save. Try again.',quota:'The data store is full. Delete some old records.',exported:'Exported',dlUnavailable:'Export isn’t available here.',
 owner:'Manager',you:'You',tabProfile:"My profile",pfTitle:"My profile",pfMine:"My details",pfNameNote:"Name, role and team are set by the admin.",phone:"Phone number",pfPhoneHint:"With the country code. Used to link Telegram by sharing your number with the bot. Example:",pfEmailHint:"Your email is your sign-in name. Enter your current password to change it.",pfPassForEmail:"Current password (to change the email)",pfSave:"Save details",pfSaved:"Your details are saved",pfTgTitle:"Link Telegram",pfTgM1:"Option 1: one tap",pfTgM1Sub:"Opens Telegram on the company bot; then press “Start”.",pfTgM2:"Option 2: by phone number",pfTgM2Sub:"Open the bot in Telegram and tap “Share my number”. Your account is linked if the number matches the one saved here.",pfTgNeedPhone:"Add and save your phone number first to use this option.",pfOpenBot:"Open the bot",pfCheck:"Check link",pfNotifTitle:"Notifications",pfSecurity:"Security",pfPwSub:"Change your password here.",badPhone:"That phone number isn’t valid. Use digits with the country code.",pfTgOnLbl:"Get notifications on Telegram",pfEmailOnLbl:"Get some notifications by email",periodHours:'Hours in period',printReport:"Print / PDF",total:"Total",month:"Month",less:"Less",more:"More",vChart:"Chart",vTable:"Table",filters:"Filters",actual:"Actual",logged:"Logged",diffLbl:"Difference",otherLbl:"Other",tasksN:"tasks",weekLbl:"Week",budgetLbl:"Budget",pr_m0:"This month",pr_m1:"Last month",pr_q:"Last 3 months",pr_h:"Last 6 months",pr_y:"Last 12 months",pr_ytd:"Year to date",pr_custom:"Custom range",allDisc:"All disciplines",rOverview:"Overview",rTrends:"Monthly trend",rDaily:"Daily attendance",rProjects:"Project report",rUtil:"Utilisation",rBreakdown:"Breakdown",rTasks:"Tasks",rCost:"Cost",vsPrev:"vs previous period",approvedShare:"Approved share",shareByProject:"Hours by project",targetTick:"The vertical tick = expected hours",hoursPerMonth:"Hours per month",hoursPerWeek:"Hours per week",trendNeedsRange:"The monthly trend needs more than one month. Here is the weekly split for the selected month.",byProjectSub:"Split by project",loggedVsExpected:"Logged vs expected",perPersonTrend:"Trend per person",smallMultiples:"One small chart per person, same scale",dayOff:"Weekly day off",holidayLbl:"Public holiday",leaveLbl:"Leave",noEntryDay:"Working day with no entry",dailyTitle:"Daily attendance map",weeklyTitle:"Weekly hours map",weeklySub:"Ranges over a month show weeks",missingDays:"Working days with no entry",missingSub:"Up to today",pickProjectHint:"Choose a project in the \"Project\" filter above. Showing the project with the most hours.",inPeriod:"In period",allTimeHours:"All-time hours",budgetUsed:"Of budget",budgetLeft:"Budget left",burnUp:"Cumulative hours vs budget",burnUpSub:"Starts from hours logged before the period",cumulative:"Cumulative",byPhase:"Hours by phase",targetTickBudget:"The vertical tick = planned hours for the phase",noPhaseLbl:"No phase",byPerson:"Hours by person",utilTitle:"Utilisation: logged vs expected",utilByMonth:"Utilisation by month",utilByMonthSub:"Blue is below expected, red is overtime",under:"Under",overtime:"Overtime",byDiscipline:"By discipline",byCountry:"By country",byPhaseAll:"By phase",taskLinked:"Hours linked to a task",taskLinkedSub:"The higher, the more precise the reports",withTask:"Linked to a task",withoutTask:"No task",matrixTitle:"People × projects",matrixSub:"Who works on what",estVsActual:"Estimated vs actual",allTimeNote:"All time, biggest overrun first",tasksByStatus:"Tasks by status",overdueTitle:"Overdue tasks",daysLate:"Days late",remainingWork:"Remaining work (hours)",remainingWorkSub:"Estimate minus spent, open tasks",laborCostTotal:"Labour cost",topCostProject:"Highest-cost project",costPerMonth:"Labour cost per month",costByProject:"Cost by project",costByPerson:"Cost by person",costHrTrend:"Cost per hour by month",demoEmpty:"Empty data",demoRestore:"Restore sample data",demoEmptied:"Data emptied. Only the accounts remain.",demoRestored:"Sample data restored.",pendingSt:'Waiting for team leader',lead_approvedSt:'Waiting for manager',leaveBalance:'Annual leave balance',allowanceLbl:'Allowance',usedLbl:'Used',requestedLbl:'Requested',remainingLbl:'Remaining',daysUnit:'days',noticeRule:'Request at least 14 days before the start. Sick leave is exempt.',flowNote:'The team leader approves first, then the manager.',noticeErr:'Leave must be requested at least 14 days before it starts.',balanceErr:'Not enough annual leave left for this period.',noWdRange:'There are no working days in this period.',waitLeadErr:'This request needs the team leader’s approval first.',alreadyDecided:'This request has already been decided.',teamLeaderLbl:'Team leader',anyLead:'— Any team leader —',annualAllowance:'Annual leave days',stepLead:'Team leader',stepMgr:'Manager',balancesTitle:'Annual leave balances',waitingLead:'Waiting for team leader',leavesWaiting:'Leave requests waiting for you',workDays:'Work days',noWorkdays:'Choose at least one work day.',d6:'Sat',d0:'Sun',d1:'Mon',d2:'Tue',d3:'Wed',d4:'Thu',d5:'Fri',tabApprovals:"Approvals",tabLeave:"Leave",tabCapacity:"Capacity",submitWeek:"Submit for approval",st_open:"Open",st_submitted:"Waiting for approval",st_approved:"Approved",st_rejected:"Returned for changes",weeksTitle:"Weeks this month",weekLockedMsg:"This week is submitted or approved and can’t be changed. Ask your team leader to return it.",timerRunningErr:"Stop the timer before submitting this week.",alreadyApproved:"This week is already approved.",futureWeek:"You can’t submit a week that hasn’t started.",approve:"Approve",reject:"Return",rejectNote:"Reason (optional)",pendingApprovals:"Waiting for you",recentDecisions:"Decided in the last 45 days",noPending:"Nothing is waiting for approval.",reopen:"Reopen",apprCol:"Approved",approvalsNote:"Each person submits a week once it ends, which locks it. Approval makes the hours final for reports and payroll.",leaveRequest:"Request leave",kind:"Type",annual:"Annual",sick:"Sick",unpaid:"Unpaid",other:"Other",pendingSt:"Pending",approvedSt:"Approved",rejectedSt:"Declined",myLeaves:"My leave",teamLeaves:"Team leave",approveLeave:"Approve",declineLeave:"Decline",cancelLeave:"Cancel",noLeaves:"No leave yet.",workdaysN:"working days",sendRequest:"Send request",holidays:"Public holidays",addHoliday:"Add holiday",holidayName:"Holiday name",seedDE:"Add German federal holidays",seedNote:"State holidays (such as Bavaria) and holiday dates in Syria and Egypt are added by hand, as they change every year.",noHolidays:"No holidays added for this country and year.",year:"Year",badRange:"The end date is before the start date.",expected:"Expected hours",dailyHours:"Daily working hours",notifyLbl:"Send email reminders",phase:"Phase",noPhase:"— No phase —",phases:"Project phases",addPhase:"+ Phase",hoaiTpl:"HOAI phases",bimTpl:"BIM phases",phaseName:"Phase name",phaseHasEntries:"A phase with logged hours can’t be removed.",phasesHint:"Planned hours per phase are optional.",folder:"Project folder link",links:"Links (ACC, BIM 360, folder…), one per line",openFolder:"Open folder",contract:"Contract value",profitTitle:"Project profitability",laborToDate:"Labour cost to date",margin:"Margin",marginPct:"Margin %",costIncomplete:"Incomplete: pay or exchange rate missing",profitNote:"Cost = each person’s pay for each month, split by their hours across projects, converted to euros at current exchange rates.",budgetWarn:"Over 80% of budget",budgetOver:"Over budget",comments:"Comments",addComment:"Add a comment…",send:"Send",noComments:"No comments yet.",capTitle:"Team capacity, next 4 weeks",capNote:"Load = remaining hours of open tasks spread over working days up to their due date. Available = working days × daily hours, after holidays and leave.",unscheduled:"Open tasks without a due date",available:"Available",load:"Load",later:"Later",pdfReport:"PDF",payslip:"Payslip",timeReport:"Monthly time report",payslipTitle:"Payslip",generated:"Issued",signature:"Signature",period:"Period",entriesList:"Entry details",exportAcc:"Export for accounting",employeeSig:"Employee signature",managerSig:"Manager signature",automation:"Integrations and reminders",cronUrl:"Reminder link: add it to your hosting’s cron jobs to run every hour",exportUrl:"Accounting program link (change the month at the end)",mailMissing:"No sender address (mail_from) in config.php, so no reminders will be sent.",copy:"Copy",copied:"Copied",keepSecret:"Keep these links private; they contain secret keys.",reminderAt:"The log-your-hours reminder goes out at",fxUsed:"Exchange rate",rate:"Rate",eurEquiv:"Euro equivalent",status:"Status",weeksApproved:"Approved weeks",totalHours:"Total hours",signIn:'Sign in',email:'Email',password:'Password',signOut:'Sign out',changePw:'Change password',oldPw:'Current password',newPw:'New password',newPw2:'Repeat new password',pwRule:'Use at least 8 characters.',pwMismatch:'The passwords don’t match.',pwChanged:'Password changed',mustChangeTitle:'Choose a new password',mustChangeSub:'You signed in with a temporary password from the manager. Choose your own password to continue.',badLogin:'Wrong email or password.',tooMany:'Too many attempts. Try again in 15 minutes.',netErr:'Can’t reach the server. Check your connection and try again.',retry:'Try again',forbiddenErr:'You don’t have permission to do that.',projHasEntries:'A project with logged hours can’t be deleted. Set its status to Closed instead.',emailTaken:'Another team member already uses this email.',badOldPw:'The current password is wrong.',samePw:'Choose a password that’s different from the current one.',badEmail:'That email address isn’t valid.',tooLong:'That’s longer than 24 hours.',projClosed:'This project is closed.',addMember:'Add team member',tempPw:'Temporary password',resetPw:'New password (leave empty to keep the current one)',sysRole:'Role on this site',employeeRole:'Employee',memberAdded:'Member added. Send them the site address, their email and the temporary password.',addMemberHint:'Add each person with their email and a temporary password, then send them the site address and sign-in details. They choose their own password the first time they sign in.',lead:'Team Leader',leadHint:'Adds projects and tasks',tasksLeadOnly:'Tasks are added by team leaders and the manager. You can change the status of tasks assigned to you.',createdByLbl:'Created by',readOnlyTask:'Task details',
}};
/* v2.16 minutes text */
Object.assign(T.ar,{"momTab": "محاضر الاجتماعات", "plCal": "التقويم", "momNew": "محضر جديد", "momUntitled": "اجتماع", "momList": "المحاضر", "momNone": "لا محاضر بعد", "momNoneSub": "افتح موعداً من التقويم واضغط «محضر الاجتماع»، أو أنشئ محضراً جديداً.", "momFinal": "معتمد ومُرسل", "momDraft": "مسودة", "momPeople": "حضور", "momTracker": "متابعة بنود العمل", "maOpen": "المفتوحة", "maAll": "الكل", "maMine": "بنودي فقط", "maNone": "لا بنود مفتوحة.", "momFromEv": "محضر الاجتماع", "momSource": "محتوى الاجتماع", "momWords": "{n} كلمة", "recStart": "بدء التسجيل", "recStop": "إيقاف", "recHint": "يُرسل التسجيل كل 5 دقائق ويتحوّل لنص أثناء الاجتماع. اترك الصفحة مفتوحة.", "recUpload": "رفع ملف صوتي", "recNote": "أو الصق نص الاجتماع / الـtranscript / ملاحظاتك في المربع.", "recPart": "مقطع", "recNoSupport": "المتصفح لا يدعم التسجيل. استخدم Chrome أو Edge أو Safari حديثاً.", "recDenied": "لم يُسمح باستخدام الميكروفون.", "sttOff": "تحويل الصوت لنص غير مفعّل", "sttOffAdmin": "أضف openai_api_key في config.php لتفعيل التسجيل. يمكنك الآن لصق النص.", "sttOffSub": "يمكنك لصق نص الاجتماع أو ملاحظاتك.", "momTranscript": "نص الاجتماع / الملاحظات", "momGen": "إنشاء المحضر بالذكاء الاصطناعي", "momRegen": "إعادة إنشاء المحضر", "momRegenAsk": "اضغط مرة أخرى: سيُستبدل المحضر الحالي", "momGenWait": "يكتب المحضر… قد يستغرق حتى دقيقة.", "momGenHint": "تراجع المحضر وتعدّله قبل الإرسال.", "momGenDone": "المحضر جاهز للمراجعة", "momNoText": "اكتب أو سجّل محتوى الاجتماع أولاً.", "aiOffAdmin": "الذكاء الاصطناعي غير مفعّل: أضف anthropic_api_key في config.php. يمكنك كتابة المحضر يدوياً.", "aiOffSub": "الذكاء الاصطناعي غير مفعّل بعد. يمكنك كتابة المحضر يدوياً.", "momLang": "لغة المحضر", "momLangAuto": "نفس لغة الاجتماع", "momLangAr": "عربي", "momLangEn": "English", "momAttendees": "الحضور", "momExt": "حضور من خارج الفريق", "momExtPh": "مثلاً: م. خالد (العميل)، مكتب الاستشاري", "momMinutes": "المحضر", "momSummary": "الملخص", "momTopics": "المواضيع", "momTopicAdd": "موضوع", "momTopicPh": "عنوان الموضوع", "oneLine": "سطر لكل نقطة", "momDecisions": "القرارات", "momActions": "بنود العمل (Action items)", "maAdd": "بند", "momIssues": "نقاط مفتوحة", "momNext": "الاجتماع القادم", "maOther": "شخص من خارج الفريق", "maNamePh": "الاسم", "maTextPh": "ماذا يجب أن يُنجز", "maText": "البند", "maOwner": "المسؤول", "momBy": "كتب المحضر", "momSaveDraft": "حفظ", "momSend": "اعتماد وإرسال للحضور", "momResend": "إرسال مرة أخرى", "momSent": "أُرسل المحضر إلى {n} من الحضور", "momDocTitle": "محضر اجتماع", "audioTooBig": "الملف أكبر من 25 MB. اضغطه أو قسّمه.", "n_mom_sent": "{by} أرسل محضر {t}", "n_mom_action": "بند عمل جديد عليك من {t}", "ai_failed_e": "تعذّر الاتصال بخدمة الذكاء الاصطناعي. حاول مرة أخرى.", "ai_bad_key_e": "مفتاح الذكاء الاصطناعي في config.php غير صحيح.", "ai_stt_missing_e": "تحويل الصوت لنص غير مفعّل.", "ai_mom_missing_e": "الذكاء الاصطناعي غير مفعّل.", "audio_too_big_e": "الملف الصوتي أكبر من 25 MB.", "mom_no_text_e": "اكتب أو سجّل محتوى الاجتماع أولاً.", "mom_not_found_e": "المحضر غير موجود.", "done": "منجز","remLbl":"التذكيرات","remOn":"أرسل لي التذكيرات والملخص الصباحي على الهاتف وتلغرام","momSub":"محاضر الاجتماعات (MoM): اكتبها من ملاحظات الاجتماع، مع متابعة بنود العمل.","momTrPh":"الصق هنا الملاحظات أو النص (مثلاً من Granola)، أو اكتب ملاحظاتك."});
Object.assign(T.en,{"momTab": "Minutes", "plCal": "Calendar", "momNew": "New minutes", "momUntitled": "Meeting", "momList": "Minutes", "momNone": "No minutes yet", "momNoneSub": "Open an event in the calendar and press “Minutes”, or start new minutes.", "momFinal": "Approved & sent", "momDraft": "Draft", "momPeople": "attendees", "momTracker": "Action item tracker", "maOpen": "Open", "maAll": "All", "maMine": "Only mine", "maNone": "No open items.", "momFromEv": "Minutes of meeting", "momSource": "Meeting content", "momWords": "{n} words", "recStart": "Start recording", "recStop": "Stop", "recHint": "The recording is sent every 5 minutes and turned into text during the meeting. Keep this page open.", "recUpload": "Upload audio", "recNote": "Or paste the meeting text / transcript / your notes in the box.", "recPart": "Part", "recNoSupport": "This browser can’t record. Use a recent Chrome, Edge or Safari.", "recDenied": "Microphone access was not allowed.", "sttOff": "Speech to text is off", "sttOffAdmin": "Add openai_api_key in config.php to enable recording. You can paste text now.", "sttOffSub": "You can paste the meeting text or your notes.", "momTranscript": "Meeting text / notes", "momGen": "Write minutes with AI", "momRegen": "Write the minutes again", "momRegenAsk": "Press again: the current minutes will be replaced", "momGenWait": "Writing the minutes… this can take up to a minute.", "momGenHint": "You review and edit before sending.", "momGenDone": "Minutes ready for review", "momNoText": "Record or type the meeting content first.", "aiOffAdmin": "AI is off: add anthropic_api_key in config.php. You can write the minutes by hand.", "aiOffSub": "AI isn’t set up yet. You can write the minutes by hand.", "momLang": "Language", "momLangAuto": "Same as the meeting", "momLangAr": "Arabic", "momLangEn": "English", "momAttendees": "Attendees", "momExt": "Attendees outside the team", "momExtPh": "e.g. Eng. Khaled (client), consultant’s office", "momMinutes": "Minutes", "momSummary": "Summary", "momTopics": "Topics", "momTopicAdd": "Topic", "momTopicPh": "Topic title", "oneLine": "one point per line", "momDecisions": "Decisions", "momActions": "Action items", "maAdd": "Item", "momIssues": "Open issues", "momNext": "Next meeting", "maOther": "Someone outside the team", "maNamePh": "Name", "maTextPh": "What needs to be done", "maText": "Item", "maOwner": "Owner", "momBy": "Minutes by", "momSaveDraft": "Save", "momSend": "Approve & send to attendees", "momResend": "Send again", "momSent": "Minutes sent to {n} attendees", "momDocTitle": "Minutes of meeting", "audioTooBig": "The file is larger than 25 MB. Compress or split it.", "n_mom_sent": "{by} sent the minutes of {t}", "n_mom_action": "New action item for you from {t}", "ai_failed_e": "Couldn’t reach the AI service. Try again.", "ai_bad_key_e": "The AI key in config.php is wrong.", "ai_stt_missing_e": "Speech to text is off.", "ai_mom_missing_e": "AI is off.", "audio_too_big_e": "The audio file is larger than 25 MB.", "mom_no_text_e": "Record or type the meeting content first.", "mom_not_found_e": "Minutes not found.", "done": "Done","remLbl":"Reminders","remOn":"Send me reminders and the morning summary on my phone and Telegram","momSub":"Minutes of meeting (MoM): write them from your meeting notes, with action-item follow-up.","momTrPh":"Paste the notes or transcript here (for example from Granola), or type your notes."});
/* v2.13 text */
Object.assign(T.ar,{"ppLbl": "أولوية المشروع", "pp_urgent": "عاجلة", "pp_high": "عالية", "pp_normal": "عادية", "pp_low": "منخفضة", "pjLeads": "قادة الفرق", "pjLeadsHint": "يحددهم الـAdmin. قائد الفريق يضيف المهام في مشاريعه فقط ويسندها لمهندسيه.", "pjNoLeads": "لا يوجد أعضاء بدور قائد فريق بعد.", "scLbl": "عرض المهام", "scAll": "كل مهام فريقي", "scMine": "مهامي أنا", "scTeam": "مهام مهندسيّ", "ownTask": "مهمتي", "not_your_project_e": "تستطيع إضافة مهام فقط في المشاريع التي عيّنك الـAdmin عليها.", "tabClients": "العملاء", "clSub": "عرّف العملاء مرة واحدة، ثم اخترهم عند إنشاء المشروع. زر البريد يفتح رسالة جاهزة باسم المشروع.", "clNew": "عميل جديد", "clEdit": "تعديل العميل", "clSearch": "بحث بالاسم أو جهة الاتصال أو البلد…", "clName": "اسم العميل / الشركة", "clNamePh": "مثلاً: شركة النور للتطوير", "clContact": "جهة الاتصال", "clPhone": "الهاتف", "clCountry": "البلد", "clWebsite": "الموقع الإلكتروني", "clNone": "لا عملاء بعد", "clNoneSub": "أضف أول عميل ليظهر في نموذج المشروع.", "clNoEmail": "لا بريد مسجّل", "clNoProjects": "لا مشاريع بعد", "clMail": "إرسال بريد للعميل", "clMailAbout": "بريد عن هذا المشروع", "clUsed": "مرتبط بـ {n} مشاريع، لذلك لا يمكن حذفه.", "clNoneOpt": "— بدون عميل —", "clQuickPh": "أو أضف عميلاً جديداً بالاسم", "clAdded": "أُضيف العميل", "client_has_projects_e": "لا يمكن حذف عميل مرتبط بمشاريع.", "client_not_found_e": "العميل غير موجود.", "hm_clients": "بيانات العملاء والتواصل", "reply": "ردّ", "replyPh": "اكتب ردك…", "replySent": "أُرسل الرد", "replyLbl": "ردّ", "n_reply": "{by} ردّ على تعليقك في {t}", "wsTitle": "نسب العمل على المشاريع", "wsByEng": "حسب المهندس", "wsByProj": "حسب المشروع", "wsPeriod": "الفترة", "wsMonth": "هذا الشهر", "wsLast": "الشهر الماضي", "wsQ": "آخر 3 أشهر", "wsYear": "هذه السنة", "wsAll": "كل الوقت", "wsEngHint": "لكل مهندس: كيف توزّعت ساعاته على المشاريع (100% = كل ساعاته في الفترة).", "wsProjHint": "لكل مشروع: نسبة مساهمة كل مهندس من ساعات المشروع.", "wsNone": "لا ساعات مسجّلة في هذه الفترة.", "tabPlanner": "المخطِّط", "plSub": "الاجتماعات والمواعيد. لا يراها إلا المنظّم والمدعوون.", "plHint": "اضغط على يوم لإضافة موعد فيه.", "evNew": "موعد جديد", "evEdit": "تعديل الموعد", "evTitle": "العنوان", "evTitlePh": "مثلاً: اجتماع تنسيق BIM أسبوعي", "evMeet": "رابط Google Meet", "evMeetNew": "إنشاء رابط", "evMeetNewHint": "يفتح Google Meet لإنشاء اجتماع جديد، ثم انسخ الرابط والصقه هنا.", "evMeetHint": "اضغط «إنشاء رابط»، انسخ رابط الاجتماع من Google Meet والصقه هنا. يعمل أي رابط https (Teams، Zoom…).", "evMeetBad": "رابط الاجتماع يجب أن يبدأ بـ https://", "evLocation": "المكان", "evLocPh": "مكتب الرياض / أونلاين", "evNoProject": "بدون مشروع", "evGuests": "المدعوون", "evMyTeam": "فريقي", "evAll": "الكل", "evNoneSel": "إلغاء التحديد", "evDescr": "التفاصيل / جدول الأعمال", "evDescrPh": "النقاط التي سنناقشها…", "evSent": "أُرسلت الدعوات", "evInvite": "دعوة", "evBy": "المنظّم", "evJoin": "انضمام", "evJoinMeet": "الانضمام إلى Google Meet", "evYourAnswer": "ردّك", "evIcs": "إضافة لتقويمي", "evUpcoming": "المواعيد القادمة", "evNone": "لا مواعيد قادمة", "evNoneSub": "أنشئ موعداً وادعُ زملاءك، فيظهر عندهم فقط.", "evNoneMonth": "لا مواعيد في هذا الشهر.", "evHost": "أنت المنظّم", "evWaiting": "{n} دعوات بانتظار ردك:", "rs_yes": "سأحضر", "rs_no": "لن أحضر", "rs_maybe": "ربما", "rs_pending": "بانتظار الرد", "n_event_invite": "{by} دعاك إلى {t}", "n_event_change": "{by} غيّر موعد {t}", "n_event_cancel": "{by} ألغى {t}", "n_project_lead": "{by} عيّنك قائد فريق على {p}", "event_not_found_e": "الموعد غير موجود أو أُلغي.", "tabCompany": "ملفات الشركة", "coSub": "الشعار والبروفايل والقوالب وملفات الشركة العامة.", "coSubAdmin": "الشعار والبروفايل والسجلات الرسمية والقوالب. اختر «للإدارة فقط» للملفات الحساسة.", "cfc_logos": "الشعار والهوية", "cfc_profiles": "بروفايل الشركة", "cfc_legal": "سجلات وتراخيص", "cfc_templates": "قوالب", "cfc_presentations": "عروض تقديمية", "cfc_hr": "شؤون الموظفين", "cfc_other": "أخرى", "visAll": "يراها كل الفريق", "visAdmin": "للإدارة فقط", "visAdminShort": "للإدارة", "fVis": "من يراها", "coNone": "لا ملفات للشركة بعد", "coNoneAdmin": "ارفع الشعار والبروفايل والقوالب ليجدها الفريق هنا.", "coNoneSub": "سيضيف الـAdmin ملفات الشركة هنا.", "cFileTypes": "PDF، Office، صور، SVG، AI، EPS، ZIP", "fStep1": "التصنيف:", "fInto": "سيُحفظ في", "fMove": "نقل إلى تصنيف آخر", "fMoved": "نُقل إلى {c}", "hm_company": "الشعار والبروفايل والقوالب", "hm_planner": "الاجتماعات والمواعيد"});
Object.assign(T.en,{"ppLbl": "Project priority", "pp_urgent": "Urgent", "pp_high": "High", "pp_normal": "Normal", "pp_low": "Low", "pjLeads": "Team leaders", "pjLeadsHint": "Set by the Admin. A team leader adds tasks only in their projects and assigns them to their engineers.", "pjNoLeads": "No members have the Team leader role yet.", "scLbl": "Show tasks", "scAll": "All my team’s tasks", "scMine": "My own tasks", "scTeam": "My engineers’ tasks", "ownTask": "Mine", "not_your_project_e": "You can only add tasks in projects the Admin assigned you to.", "tabClients": "Clients", "clSub": "Set up clients once, then pick them when you create a project. The mail button opens an email with the project name.", "clNew": "New client", "clEdit": "Edit client", "clSearch": "Search by name, contact or country…", "clName": "Client / company name", "clNamePh": "e.g. Al Noor Developments", "clContact": "Contact person", "clPhone": "Phone", "clCountry": "Country", "clWebsite": "Website", "clNone": "No clients yet", "clNoneSub": "Add the first client so it shows in the project form.", "clNoEmail": "No email saved", "clNoProjects": "No projects yet", "clMail": "Email the client", "clMailAbout": "Email about this project", "clUsed": "Linked to {n} projects, so it can’t be deleted.", "clNoneOpt": "— No client —", "clQuickPh": "or add a new client by name", "clAdded": "Client added", "client_has_projects_e": "A client with projects can’t be deleted.", "client_not_found_e": "Client not found.", "hm_clients": "Client details and contacts", "reply": "Reply", "replyPh": "Write your reply…", "replySent": "Reply sent", "replyLbl": "Reply", "n_reply": "{by} replied to your comment on {t}", "wsTitle": "Share of work per project", "wsByEng": "By engineer", "wsByProj": "By project", "wsPeriod": "Period", "wsMonth": "This month", "wsLast": "Last month", "wsQ": "Last 3 months", "wsYear": "This year", "wsAll": "All time", "wsEngHint": "For each engineer: how their hours split across projects (100% = all their hours in the period).", "wsProjHint": "For each project: each engineer’s share of the project’s hours.", "wsNone": "No hours logged in this period.", "tabPlanner": "Planner", "plSub": "Meetings and events. Only the organiser and the invited people see them.", "plHint": "Click a day to add an event on it.", "evNew": "New event", "evEdit": "Edit event", "evTitle": "Title", "evTitlePh": "e.g. Weekly BIM coordination", "evMeet": "Google Meet link", "evMeetNew": "Create link", "evMeetNewHint": "Opens Google Meet to create a new meeting; copy its link and paste it here.", "evMeetHint": "Press “Create link”, copy the meeting link from Google Meet and paste it here. Any https link works (Teams, Zoom…).", "evMeetBad": "The meeting link must start with https://", "evLocation": "Location", "evLocPh": "Riyadh office / online", "evNoProject": "No project", "evGuests": "Invited", "evMyTeam": "My team", "evAll": "Everyone", "evNoneSel": "Clear", "evDescr": "Details / agenda", "evDescrPh": "What we will discuss…", "evSent": "Invitations sent", "evInvite": "Invitation", "evBy": "Organiser", "evJoin": "Join", "evJoinMeet": "Join Google Meet", "evYourAnswer": "Your answer", "evIcs": "Add to my calendar", "evUpcoming": "Upcoming", "evNone": "No upcoming events", "evNoneSub": "Create an event and invite colleagues; only they will see it.", "evNoneMonth": "No events this month.", "evHost": "You organise", "evWaiting": "{n} invitations waiting for your answer:", "rs_yes": "Going", "rs_no": "Not going", "rs_maybe": "Maybe", "rs_pending": "No answer yet", "n_event_invite": "{by} invited you to {t}", "n_event_change": "{by} changed {t}", "n_event_cancel": "{by} cancelled {t}", "n_project_lead": "{by} made you a team leader on {p}", "event_not_found_e": "The event no longer exists.", "tabCompany": "Company files", "coSub": "Logo, company profile, templates and other company files.", "coSubAdmin": "Logo, profile, official papers and templates. Choose “Management only” for sensitive files.", "cfc_logos": "Logo & identity", "cfc_profiles": "Company profile", "cfc_legal": "Registrations & licences", "cfc_templates": "Templates", "cfc_presentations": "Presentations", "cfc_hr": "HR", "cfc_other": "Other", "visAll": "Whole team", "visAdmin": "Management only", "visAdminShort": "Management", "fVis": "Who sees it", "coNone": "No company files yet", "coNoneAdmin": "Upload the logo, profile and templates so the team finds them here.", "coNoneSub": "An Admin will add company files here.", "cFileTypes": "PDF, Office, images, SVG, AI, EPS, ZIP", "fStep1": "Category:", "fInto": "Goes into", "fMove": "Move to another category", "fMoved": "Moved to {c}", "hm_company": "Logo, profile and templates", "hm_planner": "Meetings and events"});
/* v2.17 text */
Object.assign(T.ar,{"tabTimer": "مؤقّت المهام", "vMine": "جدول أعمالي", "pjMine": "مشاريعي", "pjAll": "كل المشاريع", "pjMineNone": "لا مشاريع مرتبطة بك بعد", "pjMineNoneSub": "تظهر هنا المشاريع التي أنت قائد فريق فيها أو أنشأتها أو عندك فيها مهام أو ساعات.", "tkMine": "مهامي", "tkAll": "كل المهام", "tkTeam": "مهام فريقي", "ovSkills": "Capability Matrix", "cmLead": "قائد", "cmSub": "مستوى كل مهندس في كل إمكانية. يحددها قائد الفريق أو المدير.", "cmSubEd": "اضغط على أي خانة لتحديد المستوى. كل فريق له إمكانياته الخاصة.", "lv0": "لا يعرف", "lv1": "مبتدئ", "lv2": "متوسط", "lv3": "متقدم", "lv4": "خبير", "cmAdd": "إمكانية", "cmAddPh": "مثلاً: Revit، Navisworks، إدارة مشاريع، ACC", "cmSuggest": "إضافة الإمكانيات المقترحة", "cmSuggestHint": "اختر ما يناسب هذا الفريق. يمكنك إضافة غيرها بالاسم لاحقاً.", "cmAdded": "أُضيفت {n} إمكانيات", "cmExists": "موجودة مسبقاً", "cmNoSkills": "لا إمكانيات لهذا الفريق بعد", "cmNoSkillsEd": "أضف الإمكانيات التي يحتاجها هذا الفريق (برامج، مهارات، معايير).", "cmNoSkillsSub": "سيضيفها قائد الفريق أو المدير.", "cmNoPeople": "لا أعضاء في هذا الفريق", "cmNoPeopleSub": "أضف الموظفين للفريق من نموذج الموظف.", "cmNoTeams": "أنشئ الفرق أولاً من «فريق جديد»، ثم حدد إمكانيات كل فريق.", "cmStrong": "متقدم+", "cmCover": "عدد المتقدمين+ / المتوسط", "cmCoverHint": "عدد الأشخاص بمستوى متقدم أو خبير، وتحته متوسط المستوى", "cmGaps": "فجوات: لا أحد بمستوى متقدم في", "cmNoGaps": "لكل إمكانية شخص واحد على الأقل بمستوى متقدم.", "cmThin": "يعتمد على شخص واحد فقط:", "cmEditSkill": "تعديل الإمكانية", "cmMoveBack": "تقديم", "cmMoveFwd": "تأخير", "cmDelHint": "حذف الإمكانية يحذف مستويات كل الأعضاء فيها.", "rlTitle": "الأدوار والصلاحيات", "rlSub": "ما يستطيع كل دور فعله.", "rlSubEd": "كل الصلاحيات قابلة للتعديل: ضع ✓ أو أزلها لأي دور. الـAdmin عنده كل الصلاحيات دائماً. يمكنك أيضاً إنشاء دور جديد واختياره في نموذج الموظف.", "rlAdminAll": "الـAdmin عنده كل الصلاحيات دائماً، ولا يمكن تقييده.", "rlAllShort": "كل الصلاحيات", "rlReset": "استعادة الافتراضي", "rlLeadFixed": "«قيادة فريق» هي ما يميّز دور قائد الفريق، لذلك ثابتة للأدوار الأساسية.", "rlPerm": "الصلاحية", "rlNew": "دور جديد", "rlEdit": "تعديل الدور", "rlName": "اسم الدور", "rlNamePh": "مثلاً: مدير مشاريع، منسق BIM، سكرتارية", "rlColor": "اللون", "rlPerms": "الصلاحيات", "rlUsed": "{n} موظفين بهذا الدور، لذلك لا يمكن حذفه. غيّر دورهم أولاً.", "rlAlways": "لكل الأدوار دائماً: تسجيل الوقت، المهام المسندة له، المخطِّط والمحاضر، التعليقات، الإجازات، الملف الشخصي.", "rlNote": "الصلاحية تعمل على الخادم أيضاً، وليس فقط بإخفاء الأزرار. التغيير يسري عند التحديث التالي للصفحة.", "rlLeadProj": "قائد الفريق: مشاريعه فقط", "role_in_use_e": "هذا الدور مستخدم، غيّر دور الموظفين أولاً.", "pk_lead": "قيادة فريق", "pk_lead_h": "يضيف المهام في مشاريعه ويسندها لمهندسيه، ويعتمد ساعاتهم وإجازاتهم أولاً.", "pk_projects": "كل المشاريع والمهام", "pk_projects_h": "إنشاء وتعديل أي مشروع ومهمة، وتعيين قادة الفرق والإسناد لأي شخص.", "pk_see_all": "رؤية كل الفريق", "pk_see_all_h": "ساعات ومؤقتات وإجازات وتقارير كل الموظفين (بدون التكاليف).", "pk_approve": "الاعتماد النهائي", "pk_approve_h": "اعتماد الساعات الأسبوعية والإجازات لكل الموظفين.", "pk_finance": "المالية", "pk_finance_h": "الرواتب والتكاليف والربحية وقيم العقود.", "pk_clients": "العملاء", "pk_clients_h": "إضافة وتعديل وحذف العملاء.", "pk_company": "ملفات الشركة", "pk_company_h": "رفع وإدارة ملفات الشركة ورؤية ملفات الإدارة.", "pk_team": "إدارة الموظفين", "pk_team_h": "إضافة وتعديل الموظفين والفرق وإمكانياتهم (بدون حسابات الـAdmin).", "pk_holidays": "العطل الرسمية", "pk_holidays_h": "إضافة وحذف العطل الرسمية.", "weeklyHours": "ساعات العقد الأسبوعية", "weeklyHint": "تُوزع على أيام العمل المحددة. تُستخدم في الإشغال ونسب العمل.", "rlCustom": "أدوار مخصصة", "clView": "طريقة العرض", "clv_cards": "بطاقات", "clv_table": "جدول", "clv_country": "حسب البلد", "clv_projects": "حسب المشاريع", "clActiveP": "مشاريع فعالة", "clOpenT": "مهام مفتوحة", "clNoCountry": "بدون بلد", "clN": "عملاء", "wsActual": "من الساعات الفعلية", "wsContract": "من ساعات العقد", "wsFree": "غير مستغل", "wsExtra": "ساعات إضافية", "wsContractOf": "{h} س عقد حتى اليوم", "wsEngHint2": "السطر الأول: توزيع ساعات المهندس الفعلية على المشاريع. السطر الثاني: نفس الساعات كنسبة من ساعات عقده (الأسبوعية × أيام العمل حتى اليوم، بدون العطل والإجازات).", "capTitle": "الإشغال (Capacity)", "capNote2": "كم من وقت كل شخص محجوز بالمهام المفتوحة في الأسابيع القادمة، مقارنة بساعات عقده.", "capAvail": "الساعات المتاحة", "capAvailS": "ساعات العقد ناقص العطل والإجازات", "capPlanned": "المخطط", "capPlannedS": "المتبقي من تقدير المهام المفتوحة", "capFree": "الوقت الحر", "capFreeS": "يمكن إسناد مهام جديدة فيه", "capUtil": "نسبة الإشغال", "capOver": "فوق 100%", "capNoOver": "لا أحد", "capWeeks": "عدد الأسابيع", "capWk": "أسابيع", "capWkS": "أسبوع", "capAllTeams": "كل الفرق", "capHow": "كيف يُحسب", "capH1": "المتاح = ساعات العقد الأسبوعية موزعة على أيام العمل، ناقص العطل الرسمية والإجازات المعتمدة، ابتداءً من اليوم.", "capH2": "المخطط = تقدير المهمة ناقص الساعات المسجلة عليها، موزع بالتساوي على أيام العمل حتى تاريخ التسليم.", "capH3": "المهام المتأخرة تُحسب كلها على الأيام القادمة. المهام بدون تاريخ تسليم أو بدون تقدير لا تدخل في الحساب وتظهر كتنبيه.", "capH4": "الخانة: النسبة، وتحتها المخطط / المتاح بالساعات. ✈ = يوجد عطلة أو إجازة في هذا الأسبوع.", "capH5": "اضغط على أي شخص لرؤية المهام التي تشغل وقته في كل أسبوع.", "capOff": "عطلة / إجازة", "capTotal": "المجموع", "capFreeShort": "حر", "capNoDue": "بدون تاريخ تسليم", "capNoEst": "بدون تقدير ساعات", "capWarnHint": "أضف التقدير وتاريخ التسليم لتكون الأرقام دقيقة.", "capRemain": "المتبقي", "capNoTasks": "لا مهام مجدولة في هذه الفترة.", "capCellHint": "اضغط على الاسم للتفاصيل"});
Object.assign(T.en,{"tabTimer": "Task timer", "vMine": "My agenda", "pjMine": "My projects", "pjAll": "All projects", "pjMineNone": "No projects linked to you yet", "pjMineNoneSub": "Projects you lead, created, or have tasks or hours in show up here.", "tkMine": "My tasks", "tkAll": "All tasks", "tkTeam": "My team’s tasks", "ovSkills": "Capability Matrix", "cmLead": "Lead", "cmSub": "Each engineer’s level in each capability, set by the team leader or the Admin.", "cmSubEd": "Click any cell to set the level. Each team has its own capabilities.", "lv0": "None", "lv1": "Beginner", "lv2": "Intermediate", "lv3": "Advanced", "lv4": "Expert", "cmAdd": "Capability", "cmAddPh": "e.g. Revit, Navisworks, project management, ACC", "cmSuggest": "Add suggested capabilities", "cmSuggestHint": "Pick what fits this team. You can add others by name later.", "cmAdded": "{n} capabilities added", "cmExists": "Already there", "cmNoSkills": "No capabilities for this team yet", "cmNoSkillsEd": "Add what this team needs: software, skills, standards.", "cmNoSkillsSub": "The team leader or the Admin will add them.", "cmNoPeople": "No members in this team", "cmNoPeopleSub": "Add people to the team from the member form.", "cmNoTeams": "Create teams first with “New team”, then set each team’s capabilities.", "cmStrong": "Advanced+", "cmCover": "Advanced+ count / average", "cmCoverHint": "People at Advanced or Expert, with the average level below", "cmGaps": "Gaps: nobody Advanced in", "cmNoGaps": "Every capability has at least one person at Advanced.", "cmThin": "Depends on one person only:", "cmEditSkill": "Edit capability", "cmMoveBack": "Move earlier", "cmMoveFwd": "Move later", "cmDelHint": "Deleting a capability removes everyone’s level in it.", "rlTitle": "Roles and permissions", "rlSub": "What each role can do.", "rlSubEd": "Every permission can be changed: tick or untick it for any role. The Admin always has every permission. You can also create a new role and pick it in the member form.", "rlAdminAll": "The Admin always has every permission and can’t be limited.", "rlAllShort": "All permissions", "rlReset": "Reset to default", "rlLeadFixed": "“Leads a team” is what makes the Team leader role, so it is fixed for the built-in roles.", "rlPerm": "Permission", "rlNew": "New role", "rlEdit": "Edit role", "rlName": "Role name", "rlNamePh": "e.g. Project manager, BIM coordinator, Office", "rlColor": "Colour", "rlPerms": "Permissions", "rlUsed": "{n} people have this role, so it can’t be deleted. Change their role first.", "rlAlways": "Every role always has: time tracking, their assigned tasks, planner and minutes, comments, leave, own profile.", "rlNote": "Permissions are checked on the server too, not only by hiding buttons. Changes apply on the next page refresh.", "rlLeadProj": "Team leader: own projects only", "role_in_use_e": "This role is in use. Change those people’s role first.", "pk_lead": "Leads a team", "pk_lead_h": "Adds tasks in their projects and assigns them to their engineers; first approval of their hours and leave.", "pk_projects": "All projects and tasks", "pk_projects_h": "Create and edit any project and task, set team leaders, assign to anyone.", "pk_see_all": "Sees the whole team", "pk_see_all_h": "Everyone’s hours, timers, leave and reports (without costs).", "pk_approve": "Final approval", "pk_approve_h": "Approves weekly hours and leave for everyone.", "pk_finance": "Finance", "pk_finance_h": "Payroll, costs, profitability and contract values.", "pk_clients": "Clients", "pk_clients_h": "Add, edit and delete clients.", "pk_company": "Company files", "pk_company_h": "Upload and manage company files, see management-only files.", "pk_team": "Manage people", "pk_team_h": "Add and edit members, teams and their capabilities (not Admin accounts).", "pk_holidays": "Public holidays", "pk_holidays_h": "Add and remove public holidays.", "weeklyHours": "Weekly contract hours", "weeklyHint": "Spread over the selected work days. Used for capacity and work share.", "rlCustom": "Custom roles", "clView": "View", "clv_cards": "Cards", "clv_table": "Table", "clv_country": "By country", "clv_projects": "By projects", "clActiveP": "active projects", "clOpenT": "open tasks", "clNoCountry": "No country", "clN": "clients", "wsActual": "of actual hours", "wsContract": "of contract hours", "wsFree": "Unused", "wsExtra": "Overtime", "wsContractOf": "{h} h contract to date", "wsEngHint2": "First line: how the engineer’s actual hours split across projects. Second line: the same hours as a share of their contract hours (weekly × work days to date, without holidays and leave).", "capTitle": "Capacity", "capNote2": "How much of each person’s time open tasks take in the coming weeks, against their contract hours.", "capAvail": "Available", "capAvailS": "Contract hours minus holidays and leave", "capPlanned": "Planned", "capPlannedS": "Remaining estimate of open tasks", "capFree": "Free time", "capFreeS": "Room for new tasks", "capUtil": "Utilisation", "capOver": "Over 100%", "capNoOver": "Nobody", "capWeeks": "Weeks", "capWk": "weeks", "capWkS": "wk", "capAllTeams": "All teams", "capHow": "How it’s calculated", "capH1": "Available = weekly contract hours spread over work days, minus public holidays and approved leave, from today.", "capH2": "Planned = task estimate minus hours already logged on it, spread evenly over work days until the due date.", "capH3": "Overdue tasks count fully on the coming days. Tasks without a due date or an estimate are not counted and show as a warning.", "capH4": "Cell: the percentage, with planned / available hours below. ✈ = a holiday or leave that week.", "capH5": "Click a person to see which tasks take their time each week.", "capOff": "Holiday / leave", "capTotal": "Total", "capFreeShort": "free", "capNoDue": "no due date", "capNoEst": "no estimate", "capWarnHint": "Add estimates and due dates so the numbers are right.", "capRemain": "Remaining", "capNoTasks": "No scheduled tasks in this period.", "capCellHint": "Click a name for details"});
/* v2.18 text */
Object.assign(T.ar,{"pwaTitle": "التطبيق على الموبايل", "pwaSub": "نفس البرنامج كتطبيق: أيقونة على الشاشة، شاشة كاملة، وإشعارات.", "pwaInstallH": "1. التثبيت على هذا الجهاز", "pwaIsInstalled": "التطبيق مثبّت ومفتوح كتطبيق على هذا الجهاز.", "pwaWhy": "ثبّته ليظهر كأيقونة تكتوفا ويفتح بشاشة كاملة.", "pwaInstall": "تثبيت التطبيق", "pwaInstalled": "تم تثبيت التطبيق", "pwaIos1": "افتح هذا الرابط في Safari على iPhone.", "pwaIos2": "اضغط زر المشاركة", "pwaIos3": "اختر «إضافة إلى الشاشة الرئيسية» ثم «إضافة». افتح التطبيق من أيقونته.", "pwaAnd1": "افتح هذا الرابط في Chrome على الموبايل.", "pwaAnd2": "من القائمة ⋮ اختر «تثبيت التطبيق» أو «إضافة إلى الشاشة الرئيسية».", "pwaDesk1": "على الكمبيوتر: في Chrome أو Edge اضغط أيقونة التثبيت ⤓ في شريط العنوان.", "pwaDesk2": "وعلى الموبايل: افتح نفس الرابط وثبّته من هناك ليصلك الإشعار على الهاتف.", "pushH": "2. الإشعارات على هذا الجهاز", "pushWhy": "تصلك المهام والاعتمادات والتعليقات والاجتماعات حتى والتطبيق مغلق.", "pushOn": "تفعيل الإشعارات", "pushOff": "إيقاف على هذا الجهاز", "pushTest": "إرسال إشعار تجريبي", "pushIsOn": "الإشعارات مفعّلة على هذا الجهاز.", "pushOnDone": "تم تفعيل الإشعارات على هذا الجهاز", "pushOffDone": "توقفت الإشعارات على هذا الجهاز", "pushDenied": "لم يُسمح بالإشعارات.", "pushFail": "تعذّر تفعيل الإشعارات على هذا المتصفح.", "pushTestSent": "أُرسل. يجب أن يظهر الإشعار خلال ثوانٍ.", "pushTestNone": "لم يُرسل: لا يوجد جهاز مفعّل.", "pushDevices": "أجهزة", "pushIosFirst": "على iPhone: ثبّت التطبيق أولاً (الخطوة 1)، ثم افتحه من أيقونته وفعّل الإشعارات من هنا.", "pushNoBrowser": "هذا المتصفح لا يدعم الإشعارات. استخدم Chrome أو Edge أو Safari حديثاً.", "pushBlocked": "الإشعارات محظورة لهذا الموقع.", "pushBlockedHow": "اسمح بها من إعدادات المتصفح أو الهاتف (الإشعارات ← Team Desk)، ثم ارجع لهذه الصفحة.", "pushNoServer": "الإشعارات على الموبايل غير متاحة على هذا السيرفر بعد.", "pushNoServerAdmin": "الاستضافة تحتاج PHP مع openssl و curl لإرسال الإشعارات. باقي التطبيق يعمل.", "pwaCardT": "ثبّت Team Desk على موبايلك", "pwaCardS": "أيقونة على الشاشة، وإشعارات بالمهام والاعتمادات.", "pwaHow": "الطريقة", "mobLbl": "الموبايل", "mobOn": "مفعّلة على {n} أجهزة", "mobOff": "غير مفعّلة", "mobSet": "الإعداد"});
Object.assign(T.en,{"pwaTitle": "The app on your phone", "pwaSub": "The same Team Desk as an app: home-screen icon, full screen and notifications.", "pwaInstallH": "1. Install on this device", "pwaIsInstalled": "Installed and running as an app on this device.", "pwaWhy": "Install it to get the TECTOVA icon and a full-screen app.", "pwaInstall": "Install the app", "pwaInstalled": "App installed", "pwaIos1": "Open this link in Safari on the iPhone.", "pwaIos2": "Tap the Share button", "pwaIos3": "Choose “Add to Home Screen”, then “Add”. Open the app from its icon.", "pwaAnd1": "Open this link in Chrome on the phone.", "pwaAnd2": "From the ⋮ menu choose “Install app” or “Add to Home screen”.", "pwaDesk1": "On a computer: in Chrome or Edge click the install icon ⤓ in the address bar.", "pwaDesk2": "On the phone: open the same link and install it there to get notifications on the phone.", "pushH": "2. Notifications on this device", "pushWhy": "Tasks, approvals, comments and meetings reach you even when the app is closed.", "pushOn": "Turn on notifications", "pushOff": "Turn off on this device", "pushTest": "Send a test notification", "pushIsOn": "Notifications are on for this device.", "pushOnDone": "Notifications are on for this device", "pushOffDone": "Notifications stopped on this device", "pushDenied": "Notifications were not allowed.", "pushFail": "Couldn’t turn on notifications in this browser.", "pushTestSent": "Sent. It should appear within seconds.", "pushTestNone": "Not sent: no device is set up.", "pushDevices": "devices", "pushIosFirst": "On iPhone: install the app first (step 1), open it from its icon and turn notifications on here.", "pushNoBrowser": "This browser doesn’t support notifications. Use a recent Chrome, Edge or Safari.", "pushBlocked": "Notifications are blocked for this site.", "pushBlockedHow": "Allow them in the browser or phone settings (Notifications → Team Desk), then come back here.", "pushNoServer": "Phone notifications aren’t available on this server yet.", "pushNoServerAdmin": "The hosting needs PHP with openssl and curl to send notifications. The rest of the app works.", "pwaCardT": "Install Team Desk on your phone", "pwaCardS": "An icon on your home screen, and notifications for tasks and approvals.", "pwaHow": "How", "mobLbl": "Phone", "mobOn": "On for {n} devices", "mobOff": "Off", "mobSet": "Set up"});
/* v2.12 organisation views text */
Object.assign(T.ar,{"ovViews": "طريقة العرض", "ovChart": "مخطط هرمي", "ovTree": "شجرة الفرق", "ovMatrix": "الفرق × الاختصاصات", "ovTable": "جدول", "ovShowEng": "إظهار المهندسين", "ovZoomIn": "تكبير", "ovZoomOut": "تصغير", "ovFit": "ملاءمة الشاشة", "ovChartHint": "اسحب أفقياً لرؤية كل المخطط، أو اضغط «ملاءمة الشاشة». الرقم الأحمر = مهام متأخرة.", "ovNEng": "{n} مهندس", "ovTotal": "المجموع", "ovMatrixHint": "كل خانة تبين مهندسي هذا الاختصاص في هذا الفريق، فتظهر الاختصاصات الناقصة في كل فريق.", "ovSearch": "بحث بالاسم أو الفريق أو المسمى…", "ovCount": "{n} شخص", "ovLeads": "يقود", "ovNone": "لا نتائج."});
Object.assign(T.en,{"ovViews": "View", "ovChart": "Org chart", "ovTree": "Team tree", "ovMatrix": "Teams × disciplines", "ovTable": "Table", "ovShowEng": "Show engineers", "ovZoomIn": "Zoom in", "ovZoomOut": "Zoom out", "ovFit": "Fit to screen", "ovChartHint": "Scroll sideways to see the whole chart, or press “Fit to screen”. Red number = late tasks.", "ovNEng": "{n} engineers", "ovTotal": "Total", "ovMatrixHint": "Each cell shows the engineers of that discipline in that team, so gaps in a team stand out.", "ovSearch": "Search by name, team or job title…", "ovCount": "{n} people", "ovLeads": "Leads", "ovNone": "No results."});
/* v2.11 organisation text */
Object.assign(T.ar,{"tabOrg": "الهيكل التنظيمي", "orgSub": "الفرق الهندسية وقادتها ومهندسوها. اضغط على مهندس لترى مهامه.", "orgLeadSub": "أنت مسؤول عن {n} مهندسين: تسند لهم المهام وتعتمد ساعاتهم وإجازاتهم.", "orgRoot": "الإدارة", "orgFinance": "المالية", "orgByDisc": "الاختصاص:", "orgLeader": "قائد الفريق", "orgMembers": "أعضاء الفريق", "orgYours": "فريقك", "orgNoLead": "بلا قائد: ساعات أعضائه وإجازاتهم تذهب للـAdmin مباشرة.", "orgNoMembers": "لا أعضاء بعد.", "orgNoTeams": "لا فرق بعد", "orgNoTeamsAdmin": "أنشئ أول فريق، مثلاً «الفريق المعماري»، واختر قائده وأعضاءه.", "orgNoTeamsSub": "سيضيف الـAdmin الفرق قريباً.", "orgLoose": "بدون فريق", "orgLooseHint": "لا قائد فريق لهم: ساعاتهم وإجازاتهم يعتمدها الـAdmin مباشرة.", "orgNewTeam": "فريق جديد", "orgEditTeam": "تعديل الفريق", "orgTeamName": "اسم الفريق", "orgTeamPh": "مثلاً: الفريق الإنشائي – الرياض", "orgNoLeadOpt": "بدون قائد", "orgParent": "يتبع لـ", "orgTopLevel": "مباشرة تحت الإدارة", "orgLeadHint": "قائد الفريق مسؤول فقط عن أعضاء فريقه والفرق التابعة له: يسند لهم المهام، ويعتمد ساعاتهم وإجازاتهم، ويرى تأخيرهم.", "orgMoveHint": "اختيار مهندس من فريق آخر ينقله إلى هذا الفريق.", "orgTeamLbl": "الفريق", "orgNoTeamOpt": "بدون فريق", "not_your_team_e": "تستطيع إسناد المهام لمهندسي فريقك فقط.", "team_loop_e": "لا يمكن أن يتبع الفريق لنفسه أو لأحد فرقه الفرعية.", "invalid_lead_e": "قائد الفريق يجب أن يكون بدور قائد فريق أو Admin.", "orgDelTeam": "حذف الفريق", "orgAll": "الكل", "hm_org": "الفرق وقادتها", "orgDeleted": "حُذف الفريق. أعضاؤه الآن بدون فريق.", "myTeamOnly": "فريقي"});
Object.assign(T.en,{"tabOrg": "Organisation", "orgSub": "Engineering teams, their leaders and engineers. Click an engineer to see their tasks.", "orgLeadSub": "You are responsible for {n} engineers: you assign their tasks and approve their hours and leave.", "orgRoot": "Management", "orgFinance": "Finance", "orgByDisc": "Discipline:", "orgLeader": "Team leader", "orgMembers": "Team members", "orgYours": "Your team", "orgNoLead": "No leader: members’ hours and leave go straight to the Admin.", "orgNoMembers": "No members yet.", "orgNoTeams": "No teams yet", "orgNoTeamsAdmin": "Create the first team, e.g. “Architecture team”, and pick its leader and members.", "orgNoTeamsSub": "An Admin will add the teams soon.", "orgLoose": "No team", "orgLooseHint": "No team leader: an Admin approves their hours and leave directly.", "orgNewTeam": "New team", "orgEditTeam": "Edit team", "orgTeamName": "Team name", "orgTeamPh": "e.g. Structure team – Riyadh", "orgNoLeadOpt": "No leader", "orgParent": "Belongs to", "orgTopLevel": "Directly under management", "orgLeadHint": "A team leader is responsible only for the members of their team and the teams under it: they assign their tasks, approve their hours and leave, and see their delays.", "orgMoveHint": "Ticking an engineer from another team moves them to this one.", "orgTeamLbl": "Team", "orgNoTeamOpt": "No team", "not_your_team_e": "You can only assign tasks to engineers in your team.", "team_loop_e": "A team can’t belong to itself or to one of its sub-teams.", "invalid_lead_e": "The team leader must have the Team leader or Admin role.", "orgDelTeam": "Delete team", "orgAll": "All", "hm_org": "Teams and leaders", "orgDeleted": "Team deleted. Its members now have no team.", "myTeamOnly": "My team"});
/* v2.10 notifications text */
Object.assign(T.ar,{"notifTitle": "الإشعارات", "notifAllRead": "تحديد الكل كمقروء", "notifNone": "لا إشعارات بعد", "notifNoneSub": "هنا يصلك قبول المهام والإجازات والساعات والتعليقات.", "notifNew": "وصلك إشعار جديد", "notifGone": "هذا العنصر لم يعد موجوداً.", "agoNow": "الآن", "agoMin": "قبل {n} د", "agoHr": "قبل {n} س", "agoDay": "قبل {n} يوم", "n_task_assigned": "{by} أسند إليك مهمة: {t}", "n_task_due": "{by} غيّر موعد تسليم {t} إلى {due}", "n_task_done": "{by} أنجز المهمة {t}", "n_qc_sent": "{by} أرسل {t} للكونترول عندك", "n_qc_ok": "{by} اعتمد مهمتك {t}", "n_qc_back": "{by} أعاد مهمتك {t} للتعديل", "n_comment": "{by} علّق على {t}", "n_comment_p": "{by} كتب ملاحظة على مشروعك", "n_mention": "{by} ذكرك في تعليق", "n_leave_req": "طلب إجازة من {who} بانتظار قرارك", "n_leave_lead": "{by} وافق على إجازتك، بانتظار الإدارة", "n_leave_ok": "{by} وافق على إجازتك", "n_leave_no": "{by} رفض طلب إجازتك", "n_week_ok": "{by} اعتمد ساعات أسبوع {ws}", "n_week_no": "{by} أعاد ساعات أسبوع {ws} للمراجعة", "notifHow": "طريقة وصول الإشعارات", "emailLbl": "البريد", "emailOn": "أرسل لي بريداً للأمور المهمة", "emailWhich": "البريد فقط لـ: مهمة جديدة، الكونترول، قرارات الإجازة، رفض الساعات، وعندما يذكرك أحد. كل الإشعارات تظهر هنا وفي تلغرام.", "tgNotReady": "تلغرام غير مفعّل على الموقع بعد. اطلب من الـAdmin تفعيله.", "tgNotReadyAdmin": "تلغرام غير مفعّل بعد. التعليمات في تبويب الفريق ← تلغرام.", "tgLinked": "مربوط بتلغرام", "tgOn": "أرسل الإشعارات إلى تلغرام", "tgTest": "رسالة تجربة", "tgUnlink": "إلغاء الربط", "tgTestSent": "أُرسلت رسالة التجربة إلى تلغرام", "tgWhy": "استلم كل الإشعارات على تلغرام فوراً.", "tgLink": "ربط تلغرام", "tgWaitTxt": "في تلغرام اضغط «Start» (أو «ابدأ»)، ثم ارجع هنا واضغط «تم».", "tgOpenAgain": "فتح تلغرام", "tgDone": "تم، تحقّق", "tgLinkedT": "تم ربط تلغرام", "tgNotYet": "لم يصل الربط بعد. اضغط Start في تلغرام ثم حاول مجدداً.", "tgAdmin": "إشعارات تلغرام", "tgOff": "غير مفعّل", "tgLinkedCount": "{n} من {m} أعضاء ربطوا تلغرام.", "tgHook": "تفعيل الاستقبال الفوري", "tgHookHint": "مرة واحدة: يجعل الربط يتم فوراً عند ضغط Start.", "tgHookOk": "تم تفعيل البوت على هذا الموقع", "tgNoHttps": "الموقع بدون https، لذلك يتم الربط عند ضغط «تم، تحقّق». يعمل بشكل طبيعي.", "tgSetupSteps": "1. افتح تلغرام وابحث عن ‎@BotFather‎ ثم أرسل ‎/newbot‎ واختر اسماً للبوت (مثلاً TECTOVA Team).\n2. انسخ الـtoken الذي يرسله لك.\n3. في config.php ضع telegram_bot_token = الـtoken و telegram_bot_name = اسم المستخدم للبوت (بدون @).\n4. ارفع config.php وحدّث الصفحة، ثم يربط كل مهندس حسابه من زر الجرس ← ربط تلغرام.", "tg_not_ready_e": "تلغرام غير مفعّل على الموقع.", "tg_failed_e": "تعذّر الاتصال بتلغرام. تأكد من الـtoken وحاول مجدداً.", "tg_https_e": "يجب أن يبدأ site_url في config.php بـ https://", "tg_not_linked_e": "اربط تلغرام أولاً."});
Object.assign(T.en,{"notifTitle": "Notifications", "notifAllRead": "Mark all as read", "notifNone": "No notifications yet", "notifNoneSub": "Task, leave and hours decisions and comments show up here.", "notifNew": "New notification", "notifGone": "This item no longer exists.", "agoNow": "now", "agoMin": "{n} min ago", "agoHr": "{n} h ago", "agoDay": "{n} d ago", "n_task_assigned": "{by} assigned you {t}", "n_task_due": "{by} moved the due date of {t} to {due}", "n_task_done": "{by} finished {t}", "n_qc_sent": "{by} sent {t} for your QC check", "n_qc_ok": "{by} approved your task {t}", "n_qc_back": "{by} returned {t} for changes", "n_comment": "{by} commented on {t}", "n_comment_p": "{by} wrote a note on your project", "n_mention": "{by} mentioned you", "n_leave_req": "Leave request from {who} is waiting for you", "n_leave_lead": "{by} approved your leave; waiting for the manager", "n_leave_ok": "{by} approved your leave", "n_leave_no": "{by} declined your leave request", "n_week_ok": "{by} approved your hours for the week of {ws}", "n_week_no": "{by} sent back your hours for the week of {ws}", "notifHow": "How notifications reach you", "emailLbl": "Email", "emailOn": "Email me about important things", "emailWhich": "Email only for: new task, QC, leave decisions, hours sent back, and mentions. Everything shows here and on Telegram.", "tgNotReady": "Telegram isn’t set up on this site yet. Ask an Admin.", "tgNotReadyAdmin": "Telegram isn’t set up yet. See Team → Telegram for the steps.", "tgLinked": "Linked to Telegram", "tgOn": "Send notifications to Telegram", "tgTest": "Test message", "tgUnlink": "Unlink", "tgTestSent": "Test message sent to Telegram", "tgWhy": "Get every notification on Telegram right away.", "tgLink": "Link Telegram", "tgWaitTxt": "In Telegram press “Start”, then come back and press “Done”.", "tgOpenAgain": "Open Telegram", "tgDone": "Done, check", "tgLinkedT": "Telegram linked", "tgNotYet": "Not linked yet. Press Start in Telegram, then try again.", "tgAdmin": "Telegram notifications", "tgOff": "Not set up", "tgLinkedCount": "{n} of {m} members linked Telegram.", "tgHook": "Enable instant linking", "tgHookHint": "Once: links accounts the moment people press Start.", "tgHookOk": "The bot now talks to this site", "tgNoHttps": "The site has no https, so linking happens when people press “Done, check”. That works fine.", "tgSetupSteps": "1. In Telegram, open @BotFather, send /newbot and pick a name (e.g. TECTOVA Team).\n2. Copy the token it sends you.\n3. In config.php set telegram_bot_token to the token and telegram_bot_name to the bot’s username (without @).\n4. Upload config.php and reload. Each engineer then links their account from the bell → Link Telegram.", "tg_not_ready_e": "Telegram isn’t set up on this site.", "tg_failed_e": "Couldn’t reach Telegram. Check the token and try again.", "tg_https_e": "site_url in config.php must start with https://", "tg_not_linked_e": "Link Telegram first."});
/* v2.9 QC and home text */
Object.assign(T.ar,{"tabHome": "الرئيسية", "hmShortcuts": "اختصارات", "hmHello": "أهلاً {n}", "hmSubLate": "عندك {n} مهام متأخرة. ابدأ فيها اليوم.", "hmSubLateTeam": "في الفريق {n} مهام متأخرة. التفاصيل حسب المهندس بالأسفل.", "hmSubOk": "لا مهام متأخرة عليك. يوم موفق!", "hmSubOkTeam": "لا مهام متأخرة في الفريق حالياً.", "hmStartTimer": "ابدأ المؤقت", "hm_timer": "سجّل وقت عملك", "hm_tasks": "لوحة، قائمة، تقويم، مخطط زمني", "hm_projects": "المشاريع والمراحل والميزانية", "hm_files": "مخططات وعقود وروابط", "hm_notes": "سجل التعليقات", "hm_tags": "تاغات المشاريع والمهام", "hm_leave": "طلبات الإجازة والعطل", "hm_team": "أعضاء الفريق والصلاحيات", "hm_approvals": "الساعات والإجازات", "hm_capacity": "الحمل على كل مهندس", "hm_reports": "الساعات الشهرية", "hm_payroll": "الرواتب والربحية", "hmActiveProj": "مشاريع نشطة", "hmOpenTeam": "مهام مفتوحة في الفريق", "hmQcMine": "بانتظار كونترولك", "hmDone7": "أُنجزت آخر 7 أيام", "hmDelays": "التأخير حسب المهندس", "hmDelaysHint": "المتأخرة: تجاوزت موعد التسليم وما زالت للتنفيذ أو قيد العمل. المهام بانتظار الكونترول لا تُحسب تأخيراً على المهندس.", "hmOpen": "مفتوحة", "hmLate": "متأخرة", "hmWorst": "أكبر تأخير", "hmWeek": "هذا الأسبوع", "hmInQc": "بالكونترول", "hmOnTime": "ضمن الموعد", "hmFree": "لا مهام مفتوحة", "hmOnLeave": "في إجازة", "hmDaysShort": "{n} يوم", "hmDaysLate": "متأخرة {n} يوم", "hmAllTasks": "كل مهامه", "hmLateTotal": "{n} متأخرة", "hmNoLate": "لا تأخير", "hmUnassignedLate": "متأخرة بلا مهندس", "hmBarTip": "توزيع المهام المفتوحة", "hmMyDelays": "مهامي المتأخرة", "hmMyNoLate": "ممتاز، لا مهام متأخرة عليك.", "hmProjects": "المشاريع", "hmNext": "التسليم القادم", "hmUpTeam": "تسليمات الأيام السبعة القادمة", "hmUpMine": "تسليماتي خلال 7 أيام", "hmNothingSoon": "لا تسليمات خلال الأيام السبعة القادمة.", "hmMore": "+{n} أخرى", "qcShort": "كونترول", "qcOk": "معتمدة", "qcWait": "بانتظار الكونترول", "qcNeeds": "بحاجة كونترول", "qcHint": "لا تُغلق المهمة إلا بعد تدقيقها واعتمادها. عندما ينهيها المهندس تذهب إلى «بانتظار الكونترول».", "qcReviewer": "المدقّق", "qcReviewerDef": "منشئ المهمة", "qcPassedBy": "اعتمدها {n}", "qcWaitBy": "بانتظار تدقيق {n}", "qcNeedTip": "تحتاج كونترول من {n} قبل الإغلاق", "qcSendOpt": "إرسال للكونترول", "qcFilter": "الكونترول", "qcAll": "كل المهام", "qcOnly": "بحاجة كونترول", "qcWaiting": "بانتظار الكونترول", "qcNone": "بدون كونترول", "qcNotePh": "ملاحظات التدقيق (مطلوبة عند الإرجاع)", "qcPass": "اعتماد", "qcReturn": "إرجاع للتعديل", "qcNoteReq": "اكتب ما المطلوب تعديله قبل الإرجاع.", "qcPassedT": "تم اعتماد المهمة", "qcReturnedT": "أُعيدت المهمة للمهندس", "qcSent": "أُرسلت المهمة للكونترول", "qcForYou": "بانتظار كونترولك", "qcOpen": "فتح", "act_qc_on": "جعلها بحاجة كونترول", "act_qc_off": "ألغى شرط الكونترول", "act_qc_ok": "اعتمدها بعد الكونترول", "act_qc_back": "أعادها للتعديل", "act_reviewer": "جعل المدقّق", "act_reviewer_def": "جعل المدقّق منشئ المهمة"});
Object.assign(T.en,{"tabHome": "Home", "hmShortcuts": "Shortcuts", "hmHello": "Hello {n}", "hmSubLate": "You have {n} late tasks. Start with those today.", "hmSubLateTeam": "The team has {n} late tasks. Details per engineer below.", "hmSubOk": "Nothing late on your side. Have a good day!", "hmSubOkTeam": "Nothing late in the team right now.", "hmStartTimer": "Start timer", "hm_timer": "Log your working time", "hm_tasks": "Board, list, calendar, timeline", "hm_projects": "Projects, phases and budgets", "hm_files": "Drawings, contracts and links", "hm_notes": "Comment log", "hm_tags": "Project and task tags", "hm_leave": "Leave requests and holidays", "hm_team": "Members and roles", "hm_approvals": "Hours and leave", "hm_capacity": "Workload per engineer", "hm_reports": "Monthly hours", "hm_payroll": "Payroll and profitability", "hmActiveProj": "Active projects", "hmOpenTeam": "Open team tasks", "hmQcMine": "Waiting for your QC", "hmDone7": "Done in the last 7 days", "hmDelays": "Delays by engineer", "hmDelaysHint": "Late: past the due date and still to do or in progress. Tasks waiting for QC don’t count as the engineer’s delay.", "hmOpen": "Open", "hmLate": "Late", "hmWorst": "Worst delay", "hmWeek": "This week", "hmInQc": "In QC", "hmOnTime": "On time", "hmFree": "No open tasks", "hmOnLeave": "On leave", "hmDaysShort": "{n} d", "hmDaysLate": "{n} days late", "hmAllTasks": "All their tasks", "hmLateTotal": "{n} late", "hmNoLate": "Nothing late", "hmUnassignedLate": "Late, no engineer", "hmBarTip": "Open tasks split", "hmMyDelays": "My late tasks", "hmMyNoLate": "Great — nothing of yours is late.", "hmProjects": "Projects", "hmNext": "Next due", "hmUpTeam": "Due in the next 7 days", "hmUpMine": "My deadlines in the next 7 days", "hmNothingSoon": "Nothing due in the next 7 days.", "hmMore": "+{n} more", "qcShort": "QC", "qcOk": "Approved", "qcWait": "Waiting for QC", "qcNeeds": "Needs QC check", "qcHint": "The task can only be closed after it is checked and approved. When the engineer finishes it, it moves to “Waiting for QC”.", "qcReviewer": "Checker", "qcReviewerDef": "Whoever created the task", "qcPassedBy": "Approved by {n}", "qcWaitBy": "Waiting for {n} to check", "qcNeedTip": "Needs a QC check by {n} before closing", "qcSendOpt": "Send for QC", "qcFilter": "QC", "qcAll": "All tasks", "qcOnly": "Needs QC", "qcWaiting": "Waiting for QC", "qcNone": "No QC", "qcNotePh": "Check notes (required when returning)", "qcPass": "Approve", "qcReturn": "Return for changes", "qcNoteReq": "Write what needs changing before returning it.", "qcPassedT": "Task approved", "qcReturnedT": "Task returned to the engineer", "qcSent": "Task sent for QC", "qcForYou": "Waiting for your QC", "qcOpen": "Open", "act_qc_on": "made it need a QC check", "act_qc_off": "removed the QC check", "act_qc_ok": "approved it after QC", "act_qc_back": "returned it for changes", "act_reviewer": "set the checker to", "act_reviewer_def": "set the checker to the task creator"});
/* v2.8 files text */
Object.assign(T.ar,{"tabFiles": "الملفات والروابط", "filesSub": "المخططات والعقود والتقارير وروابط ACC لكل مشروع في مكان واحد.", "projectFiles": "ملفات وروابط المشروع", "filesHint": "يراها كل الفريق. الحذف لمن أضافها أو للـAdmin.", "dropFiles": "اسحب الملفات هنا أو اضغط للاختيار", "fileTypes": "PDF، DWG، IFC، RVT، NWD، Excel، Word، صور، ZIP", "maxSize": "الحد الأقصى", "linkTitlePh": "اسم الرابط (اختياري)", "addLink": "إضافة رابط", "category": "التصنيف", "noFiles": "لا ملفات أو روابط بعد.", "noFilesSub": "ارفع أول ملف أو أضف رابطاً من الأعلى.", "fc_drawings": "مخططات", "fc_models": "نماذج BIM", "fc_contracts": "عقود ومالية", "fc_reports": "تقارير", "fc_mail": "مراسلات", "fc_other": "أخرى", "download": "تنزيل", "fileNotePh": "ملاحظة (اختياري)", "fileTypeErr": "نوع الملف غير مسموح.", "fileTooBig": "الملف أكبر من الحد المسموح.", "badUrl": "اكتب رابطاً يبدأ بـ https://", "linkAdded": "تمت إضافة الرابط", "uploadFail": "تعذّر رفع الملف. حاول مجدداً.", "uploadDirErr": "لا يمكن إنشاء مجلد الملفات على الخادم. راجع صلاحيات المجلد.", "filesBtn": "الملفات والروابط"});
Object.assign(T.en,{"tabFiles": "Files & links", "filesSub": "Drawings, contracts, reports and ACC links for each project in one place.", "projectFiles": "Project files & links", "filesHint": "The whole team can see them. Whoever added an item, or an Admin, can delete it.", "dropFiles": "Drop files here or click to choose", "fileTypes": "PDF, DWG, IFC, RVT, NWD, Excel, Word, images, ZIP", "maxSize": "Max", "linkTitlePh": "Link name (optional)", "addLink": "Add link", "category": "Category", "noFiles": "No files or links yet.", "noFilesSub": "Upload the first file or add a link above.", "fc_drawings": "Drawings", "fc_models": "BIM models", "fc_contracts": "Contracts & finance", "fc_reports": "Reports", "fc_mail": "Correspondence", "fc_other": "Other", "download": "Download", "fileNotePh": "Note (optional)", "fileTypeErr": "This file type isn’t allowed.", "fileTooBig": "The file is larger than the limit.", "badUrl": "Enter a link that starts with https://", "linkAdded": "Link added", "uploadFail": "Couldn’t upload the file. Try again.", "uploadDirErr": "The server can’t create the files folder. Check the folder permissions.", "filesBtn": "Files & links"});
/* v2.7 notes text */
Object.assign(T.ar,{"tabNotes": "الملاحظات", "notesSub": "كل التعليقات على المشاريع والمهام في مكان واحد. اختر مشروعاً من اليمين لترى ملاحظاته وملاحظات مهامه.", "openNotes": "عرض التعليقات", "addNote": "إضافة تعليق", "projectNote": "على المشروع", "projectLog": "ملاحظات المشروع", "projectLogHint": "تشمل ملاحظات المشروع نفسه وتعليقات مهامه.", "addProjectNote": "اكتب ملاحظة على المشروع…", "noProjectNotes": "لا ملاحظات على هذا المشروع بعد.", "ctrlEnter": "Ctrl + Enter للإرسال", "noteSaved": "تمت إضافة الملاحظة", "openTask": "فتح المهمة", "byProject": "حسب المشروع", "ownVsTasks": "المشروع · المهام", "projectNotes": "ملاحظات المشاريع", "taskNotes": "تعليقات المهام", "noNotesYet": "لا ملاحظات بعد.", "notesEmptySub": "اكتب أول ملاحظة من الأعلى، أو من زر التعليق على أي مهمة أو مشروع.", "noteOn": "على", "onProjectItself": "— المشروع نفسه —", "writeNote": "اكتب الملاحظة…", "addNoteBtn": "إضافة الملاحظة", "allNotes": "كل الملاحظات", "wholeProject": "كل المشروع", "loadMore": "عرض المزيد", "lastNote": "آخر ملاحظة"});
Object.assign(T.en,{"tabNotes": "Notes", "notesSub": "Every comment on projects and tasks in one place. Pick a project on the side to see its notes and its tasks’ comments.", "openNotes": "Show comments", "addNote": "Add a comment", "projectNote": "On the project", "projectLog": "Project notes", "projectLogHint": "Includes notes on the project itself and comments on its tasks.", "addProjectNote": "Write a note on the project…", "noProjectNotes": "No notes on this project yet.", "ctrlEnter": "Ctrl + Enter to send", "noteSaved": "Note added", "openTask": "Open task", "byProject": "By project", "ownVsTasks": "project · tasks", "projectNotes": "Project notes", "taskNotes": "Task comments", "noNotesYet": "No notes yet.", "notesEmptySub": "Write the first note above, or use the comment button on any task or project.", "noteOn": "On", "onProjectItself": "— The project itself —", "writeNote": "Write the note…", "addNoteBtn": "Add note", "allNotes": "All notes", "wholeProject": "Whole project", "loadMore": "Load more", "lastNote": "Last note"});
/* v2.6 tags page text */
Object.assign(T.ar,{"tabTags": "الوسوم", "projTags": "وسوم المشاريع", "taskTags": "وسوم المهام", "newProjTagPh": "وسم مشروع جديد، مثلاً: السعودية", "newTaskTagPh": "وسم مهمة جديد، مثلاً: عاجل", "projTagsHint": "للبلد، والعميل، ونوع المشروع. تظهر على بطاقات المشاريع، وفلترة المهام بها تُظهر مهام تلك المشاريع.", "taskTagsHint": "لحالة المهمة ونوع العمل، مثل: عاجل، بانتظار العميل، LOD 400.", "tagsPageSub": "وسوم المشاريع ووسوم المهام منفصلة: كل نوع يظهر فقط في نموذجه وعلى عناصره.", "tagName": "اسم الوسم", "nProjects": "مشاريع", "nTasks": "مهام", "manageTags": "إدارة الوسوم"});
Object.assign(T.en,{"tabTags": "Tags", "projTags": "Project tags", "taskTags": "Task tags", "newProjTagPh": "New project tag, e.g. KSA", "newTaskTagPh": "New task tag, e.g. Urgent", "projTagsHint": "For country, client and project type. Shown on project cards; filtering tasks by one shows the tasks of those projects.", "taskTagsHint": "For the state or kind of work, e.g. Urgent, Waiting for client, LOD 400.", "tagsPageSub": "Project tags and task tags are separate: each kind appears only in its own form and on its own items.", "tagName": "Tag name", "nProjects": "projects", "nTasks": "tasks", "manageTags": "Manage tags"});
/* v2.5 sidebar and tags text */
Object.assign(T.ar,{"menu": "القائمة", "collapseSide": "طيّ القائمة", "expandSide": "توسيع القائمة", "secWork": "العمل", "secTeam": "الفريق", "secFin": "التقارير والمالية", "tags": "الوسوم", "noTagsYet": "لا توجد وسوم بعد.", "clearTags": "مسح الفلتر", "manageTags": "إدارة الوسوم", "newTagPh": "وسم جديد، مثلاً: السعودية أو عاجل", "tagsHint": "الوسوم مشتركة بين المشاريع والمهام. فلترة المهام بوسم تُظهر أيضاً مهام المشاريع التي تحمل هذا الوسم.", "noMatch": "لا توجد نتائج لهذا الفلتر.", "tagExists": "يوجد وسم بهذا الاسم."});
Object.assign(T.en,{"menu": "Menu", "collapseSide": "Collapse menu", "expandSide": "Expand menu", "secWork": "Work", "secTeam": "Team", "secFin": "Reports & finance", "tags": "Tags", "noTagsYet": "No tags yet.", "clearTags": "Clear filter", "manageTags": "Manage tags", "newTagPh": "New tag, e.g. KSA or Urgent", "tagsHint": "Tags are shared by projects and tasks. Filtering tasks by a tag also shows tasks of projects that carry it.", "noMatch": "Nothing matches this filter.", "tagExists": "A tag with this name already exists."});
/* v2.4 roles text */
Object.assign(T.ar,{"roleAdmin": "Admin", "roleLeadN": "قائد فريق", "roleAcc": "محاسب", "roleEng": "مهندس", "employeeRole": "مهندس", "owner": "Admin", "adminHint": "كل الصلاحيات", "accHint": "الرواتب والتقارير والمحاسبة", "engHint": "وقته ومهامه وإجازاته", "payPrivate": "يرى هذه الصفحة Admin والمحاسب فقط، والخادم يرفض أي طلب لبيانات الرواتب من غيرهما.", "finOnly": "Admin والمحاسب", "permsTitle": "الصلاحيات", "permsNote": "لا يمكنك تغيير دورك بنفسك، حتى يبقى دائماً Admin واحد على الأقل.", "pm_time": "تسجيل الوقت وطلب الإجازة", "pm_myTasks": "تغيير حالة مهامه والمهام الفرعية", "pm_create": "إنشاء المشاريع والمهام", "pm_approve": "اعتماد الساعات والموافقة الأولى على الإجازات", "pm_finalLeave": "الموافقة النهائية على الإجازات", "pm_reports": "تقارير الفريق كاملة وتصدير المحاسبة", "pm_pay": "الرواتب وأسعار الصرف والقسائم", "pm_profit": "قيمة العقود وربحية المشاريع", "pm_team": "إضافة الموظفين وتحديد أدوارهم", "pm_hol": "العطل الرسمية والتذكيرات", "cantSelf": "لا يمكنك تغيير دورك أو إيقاف حسابك بنفسك."});
Object.assign(T.en,{"roleAdmin": "Admin", "roleLeadN": "Team Leader", "roleAcc": "Accountant", "roleEng": "Engineer", "employeeRole": "Engineer", "owner": "Admin", "adminHint": "Full access", "accHint": "Payroll, reports and accounting", "engHint": "Own time, tasks and leave", "payPrivate": "Only Admins and the accountant can see this page. The server refuses payroll requests from anyone else.", "finOnly": "Admin & accountant", "permsTitle": "Permissions", "permsNote": "You can’t change your own role, so there is always at least one Admin.", "pm_time": "Log time and request leave", "pm_myTasks": "Update own tasks and subtasks", "pm_create": "Create projects and tasks", "pm_approve": "Approve timesheets and first leave approval", "pm_finalLeave": "Final leave approval", "pm_reports": "Full team reports and accounting export", "pm_pay": "Payroll, exchange rates and payslips", "pm_profit": "Contract values and project profitability", "pm_team": "Add team members and set their roles", "pm_hol": "Public holidays and reminders", "cantSelf": "You can’t change your own role or switch off your own account."});
/* v2.3 workspace text */
Object.assign(T.ar,{"vMine": "مهامي", "vBoard": "لوحة", "vList": "قائمة", "vCal": "تقويم", "vTl": "مخطط زمني", "startDate": "تاريخ البدء", "subtasks": "المهام الفرعية", "addSub": "أضف مهمة فرعية واضغط Enter…", "add": "إضافة", "noSubs": "لا مهام فرعية بعد.", "activity": "سجل النشاط", "noActivity": "لا نشاط مسجّل بعد.", "act_created": "أنشأ المهمة", "act_status": "غيّر الحالة إلى", "act_assign": "أسندها إلى", "act_unassign": "ألغى الإسناد", "act_due": "غيّر موعد التسليم إلى", "act_due_clear": "أزال موعد التسليم", "act_start": "غيّر تاريخ البدء إلى", "act_start_clear": "أزال تاريخ البدء", "act_priority": "غيّر الأولوية إلى", "act_title": "غيّر العنوان إلى", "act_sub_done": "أنجز", "act_sub_open": "أعاد فتح", "overdue": "متأخرة", "dueToday": "موعدها اليوم", "thisWeek": "خلال 7 أيام", "later": "لاحقاً", "noDate": "بدون موعد", "waitingReview": "بانتظار مراجعتك", "openTasks": "مهام مفتوحة", "allClear": "لا مهام مفتوحة مسندة إليك.", "allClearSub": "عندما يسند إليك قائد الفريق مهمة، تظهر هنا مرتبة حسب موعد التسليم.", "startTimerOn": "ابدأ المؤقت على هذه المهمة", "hideDone": "إخفاء المنجزة", "noDates": "مهام بلا تواريخ لا تظهر هنا: {n}", "boardHint": "اسحب البطاقة إلى عمود آخر لتغيير حالتها.", "calHint": "اسحب المهمة إلى يوم آخر لتغيير موعدها.", "tlHint": "اسحب الشريط لنقل المهمة، واسحب طرفه لتغيير موعد التسليم.", "moved": "تم تحديث الحالة", "datesChanged": "تم تغيير التواريخ", "tooManySubs": "وصلت للحد الأقصى: 100 مهمة فرعية."});
Object.assign(T.en,{"vMine": "My work", "vBoard": "Board", "vList": "List", "vCal": "Calendar", "vTl": "Timeline", "startDate": "Start date", "subtasks": "Subtasks", "addSub": "Add a subtask and press Enter…", "add": "Add", "noSubs": "No subtasks yet.", "activity": "Activity", "noActivity": "No activity yet.", "act_created": "created the task", "act_status": "changed the status to", "act_assign": "assigned it to", "act_unassign": "removed the assignee", "act_due": "changed the due date to", "act_due_clear": "removed the due date", "act_start": "changed the start date to", "act_start_clear": "removed the start date", "act_priority": "changed the priority to", "act_title": "renamed it to", "act_sub_done": "completed", "act_sub_open": "reopened", "overdue": "Overdue", "dueToday": "Due today", "thisWeek": "Next 7 days", "later": "Later", "noDate": "No due date", "waitingReview": "Waiting for your review", "openTasks": "Open tasks", "allClear": "Nothing open is assigned to you.", "allClearSub": "When a team leader assigns you a task, it shows up here, sorted by due date.", "startTimerOn": "Start the timer on this task", "hideDone": "Hide done", "noDates": "Tasks without dates, not shown: {n}", "boardHint": "Drag a card to another column to change its status.", "calHint": "Drag a task to another day to move its dates.", "tlHint": "Drag a bar to move the task; drag its end to change the due date.", "moved": "Status updated", "datesChanged": "Dates changed", "tooManySubs": "Limit reached: 100 subtasks."});
let LANG='ar';
try{LANG=localStorage.getItem('tdesk-lang')||'ar'}catch(e){}
const t=k=>(T[LANG][k]??T.en[k]??k);
function applyLang(){document.documentElement.lang=LANG;document.documentElement.dir=LANG==='ar'?'rtl':'ltr';}
applyLang();

/* ---------- helpers ---------- */
const COUNTRIES={SY:'Asia/Damascus',EG:'Africa/Cairo',DE:'Europe/Berlin'};
const DISC=['ARC','STR','MEP','COORD','DOC','PM'];
const LODS=['100','200','300','350','400','500'];
const STATUSES=['todo','doing','review','done'];
/* Colour-blind-safe project colours (validated, fixed order); dark-mode steps live in themed(). */
const PCOLORS=['#2a78d6','#eb6834','#1baf7a','#eda100','#e87ba4','#008300','#6250d6','#e34948'];
const CURS=['EUR','USD','EGP','SYP'];
const $=(s,r=document)=>r.querySelector(s);
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const pad=n=>String(n).padStart(2,'0');
const ymOf=d=>d.getFullYear()+'-'+pad(d.getMonth()+1);
const dateKey=d=>`${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}`;
function shiftYm(ym,k){let[y,m]=ym.split('-').map(Number);m+=k;while(m<1){m+=12;y--}while(m>12){m-=12;y++}return y+'-'+pad(m)}
const loc=()=>LANG==='ar'?'ar-u-nu-latn':'en-GB';
function fmtYm(ym){const[y,m]=ym.split('-').map(Number);return new Date(y,m-1,1).toLocaleDateString(loc(),{month:'long',year:'numeric'})}
function fmtDay(k){const[y,m,d]=k.split('-').map(Number);return new Date(y,m-1,d).toLocaleDateString(loc(),{weekday:'long',day:'numeric',month:'long'})}
function fmtShort(k){if(!k)return'';const[y,m,d]=k.split('-').map(Number);return new Date(y,m-1,d).toLocaleDateString(loc(),{day:'numeric',month:'short'})}
const hhmm=ts=>{const d=new Date(ts);return pad(d.getHours())+':'+pad(d.getMinutes())};
const hm=min=>{min=Math.round(min||0);return Math.floor(min/60)+':'+pad(min%60)};
const h1=min=>((min||0)/60).toFixed(1);
const clock=ms=>{const s=Math.max(0,Math.floor(ms/1000));return pad(Math.floor(s/3600))+':'+pad(Math.floor(s%3600/60))+':'+pad(s%60)};
const pct=(a,b)=>b?Math.round(a/b*1000)/10:0;
function money(v,cur){try{return new Intl.NumberFormat(loc(),{style:'currency',currency:cur,maximumFractionDigits:cur==='SYP'?0:2}).format(v||0)}catch(e){return(v||0).toFixed(2)+' '+cur}}
const num=v=>{const n=parseFloat(String(v).replace(',','.'));return isFinite(n)?n:0};
const rid=()=>Date.now().toString(36)+Math.random().toString(36).slice(2,7);
const clone=o=>o==null?o:JSON.parse(JSON.stringify(o));
function initials(n){n=String(n||'').trim();if(!n)return'?';const p=n.split(/\s+/);return((p[0]||'')[0]+((p[1]||'')[0]||'')).toUpperCase()}
function colorFor(id){let h=0;for(const c of String(id))h=(h*31+c.charCodeAt(0))>>>0;return PCOLORS[h%PCOLORS.length]}
function localNow(cc){try{return new Date().toLocaleTimeString('en-GB',{timeZone:COUNTRIES[cc]||undefined,hour:'2-digit',minute:'2-digit'})}catch(e){return'--:--'}}

const srvNow=()=>Date.now()+(S.clockSkew||0);
/* ---------- state ---------- */
const now=new Date();
const S={uid:null,isOwner:false,ready:false,readOnly:false,me:null,csrf:'',screen:'loading',clockSkew:0,
 members:{},projects:{},tasks:{},entryDocs:{},leads:[],ownerUid:null,
 myMonth:{ym:ymOf(now),items:[],weeks:{},loaded:false},
 phases:{},phasesBy:{},team:{p:{},ph:{},t:{}},commentCounts:{},holidays:[],leaves:[],myWeeks:{},pending:0,admin:null,
 approvals:null,profit:null,cmts:{},holF:{country:'',year:now.getFullYear()},
 report:{},repYm:ymOf(now),pay:{fx:{},people:{}},payMonth:{ym:null,items:{}},
 tab:'home',arm:null,tf:{project:'',person:'',q:'',hideDone:false,tags:[],qc:''},tagsById:{},sideMini:false,subs:{},tv:null,calYm:ymOf(now),tlFrom:null,dragId:null,dragKind:'',skipClick:false,sel:{project:'',task:'',note:''}};
try{const tb=localStorage.getItem('tdesk-tab');if(tb)S.tab=tb}catch(e){}
try{if(!sessionStorage.getItem('tdesk-s')){S.tab='home';sessionStorage.setItem('tdesk-s','1')}}catch(e){}
try{const tv=localStorage.getItem('tdesk-tv');if(tv)S.tv=tv}catch(e){}
/* ---------- server ---------- */
class ApiErr extends Error{constructor(code,status){super(code);this.code=code;this.status=status}}
async function api(action,body,query){
 const url='api.php?a='+encodeURIComponent(action)+(query?'&'+new URLSearchParams(query).toString():'');
 const post=body!==undefined;let res;
 try{res=await fetch(url,{method:post?'POST':'GET',credentials:'same-origin',cache:'no-store',headers:post?{'Content-Type':'application/json','X-CSRF':S.csrf}:{},body:post?JSON.stringify(body):undefined})}
 catch(e){throw new ApiErr('network',0)}
 let data={};try{data=await res.json()}catch(e){}
 if(!res.ok){
  const code=data.error||'server_error';
  if(res.status===401&&action!=='login'&&S.screen!=='login'){S.screen='login';S.ready=false;closeModal();renderAll()}
  if(code==='must_change_password'&&S.screen!=='pw'){S.screen='pw';closeModal();renderAll()}
  throw new ApiErr(code,res.status);
 }
 return data;
}
const ERRMSG={bad_phone:'badPhone',bad_login:'badLogin',too_many_attempts:'tooMany',network:'netErr',forbidden:'forbiddenErr',project_has_entries:'projHasEntries',email_taken:'emailTaken',weak_password:'pwRule',bad_password:'badOldPw',same_password:'samePw',bad_email:'badEmail',bad_time:'errTime',too_long:'tooLong',project_closed:'projClosed',week_locked:'weekLockedMsg',timer_running:'timerRunningErr',already_approved:'alreadyApproved',future_week:'futureWeek',bad_range:'badRange',phase_has_entries:'phaseHasEntries',no_workdays:'noWorkdays',notice_too_short:'noticeErr',insufficient_balance:'balanceErr',no_workdays_in_range:'noWdRange',waiting_for_lead:'waitLeadErr',already_decided:'alreadyDecided',too_many:'tooManySubs',tag_exists:'tagExists',file_too_big:'fileTooBig',file_type:'fileTypeErr',upload_failed:'uploadFail',no_file:'uploadFail',bad_url:'badUrl',upload_dir:'uploadDirErr',qc_note_required:'qcNoteReq',tg_not_ready:'tg_not_ready_e',tg_failed:'tg_failed_e',tg_https:'tg_https_e',tg_not_linked:'tg_not_linked_e',not_your_team:'not_your_team_e',team_loop:'team_loop_e',invalid_lead:'invalid_lead_e',not_your_project:'not_your_project_e',client_has_projects:'client_has_projects_e',client_not_found:'client_not_found_e',role_in_use:'role_in_use_e',event_not_found:'event_not_found_e',ai_failed:'ai_failed_e',ai_bad_key:'ai_bad_key_e',ai_stt_missing:'ai_stt_missing_e',ai_mom_missing:'ai_mom_missing_e',audio_too_big:'audio_too_big_e',mom_no_text:'mom_no_text_e',mom_not_found:'mom_not_found_e'};
const errText=e=>t(ERRMSG[e&&e.code]||'saveFail');
function writeErr(e){console.error(e);if(e&&(e.status===401||e.code==='must_change_password'))return;toast(errText(e))}
async function guard(p,okMsg){try{const r=await p;if(okMsg)toast(okMsg);return r||true}catch(e){writeErr(e);return false}}
const blankE=()=>({running:null,totals:{p:{},t:{}}});
function myE(){return S.entryDocs[S.uid]||blankE()}
async function load(){
 const d=await api('bootstrap');
 S.csrf=d.csrf;S.me=d.me;S.uid=d.me.id;S.isOwner=d.me.role==='owner';S.isAcc=d.me.role==='accountant';S.P=new Set(d.me.perms||[]);S.isFin=S.P.has('finance');S.roles=d.roles||[];S.rolePerms=d.rolePerms||{};S.rolePermsDef=d.rolePermsDef||{};S.skills=d.skills||[];S.skillLv=d.skillLv||{};S.clockSkew=d.now-Date.now();
 const mem={};S.leads=[];S.ownerUid=null;
 for(const u of d.users){mem[u.id]={name:u.name,country:u.country,discipline:u.discipline,role:u.jobTitle,active:u.active,email:u.email||'',phone:u.phone||'',sysRole:u.role,dailyHours:u.dailyHours||8,notify:u.notify!==false,workDays:Array.isArray(u.workDays)&&u.workDays.length?u.workDays:[6,0,1,2,3,4],leadId:u.leadId||'',leaveAllowance:u.leaveAllowance??15,tg:!!u.tg,teamId:u.teamId||'',deleted:!!u.deleted,roleId:u.roleId||null,weeklyHours:u.weeklyHours||null};if(u.role==='lead')S.leads.push(u.id);if(u.role==='owner')S.ownerUid=u.id}
 S.members=mem;
 const pr={};for(const p of d.projects)pr[p.id]=Object.assign({},p,{_o:p.createdBy});S.projects=pr;
 const tk={};for(const x of d.tasks)tk[x.id]=Object.assign({},x,{_o:x.createdBy});S.tasks=tk;
 {const gr={};for(const g of d.groups||[])gr[g.id]=g;S.groups=gr;S.deps=d.deps||[]}
 {const tm={};for(const x of d.teams||[])tm[x.id]=x;S.teams=tm}
 {const cl={};for(const x of d.clients||[])cl[x.id]=x;S.clients=cl;S.upcoming=d.upcoming||[];S.push=d.push||{}}
 const tg={};for(const g of d.tags||[])tg[g.id]=g;S.tagsById=tg;S.tf.tags=S.tf.tags.filter(id=>tg[id]);
 const sb={};for(const x of d.subtasks||[])(sb[x.taskId]=sb[x.taskId]||[]).push(x);S.subs=sb;
 const ed={};for(const u of (S.P.has('see_all')?Object.keys(mem):[S.uid])){const tt=d.totals[u]||{};ed[u]={running:d.timers[u]||null,totals:{p:tt.p||{},t:tt.t||{}}}}
 S.entryDocs=ed;
 const ph={},pb={};for(const h of d.phases||[]){ph[h.id]=h;(pb[h.projectId]=pb[h.projectId]||[]).push(h)}S.phases=ph;S.phasesBy=pb;
 S.team=d.team||{p:{},ph:{},t:{}};S.commentCounts=d.comments||{};S.commentLast=d.commentLast||{};S.commentsP=d.commentsP||{};S.fileCounts=d.fileCounts||{};S.maxUpload=d.maxUpload||0;S.holidays=d.holidays||[];S.leaves=d.leaves||[];S.myWeeks=d.weeks||{};
 S.pending=d.pending||0;S.admin=d.admin||null;hcache={};
 {const nu=d.notifUnread||0;if(S.ready&&S.notifUnread!=null&&nu>S.notifUnread&&S.screen==='app')setTimeout(()=>toast(t('notifNew')),50);S.notifUnread=nu;S.tg=d.tg||{}}
 S.screen=d.me.mustChangePw?'pw':'app';S.ready=true;
}
async function loadMyMonth(ym){const d=await api('entries_month',undefined,{ym,mine:1});if(S.myMonth.ym===ym){S.myMonth.items=d.items[S.uid]||[];S.myMonth.weeks=(d.weeks||{})[S.uid]||{};S.myMonth.loaded=true}schedule()}
function setMyMonth(ym){S.myMonth={ym,items:[],weeks:{},loaded:false};loadMyMonth(ym).catch(writeErr);schedule()}
async function refresh(){
 try{await load()}catch(e){if(e.status!==401)console.warn(e);return}
 loadMyMonth(S.myMonth.ym).catch(()=>{});S.report={};S.approvals=null;S.profit=null;if(S.rp&&S.tab==='reports')rpLoad(true);if(S.isFin&&S.payMonth.ym)loadPay(S.payMonth.ym);schedule();
}
/* ---------- derived ---------- */
const memberName=uid=>(S.members[uid]&&S.members[uid].name)||(uid===S.uid?t('you'):'—');
const projList=(all)=>Object.entries(S.projects).map(([id,p])=>({...p,id})).filter(p=>all||p.status!=='closed').sort((a,b)=>((PPRIO_RANK[a.priority]??2)-(PPRIO_RANK[b.priority]??2))||String(a.code||a.name).localeCompare(String(b.code||b.name)));
const pColor=id=>themed((S.projects[id]&&S.projects[id].color)||'#7D8A95');
const pLabel=id=>{const p=S.projects[id];return p?(p.code?p.code+' · ':'')+p.name:'—'};
const isLead=()=>S.leads.includes(S.uid);
const teamAdmin=tid=>!!(tid&&S.teams[tid]&&S.teams[tid].administrative);
const isAdminUser=uid=>{uid=uid||S.uid;const m=S.members[uid]||{};return teamAdmin(m.teamId)||Object.values(S.teams).some(tm=>tm.administrative&&tm.leadId===uid)};
const canAddTasks=()=>allP()||isLead();
const canEditTask=x=>allP()||(isLead()&&(x._o===S.uid||(!!x.assignee&&myMembers().has(x.assignee))));
const canAddProjects=()=>allP()||isLead();
const canEditProject=p=>allP()||(isLead()&&p._o===S.uid);
function teamMinutes(kind,id){let m=0;for(const e of Object.values(S.entryDocs))m+=((e.totals||{})[kind]||{})[id]||0;return m}
const seesTeam=()=>pm('see_all')||allP()||isLead()||pm('approve');
const ROLE_KEY={owner:'roleAdmin',lead:'roleLeadN',accountant:'roleAcc',employee:'roleEng'};
const ROLE_PILL={owner:'acc',lead:'run',accountant:'ok',employee:'mute'};
const roleOf=uid=>(S.members[uid]||{}).sysRole||'employee';
const rolePill=r=>`<span class="pill ${ROLE_PILL[r]||'mute'}">${esc(t(ROLE_KEY[r]||'roleEng'))}</span>`;
/** Hours on a task/project: the whole team for the manager and team leaders, otherwise the viewer's own. */
function spentOn(kind,id){if(seesTeam())return(S.team[kind]||{})[id]||0;return((myE().totals||{})[kind]||{})[id]||0}
const phLabel=id=>(S.phases[id]&&S.phases[id].name)||'';
function phaseOptions(pid,sel){const list=S.phasesBy[pid]||[];return `<option value="">${esc(t('noPhase'))}</option>`+list.map(h=>`<option value="${esc(h.id)}"${h.id===sel?' selected':''}>${esc(h.name)}</option>`).join('')}
/* ---- calendar: weekends, holidays and leave per country ---- */
/* Company week: Saturday to Thursday; each person can have their own work days. */
const WEEK_ORDER=[6,0,1,2,3,4,5];
const utc=dk=>{const[y,m,d]=dk.split('-').map(Number);return new Date(Date.UTC(y,m-1,d))};
const addDays=(dk,n)=>{const x=utc(dk);x.setUTCDate(x.getUTCDate()+n);return x.toISOString().slice(0,10)};
const dowOf=dk=>utc(dk).getUTCDay();
function weekStartOf(dk){return addDays(dk,-((dowOf(dk)-6+7)%7))}
function monthRange(ym){const[y,m]=ym.split('-').map(Number);return[ym+'-01',new Date(Date.UTC(y,m,0)).toISOString().slice(0,10)]}
let hcache={};
function isHoliday(cc,dk){if(!hcache[cc]){hcache[cc]=new Set(S.holidays.filter(h=>h.country===cc).map(h=>h.day))}return hcache[cc].has(dk)}
function leaveOn(uid,dk){return S.leaves.find(l=>l.userId===uid&&l.status==='approved'&&dk>=l.start&&dk<=l.end)}
function isWorkday(uid,dk){const m=S.members[uid]||{};const cc=m.country||'DE';return (m.workDays||[6,0,1,2,3,4]).includes(dowOf(dk))&&!isHoliday(cc,dk)&&!leaveOn(uid,dk)}
function workdays(uid,from,to){let n=0;for(let d=from;d<=to;d=addDays(d,1))if(isWorkday(uid,d))n++;return n}
const dailyMin=uid=>{const m=S.members[uid]||{};const w=num(m.weeklyHours);const n=(m.workDays||[]).length||6;return (w?w/n:(num(m.dailyHours)||8))*60};
function expectedMin(uid,ym){const[a,b]=monthRange(ym);return workdays(uid,a,b)*dailyMin(uid)}
function weekStatus(weeks,ws){return (weeks&&weeks[ws])||null}
function stPill(st){const c={submitted:'warn',approved:'ok',rejected:'bad'}[st]||'mute';return `<span class="pill ${c}">${esc(t('st_'+(st||'open')))}</span>`}
function approvedMin(uid,items,weeks){const cc=(S.members[uid]||{}).country||'DE';let m=0;for(const e of items||[]){const w=(weeks||{})[weekStartOf(e.date,cc)];if(w&&w.status==='approved')m+=e.minutes}return m}
const fmtRange=(a,b)=>`${fmtShort(a)} – ${fmtShort(b)}`;
const linkList=txt=>String(txt||'').split(/\n/).filter(u=>/^https?:\/\//i.test(u)).map(u=>`<a href="${esc(u)}" target="_blank" rel="noopener noreferrer" class="lnk">${esc(u.replace(/^https?:\/\//,'').slice(0,60))}</a>`).join('');
function summarize(items){const byP={};let total=0;const days=new Set();for(const e of items||[]){byP[e.projectId]=(byP[e.projectId]||0)+e.minutes;total+=e.minutes;days.add(e.date)}return{byP,total,days:days.size,count:(items||[]).length}}
function avatar(uid,size){const n=memberName(uid);return `<span class="av" style="background:${colorFor(uid)}${size?`;width:${size}px;height:${size}px`:''}">${esc(initials(n))}</span>`}
function pChip(id){return `<span class="chip"><i class="sw" style="background:${esc(pColor(id))}"></i><span class="t" dir="auto">${esc(pLabel(id))}</span></span>`}
/* ---------- chrome ---------- */
function tabsFor(){const tabs=isAdminUser()?['profile','home','planner','projects']:['profile','home','timer','tasks','planner','projects'];if(seesClients())tabs.push('clients');tabs.push('files','company','notes','tags','leave','team');if(seesTeam())tabs.push('approvals','capacity');tabs.push('reports');if(S.isFin)tabs.push('payroll');return tabs}
const tabLabel={planner:'tabPlanner',clients:'tabClients',company:'tabCompany',profile:'tabProfile',org:'tabOrg',home:'tabHome',files:'tabFiles',notes:'tabNotes',tags:'tabTags',timer:'tabTimer',tasks:'tabTasks',projects:'tabProjects',leave:'tabLeave',team:'tabTeam',approvals:'tabApprovals',capacity:'tabCapacity',reports:'tabReports',payroll:'tabPayroll'};
/* ---------- v2.5: sidebar icons ---------- */
const svg=p=>`<svg class="ic" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${p}</svg>`;
const IC={
 planner:svg('<rect x="3.5" y="5" width="17" height="15.5" rx="2"/><path d="M3.5 9.5h17M8 3v4M16 3v4"/><path d="M8 13.5h3v3H8z"/>'),
 clients:svg('<path d="M4 20.5V7.5l6-3v16"/><path d="M10 9.5h10v11H4"/><path d="M13.5 13h3M13.5 16.5h3M6.5 10v.01M6.5 13.5v.01"/>'),
 company:svg('<path d="M3.5 7.5a2 2 0 0 1 2-2h4l2 2h7a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2z"/><path d="M12 11l1.3 2.6 2.7.4-2 1.9.5 2.7-2.5-1.3-2.5 1.3.5-2.7-2-1.9 2.7-.4z"/>'),
 org:svg('<rect x="9" y="3" width="6" height="4.5" rx="1"/><rect x="3" y="16.5" width="6" height="4.5" rx="1"/><rect x="15" y="16.5" width="6" height="4.5" rx="1"/><path d="M12 7.5v4.5M6 16.5V12h12v4.5"/>'),
 home:svg('<path d="M3.5 11l8.5-7 8.5 7"/><path d="M5.5 9.5v10h13v-10"/><path d="M10 19.5v-5h4v5"/>'),
 timer:svg('<circle cx="12" cy="13" r="8"/><path d="M12 9v4l2.5 2.5M9 2.5h6"/>'),
 tasks:svg('<rect x="3.5" y="3.5" width="17" height="17" rx="3"/><path d="M8 12.2l2.8 2.8L16 9.5"/>'),
 projects:svg('<path d="M3.5 7.5a2 2 0 0 1 2-2h3.8l2 2h7.2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2z"/>'),
 leave:svg('<path d="M12 3.5a8.5 8.5 0 0 1 8.5 8.5h-17A8.5 8.5 0 0 1 12 3.5z"/><path d="M12 12v6.5a2 2 0 0 1-4 0"/>'),
 team:svg('<circle cx="9" cy="8" r="3.3"/><path d="M2.8 19.5c.8-3.4 3.3-5.2 6.2-5.2s5.4 1.8 6.2 5.2"/><circle cx="17" cy="9" r="2.4"/><path d="M17 14.4c2.2 0 3.7 1.4 4.3 3.9"/>'),
 approvals:svg('<path d="M12 3l7.5 2.8v5.7c0 4.4-3.2 7.9-7.5 9-4.3-1.1-7.5-4.6-7.5-9V5.8z"/><path d="M9 12l2.2 2.2L15.3 10"/>'),
 capacity:svg('<path d="M4 17.5a8 8 0 1 1 16 0"/><path d="M12 17.5l3.6-5.4"/><path d="M4 20.5h16"/>'),
 reports:svg('<path d="M4 20h16M7 16.5v-5M12 16.5V7M17 16.5v-8"/>'),
 payroll:svg('<rect x="3.5" y="6" width="17" height="13" rx="2"/><path d="M3.5 10h17"/><path d="M15.5 14.5h2"/>'),
 menu:svg('<path d="M4 6.5h16M4 12h16M4 17.5h16"/>'),
 panel:svg('<rect x="3.5" y="4.5" width="17" height="15" rx="2"/><path d="M9.5 4.5v15"/>'),
 key:svg('<circle cx="8" cy="15" r="3.8"/><path d="M10.8 12.3L19 4.2M16 7.2l2.6 2.6"/>'),
 logout:svg('<path d="M14.5 4.5h3a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2h-3"/><path d="M9.5 8l-4 4 4 4M5.5 12h9.5"/>'),
 tag:svg('<path d="M3.5 12.2V4.5a1 1 0 0 1 1-1h7.7l8.3 8.3-8.7 8.7z"/><circle cx="8" cy="8" r="1.3"/>'),
 tags:svg('<path d="M3.5 12.2V4.5a1 1 0 0 1 1-1h7.7l8.3 8.3-8.7 8.7z"/><circle cx="8" cy="8" r="1.3"/>'),
 notes:svg('<path d="M4 5.5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H10l-4.5 4v-4H6a2 2 0 0 1-2-2z"/><path d="M8 8.5h8M8 12h5"/>'),
 files:svg('<path d="M20 11.5l-8.2 8.2a5 5 0 0 1-7.1-7.1l8.6-8.6a3.4 3.4 0 0 1 4.8 4.8l-8.6 8.6a1.7 1.7 0 0 1-2.4-2.4l7.9-7.9"/>'),
 gear:svg('<circle cx="12" cy="12" r="3"/><path d="M12 2.8v2.4M12 18.8v2.4M4.2 6.3l2 1.2M17.8 16.5l2 1.2M4.2 17.7l2-1.2M17.8 7.5l2-1.2"/>')
};
const NAV_GROUPS=[['secWork',['home','timer','tasks','planner','projects','clients','files','company','notes','tags']],['secTeam',['leave','team','approvals','capacity']],['secFin',['reports','payroll']]];
try{S.sideMini=localStorage.getItem('tdesk-mini')==='1'}catch(e){S.sideMini=false}
function setDrawer(open){document.body.classList.toggle('side-open',!!open);const sc=$('#scrim');if(sc)sc.hidden=!open}
function renderTop(){
 const app=S.screen==='app';
 document.body.classList.toggle('has-side',app);document.body.classList.toggle('side-mini',app&&!!S.sideMini);
 const r=app?myE().running:null;const me=S.members[S.uid];
 const lang=`<div class="lang" role="group" aria-label="Language"><button data-lang="ar" aria-pressed="${LANG==='ar'}">عربي</button><button data-lang="en" aria-pressed="${LANG==='en'}">EN</button></div>`;
 const brand=`<div class="brand"><span class="brand-m">${TV_MARK}</span><div class="brand-t"><span class="co">${esc(t('co'))}</span><h1>${esc(t('appName'))}</h1></div></div>`;
 $('#top').innerHTML=`${app?`<button class="icon-btn" data-act="menu" aria-label="${esc(t('menu'))}">${IC.menu}</button>`:''}${brand}
  <div class="top-actions">${app?bellBtn():''}${r?`<button class="run-pill" data-go="timer" aria-label="${esc(t('timerTitle'))}"><span class="dot"></span><span data-tick="${r.start}" dir="ltr">${clock(srvNow()-r.start)}</span></button>`:''}
   ${app?'':lang}${S.screen==='pw'?`<button class="top-btn" data-act="logout">${esc(t('signOut'))}</button>`:''}</div>`;
 if(!app){$('#side-h').innerHTML='';$('#side-run').innerHTML='';$('#side-f').innerHTML='';setDrawer(false);return}
 $('#side-h').innerHTML=`${brand}${bellBtn()}<button class="icon-btn side-col" data-act="side-toggle" aria-label="${esc(t(S.sideMini?'expandSide':'collapseSide'))}" title="${esc(t(S.sideMini?'expandSide':'collapseSide'))}">${IC.panel}</button>`;
 $('#side-run').innerHTML=r?`<button class="side-run" data-go="timer" title="${esc(pLabel(r.projectId))}"><span class="dot"></span><span class="lbl"><span class="clk" data-tick="${r.start}" dir="ltr">${clock(srvNow()-r.start)}</span><small>${esc(pLabel(r.projectId))}</small></span></button>`:'';
 $('#side-f').innerHTML=`<button type="button" class="me${S.tab==='profile'?' cur':''}" data-go="profile" title="${esc(t('tabProfile'))}" aria-label="${esc(t('tabProfile'))}">${avatar(S.uid,32)}<div class="lbl"><b>${esc(me?me.name:'')}</b><small>${esc(t(ROLE_KEY[(S.me||{}).role]||'roleEng'))}</small></div></button>
  <div class="side-acts">${lang}<button class="icon-btn" data-act="pw" aria-label="${esc(t('changePw'))}" title="${esc(t('changePw'))}">${IC.key}</button><button class="icon-btn" data-act="logout" aria-label="${esc(t('signOut'))}" title="${esc(t('signOut'))}">${IC.logout}</button></div>`;
}
function renderTabs(){
 if(S.tab==='org')S.tab='team';
 if(S.screen!=='app'){$('#tabs').innerHTML='';return}
 const tabs=tabsFor();if(!tabs.includes(S.tab))S.tab='home';
 $('#tabs').innerHTML=NAV_GROUPS.map(([sec,ks])=>{const items=ks.filter(k=>tabs.includes(k));if(!items.length)return'';
  return `<div class="nav-g"><div class="nav-sec">${esc(t(sec))}</div>${items.map(k=>{const lbl=t(tabLabel[k]);const cnt=k==='approvals'&&S.pending?S.pending:0;
   return `<button type="button" class="nav-i" data-tab="${k}"${S.tab===k?' aria-current="page"':''} title="${esc(lbl)}">${IC[k]}<span class="lbl">${esc(lbl)}</span>${cnt?`<span class="cnt">${cnt}</span>`:''}${k==='payroll'?'<span class="lock" aria-hidden="true">●</span>':''}</button>`}).join('')}</div>`}).join('');
}

/* ---------- v2.6: tags, split into project tags and task tags ---------- */
const TAG_COLORS=['#2F7FB5','#D08A1E','#3E9B6A','#8A5BC7','#C9466B','#2A9BA3','#7A8B2E','#B5652F','#4F6BD8','#6B7785'];
const tagList=scope=>Object.values(S.tagsById).filter(g=>!scope||g.scope===scope).sort((a,b)=>a.name.localeCompare(b.name));
const canTag=()=>!S.readOnly&&(allP()||isLead());
const canEditTag=g=>!S.readOnly&&(allP()||(isLead()&&g.createdBy===S.uid));
/* Project tags are square-cornered with a folder mark; task tags are round pills with a dot. */
function tagChip(id){const g=S.tagsById[id];if(!g)return'';return `<span class="tg tg-${g.scope}" style="--tc:${esc(g.color)}" dir="auto">${esc(g.name)}</span>`}
const tagChips=ids=>(ids||[]).filter(id=>S.tagsById[id]).map(tagChip).join('');
const selOf=scope=>S.tf.tags.filter(id=>S.tagsById[id]&&S.tagsById[id].scope===scope);
/** Within one kind any selected tag matches; project tags and task tags must both match when both are chosen. */
function tagHitTask(x){const P=selOf('project'),K=selOf('task');const p=S.projects[x.projectId]||{};
 return (!P.length||P.some(id=>(p.tags||[]).includes(id)))&&(!K.length||K.some(id=>(x.tags||[]).includes(id)))}
function tagHitProject(p){const P=selOf('project');return !P.length||P.some(id=>(p.tags||[]).includes(id))}
function tagGroup(scope){const list=tagList(scope);if(!list.length)return'';const sel=S.tf.tags;
 return `<span class="tagbar-g"><span class="tagbar-l">${scope==='project'?IC.projects:IC.tag}<span>${esc(t(scope==='project'?'projTags':'taskTags'))}</span></span>
  ${list.map(g=>`<button type="button" class="tg tg-${scope} tg-f" style="--tc:${esc(g.color)}" data-act="tf-tag" data-id="${esc(g.id)}" aria-pressed="${sel.includes(g.id)}" dir="auto">${esc(g.name)}</button>`).join('')}</span>`}
/** kind 'task': both groups (project tags narrow by project); kind 'project': project tags only. */
function tagBar(kind){
 const groups=(kind==='project'?['project']:['project','task']).map(tagGroup).filter(Boolean);
 if(!groups.length&&!canTag())return'';
 const active=kind==='project'?selOf('project').length:S.tf.tags.length;
 return `<div class="tagbar">${groups.join('')||`<span class="muted" style="font-size:12.5px">${esc(t('noTagsYet'))}</span>`}
  <span class="tagbar-a">${active?`<button type="button" class="btn ghost sm" data-act="tf-tag-clear">${esc(t('clearTags'))}</button>`:''}
  ${canTag()?`<button type="button" class="btn ghost sm" data-go="tags">${IC.gear}<span>${esc(t('manageTags'))}</span></button>`:''}</span></div>`;
}
/* picker inside the task and project forms */
function tagPickChips(selected,scope){const sel=new Set(selected||[]);
 return tagList(scope).map(g=>`<button type="button" class="tg tg-${scope} tg-f" style="--tc:${esc(g.color)}" data-act="tg-toggle" data-id="${esc(g.id)}" aria-pressed="${sel.has(g.id)}" dir="auto">${esc(g.name)}</button>`).join('')||`<span class="muted" style="font-size:12.5px">${esc(t('noTagsYet'))}</span>`}
function tagPicker(selected,scope){
 return `<div class="f"><span class="tp-l">${esc(t(scope==='project'?'projTags':'taskTags'))}</span><div class="tagpick" id="tg-pick" data-scope="${scope}">${tagPickChips(selected,scope)}</div>
  ${canTag()?`<div class="tp-add"><input class="in" id="tg-new" maxlength="40" placeholder="${esc(t(scope==='project'?'newProjTagPh':'newTaskTagPh'))}" autocomplete="off"><button type="button" class="btn sm" data-act="tg-create">+ ${esc(t('add'))}</button></div>`:''}</div>`;
}
const pickedTags=()=>[...document.querySelectorAll('#tg-pick [aria-pressed="true"]')].map(b=>b.dataset.id);
async function createTag(name,scope,color){
 name=String(name||'').trim().slice(0,40);if(!name)return null;
 const found=tagList(scope).find(g=>g.name.toLowerCase()===name.toLowerCase());if(found)return found.id;
 color=color||TAG_COLORS[tagList(scope).length%TAG_COLORS.length];
 try{const r=await api('tag_save',{name,color,scope});S.tagsById[r.id]=S.tagsById[r.id]||{id:r.id,name,color,scope,createdBy:S.uid};return r.id}catch(e){writeErr(e);return null}
}
async function tagFromForm(){
 const inp=$('#tg-new'),box=$('#tg-pick');if(!inp||!box)return;const scope=box.dataset.scope;
 const id=await createTag(inp.value,scope);if(!id)return;
 const keep=new Set(pickedTags());keep.add(id);inp.value='';box.innerHTML=tagPickChips([...keep],scope);inp.focus();
}
async function saveTag(id,patch){const g=S.tagsById[id];if(!g)return;const nx=Object.assign({},g,patch);if(!nx.name.trim())return;
 try{await api('tag_save',{id,name:nx.name.trim(),color:nx.color});Object.assign(g,{name:nx.name.trim(),color:nx.color});schedule();return true}catch(e){writeErr(e);return false}}
function tagUse(g){if(g.scope==='project')return Object.values(S.projects).filter(p=>(p.tags||[]).includes(g.id)).length;
 return Object.values(S.tasks).filter(x=>(x.tags||[]).includes(g.id)).length}

/* ---------- tags page ---------- */
S.tagNew=S.tagNew||{project:TAG_COLORS[0],task:TAG_COLORS[3]};
function swatches(act,id,cur,disabled){return `<div class="tm-cols" role="group" aria-label="${esc(t('color'))}">${TAG_COLORS.map(c=>`<button type="button" class="tm-c" style="background:${c}" data-act="${act}" data-id="${esc(id)}" data-c="${c}" aria-pressed="${c===cur}" aria-label="${c}"${disabled?' disabled':''}></button>`).join('')}</div>`}
function tagSection(scope){
 const list=tagList(scope);const isP=scope==='project';
 const rows=list.map(g=>{const ed=canEditTag(g);const n=tagUse(g);return `<div class="tgx-row" data-id="${esc(g.id)}">
   <span class="tgx-prev">${tagChip(g.id)}</span>
   ${ed?`<input class="in tgx-name" id="tgx-n-${esc(g.id)}" maxlength="40" value="${esc(g.name)}" aria-label="${esc(t('tagName'))}">`:`<span class="tgx-ro">${esc(g.name)}</span>`}
   ${swatches('tgx-color',g.id,g.color,!ed)}
   <button type="button" class="btn ghost sm tgx-use" data-act="tgx-open" data-id="${esc(g.id)}"${n?'':' disabled'}>${n} ${esc(t(isP?'nProjects':'nTasks'))}</button>
   ${S.isOwner?`<button type="button" class="btn ghost sm danger" data-act="tgx-del" data-id="${esc(g.id)}">${esc(t('delete'))}</button>`:'<span></span>'}
  </div>`}).join('');
 return `<section class="sheet tgx tgx-${scope}"><div class="sheet-h"><h3><span class="tgx-ic">${isP?IC.projects:IC.tag}</span>${esc(t(isP?'projTags':'taskTags'))}</h3><span class="code">${list.length}</span></div>
  <div class="sheet-b stack" style="gap:12px"><div class="muted" style="font-size:12.5px">${esc(t(isP?'projTagsHint':'taskTagsHint'))}</div>
  ${canTag()?`<form class="tgx-add" data-scope="${scope}"><input class="in" id="tgx-new-${scope}" maxlength="40" required placeholder="${esc(t(isP?'newProjTagPh':'newTaskTagPh'))}" autocomplete="off">${swatches('tgx-newc',scope,S.tagNew[scope],false)}<button type="submit" class="btn primary sm">+ ${esc(t('add'))}</button></form>`:''}</div>
  <div class="tgx-list">${rows||`<div class="empty"><span>${esc(t('noTagsYet'))}</span></div>`}</div></section>`;
}
function tagsHtml(){
 return `<div class="view-head"><h2>${esc(t('tabTags'))}</h2><div class="sub">${esc(t('tagsPageSub'))}</div></div>
 <div class="grid2 tgx-grid">${tagSection('project')}${tagSection('task')}</div>`;
}
async function addTagFromPage(form){
 const scope=form.dataset.scope;const inp=form.querySelector('input');const name=inp.value.trim();if(!name)return;
 if(tagList(scope).some(g=>g.name.toLowerCase()===name.toLowerCase())){toast(t('tagExists'));return}
 const id=await createTag(name,scope,S.tagNew[scope]);if(id){toast(t('saved'));renderMainNow();const n=$('#tgx-new-'+scope);if(n)n.focus()}
}
function openTagged(id){const g=S.tagsById[id];if(!g)return;S.tf.tags=[id];
 if(g.scope==='project'){S.tab='projects'}else{S.tab='tasks';if(!S.tv||S.tv==='mywork')S.tv='list'}
 try{localStorage.setItem('tdesk-tab',S.tab)}catch(e){}renderTabs();renderMainNow();window.scrollTo(0,0)}

let pendingRender=false;
function editingInMain(){const a=document.activeElement;return a&&$('#main').contains(a)&&/^(INPUT|TEXTAREA|SELECT)$/.test(a.tagName)}
function renderMain(){if(editingInMain()){pendingRender=true;return}pendingRender=false;$('#main').innerHTML=viewHtml();afterRender()}
function afterRender(){if(S.tab==='leave')updateLeaveForm();if(S.tab==='tasks'&&S.tv==='plan')plCenter();if((S.tab==='org'||S.tab==='team')&&S.orgView==='chart')ocCenter()}
document.addEventListener('focusout',()=>setTimeout(()=>{if(pendingRender&&!editingInMain())renderMain()},220));
function renderAll(){renderTop();renderTabs();renderMain()}
let rq=false;function schedule(){if(rq)return;rq=true;requestAnimationFrame(()=>{rq=false;renderTop();renderTabs();renderMain()})}

function viewHtml(){
 if(S.screen==='login')return loginHtml();
 if(S.screen==='pw')return pwHtml();
 if(S.screen==='offline')return `<div class="empty" style="padding-top:60px"><h4>${esc(t('netErr'))}</h4><button class="btn" data-act="retry">↻ ${esc(t('retry'))}</button></div>`;
 if(!S.ready)return `<div class="loading">${esc(t('loading'))}</div>`;
 const ro=S.readOnly?`<div class="note-box" style="margin-bottom:16px"><b>${esc(t('noAccess'))}</b></div>`:'';
 switch(S.tab){
  case 'home':return ro+homeHtml();
  case 'planner':return ro+plannerHtml();
  case 'clients':return seesClients()?ro+clientsHtml():'';
  case 'company':return ro+companyHtml();
  case 'profile':return profileHtml();
  case 'org':return ro+orgHtml();
  case 'tasks':return ro+tasksHtml();
  case 'tags':return ro+tagsHtml();
  case 'notes':return ro+notesHtml();
  case 'files':return ro+filesHtml();
  case 'projects':return ro+projectsHtml();
  case 'team':return ro+orgHtml();
  case 'reports':return ro+reportsHtml();
  case 'payroll':return S.isFin?payrollHtml():'';
  case 'leave':return leaveHtml();
  case 'approvals':return seesTeam()?approvalsHtml():'';
  case 'capacity':return seesTeam()?capacityHtml():'';
  default:return ro+timerHtml();
 }
}

/* ---------- sign-in screens ---------- */
function loginHtml(){
 return `<div class="login-card sheet"><div class="sheet-b stack"><div class="login-logo"><img class="tv-l" src="assets/tectova-logo.png" alt="TECTOVA"><img class="tv-d" src="assets/tectova-logo-dark.png" alt="TECTOVA"></div>
  <div><div class="eyebrow">${esc(t('co'))}</div><h2 style="font-family:var(--f-display);margin:.2em 0 0;font-weight:600">${esc(t('signIn'))}</h2></div>
  <form id="login-form" autocomplete="on">
   <label class="f">${esc(t('email'))}<input class="in" type="email" id="lg-email" required autocomplete="username" dir="ltr"></label>
   <label class="f">${esc(t('password'))}<input class="in" type="password" id="lg-pass" required autocomplete="current-password" dir="ltr"></label>
   <div class="err" id="lg-err" hidden></div>
   <div><button class="btn primary" type="submit">${esc(t('signIn'))}</button></div>
  </form></div></div>`;
}
function pwFields(withOld){return `${withOld?`<label class="f">${esc(t('oldPw'))}<input class="in" type="password" id="pw-old" required autocomplete="current-password" dir="ltr"></label>`:''}
   <label class="f">${esc(t('newPw'))}<input class="in" type="password" id="pw-new" required minlength="8" autocomplete="new-password" dir="ltr"></label>
   <label class="f">${esc(t('newPw2'))}<input class="in" type="password" id="pw-new2" required minlength="8" autocomplete="new-password" dir="ltr"></label>
   <div class="muted" style="font-size:12.5px">${esc(t('pwRule'))}</div>`}
function pwHtml(){
 return `<div class="login-card sheet"><div class="sheet-b stack">
  <div><h2 style="font-family:var(--f-display);margin:0 0 .2em;font-weight:600">${esc(t('mustChangeTitle'))}</h2><p class="muted" style="margin:0">${esc(t('mustChangeSub'))}</p></div>
  <form id="pw-form">${pwFields(true)}<div class="err" id="pwf-err" hidden></div><div><button class="btn primary" type="submit">${esc(t('save'))}</button></div></form>
 </div></div>`;
}
/* ---------- views ---------- */
function projOptions(sel,all){return `<option value="">${esc(t('chooseProject'))}</option>`+projList(all).map(p=>`<option value="${esc(p.id)}"${p.id===sel?' selected':''}>${esc((p.code?p.code+' · ':'')+p.name)}</option>`).join('')}
function taskOptions(pid,sel){const ts=Object.entries(S.tasks).filter(([id,x])=>x.projectId===pid&&(x.status!=='done'||id===sel));ts.sort((a,b)=>(b[1].assignee===S.uid)-(a[1].assignee===S.uid));return `<option value="">${esc(t('noTask'))}</option>`+ts.map(([id,x])=>`<option value="${esc(id)}"${id===sel?' selected':''}>${esc(x.title)}${x.assignee===S.uid?' ★':''}</option>`).join('')}
function timerHtml(){
 const r=myE().running;const ym=S.myMonth.ym;const items=S.myMonth.items;const sm=summarize(items);
 const todayK=dateKey(new Date());const todayMin=items.filter(e=>e.date===todayK).reduce((a,e)=>a+e.minutes,0);
 const timer=r?`
  <div class="timer on">
   <div class="eyebrow">${esc(t('runningSince'))} <span dir="ltr">${hhmm(r.start)}</span></div>
   <div class="clock" data-tick="${r.start}">${clock(srvNow()-r.start)}</div>
   <div class="timer-meta">${pChip(r.projectId)}${r.phaseId&&phLabel(r.phaseId)?`<span class="badge">${esc(phLabel(r.phaseId))}</span>`:''}${r.taskId&&S.tasks[r.taskId]?`<span class="chip"><span class="t">${esc(S.tasks[r.taskId].title)}</span></span>`:''}${r.note?`<span>${esc(r.note)}</span>`:''}</div>
   <div><button class="btn run" data-act="stop" ${S.readOnly?'disabled':''}>■ ${esc(t('stop'))}</button></div>
  </div>`:`
  <div class="timer">
   <div class="clock" style="color:var(--ink-3)">00:00:00</div>
   <div class="frow">
    <label class="f">${esc(t('project'))}<select class="in" id="tm-project">${projOptions(S.sel.project)}</select></label>
    <label class="f">${esc(t('task'))}<select class="in" id="tm-task">${taskOptions(S.sel.project,S.sel.task)}</select></label>
    <label class="f" id="tm-phase-wrap"${(S.phasesBy[S.sel.project]||[]).length?'':' hidden'}>${esc(t('phase'))}<select class="in" id="tm-phase">${phaseOptions(S.sel.project,S.sel.phase)}</select></label>
   </div>
   <label class="f">${esc(t('note'))}<input class="in" id="tm-note" maxlength="200" placeholder="${esc(t('notePh'))}" value="${esc(S.sel.note)}"></label>
   <div style="display:flex;gap:8px;flex-wrap:wrap"><button class="btn primary" data-act="start" ${S.readOnly||!projList().length?'disabled':''}>▶ ${esc(t('start'))}</button><button class="btn" data-act="manual" ${S.readOnly||!projList().length?'disabled':''}>+ ${esc(t('manual'))}</button></div>
   ${!projList().length?`<div class="muted" style="font-size:13px">${esc(canAddProjects()?t('noProjectsOwner'):t('noProjectsEmp'))}</div>`:''}
  </div>`;
 const byP=Object.entries(sm.byP).sort((a,b)=>b[1]-a[1]);
 const split=sm.total?`<div class="bar" style="height:12px">${byP.map(([p,m])=>`<i style="width:${pct(m,sm.total)}%;background:${esc(pColor(p))}" title="${esc(pLabel(p))}"></i>`).join('')}</div>
  <table class="t fixed"><tbody>${byP.map(([p,m])=>`<tr><td>${pChip(p)}</td><td class="n">${hm(m)}</td><td class="n">${pct(m,sm.total)}%</td></tr>`).join('')}</tbody></table>`:`<div class="muted" style="font-size:13px">${esc(t('noEntries'))}</div>`;
 const myCc=(S.members[S.uid]||{}).country||'DE';const wk=Object.assign({},S.myWeeks,S.myMonth.weeks||{});
 const locked=dk=>{const w=wk[weekStartOf(dk,myCc)];return !!w&&(w.status==='submitted'||w.status==='approved')};
 const groups={};for(const e of items){(groups[e.date]=groups[e.date]||[]).push(e)}
 const dayKeys=Object.keys(groups).sort().reverse();
 const log=dayKeys.length?dayKeys.map(k=>{const es=groups[k].slice().sort((a,b)=>b.start-a.start);const tot=es.reduce((a,e)=>a+e.minutes,0);
   return `<div class="day"><div class="day-h"><span>${esc(fmtDay(k))}</span><b dir="ltr">${hm(tot)}</b></div>${es.map(e=>`
    <div class="entry"><span class="tr">${hhmm(e.start)}–${hhmm(e.end)}</span>
     <div class="what">${pChip(e.projectId)}${e.phaseId&&phLabel(e.phaseId)?`<span class="badge">${esc(phLabel(e.phaseId))}</span>`:''}${e.taskId&&S.tasks[e.taskId]?`<span class="note">${esc(S.tasks[e.taskId].title)}</span>`:''}${e.note?`<span class="note muted">${esc(e.note)}</span>`:''}${e.manual?'<span class="badge">M</span>':''}</div>
     <span class="dur">${hm(e.minutes)}</span>
     ${locked(e.date)?'<span class="lockmark" title="'+esc(t('st_submitted'))+'">⊘</span>':`<button class="btn ghost sm danger${S.arm==='e:'+e.id?' armed':''}" data-act="del-entry" data-id="${esc(e.id)}" aria-label="${esc(t('delete'))}">${S.arm==='e:'+e.id?esc(t('confirmDel')):'✕'}</button>`}
    </div>`).join('')}</div>`}).join(''):`<div class="empty"><h4>${esc(t('noEntries'))}</h4><span>${esc(t('noEntriesSub'))}</span></div>`;
 return `
 <div class="view-head"><h2>${esc(t('tabTimer'))}</h2>
  <div class="mnav"><button class="icon-btn" data-act="my-month" data-d="-1" aria-label="prev">${LANG==='ar'?'›':'‹'}</button><strong>${esc(fmtYm(ym))}</strong><button class="icon-btn" data-act="my-month" data-d="1" aria-label="next">${LANG==='ar'?'‹':'›'}</button></div></div>
 <div class="grid2">
  <div class="stack">
   <section class="sheet"><div class="sheet-h"><h3>${esc(t('timerTitle'))}</h3></div><div class="sheet-b">${timer}</div></section>
   <section class="sheet"><div class="sheet-h"><h3>${esc(t('myEntries'))}</h3><span class="code">${esc(fmtYm(ym))}</span></div>${log}</section>
  </div>
  <div class="stack">
   <div class="kpis">
    <div class="kpi"><span class="v">${hm(sm.total)}</span><span class="l">${esc(t('monthTotal'))}</span></div>
    <div class="kpi"><span class="v">${hm(todayMin)}</span><span class="l">${esc(t('today'))}</span></div>
    <div class="kpi"><span class="v">${hm(expectedMin(S.uid,ym))}</span><span class="l">${esc(t('expected'))}</span></div>
   </div>
   ${weekStripHtml(ym,items,wk,myCc)}
   <section class="sheet"><div class="sheet-h"><h3>${esc(t('byProject'))}</h3></div><div class="sheet-b stack" style="gap:12px">${split}</div></section>
  </div>
 </div>`;
}

/* ---------- tasks workspace (v2.3): my work, board, list, calendar, timeline ---------- */
const TVIEWS=['mywork','board','list','cal','tl'];
const TV_LABEL={mywork:'vMine',board:'vBoard',list:'vList',cal:'vCal',tl:'vTl'};
const TV_ICON={
 mywork:'<svg width="14" height="14" viewBox="0 0 16 16" aria-hidden="true"><circle cx="8" cy="5" r="3" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M2.5 14.5c.8-3 3-4.5 5.5-4.5s4.7 1.5 5.5 4.5" fill="none" stroke="currentColor" stroke-width="1.6"/></svg>',
 board:'<svg width="14" height="14" viewBox="0 0 16 16" aria-hidden="true"><rect x="1.5" y="2" width="3.6" height="12" rx="1" fill="none" stroke="currentColor" stroke-width="1.5"/><rect x="6.2" y="2" width="3.6" height="8" rx="1" fill="none" stroke="currentColor" stroke-width="1.5"/><rect x="10.9" y="2" width="3.6" height="10" rx="1" fill="none" stroke="currentColor" stroke-width="1.5"/></svg>',
 list:'<svg width="14" height="14" viewBox="0 0 16 16" aria-hidden="true"><path d="M5.5 4h9M5.5 8h9M5.5 12h9" stroke="currentColor" stroke-width="1.6"/><circle cx="2.3" cy="4" r="1.1" fill="currentColor"/><circle cx="2.3" cy="8" r="1.1" fill="currentColor"/><circle cx="2.3" cy="12" r="1.1" fill="currentColor"/></svg>',
 cal:'<svg width="14" height="14" viewBox="0 0 16 16" aria-hidden="true"><rect x="1.5" y="3" width="13" height="11.5" rx="1.5" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M1.5 6.5h13M5 1.5v3M11 1.5v3" stroke="currentColor" stroke-width="1.5"/></svg>',
 tl:'<svg width="14" height="14" viewBox="0 0 16 16" aria-hidden="true"><rect x="1.5" y="2.5" width="7" height="3" rx="1" fill="currentColor"/><rect x="5" y="6.5" width="8.5" height="3" rx="1" fill="currentColor" opacity=".7"/><rect x="3" y="10.5" width="5.5" height="3" rx="1" fill="currentColor" opacity=".45"/></svg>'};
const CHECK='<svg width="11" height="11" viewBox="0 0 16 16" aria-hidden="true"><path d="M2.5 8.5l3.5 3.5 7.5-8" fill="none" stroke="currentColor" stroke-width="2.2"/></svg>';
const TL_DAYS=42;
const canWork=x=>!S.readOnly&&(canEditTask(x)||x.assignee===S.uid);
const canDates=x=>!S.readOnly&&canEditTask(x);
const subsOf=id=>S.subs[id]||[];
function subProg(id){const l=subsOf(id);return{done:l.filter(s=>s.done).length,total:l.length}}
function subBadge(id){const p=subProg(id);if(!p.total)return'';return `<span class="subp${p.done===p.total?' full':''}" title="${esc(t('subtasks'))}">${CHECK}${p.done}/${p.total}</span>`}
const todayK=()=>dateKey(new Date());
const isOverdue=x=>!!x.due&&x.due<todayK()&&x.status!=='done';
const PRIO={high:0,normal:1,low:2};
const byPrioDue=(a,b)=>(PRIO[a.priority]??1)-(PRIO[b.priority]??1)||String(a.due||'9').localeCompare(String(b.due||'9'));
const dateSpan=x=>x.start&&x.due&&x.start!==x.due?fmtRange(x.start,x.due):fmtShort(x.due||x.start);
const dayDiff=(a,b)=>Math.round((utc(b)-utc(a))/864e5);
const dowName=w=>new Date(2023,0,1+w).toLocaleDateString(loc(),{weekday:'short'});
const monShort=dk=>{const[y,m]=dk.split('-').map(Number);return new Date(y,m-1,1).toLocaleDateString(loc(),{month:'short'})};
function prioPill(p){return `<span class="pill ${p==='high'?'bad':p==='low'?'mute lo':'mute'}">${esc(t(p||'normal'))}</span>`}
function statusSel(x){return canWork(x)?`<select class="in st-sel" data-st="${esc(x.id)}" aria-label="${esc(t('status'))}">${stOpts(x,x.status||'todo')}</select>`:`<span class="pill mute">${esc(t(x.status||'todo'))}</span>`}
function filteredTasks(hideDone){
 const f=S.tf;const q=f.q.trim().toLowerCase();
 return Object.entries(S.tasks).map(([id,x])=>({...x,id})).filter(x=>(!f.project||x.projectId===f.project)&&(!f.person||(f.person==='me'?x.assignee===S.uid:x.assignee===f.person))&&(!q||(x.title+' '+(x.spec||'')).toLowerCase().includes(q))&&(!hideDone||!f.hideDone||x.status!=='done')&&tagHitTask(x)&&qcHit(x)&&leadSees(x)&&scopeHit(x)&&tkTabHit(x));
}
function taskCard(x){
 const spent=spentOn('t',x.id);const nc=S.commentCounts[x.id]||0;const est=num(x.estimate)*60;const od=isOverdue(x);const drag=canWork(x);
 return `<div class="card pri-${esc(x.priority||'normal')}${isOwnTask(x)?' own':''}" role="button" tabindex="0" data-act="edit-task" data-id="${esc(x.id)}"${drag?` draggable="true" data-drag="${esc(x.id)}"`:''}>
   <span class="ttl">${ownBadge(x)}${esc(x.title)}</span>
   <span class="row">${x.projectId?pChip(x.projectId):''}</span>
   <span class="row">${x.discipline?`<span class="badge">${esc(x.discipline)}</span>`:''}${x.lod?`<span class="badge">LOD ${esc(x.lod)}</span>`:''}${x.phaseId&&phLabel(x.phaseId)?`<span class="badge">${esc(phLabel(x.phaseId))}</span>`:''}${x.priority==='high'?`<span class="pill bad">${esc(t('high'))}</span>`:''}${subBadge(x.id)}${qcBadge(x)}${taskNoteBtn(x)}</span>
   ${(x.tags||[]).length?`<span class="row tgs">${tagChips(x.tags)}</span>`:''}
   <span class="foot"><span style="display:flex;align-items:center;gap:6px;min-width:0">${x.assignee?avatar(x.assignee,22):''}${x.due||x.start?`<span class="${od?'over':''}">${esc(dateSpan(x))}</span>`:''}</span>
    <span class="hrs ${est&&spent>est?'over':''}" title="${esc(seesTeam()?t('hoursSpent'):t('myHours'))}">${h1(spent)}${est?' / '+num(x.estimate):''} ${esc(t('hrsUnit'))}</span></span>
  </div>`;
}
const emptyTasks=()=>`<div class="sheet"><div class="empty"><h4>${esc(t('noTasks'))}</h4></div></div>`;

function tasksHtml(){
 if(!TVIEWS.includes(S.tv))S.tv=seesTeam()?'board':'mywork';
 const v=S.tv,f=S.tf;
 const people=Object.entries(S.members).filter(([u,m])=>m.active!==false&&inMyScope(u));
 const head=`<div class="view-head"><h2>${esc(t('tabTasks'))}</h2>${canAddTasks()?`<button class="btn primary" data-act="new-task" ${S.readOnly||!projList().length?'disabled':''}>+ ${esc(t('newTask'))}</button>`:`<div class="sub">${esc(t('tasksLeadOnly'))}</div>`}</div>`;
 const seg=`<div class="tv-bar"><div class="seg" role="tablist" aria-label="${esc(t('tabTasks'))}">${TVIEWS.map(k=>`<button type="button" role="tab" aria-selected="${k===v}" data-act="tv" data-v="${k}">${TV_ICON[k]}<span>${esc(t(TV_LABEL[k]))}</span></button>`).join('')}</div></div>`;
 const filters=`<div class="filters">
  ${v==='plan'?'':`<select class="in" id="tf-project"><option value="">${esc(t('allProjects'))}</option>${projList(true).map(p=>`<option value="${esc(p.id)}"${f.project===p.id?' selected':''}>${esc((p.code?p.code+' · ':'')+p.name)}</option>`).join('')}</select>`}
  ${v==='mywork'||tkTab()==='mine'?'':`<select class="in" id="tf-person"><option value="">${esc(t('allPeople'))}</option><option value="me"${f.person==='me'?' selected':''}>${esc(t('mine'))}</option>${people.map(([u,m])=>`<option value="${esc(u)}"${f.person===u?' selected':''}>${esc(m.name)}</option>`).join('')}</select>`}
  <input class="in" id="tf-q" placeholder="${esc(t('search'))}" value="${esc(f.q)}">
  ${v==='mywork'?'':qcFilter()+scopeFilter()}
  ${['list','cal','tl'].includes(v)?`<label class="chk"><input type="checkbox" id="tf-hide"${f.hideDone?' checked':''}> ${esc(t('hideDone'))}</label>`:''}
 </div>${tagBar('task')}`;
 let body;
 switch(v){
  case 'board':body=boardHtml(filteredTasks(false));break;
  case 'list':body=listHtml(filteredTasks(true));break;
  case 'cal':body=calHtml(filteredTasks(true));break;
  case 'tl':body=tlHtml(filteredTasks(true));break;
  case 'plan':body=planHtml();break;
  default:body=myWorkHtml();
 }
 return head+tkTabsHtml()+seg+filters+body;
}

/* board: drag a card to another column to change its status */
function boardHtml(list){
 list.sort(byPrioDue);
 return `<div class="board">${STATUSES.map(s=>{const cs=list.filter(x=>(x.status||'todo')===s);return `<div class="col" data-drop="${s}"><div class="col-h"><span><i class="st-dot st-${s}"></i>${esc(t(s))}</span><span class="code">${cs.length}</span></div>${cs.map(taskCard).join('')||`<div class="empty-col">${esc(t('noTasks'))}</div>`}</div>`}).join('')}</div>
 ${list.some(canWork)?`<p class="muted hint">${esc(t('boardHint'))}</p>`:''}`;
}

/* list: one table grouped by status */
function listHtml(list){
 list.sort(byPrioDue);
 const groups=STATUSES.map(s=>[s,list.filter(x=>(x.status||'todo')===s)]).filter(g=>g[1].length);
 if(!groups.length)return emptyTasks();
 const row=x=>{const spent=spentOn('t',x.id);const p=subProg(x.id);const od=isOverdue(x);
  return `<tr class="trow${x.status==='done'?' is-done':''}${isOwnTask(x)?' own':''}" data-act="edit-task" data-id="${esc(x.id)}">
   <td><div class="ttl">${ownBadge(x)}${esc(x.title)}</div><div class="sub-line">${x.projectId?pChip(x.projectId):''}${x.phaseId&&phLabel(x.phaseId)?` <span class="badge">${esc(phLabel(x.phaseId))}</span>`:''}${qcBadge(x)}${tagChips(x.tags)}</div></td>
   <td>${x.assignee?`<span class="who">${avatar(x.assignee,22)}<span class="nm">${esc(memberName(x.assignee))}</span></span>`:`<span class="muted">${esc(t('unassigned'))}</span>`}</td>
   <td>${statusSel(x)}</td><td>${prioPill(x.priority)}</td>
   <td class="dt">${x.start?esc(fmtShort(x.start)):'<span class="muted">—</span>'}</td>
   <td class="dt${od?' over':''}">${x.due?esc(fmtShort(x.due)):'<span class="muted">—</span>'}</td>
   <td class="dt">${p.total?`<span class="mini"><i style="width:${Math.round(p.done/p.total*100)}%"></i></span> <span class="code">${p.done}/${p.total}</span>`:'<span class="muted">—</span>'}</td>
   <td>${taskNoteBtn(x)}</td>
   <td class="n">${h1(spent)}${num(x.estimate)?' / '+num(x.estimate):''}</td></tr>`};
 return `<div class="sheet"><div class="tbl-wrap"><table class="t tlist"><thead><tr><th>${esc(t('title'))}</th><th>${esc(t('assignee'))}</th><th>${esc(t('status'))}</th><th>${esc(t('priority'))}</th><th>${esc(t('startDate'))}</th><th>${esc(t('due'))}</th><th>${esc(t('subtasks'))}</th><th>${esc(t('comments'))}</th><th class="n">${esc(t('hrsUnit'))}</th></tr></thead><tbody>
  ${groups.map(([s,l])=>`<tr class="grp"><td colspan="9"><i class="st-dot st-${s}"></i>${esc(t(s))} <span class="code">${l.length}</span></td></tr>${l.map(row).join('')}`).join('')}
 </tbody></table></div></div>`;
}

/* my work: what is assigned to me and not done, by urgency */
function myWorkHtml(){
 const tk=todayK(),wk=addDays(tk,7),f=S.tf,q=f.q.trim().toLowerCase();
 const all=Object.entries(S.tasks).map(([id,x])=>({...x,id}));
 const match=x=>(!f.project||x.projectId===f.project)&&(!q||(x.title+' '+(x.spec||'')).toLowerCase().includes(q))&&tagHitTask(x);
 const mine=all.filter(x=>x.assignee===S.uid&&x.status!=='done'&&match(x)).sort(byPrioDue);
 const sec={over:[],today:[],week:[],later:[],nodate:[]};
 for(const x of mine){if(!x.due)sec.nodate.push(x);else if(x.due<tk)sec.over.push(x);else if(x.due===tk)sec.today.push(x);else if(x.due<=wk)sec.week.push(x);else sec.later.push(x)}
 const review=all.filter(x=>x.status==='review'&&x.assignee!==S.uid&&(canEditTask(x)||(x.needsQc&&x.reviewer===S.uid))&&leadSees(x)&&match(x)).sort(byPrioDue);
 const run=myE().running;
 const row=x=>{const onIt=run&&run.taskId===x.id;const od=isOverdue(x);
  return `<div class="mw-row${onIt?' on':''}">
   <div class="mw-main" role="button" tabindex="0" data-act="edit-task" data-id="${esc(x.id)}"><span class="ttl">${esc(x.title)}</span>
    <span class="row">${x.projectId?pChip(x.projectId):''}${x.phaseId&&phLabel(x.phaseId)?`<span class="badge">${esc(phLabel(x.phaseId))}</span>`:''}${x.priority==='high'?`<span class="pill bad">${esc(t('high'))}</span>`:''}${subBadge(x.id)}${qcBadge(x)}${tagChips(x.tags)}${x.assignee&&x.assignee!==S.uid?avatar(x.assignee,20):''}</span></div>
   <div class="mw-meta"><span class="dt${od?' over':''}">${x.due?esc(dateSpan(x)):''}</span>${taskNoteBtn(x)}${x.status==='review'&&x.needsQc&&canQc(x)&&x.assignee!==S.uid?`<button type="button" class="btn sm ok-btn" data-act="qc-quick" data-id="${esc(x.id)}">✓ ${esc(t('qcPass'))}</button>`:''}${statusSel(x)}
    ${S.readOnly||x.assignee!==S.uid?'':onIt?`<button type="button" class="btn sm run" data-act="stop">■ ${esc(t('stop'))}</button>`:`<button type="button" class="btn sm" data-act="task-timer" data-id="${esc(x.id)}"${run?' disabled':''} title="${esc(t('startTimerOn'))}">▶ ${esc(t('start'))}</button>`}</div>
  </div>`};
 const block=(key,label,items,cls)=>items.length?`<section class="sheet mw-sec${cls?' '+cls:''}"><div class="sheet-h"><h3>${esc(label)}</h3><span class="code">${items.length}</span></div>${items.map(row).join('')}</section>`:'';
 const kpi=(v,l,c)=>`<div class="kpi"><div class="v${c?' '+c:''}">${v}</div><div class="l">${esc(l)}</div></div>`;
 return `<div class="mw">
  <div class="kpis">${kpi(mine.length,t('openTasks'))}${kpi(sec.over.length,t('overdue'),sec.over.length?'over':'')}${kpi(sec.today.length+sec.week.length,t('thisWeek'))}${kpi(mine.filter(x=>x.status==='review').length,t('review'))}${seesTeam()||review.length?kpi(review.length,t('waitingReview')):''}</div>
  ${block('rev',t('waitingReview'),review,'sec-rev')}
  ${block('over',t('overdue'),sec.over,'sec-over')}${block('today',t('dueToday'),sec.today)}${block('week',t('thisWeek'),sec.week)}${block('later',t('later'),sec.later)}${block('nodate',t('noDate'),sec.nodate)}
  ${mine.length||review.length?'':`<div class="sheet"><div class="empty"><h4>${esc(t('allClear'))}</h4><span>${esc(t('allClearSub'))}</span></div></div>`}
 </div>`;
}

/* calendar: tasks on their due date; drag to another day to move the dates */
function calHtml(list){
 const ym=S.calYm;const[a,b]=monthRange(ym);const tk=todayK();
 const gs=weekStartOf(a),ge=addDays(weekStartOf(b),6);
 const byDay={};let undated=0;
 for(const x of list){if(x.due)(byDay[x.due]=byDay[x.due]||[]).push(x);else undated++}
 const chip=x=>`<div class="cal-t${x.status==='done'?' is-done':''}${isOverdue(x)?' is-over':''}" role="button" tabindex="0" data-act="edit-task" data-id="${esc(x.id)}"${canDates(x)?` draggable="true" data-cdrag="${esc(x.id)}"`:''} style="--pc:${esc(pColor(x.projectId))}" title="${esc(x.title)}">${x.assignee?avatar(x.assignee,16):''}<span dir="auto">${esc(x.title)}</span>${x.needsQc?`<i class="qc-dot qc-${qcState(x)}"></i>`:''}</div>`;
 let cells='';
 for(let d=gs;d<=ge;d=addDays(d,1)){const items=(byDay[d]||[]).sort(byPrioDue);
  cells+=`<div class="cal-c${d<a||d>b?' out':''}${d===tk?' today':''}${dowOf(d)===5?' off':''}" data-day="${d}"><div class="cal-d">${+d.slice(8)}</div>${items.map(chip).join('')}</div>`}
 const agenda=Object.keys(byDay).filter(d=>d>=a&&d<=b).sort().map(d=>`<div class="ag-d${d===tk?' today':''}"><div class="ag-h">${esc(fmtDay(d))}</div>${byDay[d].sort(byPrioDue).map(chip).join('')}</div>`).join('')||emptyTasks();
 return `<div class="cal-bar">${monthNav('cal-month',ym)}<button type="button" class="btn sm" data-act="cal-today">${esc(t('today'))}</button>
  <span class="muted hint">${esc(t('calHint'))}${undated?' · '+esc(t('noDates').replace('{n}',undated)):''}</span></div>
 <div class="cal">${WEEK_ORDER.map(w=>`<div class="cal-h">${esc(dowName(w))}</div>`).join('')}${cells}</div>
 <div class="cal-ag">${agenda}</div>`;
}

/* timeline (Gantt): bars from start to due; drag to move, drag the end to change the due date */
function tlHtml(list){
 if(!S.tlFrom)S.tlFrom=addDays(weekStartOf(todayK()),-7);
 const from=S.tlFrom,to=addDays(from,TL_DAYS-1),tk=todayK();
 const idx=d=>dayDiff(from,d);
 const dated=list.filter(x=>x.start||x.due);const undated=list.length-dated.length;
 const vis=dated.filter(x=>(x.due||x.start)>=from&&(x.start||x.due)<=to);
 const groups={};for(const x of vis)(groups[x.projectId]=groups[x.projectId]||[]).push(x);
 const pids=Object.keys(groups).sort((p,q)=>pLabel(p).localeCompare(pLabel(q)));
 let days='',bg='';
 for(let i=0;i<TL_DAYS;i++){const d=addDays(from,i);const off=dowOf(d)===5,m1=i===0||d.endsWith('-01');
  days+=`<div class="tl-dh${off?' off':''}${d===tk?' today':''}${m1?' m1':''}">${m1?`<b>${esc(monShort(d))}</b>`:''}<span>${+d.slice(8)}</span></div>`;
  bg+=`<i class="${off?'off':''}${d===tk?' today':''}"></i>`}
 const bar=x=>{const s=x.start||x.due,e=x.due||x.start;const si=Math.max(0,idx(s)),ei=Math.min(TL_DAYS-1,idx(e));
  const p=subProg(x.id);const pc=p.total?Math.round(p.done/p.total*100):(x.status==='done'?100:0);const ms=!(x.start&&x.due);const ed=canDates(x);
  return `<div class="tl-row"><div class="tl-lab" role="button" tabindex="0" data-act="edit-task" data-id="${esc(x.id)}"><span class="ttl" dir="auto">${esc(x.title)}</span>${x.assignee?avatar(x.assignee,18):''}</div>
   <div class="tl-track"><div class="tl-bar${x.status==='done'?' is-done':''}${isOverdue(x)?' is-over':''}${ms?' ms':''}" style="--pc:${esc(pColor(x.projectId))};inset-inline-start:${(si/TL_DAYS*100).toFixed(3)}%;width:${((ei-si+1)/TL_DAYS*100).toFixed(3)}%" data-act="edit-task" data-id="${esc(x.id)}"${ed?` data-tl="${esc(x.id)}"`:''} title="${esc(x.title+' · '+(s===e?fmtShort(s):fmtRange(s,e)))}"><i class="tl-fill" style="width:${pc}%"></i><span dir="auto">${esc(x.title)}</span>${ed&&!ms?'<b class="tl-h" data-tlh="1"></b>':''}</div></div></div>`};
 const rows=pids.map(pid=>`<div class="tl-grp"><div class="tl-lab">${pChip(pid)}</div><div></div></div>${groups[pid].sort((p,q)=>String(p.start||p.due).localeCompare(String(q.start||q.due))).map(bar).join('')}`).join('');
 return `<div class="cal-bar"><div class="mnav"><button type="button" class="icon-btn" data-act="tl-shift" data-d="-14" aria-label="prev">${LANG==='ar'?'›':'‹'}</button><strong>${esc(fmtRange(from,to))}</strong><button type="button" class="icon-btn" data-act="tl-shift" data-d="14" aria-label="next">${LANG==='ar'?'‹':'›'}</button></div>
  <button type="button" class="btn sm" data-act="tl-today">${esc(t('today'))}</button><span class="muted hint">${esc(t('tlHint'))}${undated?' · '+esc(t('noDates').replace('{n}',undated)):''}</span></div>
 <div class="sheet tl-wrap"><div class="tl-scroll"><div class="tl" style="--n:${TL_DAYS}">
  <div class="tl-head"><div class="tl-lab"></div><div class="tl-days">${days}</div></div>
  <div class="tl-body"><div class="tl-bg" aria-hidden="true">${bg}</div>${rows||`<div class="empty"><h4>${esc(t('noTasks'))}</h4></div>`}</div>
 </div></div></div>`;
}

/* ----- changing a task without opening it ----- */
function setStatus(id,st){
 const x=S.tasks[id];if(!x)return;if(st==='done'&&x.needsQc&&!canQc(x))st='review';
 if(x.status===st){renderMainNow();return}const old=x.status;x.status=st;renderMainNow();
 api('task_status',{id,status:st}).then(r=>{toast(t(x.needsQc&&r&&r.status==='review'?'qcSent':'moved'));refresh()}).catch(e=>{x.status=old;writeErr(e);renderMainNow()});
}
function moveDates(id,d,mode){
 const x=S.tasks[id];if(!x||!d)return;const old={start:x.start,due:x.due};let s=x.start||'',e=x.due||'';
 if(mode==='end'){e=addDays(e||s,d);if(s&&e<s)e=s}else{if(s)s=addDays(s,d);if(e)e=addDays(e,d)}
 x.start=s;x.due=e;renderMainNow();
 api('task_dates',{id,start:s,due:e,push:S.tv==='plan'&&S.tab==='tasks'&&!!S.planPush}).then(r=>{toast(t('datesChanged')+(r&&r.moved?' · '+t('plMoved').replace('{n}',r.moved):''));refresh()}).catch(err=>{Object.assign(x,old);writeErr(err);renderMainNow()});
}
function startTaskTimer(id){const x=S.tasks[id];if(!x)return;S.sel.project=x.projectId;S.sel.task=id;S.sel.phase=x.phaseId||'';startTimer()}

/* files dropped onto a project's drop zone */
const hasFiles=ev=>ev.dataTransfer&&[...(ev.dataTransfer.types||[])].includes('Files');
document.addEventListener('dragover',ev=>{if(S.dragId||!hasFiles(ev))return;const z=ev.target.closest&&ev.target.closest('#fdrop');document.querySelectorAll('.fdrop.on').forEach(e=>{if(e!==z)e.classList.remove('on')});ev.preventDefault();if(!z){ev.dataTransfer.dropEffect='none';return}ev.dataTransfer.dropEffect='copy';z.classList.add('on')});
document.addEventListener('dragleave',ev=>{const z=ev.target.closest&&ev.target.closest('#fdrop');if(z&&!z.contains(ev.relatedTarget))z.classList.remove('on')});
document.addEventListener('drop',ev=>{if(S.dragId||!hasFiles(ev))return;const z=ev.target.closest&&ev.target.closest('#fdrop');ev.preventDefault();if(!z)return;z.classList.remove('on');const p=$('#files-panel');if(p)startUploads(p.dataset.pid,[...ev.dataTransfer.files])});
/* board and calendar: native drag and drop */
document.addEventListener('dragstart',ev=>{const c=ev.target.closest&&ev.target.closest('[data-drag],[data-cdrag]');if(!c)return;
 S.dragId=c.dataset.drag||c.dataset.cdrag;S.dragKind=c.dataset.drag?'status':'day';ev.dataTransfer.effectAllowed='move';try{ev.dataTransfer.setData('text/plain',S.dragId)}catch(e){}c.classList.add('dragging')});
document.addEventListener('dragend',()=>{document.querySelectorAll('.dragging,.drop-on').forEach(e=>e.classList.remove('dragging','drop-on'));S.dragId=null});
document.addEventListener('dragover',ev=>{if(!S.dragId)return;const z=ev.target.closest&&ev.target.closest(S.dragKind==='status'?'[data-drop]':'[data-day]');if(!z)return;
 ev.preventDefault();ev.dataTransfer.dropEffect='move';document.querySelectorAll('.drop-on').forEach(e=>{if(e!==z)e.classList.remove('drop-on')});z.classList.add('drop-on')});
document.addEventListener('drop',ev=>{if(!S.dragId)return;const id=S.dragId,kind=S.dragKind;S.dragId=null;const x=S.tasks[id];if(!x)return;
 if(kind==='status'){const z=ev.target.closest('[data-drop]');if(!z)return;ev.preventDefault();setStatus(id,z.dataset.drop)}
 else{const z=ev.target.closest('[data-day]');if(!z||!x.due)return;ev.preventDefault();moveDates(id,dayDiff(x.due,z.dataset.day),'move')}});

/* timeline: pointer drag (works with mouse, pen and touch) */
let TLD=null;
document.addEventListener('pointerdown',ev=>{const b=ev.target.closest&&ev.target.closest('[data-tl]');if(!b||ev.button>0)return;
 const w=b.parentElement.getBoundingClientRect().width/(+b.parentElement.dataset.days||TL_DAYS);
 TLD={id:b.dataset.tl,b,x0:ev.clientX,w,w0:b.getBoundingClientRect().width,mode:ev.target.closest('[data-tlh]')?'end':'move',d:0,moved:false,rtl:document.documentElement.dir==='rtl'};
 try{b.setPointerCapture(ev.pointerId)}catch(e){}});
document.addEventListener('pointermove',ev=>{if(!TLD)return;let dx=ev.clientX-TLD.x0;if(Math.abs(dx)>4&&!TLD.moved){TLD.moved=true;TLD.b.classList.add('dragging')}
 if(!TLD.moved)return;const raw=TLD.rtl?-dx:dx;const d=Math.round(raw/TLD.w);if(d===TLD.d)return;TLD.d=d;
 if(TLD.mode==='move')TLD.b.style.transform=`translateX(${(TLD.rtl?-d:d)*TLD.w}px)`;else TLD.b.style.width=Math.max(TLD.w,TLD.w0+d*TLD.w)+'px'});
function endTl(){if(!TLD)return;const g=TLD;TLD=null;g.b.classList.remove('dragging');if(!g.moved)return;S.skipClick=true;setTimeout(()=>{S.skipClick=false},0);
 if(g.d)moveDates(g.id,g.d,g.mode);else{g.b.style.transform='';g.b.style.width=''}}
document.addEventListener('pointerup',endTl);
document.addEventListener('pointercancel',endTl);

/* ----- task dialog: subtasks and activity ----- */
function subListHtml(id,editable){
 const list=id?subsOf(id):((S.modal&&S.modal.draft)||[]);
 if(!list.length)return `<span class="muted" style="font-size:13px">${esc(t('noSubs'))}</span>`;
 return list.map((s,i)=>{const sid=id?s.id:'d'+i;return `<div class="sub-i${s.done?' done':''}"><label><input type="checkbox" data-sub="${esc(sid)}"${s.done?' checked':''}${editable&&id?'':' disabled'}><span>${esc(s.title)}</span></label>${editable?`<button type="button" class="btn ghost sm danger" data-act="sub-del" data-id="${esc(sid)}" aria-label="${esc(t('delete'))}">✕</button>`:''}</div>`}).join('');
}
function subCount(id){const p=id?subProg(id):{done:0,total:((S.modal&&S.modal.draft)||[]).length};return p.total?(id?`${p.done}/${p.total}`:String(p.total)):''}
function subBox(id,editable){
 return `<div class="subs"><div class="eyebrow">${esc(t('subtasks'))} <span class="code" id="sub-count">${subCount(id)}</span></div><div id="sub-list">${subListHtml(id,editable)}</div>
  ${editable?`<div class="sub-add"><input class="in" id="sub-new" maxlength="200" placeholder="${esc(t('addSub'))}" autocomplete="off"><button type="button" class="btn sm" data-act="sub-add">+ ${esc(t('add'))}</button></div>`:''}</div>`;
}
const actBox=id=>id?`<details class="acts" id="acts"><summary>${esc(t('activity'))}</summary><div id="act-list"><span class="muted">…</span></div></details>`:'';
function redrawSubs(){const M=S.modal;if(!M)return;const el=$('#sub-list');if(!el)return;el.innerHTML=subListHtml(M.id,M.subEdit);const c=$('#sub-count');if(c)c.textContent=subCount(M.id)}
async function addSub(){
 const M=S.modal;const inp=$('#sub-new');if(!M||!inp)return;const title=inp.value.trim();if(!title)return;
 if(!M.id){M.draft.push({title,done:false});inp.value='';redrawSubs();inp.focus();return}
 inp.disabled=true;
 try{const r=await api('subtask_add',{taskId:M.id,title});(S.subs[M.id]=S.subs[M.id]||[]).push({id:r.id,taskId:M.id,title,done:false,sort:999});inp.value='';redrawSubs();schedule()}
 catch(e){writeErr(e)}
 inp.disabled=false;inp.focus();
}
async function delSub(sid){
 const M=S.modal;if(!M)return;
 if(!M.id){M.draft.splice(+sid.slice(1),1);redrawSubs();return}
 if(await guard(api('subtask_delete',{id:sid}))){S.subs[M.id]=subsOf(M.id).filter(s=>s.id!==sid);redrawSubs();schedule()}
}
async function toggleSub(sid,done){
 const M=S.modal;if(!M||!M.id)return;const s=subsOf(M.id).find(z=>z.id===sid);if(!s)return;s.done=done;redrawSubs();schedule();
 try{await api('subtask_save',{id:sid,done});loadActivity(M.id)}catch(e){s.done=!done;redrawSubs();writeErr(e)}
}
function actLine(a){
 const d=a.detail||'';let w;
 switch(a.kind){
  case 'created':w=esc(t('act_created'));break;
  case 'status':w=`${esc(t('act_status'))} <b>${esc(t(d.split('>')[1]||d))}</b>`;break;
  case 'assign':w=d?`${esc(t('act_assign'))} <b>${esc(memberName(d))}</b>`:esc(t('act_unassign'));break;
  case 'due':w=d?`${esc(t('act_due'))} <b>${esc(fmtShort(d))}</b>`:esc(t('act_due_clear'));break;
  case 'start':w=d?`${esc(t('act_start'))} <b>${esc(fmtShort(d))}</b>`:esc(t('act_start_clear'));break;
  case 'priority':w=`${esc(t('act_priority'))} <b>${esc(t(d))}</b>`;break;
  case 'title':w=`${esc(t('act_title'))} <b>${esc(d)}</b>`;break;
  case 'sub_done':w=`${esc(t('act_sub_done'))} <b>${esc(d)}</b>`;break;
  case 'sub_open':w=`${esc(t('act_sub_open'))} <b>${esc(d)}</b>`;break;
  default:w=qcAct(a)||esc(a.kind);
 }
 return `<div class="act-i">${avatar(a.userId,18)}<span><b>${esc(memberName(a.userId))}</b> ${w}</span><span class="muted act-t">${esc(new Date(a.at).toLocaleString(loc(),{day:'numeric',month:'short',hour:'2-digit',minute:'2-digit'}))}</span></div>`;
}
async function loadActivity(id){
 try{const d=await api('activity_list',undefined,{task:id});const el=$('#act-list');if(!el||!S.modal||S.modal.id!==id)return;
  el.innerHTML=d.items.length?d.items.map(actLine).join(''):`<span class="muted">${esc(t('noActivity'))}</span>`}catch(e){}
}

function projectsHtml(){
 const all=projList(true);const ps=all.filter(tagHitProject).filter(pjTabHit);
 const pill={active:'ok',hold:'warn',closed:'mute'};
 const cards=ps.map(p=>{const used=spentOn('p',p.id);const bud=num(p.budget)*60;const ratio=bud?used/bud:0;const phs=S.phasesBy[p.id]||[];const open=Object.values(S.tasks).filter(x=>x.projectId===p.id&&x.status!=='done').length;
  return `<article class="pcard">
   <div style="display:flex;align-items:center;gap:8px"><i style="width:12px;height:12px;border-radius:3px;background:${esc(p.color||'#6B7785')};flex:none"></i><span class="code">${esc(p.code||'')}</span>${pprioPill(p.priority)}<span class="pill ${pill[p.status||'active']}" style="margin-inline-start:auto">${esc(t(p.status==='closed'?'closed':(p.status||'active')))}</span></div>
   <h4>${esc(p.name)}</h4>${(p.tags||[]).length?`<div class="tgs">${tagChips(p.tags)}</div>`:''}
   <div class="meta">${[clientLine(p),p.location?esc(p.location):''].filter(Boolean).join(' · ')||'&nbsp;'}</div>${leadsChips(p.id)}
   ${seesTeam()?`<div class="hrow"><span>${esc(t('hoursSpent'))}${ratio>=1?` <span class="pill bad">${esc(t('budgetOver'))}</span>`:ratio>=.8?` <span class="pill warn">${esc(t('budgetWarn'))}</span>`:''}</span><b>${h1(used)}${bud?' / '+num(p.budget):''} ${esc(t('hrsUnit'))}</b></div>${bud?`<div class="meter${ratio>=1?' over':ratio>=.8?' warn':''}"><i style="width:${Math.min(100,pct(used,bud))}%"></i></div>`:''}
   ${phs.length?`<table class="t mini"><tbody>${phs.map(h=>{const u=(S.team.ph||{})[h.id]||0;const b=num(h.budget)*60;return `<tr><td>${esc(h.name)}</td><td class="n${b&&u>b?' over':''}">${h1(u)}${b?' / '+num(h.budget):''}</td></tr>`}).join('')}</tbody></table>`:''}`:''}
   ${p.folderUrl?`<a class="lnk" href="${esc(p.folderUrl)}" target="_blank" rel="noopener noreferrer">↗ ${esc(t('openFolder'))}</a>`:''}
   ${((S.commentsP||{})[p.id]||{}).last?`<button type="button" class="plast" data-act="notes" data-kind="project" data-id="${esc(p.id)}">${lastLine(S.commentsP[p.id].last)}</button>`:''}
   <div class="hrow"><span>${projNoteBtn(p)}<button type="button" class="nbtn${S.fileCounts[p.id]?' has':''}" data-act="files" data-id="${esc(p.id)}" title="${esc(t('filesBtn'))}" aria-label="${esc(t('filesBtn'))}">${CLIP}<span>${S.fileCounts[p.id]||'+'}</span></button> ${esc(t('tabTasks'))}: ${open}${p._o&&!p._legacy&&roleOf(p._o)!=='owner'?` · ${esc(memberName(p._o))}`:''}</span>${canEditProject(p)?`<button class="btn sm" data-act="edit-project" data-id="${esc(p.id)}">${esc(t('edit'))}</button>`:''}</div>
  </article>`}).join('');
 return `
 <div class="view-head"><h2>${esc(t('tabProjects'))}</h2>${canAddProjects()&&!S.readOnly?`<button class="btn primary" data-act="new-project">+ ${esc(t('newProject'))}</button>`:''}</div>
 ${pjTabsHtml()}${tagBar('project')}${S.isFin&&ps.length?profitHtml(ps):''}${ps.length?`<div class="pgrid">${cards}</div>`:pjTab()==='mine'&&all.length?`<div class="sheet"><div class="empty"><h4>${esc(t('pjMineNone'))}</h4><span>${esc(t('pjMineNoneSub'))}</span><button class="btn" data-act="pj-tab" data-v="all">${esc(t('pjAll'))}</button></div></div>`:all.length?`<div class="sheet"><div class="empty"><h4>${esc(t('noMatch'))}</h4><button class="btn" data-act="tf-tag-clear">${esc(t('clearTags'))}</button></div></div>`:`<div class="sheet"><div class="empty"><h4>${esc(t('noProjects'))}</h4><span>${esc(canAddProjects()?t('noProjectsOwner'):t('noProjectsEmp'))}</span>${canAddProjects()&&!S.readOnly?`<button class="btn primary" data-act="new-project">+ ${esc(t('newProject'))}</button>`:''}</div></div>`}`;
}

function teamHtml(){
 const ms=Object.entries(S.members).filter(([,m])=>!m.deleted&&(!S.orgDisc||m.discipline===S.orgDisc)).sort((a,b)=>(a[1].active===false)-(b[1].active===false)||String(a[1].name).localeCompare(String(b[1].name)));
 const cym=ymOf(new Date());if(pm('team')&&!S.report[cym])loadReport(cym);const rep=S.report[cym];
 const cards=ms.map(([u,m])=>{const e=S.entryDocs[u];const r=e&&e.running;const mins=rep&&rep.items?summarize(rep.items[u]).total:null;
  return `<article class="tcard"${m.active===false?' style="opacity:.6"':''}>
   <div class="who">${avatar(u,36)}<div style="min-width:0"><div class="nm">${esc(m.name)}${u===S.uid?` <span class="muted">(${esc(t('you'))})</span>`:''}</div><div style="display:flex;gap:4px;flex-wrap:wrap">${memberRolePill(u)}${isAdminUser(u)?`<span class="pill acc">${esc(t('adminDept'))}</span>`:''}</div><div class="rl">${esc(m.role||t(m.discipline||'ARC'))}</div>${pm('team')&&m.email?`<div class="email">${esc(m.email)}${m.phone?' · '+esc(m.phone):''}</div>`:''}</div>${S.isOwner?`<button class="btn ghost sm" style="margin-inline-start:auto" data-act="edit-member" data-id="${esc(u)}">${esc(t('edit'))}</button>`:''}</div>
   <div class="loc"><span>${esc(t(m.country||'DE'))} · ${esc(t('localTime'))}</span><b data-tz="${esc(m.country||'DE')}">${localNow(m.country)}</b></div>
   ${m.discipline?`<div><span class="badge">${esc(m.discipline)}</span> <span class="muted" style="font-size:12.5px">${esc(t(m.discipline))}</span>${m.active===false?` <span class="pill mute">${esc(t('inactive'))}</span>`:''}</div>`:''}
   ${S.isOwner?`<div class="status${r?' on':''}">${r?`<b>${esc(t('workingOn'))}</b> ${esc(pLabel(r.projectId))}${r.taskId&&S.tasks[r.taskId]?' — '+esc(S.tasks[r.taskId].title):''} · <span dir="ltr" data-tick="${r.start}">${clock(srvNow()-r.start)}</span>`:esc(t('idle'))}</div>
    <div class="loc"><span>${esc(t('thisMonth'))}</span><b>${mins==null?'…':hm(mins)}</b></div>`:''}
  </article>`}).join('');
 return ms.length?`<div class="tgrid">${cards}</div>`:`<div class="sheet"><div class="empty">${esc(t('noMembers'))}</div></div>`;
}
/** Admin and finance settings that used to sit under the team cards. */
function teamAdminHtml(){
 return `<div class="stack">${S.isOwner||pm('team')?`<div class="note-box"><b>${esc(t('addMember'))}</b><span>${esc(t('addMemberHint'))}</span></div>${rolesHtml()}`:''}${S.isFin?automationHtml():''}${tgAdminHtml()}</div>`;
}

async function loadReport(ym,force){
 if(!force&&S.report[ym]&&(S.report[ym].items||S.report[ym].loading))return;
 S.report[ym]={loading:true};
 try{const d=await api('entries_month',undefined,{ym});if(S.report[ym]&&S.report[ym].loading)S.report[ym]={items:d.items,uids:Object.keys(d.items),weeks:d.weeks||{}}}
 catch(e){delete S.report[ym];writeErr(e)}
 schedule();
}
function monthNav(act,ym){return `<div class="mnav"><button class="icon-btn" data-act="${act}" data-d="-1" aria-label="prev">${LANG==='ar'?'›':'‹'}</button><strong>${esc(fmtYm(ym))}</strong><button class="icon-btn" data-act="${act}" data-d="1" aria-label="next">${LANG==='ar'?'‹':'›'}</button></div>`}
function repData(ym){
 const r=S.report[ym];if(!r||!r.items){loadReport(ym);return null}
 const people=Object.keys(r.items).map(u=>({uid:u,...summarize(r.items[u])})).filter(p=>p.total>0||(S.members[p.uid]&&S.members[p.uid].active!==false));
 const byP={};let total=0;const contrib={};
 for(const p of people){total+=p.total;for(const[pid,m]of Object.entries(p.byP)){byP[pid]=(byP[pid]||0)+m;(contrib[pid]=contrib[pid]||new Set()).add(p.uid)}}
 people.sort((a,b)=>b.total-a.total);
 return{people,byP,total,contrib};
}
function exportCsv(filename,rows){
 const csv='\ufeff'+rows.map(r=>r.map(v=>{v=String(v??'');return/[",\n;]/.test(v)?'"'+v.replace(/"/g,'""')+'"':v}).join(',')).join('\r\n');
 const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([csv],{type:'text/csv;charset=utf-8'}));a.download=filename;
 document.body.appendChild(a);a.click();setTimeout(()=>{URL.revokeObjectURL(a.href);a.remove()},1000);toast(t('exported'));
}
function exportReport(){
 const ym=S.repYm;const r=S.report[ym];if(!r||!r.items)return;
 const rows=[[t('employee'),t('country'),t('project'),t('code'),t('hours'),t('share')+' %',t('monthTotal')]];
 for(const u of Object.keys(r.items)){const s=summarize(r.items[u]);if(!s.total)continue;const m=S.members[u]||{};
  for(const[pid,mm]of Object.entries(s.byP).sort((a,b)=>b[1]-a[1])){const p=S.projects[pid]||{};rows.push([memberName(u),m.country?t(m.country):'',p.name||'',p.code||'',h1(mm),pct(mm,s.total),h1(s.total)])}}
 exportCsv(`TECTOVA-hours-${ym}.csv`,rows);
}

function ensurePayMonth(ym){if(S.payMonth.ym===ym)return;S.payMonth={ym,items:{},loaded:false};loadPay(ym)}
async function loadPay(ym){try{const d=await api('pay_get',undefined,{ym});S.pay={fx:Object.assign({},d.fx),people:Object.assign({},d.people)};if(S.payMonth.ym===ym)S.payMonth={ym,items:Object.assign({},d.items),loaded:true};schedule()}catch(e){writeErr(e)}}
function payCalc(uid,s){
 const cfg=(S.pay.people||{})[uid]||{};const pm=(S.payMonth.items||{})[uid]||{};
 const hours=s.total/60;const rate=num(cfg.amount);const cur=cfg.currency||'EUR';
 const set=!!cfg.type&&rate>0;
 const base=!set?0:cfg.type==='hourly'?hours*rate:rate;
 const net=base+num(pm.bonus)-num(pm.deduction);
 const fx=cur==='EUR'?1:num((S.pay.fx||{})[cur]);
 const eur=fx>0?net/fx:null;
 const target=expectedMin(uid,S.repYm)/60;
 return{cfg,pm,hours,cur,set,base,net,eur,fx,target,util:target?hours/target:null};
}
function payrollHtml(){
 const ym=S.repYm;ensurePayMonth(ym);const d=repData(ym);
 const head=`<div class="view-head"><h2>${esc(t('payTitle'))}</h2>${monthNav('rep-month',ym)}<button class="btn" data-act="rep-refresh">↻ ${esc(t('refresh'))}</button><button class="btn" data-act="pay-export" ${!d?'disabled':''}>⤓ ${esc(t('export'))}</button><div class="sub lock-note"><span class="pill acc">● ${esc(t('finOnly'))}</span>${esc(t('payPrivate'))}</div></div>`;
 if(!d)return head+`<div class="loading">${esc(t('loading'))}</div>`;
 const fx=S.pay.fx||{};
 const fxBox=`<section class="sheet"><div class="sheet-h"><h3>${esc(t('fx'))}</h3><span class="muted" style="font-size:12.5px">${esc(t('fxNote'))}</span></div><div class="sheet-b"><div class="frow">${CURS.filter(c=>c!=='EUR').map(c=>`<label class="f"><span class="code">1 EUR = ? ${c}</span><input class="in num" inputmode="decimal" id="fx-${c}" data-fx="${c}" value="${esc(fx[c]??'')}" placeholder="0"></label>`).join('')}</div></div></section>`;
 const uids=[...new Set([...Object.keys(S.members),...d.people.map(p=>p.uid)])];
 const sums={};for(const p of d.people)sums[p.uid]=p;
 let totEur=0,paidEur=0;const costByP={};let missing=false;
 const rows=uids.filter(u=>(S.members[u]||{}).active!==false||(sums[u]&&sums[u].total)).map(u=>{
  const s=sums[u]||{total:0,byP:{},days:0};const c=payCalc(u,s);
  if(c.set&&c.eur==null)missing=true;
  if(c.eur!=null&&c.set){totEur+=c.eur;if(c.pm.paid)paidEur+=c.eur;if(s.total)for(const[pid,m]of Object.entries(s.byP))costByP[pid]=(costByP[pid]||0)+c.eur*m/s.total}
  const typeTxt=c.set?`${esc(t(c.cfg.type))} · ${money(num(c.cfg.amount),c.cur)}${c.cfg.type==='hourly'?'/'+esc(t('hrsUnit')):''}`:`<span class="muted">${esc(t('notSet'))}</span>`;
  return `<tr>
   <td><div class="who">${avatar(u)}<div><div class="nm">${esc(memberName(u))}</div><div class="rl">${typeTxt}</div></div></div></td>
   <td class="n">${hm(s.total)}</td>
   <td class="n">${c.util==null?'—':`<span class="${c.util>1.05?'over':''}">${Math.round(c.util*100)}%</span>`}</td>
   <td class="n">${c.set?money(c.base,c.cur):'—'}</td>
   <td class="n"><input class="in num" style="width:96px" inputmode="decimal" id="pb-${esc(u)}" data-pay="bonus" data-uid="${esc(u)}" value="${esc(c.pm.bonus??'')}" placeholder="0"></td>
   <td class="n"><input class="in num" style="width:96px" inputmode="decimal" id="pd-${esc(u)}" data-pay="deduction" data-uid="${esc(u)}" value="${esc(c.pm.deduction??'')}" placeholder="0"></td>
   <td class="n"><b>${c.set?money(c.net,c.cur):'—'}</b></td>
   <td class="n">${!c.set?'—':c.eur==null?`<span class="pill warn">${esc(t('fxMissing'))}</span>`:money(c.eur,'EUR')}</td>
   <td style="text-align:center"><input type="checkbox" id="pp-${esc(u)}" data-pay="paid" data-uid="${esc(u)}" ${c.pm.paid?'checked':''} aria-label="${esc(t('paid'))}" style="width:18px;height:18px;accent-color:var(--accent)"></td>
   <td style="white-space:nowrap"><button class="btn sm" data-act="edit-pay" data-id="${esc(u)}">${esc(t('setPay'))}</button> <button class="btn sm" data-act="payslip" data-id="${esc(u)}" ${c.set?'':'disabled'}>⎙ ${esc(t('payslip'))}</button></td>
  </tr>`}).join('');
 const projCost=Object.entries(costByP).sort((a,b)=>b[1]-a[1]);
 const kp=`<div class="kpis">
  <div class="kpi"><span class="v">${money(totEur,'EUR')}</span><span class="l">${esc(t('payTotal'))}</span></div>
  <div class="kpi"><span class="v">${money(paidEur,'EUR')}</span><span class="l">${esc(t('paidTotal'))}</span></div>
  <div class="kpi"><span class="v">${money(totEur-paidEur,'EUR')}</span><span class="l">${esc(t('unpaidTotal'))}</span></div>
  <div class="kpi"><span class="v">${d.total?money(totEur/(d.total/60),'EUR'):'—'}</span><span class="l">${esc(t('costHr'))}</span></div>
 </div>`;
 return head+`<div class="stack">${kp}
  <section class="sheet"><div class="sheet-h"><h3>${esc(fmtYm(ym))}</h3>${missing?`<span class="pill warn">${esc(t('fxMissing'))}</span>`:''}</div><div class="tbl-wrap"><table class="t">
   <thead><tr><th>${esc(t('employee'))}</th><th class="n">${esc(t('hours'))}</th><th class="n">${esc(t('util'))}</th><th class="n">${esc(t('base'))}</th><th class="n">${esc(t('bonus'))}</th><th class="n">${esc(t('deduction'))}</th><th class="n">${esc(t('net'))}</th><th class="n">${esc(t('netEur'))}</th><th>${esc(t('paid'))}</th><th></th></tr></thead>
   <tbody>${rows}<tr class="total"><td>Σ</td><td class="n">${hm(d.total)}</td><td></td><td></td><td></td><td></td><td></td><td class="n">${money(totEur,'EUR')}</td><td></td><td></td></tr></tbody></table></div></section>
  ${fxBox}
  <section class="sheet"><div class="sheet-h"><h3>${esc(t('laborCost'))}</h3></div>${projCost.length?`<div class="tbl-wrap"><table class="t"><thead><tr><th>${esc(t('project'))}</th><th class="n">${esc(t('hours'))}</th><th class="n">${esc(t('cost'))}</th><th class="n">${esc(t('share'))}</th></tr></thead><tbody>
   ${projCost.map(([pid,c])=>`<tr><td>${pChip(pid)}</td><td class="n">${hm(d.byP[pid]||0)}</td><td class="n">${money(c,'EUR')}</td><td class="n">${pct(c,totEur)}%</td></tr>`).join('')}</tbody></table></div>`:`<div class="empty">${esc(t('noData'))}</div>`}</section>
 </div>`;
}
function exportPayroll(){
 const ym=S.repYm;const d=repData(ym);if(!d)return;const sums={};for(const p of d.people)sums[p.uid]=p;
 const rows=[[t('employee'),t('country'),t('hours'),t('payType'),t('amount'),t('currency'),t('base'),t('bonus'),t('deduction'),t('net'),t('netEur'),t('paid')]];
 for(const u of new Set([...Object.keys(S.members),...Object.keys(sums)])){const s=sums[u]||{total:0,byP:{}};const c=payCalc(u,s);const m=S.members[u]||{};
  rows.push([memberName(u),m.country?t(m.country):'',h1(s.total),c.set?t(c.cfg.type):'',c.cfg.amount||'',c.cur,c.set?c.base.toFixed(2):'',num(c.pm.bonus),num(c.pm.deduction),c.set?c.net.toFixed(2):'',c.eur!=null&&c.set?c.eur.toFixed(2):'',c.pm.paid?'✓':''])}
 exportCsv(`TECTOVA-payroll-${ym}.csv`,rows);
}
function savePayMonth(uid,field,val){
 const ym=S.payMonth.ym;const items=clone(S.payMonth.items||{});items[uid]=Object.assign({},items[uid],{[field]:val});S.payMonth.items=items;schedule();
 return guard(api('pay_month_save',{ym,userId:uid,field,value:val}));
}
function saveFx(cur,rate){S.pay.fx=Object.assign({},S.pay.fx,{[cur]:rate});schedule();return guard(api('fx_save',{currency:cur,rate}))}


/* ---------- weekly approval: employee side ---------- */
function weekStripHtml(ym,items,wk,cc){
 const[a,b]=monthRange(ym);const today=dateKey(new Date());const weeks=[];
 for(let ws=weekStartOf(a,cc);ws<=b;ws=addDays(ws,7))weeks.push(ws);
 const rows=weeks.map(ws=>{const we=addDays(ws,6);const mins=items.filter(e=>e.date>=ws&&e.date<=we).reduce((s,e)=>s+e.minutes,0);const w=wk[ws];const st=w?w.status:null;
  const can=ws<=today&&(!st||st==='rejected')&&!S.readOnly&&mins>0;
  return `<div class="wk"><div class="wk-d"><span>${esc(fmtRange(ws,we))}</span>${st==='rejected'&&w.note?`<span class="muted wk-note">${esc(w.note)}</span>`:''}</div><b class="dur">${hm(mins)}</b>${stPill(st)}${can?`<button class="btn sm" data-act="week-submit" data-ws="${ws}">${esc(t('submitWeek'))}</button>`:'<span></span>'}</div>`}).join('');
 return `<section class="sheet"><div class="sheet-h"><h3>${esc(t('weeksTitle'))}</h3></div><div class="wks">${rows}</div></section>`;
}

/* ---------- approvals tab ---------- */
async function loadApprovals(force){if(S.approvals&&!force&&!S.approvals.err)return;S.approvals={loading:true};try{const d=await api('approvals_list');S.approvals={items:d.items}}catch(e){S.approvals={err:true};writeErr(e)}schedule()}
function approvalsHtml(){
 if(!S.approvals)loadApprovals();
 const head=`<div class="view-head"><h2>${esc(t('tabApprovals'))}</h2><button class="btn" data-act="appr-load">↻ ${esc(t('refresh'))}</button><div class="sub">${esc(t('approvalsNote'))}</div></div>`;
 if(!S.approvals||S.approvals.loading)return head+`<div class="loading">${esc(t('loading'))}</div>`;
 const items=S.approvals.items||[];const pend=items.filter(x=>x.status==='submitted');const done=items.filter(x=>x.status!=='submitted');
 const row=x=>{const byP=Object.entries(x.byP||{}).sort((a,b)=>b[1]-a[1]);
  return `<div class="appr"><div class="who">${avatar(x.userId)}<div><div class="nm">${esc(memberName(x.userId))}</div><div class="rl">${esc(fmtRange(x.weekStart,x.weekEnd))}</div></div></div>
   <div class="appr-p">${byP.map(([pid,m])=>`<span class="chip"><i class="sw" style="background:${esc(pColor(pid))}"></i><span class="t">${esc(pLabel(pid))}</span><b class="code">${hm(m)}</b></span>`).join('')||'<span class="muted">0:00</span>'}</div>
   <b class="dur">${hm(x.minutes)}</b>
   <div class="appr-a">${x.status==='submitted'?`<button class="btn sm primary" data-act="appr-approve" data-id="${esc(x.userId)}" data-ws="${x.weekStart}">${esc(t('approve'))}</button><button class="btn sm" data-act="appr-reject" data-id="${esc(x.userId)}" data-ws="${x.weekStart}">${esc(t('reject'))}</button>`:`${stPill(x.status)}${x.note?`<span class="muted wk-note">${esc(x.note)}</span>`:''}${x.status==='approved'&&pm('approve')?`<button class="btn sm ghost" data-act="appr-reject" data-id="${esc(x.userId)}" data-ws="${x.weekStart}">${esc(t('reopen'))}</button>`:''}`}</div></div>`};
 const lp=S.leaves.filter(l=>canDecideLeave(l)).length;
 return head+`<div class="stack">
  ${lp?`<button class="note-box" data-go="leave" style="text-align:start;cursor:pointer;background:none;font:inherit"><b>${esc(t('leavesWaiting'))}: ${lp}</b></button>`:''}
  <section class="sheet"><div class="sheet-h"><h3>${esc(t('pendingApprovals'))}</h3><span class="code">${pend.length}</span></div>${pend.length?pend.map(row).join(''):`<div class="empty">${esc(t('noPending'))}</div>`}</section>
  ${done.length?`<section class="sheet"><div class="sheet-h"><h3>${esc(t('recentDecisions'))}</h3></div>${done.map(row).join('')}</section>`:''}
 </div>`;
}

/* ---------- leave tab ---------- */
const lvPill=st=>`<span class="pill ${({pending:'warn',lead_approved:'run',approved:'ok',rejected:'bad'})[st]||'mute'}">${esc(t(st+'St'))}</span>`;
/* Leave counts weekends and public holidays out, but not the leave itself. */
function baseWorkday(uid,dk){const m=S.members[uid]||{};return (m.workDays||[6,0,1,2,3,4]).includes(dowOf(dk))&&!isHoliday(m.country||'DE',dk)}
function leaveDays(uid,a,b,year){let n=0;for(let d=a;d<=b;d=addDays(d,1))if((!year||d.startsWith(year+'-'))&&baseWorkday(uid,d))n++;return n}
function balance(uid,year){const allow=num((S.members[uid]||{}).leaveAllowance??15);let used=0,req=0;
 for(const l of S.leaves)if(l.userId===uid&&l.kind==='annual'&&l.status!=='rejected'){const n=leaveDays(uid,l.start,l.end,year);if(l.status==='approved')used+=n;else req+=n}
 return{allow,used,req,left:allow-used-req}}
function firstApprovers(uid){const m=S.members[uid]||{};if(m.sysRole!=='employee')return[];
 const lead=m.leadId&&S.members[m.leadId];if(lead&&lead.sysRole==='lead'&&lead.active!==false)return[m.leadId];
 return[]}
function canDecideLeave(l){if(l.userId===S.uid)return false;if(l.status==='pending')return firstApprovers(l.userId).includes(S.uid);if(l.status==='lead_approved')return pm('approve');return false}
function leaveSteps(l){if(l.kind&&(S.members[l.userId]||{}).sysRole!=='employee'&&l.status!=='approved'&&l.status!=='rejected')return '';
 const s1=l.leadBy?`<span class="step ok">✓ ${esc(t('stepLead'))}: ${esc(memberName(l.leadBy))}</span>`:l.status==='pending'?`<span class="step">${esc(t('stepLead'))}</span>`:'';
 const s2=l.status==='approved'?`<span class="step ok">✓ ${esc(t('stepMgr'))}</span>`:l.status==='lead_approved'?`<span class="step">${esc(t('stepMgr'))}</span>`:'';
 return s1||s2?`<div class="steps">${s1}${s1&&s2?'<span class="muted">→</span>':''}${s2}</div>`:''}
function leaveRow(l,actions){const n=leaveDays(l.userId,l.start,l.end);
 return `<div class="lv"><div class="who">${avatar(l.userId,28)}<div><div class="nm">${esc(memberName(l.userId))}</div><div class="rl">${esc(t(l.kind))} · ${esc(fmtRange(l.start,l.end))} · ${n} ${esc(t('workdaysN'))}</div>${l.note?`<div class="muted wk-note">${esc(l.note)}</div>`:''}${leaveSteps(l)}</div></div>${lvPill(l.status)}<div class="appr-a">${actions}</div></div>`}
function leaveActions(l){
 const btn=(act,lbl,cls='')=>`<button class="btn sm ${cls}" data-act="${act}" data-id="${esc(l.id)}">${esc(t(lbl))}</button>`;
 if(l.userId===S.uid)return (l.status==='pending'||l.status==='lead_approved'||S.isOwner)?btn('leave-cancel','cancelLeave','ghost'):'';
 if(canDecideLeave(l))return btn('leave-approve','approveLeave','primary')+btn('leave-decline','declineLeave');
 if(S.isOwner&&l.status==='pending')return `<span class="muted" style="font-size:12px">${esc(t('waitingLead'))}</span>`+btn('leave-decline','declineLeave','ghost');
 if(S.isOwner)return btn('leave-cancel','delete','ghost');
 return '';
}
function balanceBox(uid,yr){const b=balance(uid,yr);
 return `<div class="kpis"><div class="kpi"><span class="v">${b.allow}</span><span class="l">${esc(t('allowanceLbl'))} ${yr}</span></div><div class="kpi"><span class="v">${b.used}</span><span class="l">${esc(t('usedLbl'))}</span></div><div class="kpi"><span class="v">${b.req}</span><span class="l">${esc(t('requestedLbl'))}</span></div><div class="kpi"><span class="v ${b.left<0?'over':''}">${b.left}</span><span class="l">${esc(t('remainingLbl'))}</span></div></div>`}
function leaveHtml(){
 const today=dateKey(new Date());const yr=new Date().getFullYear();const minStart=addDays(today,14);
 const mine=S.leaves.filter(l=>l.userId===S.uid).sort((a,b)=>b.start.localeCompare(a.start));
 const rank=l=>canDecideLeave(l)?0:(l.status==='pending'||l.status==='lead_approved')?1:2;
 const others=S.leaves.filter(l=>l.userId!==S.uid&&l.end>=addDays(today,-60)).sort((a,b)=>rank(a)-rank(b)||a.start.localeCompare(b.start));
 const form=`<section class="sheet"><div class="sheet-h"><h3>${esc(t('leaveRequest'))}</h3></div><form id="leave-form" class="sheet-b stack" style="gap:12px">
  <div class="frow"><label class="f">${esc(t('kind'))}<select class="in" id="lv-kind">${['annual','sick','unpaid','other'].map(k=>`<option value="${k}">${esc(t(k))}</option>`).join('')}</select></label>
   <label class="f">${esc(t('from'))}<input type="date" class="in" id="lv-start" required value="${S.isOwner?today:minStart}" ${S.isOwner?'':`min="${minStart}"`}></label>
   <label class="f">${esc(t('to'))}<input type="date" class="in" id="lv-end" required value="${S.isOwner?today:minStart}"></label></div>
  <label class="f">${esc(t('note'))}<input class="in" id="lv-note" maxlength="250"></label>
  <div class="muted" style="font-size:12.5px" id="lv-days"></div>
  <div class="muted" style="font-size:12.5px">${esc(t('noticeRule'))} ${S.isOwner?'':esc(t('flowNote'))}</div>
  <div><button class="btn primary" type="submit" ${S.readOnly?'disabled':''}>${esc(t('sendRequest'))}</button></div></form></section>`;
 const myList=`<section class="sheet"><div class="sheet-h"><h3>${esc(t('myLeaves'))}</h3></div>${mine.length?mine.map(l=>leaveRow(l,leaveActions(l))).join(''):`<div class="empty">${esc(t('noLeaves'))}</div>`}</section>`;
 const team=seesTeam()?`<section class="sheet"><div class="sheet-h"><h3>${esc(t('teamLeaves'))}</h3></div>${others.length?others.map(l=>leaveRow(l,leaveActions(l))).join(''):`<div class="empty">${esc(t('noLeaves'))}</div>`}</section>`:'';
 const bal=seesTeam()?`<section class="sheet"><div class="sheet-h"><h3>${esc(t('balancesTitle'))} ${yr}</h3></div><div class="tbl-wrap"><table class="t"><thead><tr><th>${esc(t('employee'))}</th><th class="n">${esc(t('allowanceLbl'))}</th><th class="n">${esc(t('usedLbl'))}</th><th class="n">${esc(t('requestedLbl'))}</th><th class="n">${esc(t('remainingLbl'))}</th></tr></thead><tbody>
  ${Object.entries(S.members).filter(([,m])=>m.active!==false).map(([u])=>{const b=balance(u,yr);return `<tr><td><div class="who">${avatar(u,24)}<span class="nm">${esc(memberName(u))}</span></div></td><td class="n">${b.allow}</td><td class="n">${b.used}</td><td class="n">${b.req}</td><td class="n ${b.left<0?'over':''}"><b>${b.left}</b></td></tr>`}).join('')}</tbody></table></div></section>`:'';
 return `<div class="view-head"><h2>${esc(t('tabLeave'))}</h2></div><div class="grid2"><div class="stack"><div class="eyebrow">${esc(t('leaveBalance'))}</div>${balanceBox(S.uid,yr)}${form}${myList}${team}</div><div class="stack">${bal}${holidaysHtml()}</div></div>`;
}
function updateLeaveForm(){const k=$('#lv-kind'),a=$('#lv-start'),b=$('#lv-end'),out=$('#lv-days');if(!k||!a||!b)return;
 const today=dateKey(new Date());if(!S.isOwner){if(k.value==='sick')a.removeAttribute('min');else a.min=addDays(today,14)}
 if(b.value<a.value)b.value=a.value;b.min=a.value;
 if(out&&a.value&&b.value){const n=leaveDays(S.uid,a.value,b.value);let txt=`${n} ${t('workdaysN')}`;if(k.value==='annual'){const left=balance(S.uid,+a.value.slice(0,4)).left;txt+=` · ${t('remainingLbl')}: ${left}`;if(n>left)txt+=` — ${t('balanceErr')}`}out.textContent=txt}}
function holidaysHtml(){
 const cc=S.holF.country||(S.members[S.uid]||{}).country||'DE';const yr=S.holF.year;
 const list=S.holidays.filter(h=>h.country===cc&&h.day.startsWith(yr+'-'));
 const years=[yr-1,yr,yr+1].map(y=>`<option${y===yr?' selected':''}>${y}</option>`).join('');
 return `<section class="sheet"><div class="sheet-h"><h3>${esc(t('holidays'))}</h3>
  <select class="in" id="hf-country" style="width:auto">${Object.keys(COUNTRIES).map(c=>`<option value="${c}"${c===cc?' selected':''}>${esc(t(c))}</option>`).join('')}</select>
  <select class="in" id="hf-year" style="width:auto">${years}</select></div>
  ${list.length?`<table class="t"><tbody>${list.map(h=>`<tr><td class="code" style="white-space:nowrap">${esc(fmtShort(h.day))}</td><td>${esc(h.name)}</td><td style="width:1%">${pm('holidays')?`<button class="btn ghost sm danger" data-act="hol-del" data-id="${esc(h.id)}" aria-label="${esc(t('delete'))}">✕</button>`:''}</td></tr>`).join('')}</tbody></table>`:`<div class="empty">${esc(t('noHolidays'))}</div>`}
  ${pm('holidays')?`<form id="hol-form" class="sheet-b stack" style="gap:10px;border-top:1px solid var(--line-2)">
   <div class="frow"><label class="f">${esc(t('date'))}<input type="date" class="in" id="hl-day" required></label><label class="f">${esc(t('holidayName'))}<input class="in" id="hl-name" required maxlength="120"></label></div>
   <div style="display:flex;gap:8px;flex-wrap:wrap"><button class="btn" type="submit">+ ${esc(t('addHoliday'))}</button>${cc==='DE'?`<button class="btn ghost" type="button" data-act="hol-seed">${esc(t('seedDE'))} ${yr}</button>`:''}</div>
   <div class="muted" style="font-size:12px">${esc(t('seedNote'))}</div></form>`:''}
 </section>`;
}
async function submitLeave(){
 const s=$('#lv-start').value,e=$('#lv-end').value;if(!s||!e)return;if(e<s){toast(t('badRange'));return}
 if(!S.isOwner&&$('#lv-kind').value!=='sick'&&s<addDays(dateKey(new Date()),14)){toast(t('noticeErr'));return}
 if(await guard(api('leave_request',{start:s,end:e,kind:$('#lv-kind').value,note:$('#lv-note').value}),t('saved')))refresh();
}
async function submitHoliday(){
 const cc=S.holF.country||(S.members[S.uid]||{}).country||'DE';
 if(await guard(api('holiday_add',{country:cc,day:$('#hl-day').value,name:$('#hl-name').value}),t('saved')))refresh();
}

/* ---------- capacity tab ---------- */
/* ---------- profitability (manager) ---------- */
async function loadProfit(){S.profit={loading:true};try{const d=await api('profit');S.profit={projects:d.projects}}catch(e){S.profit={err:true}}schedule()}
function profitHtml(ps){
 if(!S.profit)loadProfit();if(!S.payMonth.ym)ensurePayMonth(S.repYm);if(!S.profit||S.profit.loading||S.profit.err)return '';
 const fx=Object.assign({EUR:1},S.pay&&S.pay.fx||{});
 const rows=ps.map(p=>{const c=(S.profit.projects||{})[p.id]||{costEur:0,minutes:0,missing:false};const cv=num(p.contractValue);const rate=num(fx[p.contractCurrency||'EUR']);const cvE=cv&&rate?cv/rate:null;
  const margin=cvE!=null?cvE-c.costEur:null;const mp=margin!=null&&cvE?margin/cvE:null;
  return `<tr><td>${pChip(p.id)}</td><td class="n">${cv?money(cv,p.contractCurrency||'EUR'):'—'}</td><td class="n">${hm(c.minutes)}</td><td class="n">${money(c.costEur,'EUR')}${c.missing?` <span class="pill warn" title="${esc(t('costIncomplete'))}">!</span>`:''}</td>
   <td class="n ${margin!=null&&margin<0?'over':''}">${margin!=null?money(margin,'EUR'):'—'}</td><td class="n ${mp!=null&&mp<.15?'over':''}">${mp!=null?Math.round(mp*100)+'%':'—'}</td></tr>`}).join('');
 return `<section class="sheet" style="margin-bottom:16px"><div class="sheet-h"><h3>${esc(t('profitTitle'))}</h3><span class="pill acc">● ${esc(t('finOnly'))}</span></div><div class="tbl-wrap"><table class="t">
  <thead><tr><th>${esc(t('project'))}</th><th class="n">${esc(t('contract'))}</th><th class="n">${esc(t('hours'))}</th><th class="n">${esc(t('laborToDate'))}</th><th class="n">${esc(t('margin'))} €</th><th class="n">${esc(t('marginPct'))}</th></tr></thead><tbody>${rows}</tbody></table></div>
  <div class="muted" style="font-size:12px;padding:8px 16px 12px">${esc(t('profitNote'))}</div></section>`;
}

/* ---------- automation box (manager) ---------- */
function automationHtml(){
 const a=S.admin;if(!a)return '';const base=location.origin+location.pathname.replace(/[^/]*$/,'');
 const cron=base+'cron.php?key='+a.cronKey;const exp=base+'api.php?a=allocation&ym='+ymOf(new Date())+'&key='+a.exportKey;
 const row=(lbl,u)=>`<label class="f">${esc(lbl)}<span class="copyrow"><input class="in" readonly value="${esc(u)}" dir="ltr"><button type="button" class="btn sm" data-act="copy" data-copy="${esc(u)}">${esc(t('copy'))}</button></span></label>`;
 return `<section class="sheet"><div class="sheet-h"><h3>${esc(t('automation'))}</h3></div><div class="sheet-b stack" style="gap:12px">
  <div class="muted" style="font-size:13px">${esc(t('reminderAt'))} ${a.reminderHour}:00</div>
  ${a.cronKey?row(t('cronUrl'),cron):''}${row(t('exportUrl'),exp)}<div class="muted" style="font-size:12px">${esc(t('keepSecret'))}</div></div></section>`;
}
/* ---------- who can do what (shown to Admins on the Team tab) ---------- */
const PERMS=[['pm_time',1,1,1,1],['pm_myTasks',1,1,1,1],['pm_create',1,1,0,0],['pm_approve',1,1,0,0],['pm_finalLeave',1,0,0,0],['pm_reports',1,0,1,0],['pm_pay',1,0,1,0],['pm_profit',1,0,1,0],['pm_team',1,0,0,0],['pm_hol',1,0,0,0]];
function permsHtml(){
 const roles=['owner','lead','accountant','employee'];
 const count=r=>Object.values(S.members).filter(m=>m.active!==false&&(m.sysRole||'employee')===r).length;
 return `<section class="sheet"><div class="sheet-h"><h3>${esc(t('permsTitle'))}</h3></div><div class="tbl-wrap"><table class="t perms"><thead><tr><th></th>${roles.map(r=>`<th class="c">${rolePill(r)}<div class="code">${count(r)}</div></th>`).join('')}</tr></thead>
  <tbody>${PERMS.map(([k,...v])=>`<tr><td>${esc(t(k))}</td>${v.map(x=>`<td class="c">${x?'<span class="yes" aria-label="yes">✓</span>':'<span class="no" aria-label="no">—</span>'}</td>`).join('')}</tr>`).join('')}</tbody></table></div>
  <div class="muted" style="font-size:12px;padding:8px 16px 12px">${esc(t('permsNote'))}</div></section>`;
}
function selectText(el){try{el.focus();el.select()}catch(e){}}

/* ---------- task comments ---------- */
const BUBBLE='<svg width="12" height="12" viewBox="0 0 16 16" aria-hidden="true"><path fill="currentColor" d="M2 2h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H6l-3.5 3V12H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z"/></svg>';
const canComment=x=>seesTeam()||x.assignee===S.uid||x._o===S.uid;
/* ---------- v2.7: comments on tasks and projects, quick notes, notes page ---------- */
const relTime=ms=>{const d=(Date.now()-ms)/1000;const rtf=new Intl.RelativeTimeFormat(LANG==='ar'?'ar':'en',{numeric:'auto'});
 if(d<60)return rtf.format(0,'second');if(d<3600)return rtf.format(-Math.round(d/60),'minute');if(d<86400)return rtf.format(-Math.round(d/3600),'hour');if(d<86400*7)return rtf.format(-Math.round(d/86400),'day');
 return new Date(ms).toLocaleDateString(loc(),{day:'numeric',month:'short'})};
const fullTime=ms=>new Date(ms).toLocaleString(loc(),{day:'numeric',month:'short',year:'numeric',hour:'2-digit',minute:'2-digit'});
const canCommentTask=x=>!S.readOnly&&(seesTeam()||x.assignee===S.uid||x._o===S.uid);
const canCommentProject=()=>!S.readOnly;
const taskTitle=id=>(S.tasks[id]&&S.tasks[id].title)||'—';
function noteBtn(kind,id,n){return `<button type="button" class="nbtn${n?' has':''}" data-act="notes" data-kind="${kind}" data-id="${esc(id)}" title="${esc(t(n?'openNotes':'addNote'))}" aria-label="${esc(t(n?'openNotes':'addNote'))}">${BUBBLE}<span>${n||'+'}</span></button>`}
const taskNoteBtn=x=>noteBtn('task',x.id,S.commentCounts[x.id]||0);
const projNoteBtn=p=>noteBtn('project',p.id,((S.commentsP||{})[p.id]||{}).all||0);
function lastLine(l){if(!l)return'';return `<span class="nlast" title="${esc(fullTime(l.at))}">${avatar(l.userId,16)}<b>${esc(memberName(l.userId))}</b><span class="nl-b" dir="auto">${esc(l.body)}</span><span class="muted">${esc(relTime(l.at))}</span></span>`}
/* one comment, used by the dialogs and the notes page */
function noteItem(c,ctx){
 const target=ctx==='feed'?`<div class="ni-t">${pChip(c.projectId)}${c.taskId?`<button type="button" class="lnk-btn ni-task" data-act="edit-task" data-id="${esc(c.taskId)}">↳ ${esc(taskTitle(c.taskId))}</button>`:`<span class="pill acc">${esc(t('projectNote'))}</span>`}</div>`
  :(ctx==='project'&&c.taskId&&!c.parentId?`<div class="ni-t"><button type="button" class="lnk-btn ni-task" data-act="edit-task" data-id="${esc(c.taskId)}">↳ ${esc(taskTitle(c.taskId))}</button></div>`:'');
 return `<div class="cmt-i ni${c.parentId?' is-reply':''}" data-cid="${esc(c.id)}" data-who="${esc(memberName(c.userId))}"><div class="cmt-h">${avatar(c.userId,22)}<b>${esc(memberName(c.userId))}</b>${c.parentId&&ctx==='feed'?`<span class="pill mute">↪ ${esc(t('replyLbl'))}</span>`:''}<span class="muted" title="${esc(fullTime(c.at))}">${esc(relTime(c.at))}</span>
  ${canReplyTo(c)?`<button type="button" class="btn ghost sm rp-btn" data-act="cmt-reply" data-id="${esc(c.id)}">↪ ${esc(t('reply'))}</button>`:''}${c.userId===S.uid||S.isOwner?`<button type="button" class="btn ghost sm danger" data-act="cmt-del" data-id="${esc(c.id)}" aria-label="${esc(t('delete'))}">✕</button>`:''}</div>${target}<div class="spec" dir="auto">${esc(c.body)}</div></div>`;
}
/* the thread box inside the task form, project form and quick dialog */
function threadBox(kind,id,canAdd){
 return `<div class="cmts" id="cmts"><div class="eyebrow">${esc(t(kind==='project'?'projectLog':'comments'))}</div>
  ${canAdd?`<div class="cmt-add"><textarea class="in" id="cmt-body" maxlength="2000" placeholder="${esc(t(kind==='project'?'addProjectNote':'addComment'))}"></textarea><div class="cmt-add-f"><span class="muted hint">${esc(t('ctrlEnter'))}</span><button type="button" class="btn sm primary" data-act="cmt-send" data-id="${esc(id)}">${esc(t('send'))}</button></div></div>`:''}
  <div id="cmt-list" class="muted" style="font-size:13px">…</div></div>`;
}
async function loadComments(id){
 const kind=(S.modal&&S.modal.ckind)||'task';
 try{const d=await api('comments_list',undefined,kind==='project'?{project:id}:{task:id});
  if(kind==='task')S.commentCounts[id]=d.items.length;
  const el=$('#cmt-list');if(!el||!S.modal||S.modal.id!==id)return;
  el.className='ni-list';el.innerHTML=d.items.length?threadHtml(d.items,kind):`<span class="muted">${esc(t(kind==='project'?'noProjectNotes':'noComments'))}</span>`}
 catch(e){writeErr(e)}
}
async function sendComment(id){
 const ta=$('#cmt-body');const body=ta?ta.value.trim():'';if(!body)return;const kind=(S.modal&&S.modal.ckind)||'task';
 ta.disabled=true;const ok=await guard(api('comment_add',kind==='project'?{projectId:id,body}:{taskId:id,body}),t('noteSaved'));ta.disabled=false;
 if(ok){ta.value='';ta.focus();loadComments(id);S.feed=null;refresh()}
}
/* quick dialog from a card, a list row or a project card */
function notesDialog(kind,id){
 if(kind==='project'){const p=S.projects[id];if(!p)return;
  openModal(dlg(t('projectLog'),`<div class="nd-h">${pChip(id)}<span class="muted">${esc(t('projectLogHint'))}</span></div>${threadBox('project',id,canCommentProject())}`,`<button type="button" class="btn" data-act="close">${esc(t('close'))}</button>`));
 }else{const x=S.tasks[id];if(!x)return;
  openModal(dlg(t('comments'),`<div class="nd-h"><b dir="auto">${esc(x.title)}</b>${pChip(x.projectId)}<button type="button" class="lnk-btn" data-act="edit-task" data-id="${esc(id)}">${esc(t('openTask'))}</button></div>${threadBox('task',id,canCommentTask(x))}`,`<button type="button" class="btn" data-act="close">${esc(t('close'))}</button>`));
 }
 S.modal={kind:'notes',id,ckind:kind};loadComments(id);
 setTimeout(()=>{const ta=$('#cmt-body');if(ta)ta.focus()},30);
}

/* ---------- notes page ---------- */
S.nf=S.nf||{project:'',task:'',kind:'',q:'',user:''};
async function loadFeed(more){
 const f=S.nf;const prev=more&&S.feed?S.feed.items:[];
 const qy={};if(f.project)qy.project=f.project;if(f.task)qy.task=f.task;if(f.kind)qy.kind=f.kind;if(f.q.trim())qy.q=f.q.trim();if(f.user)qy.user=f.user;
 if(more&&prev.length){const rs=prev.filter(c=>!c.parentId||!prev.some(x=>x.id===c.parentId)).map(c=>+c.id);if(rs.length)qy.before=String(Math.min(...rs))}
 S.feed={items:prev,loading:true,more:false};schedule();
 try{const d=await api('comments_feed',undefined,qy);S.feed={items:prev.concat(d.items),more:d.more}}catch(e){S.feed={items:prev,err:true};writeErr(e)}
 /* while someone is typing a note the page is not re-rendered, so refresh just the list */
 if(S.tab==='notes'&&editingInMain()){const sec=$('.feed');if(sec)sec.innerHTML=feedList()}else schedule();
}
function notesSummary(){
 const f=S.nf;const P=S.commentsP||{};
 const rows=projList(true).map(p=>({p,c:P[p.id]||{own:0,all:0,last:null}})).sort((a,b)=>((b.c.last||{}).at||0)-((a.c.last||{}).at||0));
 const prow=({p,c})=>`<button type="button" class="ns-row${f.project===p.id&&!f.task?' on':''}" data-act="nf-project" data-id="${esc(p.id)}">
   <span class="ns-top">${pChip(p.id)}<span class="ns-n" title="${esc(t('projectNotes'))} / ${esc(t('taskNotes'))}"><b>${c.own}</b><span>·</span><b>${c.all-c.own}</b></span></span>${c.last?lastLine(c.last):`<span class="muted ns-none">${esc(t('noNotesYet'))}</span>`}</button>`;
 let tasksBox='';
 if(f.project){const ts=Object.entries(S.tasks).filter(([,x])=>x.projectId===f.project).map(([id,x])=>({id,...x})).sort((a,b)=>((S.commentLast[b.id]||{}).at||0)-((S.commentLast[a.id]||{}).at||0));
  tasksBox=`<section class="sheet"><div class="sheet-h"><h3>${esc(t('taskNotes'))}</h3>${pChip(f.project)}</div><div class="ns-list">${ts.map(x=>{const n=S.commentCounts[x.id]||0;return `<button type="button" class="ns-row${f.task===x.id?' on':''}" data-act="nf-task" data-id="${esc(x.id)}"><span class="ns-top"><span class="ns-tt" dir="auto">${esc(x.title)}</span><span class="ns-n"><b>${n}</b></span></span>${n?lastLine(S.commentLast[x.id]):''}</button>`}).join('')||`<div class="empty">${esc(t('noTasks'))}</div>`}</div></section>`}
 return `<section class="sheet"><div class="sheet-h"><h3>${esc(t('byProject'))}</h3><span class="muted hint">${esc(t('ownVsTasks'))}</span></div><div class="ns-list">${rows.map(prow).join('')||`<div class="empty">${esc(t('noProjects'))}</div>`}</div></section>${tasksBox}`;
}
function notesComposer(){
 const f=S.nf;const pid=f.project||'';const opts=projList();
 if(S.readOnly||!opts.length)return'';
 const taskOpts=pid?Object.entries(S.tasks).filter(([,x])=>x.projectId===pid&&x.status!=='done').map(([id,x])=>({id,...x})):[];
 return `<form class="sheet sheet-b nc" id="nc-form"><div class="frow">
   <label class="f">${esc(t('project'))}<select class="in" id="nc-project" required>${projOptions(pid)}</select></label>
   <label class="f">${esc(t('noteOn'))}<select class="in" id="nc-task"${pid?'':' disabled'}><option value="">${esc(t('onProjectItself'))}</option>${taskOpts.map(x=>`<option value="${esc(x.id)}"${f.task===x.id?' selected':''}${canCommentTask(x)?'':' disabled'}>${esc(x.title)}</option>`).join('')}</select></label></div>
  <textarea class="in" id="nc-body" maxlength="2000" required placeholder="${esc(t('writeNote'))}"></textarea>
  <div class="cmt-add-f"><span class="muted hint">${esc(t('ctrlEnter'))}</span><button type="submit" class="btn primary">${esc(t('addNoteBtn'))}</button></div></form>`;
}
function feedList(){const F=S.feed||{items:[],loading:true};
 return F.items.length?threadHtml(F.items,'feed',true):F.loading?`<div class="loading">${esc(t('loading'))}</div>`:`<div class="empty"><h4>${esc(t('noNotesYet'))}</h4><span>${esc(t('notesEmptySub'))}</span></div>`}
function notesHtml(){
 if(!S.feed)loadFeed(false);
 const f=S.nf;const F=S.feed||{items:[],loading:true};
 const people=Object.entries(S.members).filter(([,m])=>m.active!==false);
 const filt=`<div class="filters">
  <select class="in" id="nf-project"><option value="">${esc(t('allProjects'))}</option>${projList(true).map(p=>`<option value="${esc(p.id)}"${f.project===p.id?' selected':''}>${esc((p.code?p.code+' · ':'')+p.name)}</option>`).join('')}</select>
  <select class="in" id="nf-kind"><option value="">${esc(t('allNotes'))}</option><option value="project"${f.kind==='project'?' selected':''}>${esc(t('projectNotes'))}</option><option value="task"${f.kind==='task'?' selected':''}>${esc(t('taskNotes'))}</option></select>
  <select class="in" id="nf-user"><option value="">${esc(t('allPeople'))}</option>${people.map(([u,m])=>`<option value="${esc(u)}"${f.user===u?' selected':''}>${esc(m.name)}</option>`).join('')}</select>
  <input class="in" id="nf-q" placeholder="${esc(t('search'))}" value="${esc(f.q)}">
  ${f.project||f.task||f.kind||f.q||f.user?`<button type="button" class="btn ghost sm" data-act="nf-clear">${esc(t('clearTags'))}</button>`:''}</div>`;
 const scope=f.task?`<div class="nf-scope">${pChip(f.project)}<span>↳ ${esc(taskTitle(f.task))}</span><button type="button" class="btn ghost sm" data-act="nf-task" data-id="">${esc(t('wholeProject'))}</button></div>`:'';
 const list=feedList();
 return `<div class="view-head"><h2>${esc(t('tabNotes'))}</h2><div class="sub">${esc(t('notesSub'))}</div></div>
 <div class="notes-grid"><div class="stack">${notesComposer()}${filt}${scope}<section class="sheet ni-list feed">${list}</section>
  ${F.more?`<div><button type="button" class="btn" data-act="nf-more"${F.loading?' disabled':''}>${esc(t('loadMore'))}</button></div>`:''}</div>
  <div class="stack">${notesSummary()}</div></div>`;
}
async function submitNote(){
 const pid=$('#nc-project').value,tid=$('#nc-task').value,ta=$('#nc-body');const body=ta.value.trim();
 if(!pid){toast(t('errProject'));return}if(!body)return;
 ta.disabled=true;const ok=await guard(api('comment_add',tid?{taskId:tid,body}:{projectId:pid,body}),t('noteSaved'));ta.disabled=false;
 if(ok){ta.value='';S.feed=null;await refresh();renderMainNow();const b=$('#nc-body');if(b)b.focus()}
}

/* ---------- v2.8: project files and links ---------- */
const FILE_CATS=['drawings','models','contracts','reports','mail','other'];
const FILE_EXT=['pdf','dwg','dxf','ifc','rvt','rfa','nwd','nwc','bcf','bcfzip','xlsx','xls','csv','docx','doc','pptx','ppt','png','jpg','jpeg','webp','zip','rar','7z','txt','msg','eml'];
const INLINE_EXT=['pdf','png','jpg','jpeg','webp'];
const CLIP='<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 11.5l-8.2 8.2a5 5 0 0 1-7.1-7.1l8.6-8.6a3.4 3.4 0 0 1 4.8 4.8l-8.6 8.6a1.7 1.7 0 0 1-2.4-2.4l7.9-7.9"/></svg>';
const LINKIC='<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 14a4.5 4.5 0 0 0 6.4 0l3.2-3.2a4.5 4.5 0 0 0-6.4-6.4L11.8 5.8"/><path d="M14 10a4.5 4.5 0 0 0-6.4 0l-3.2 3.2a4.5 4.5 0 0 0 6.4 6.4l1.4-1.4"/></svg>';
const extOf=n=>String(n||'').split('.').pop().toLowerCase();
const fmtSize=b=>b==null?'':b<1024?b+' B':b<1048576?(b/1024).toFixed(0)+' KB':b<1073741824?(b/1048576).toFixed(1)+' MB':(b/1073741824).toFixed(2)+' GB';
const EXT_TONE={pdf:'#C9466B',dwg:'#2F7FB5',dxf:'#2F7FB5',ifc:'#3E9B6A',rvt:'#4F6BD8',rfa:'#4F6BD8',nwd:'#3E9B6A',nwc:'#3E9B6A',bcf:'#3E9B6A',bcfzip:'#3E9B6A',xlsx:'#2C7A4D',xls:'#2C7A4D',csv:'#2C7A4D',docx:'#2A5DB0',doc:'#2A5DB0',pptx:'#D08A1E',ppt:'#D08A1E',png:'#8A5BC7',jpg:'#8A5BC7',jpeg:'#8A5BC7',webp:'#8A5BC7',zip:'#6B7785',rar:'#6B7785','7z':'#6B7785'};
function fileBadge(f){if(f.kind==='link')return `<span class="fb fb-link">${LINKIC}</span>`;const e=extOf(f.name);return `<span class="fb" style="--fc:${EXT_TONE[e]||'#6B7785'}">${esc((e||'?').slice(0,4).toUpperCase())}</span>`}
/* how a file is opened; the preview page replaces these two */
const fileHref=(f,view)=>'api.php?a=file_get&id='+encodeURIComponent(f.id)+(view?'&view=1':'');
function uploadFile(pid,file,cat,onProgress){
 return new Promise((resolve,reject)=>{
  const fd=new FormData();fd.append('projectId',pid);fd.append('category',cat);if(pid==='company')fd.append('visibility',S.fVis||'all');fd.append('file',file);
  const x=new XMLHttpRequest();x.open('POST','api.php?a=file_upload');x.setRequestHeader('X-CSRF',S.csrf);x.withCredentials=true;
  x.upload.onprogress=e=>{if(e.lengthComputable)onProgress(e.loaded/e.total)};
  x.onload=()=>{let d={};try{d=JSON.parse(x.responseText)}catch(e){}if(x.status>=200&&x.status<300&&d.ok)resolve(d.item);else reject(new ApiErr(d.error||(x.status===413?'file_too_big':'upload_failed'),x.status))};
  x.onerror=()=>reject(new ApiErr('network',0));x.send(fd);
 });
}
const canDelFile=f=>!S.readOnly&&(f.userId===S.uid||S.isOwner||(f.scope==='company'&&pm('company')));
S.files=S.files||{};S.fq=S.fq||{};S.fCat=S.fCat||'drawings';S.fEdit=null;
async function loadFiles(pid,force){
 if(!pid)return;if(S.files[pid]&&!force&&!S.files[pid].err)return;
 S.files[pid]={items:(S.files[pid]||{}).items||[],loading:true};drawFiles();
 try{const d=await api('files_list',undefined,{project:pid});S.files[pid]={items:d.items};S.fileCounts[pid]=d.items.length}catch(e){S.files[pid]={items:[],err:true};writeErr(e)}
 drawFiles();
}
const filesPanel=pid=>`<div id="files-panel" data-pid="${esc(pid)}">${filesPanelInner(pid)}</div>`;
function drawFiles(){const el=$('#files-panel');if(!el)return;const pid=el.dataset.pid;
 const a=document.activeElement;const keep=a&&el.contains(a)&&/^(INPUT|SELECT|TEXTAREA)$/.test(a.tagName)?{id:a.id,v:a.value}:null;
 el.innerHTML=filesPanelInner(pid);if(keep&&keep.id){const n=document.getElementById(keep.id);if(n){n.value=keep.v;n.focus()}}}
function filesDialog(pid){const p=S.projects[pid];if(!p)return;
 openModal(dlg(t('projectFiles'),`<div class="nd-h">${pChip(pid)}<span class="muted">${esc(t('filesHint'))}</span></div>${filesPanel(pid)}`,`<button type="button" class="btn" data-act="close">${esc(t('close'))}</button>`));
 S.modal={kind:'files',id:pid};loadFiles(pid,true);
}
async function startUploads(pid,list){
 const cat=curCat(pid);const lim=S.maxUpload||Infinity;
 const q=S.fq[pid]=S.fq[pid]||[];
 for(const file of list){
  const u={name:file.name,p:0};q.push(u);
  if(!FILE_EXT.includes(extOf(file.name))&&!(pid==='company'&&CFILE_EXTRA.includes(extOf(file.name)))){u.err=t('fileTypeErr');continue}
  if(file.size>lim){u.err=t('fileTooBig');continue}
  drawFiles();
  try{const item=await uploadFile(pid,file,cat,p=>{u.p=p;drawFiles()});u.p=1;u.done=true;
   const F=S.files[pid]=S.files[pid]||{items:[]};F.items.unshift(item);S.fileCounts[pid]=(S.fileCounts[pid]||0)+1}
  catch(e){u.err=errText(e)}
  drawFiles();
 }
 drawFiles();schedule();
 setTimeout(()=>{S.fq[pid]=(S.fq[pid]||[]).filter(x=>x.err);drawFiles()},4000);
 setTimeout(()=>{S.fq[pid]=[];drawFiles()},12000);
}
async function addLink(){
 const el=$('#files-panel');if(!el)return;const pid=el.dataset.pid;const url=$('#fl-url').value.trim(),title=$('#fl-title').value.trim();
 if(!/^https?:\/\//i.test(url)){toast(t('badUrl'));return}
 try{const d=await api('link_add',{projectId:pid,url,title,category:curCat(pid),visibility:S.fVis||'all'});
  const F=S.files[pid]=S.files[pid]||{items:[]};F.items.unshift(d.item);S.fileCounts[pid]=(S.fileCounts[pid]||0)+1;
  $('#fl-url').value='';$('#fl-title').value='';toast(t('linkAdded'));drawFiles();schedule()}catch(e){writeErr(e)}
}
async function saveFileEdit(id){
 const el=$('#files-panel');const pid=el.dataset.pid;const f=(S.files[pid].items||[]).find(x=>x.id===id);if(!f)return;
 const body={id,title:$('#fe-title').value.trim(),category:$('#fe-cat').value,note:$('#fe-note').value.trim()};if(f.kind==='link')body.url=$('#fe-url').value.trim();const fv=$('#fe-vis');if(fv)body.visibility=fv.value;
 if(await guard(api('file_update',body),t('saved'))){Object.assign(f,body);S.fEdit=null;drawFiles()}
}
async function delFile(btn,id){
 if(!btn.classList.contains('armed')){btn.classList.add('armed');btn.textContent=t('confirmDel');return}
 const el=$('#files-panel');const pid=el.dataset.pid;
 if(await guard(api('file_delete',{id}),t('deleted'))){S.files[pid].items=S.files[pid].items.filter(f=>f.id!==id);S.fileCounts[pid]=Math.max(0,(S.fileCounts[pid]||1)-1);drawFiles();schedule()}
}
/* ---------- files page ---------- */
function filesHtml(){
 const ps=projList(true);if(!ps.length)return `<div class="view-head"><h2>${esc(t('tabFiles'))}</h2></div><div class="sheet"><div class="empty"><h4>${esc(t('noProjects'))}</h4></div></div>`;
 if(!S.fp||!S.projects[S.fp])S.fp=(ps.find(p=>S.fileCounts[p.id])||ps[0]).id;
 if(!S.files[S.fp])setTimeout(()=>loadFiles(S.fp),0);
 const side=`<section class="sheet"><div class="sheet-h"><h3>${esc(t('tabProjects'))}</h3></div><div class="ns-list">${ps.map(p=>`<button type="button" class="ns-row${S.fp===p.id?' on':''}" data-act="fp" data-id="${esc(p.id)}"><span class="ns-top">${pChip(p.id)}<span class="ns-n"><b>${S.fileCounts[p.id]||0}</b></span></span></button>`).join('')}</div></section>`;
 return `<div class="view-head"><h2>${esc(t('tabFiles'))}</h2><div class="sub">${esc(t('filesSub'))}</div></div>
 <div class="notes-grid"><section class="sheet sheet-b stack fpanel"><div class="nd-h">${pChip(S.fp)}</div>${filesPanel(S.fp)}</section><div class="stack">${side}</div></div>`;
}

/* ---------- v2.9: control (QC) check on tasks ---------- */
const SHIELD='<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3l7.5 2.8v5.7c0 4.4-3.2 7.9-7.5 9-4.3-1.1-7.5-4.6-7.5-9V5.8z"/><path d="M9 12l2.2 2.2L15.3 10"/></svg>';
/** Admin, the team leader who created the task, or its named reviewer. */
const canQc=x=>!S.readOnly&&!!x&&(canEditTask(x)||(!!x.reviewer&&x.reviewer===S.uid));
/** Who checks it: the named reviewer, otherwise whoever created the task. */
const qcWho=x=>x.reviewer||x._o||x.createdBy;
const qcState=x=>!x.needsQc?'':x.status==='done'?'ok':x.status==='review'?'wait':'need';
function qcBadge(x){const s=qcState(x);if(!s)return'';
 const tip=s==='ok'?t('qcPassedBy').replace('{n}',memberName(x.qcBy||qcWho(x))):s==='wait'?t('qcWaitBy').replace('{n}',memberName(qcWho(x))):t('qcNeedTip').replace('{n}',memberName(qcWho(x)));
 return `<span class="qc qc-${s}" title="${esc(tip)}">${SHIELD}<span>${esc(t(s==='ok'?'qcOk':s==='wait'?'qcWait':'qcShort'))}</span></span>`}
/** Status choices: someone who can't pass the check never sees "done" on a control task; "review" reads as "send for control". */
function stOpts(x,cur){const lock=x.needsQc&&!canQc(x);
 return STATUSES.filter(s=>!lock||s!=='done'||cur==='done').map(s=>`<option value="${s}"${s===cur?' selected':''}>${esc(t(lock&&s==='review'?'qcSendOpt':s))}</option>`).join('')}
function qcHit(x){const f=S.tf.qc||'';if(!f)return true;if(f==='qc')return !!x.needsQc;if(f==='noqc')return !x.needsQc;if(f==='wait')return !!x.needsQc&&x.status==='review';return true}
function qcFilter(){const f=S.tf.qc||'';return `<select class="in" id="tf-qc" aria-label="${esc(t('qcFilter'))}">${[['',t('qcAll')],['qc',t('qcOnly')],['wait',t('qcWaiting')],['noqc',t('qcNone')]].map(([k,l])=>`<option value="${k}"${k===f?' selected':''}>${esc(l)}</option>`).join('')}</select>`}
/** The control fields inside the task form (managers and team leaders). */
function qcFields(x){const people=Object.entries(S.members).filter(([u,m])=>(m.active!==false&&m.sysRole!=='accountant')||u===x.reviewer);
 return `<div class="qc-box"><label class="chk qc-chk"><input type="checkbox" id="tk-qc"${x.needsQc?' checked':''}> ${SHIELD}<b>${esc(t('qcNeeds'))}</b></label>
  <div class="muted qc-hint">${esc(t('qcHint'))}</div>
  <label class="f" id="tk-rev-w"${x.needsQc?'':' hidden'}>${esc(t('qcReviewer'))}<select class="in" id="tk-reviewer"><option value="">${esc(t('qcReviewerDef'))}</option>${people.map(([u,m])=>`<option value="${esc(u)}"${u===x.reviewer?' selected':''}>${esc(m.name)}</option>`).join('')}</select></label></div>`}
/** State of the check, plus pass / return buttons for whoever may decide. */
function qcPanel(x,id){
 if(!id||!x.needsQc)return'';const s=qcState(x);const who=memberName(qcWho(x));
 const line=s==='ok'?`<span class="qc qc-ok">${SHIELD}<span>${esc(t('qcOk'))}</span></span> ${esc(t('qcPassedBy').replace('{n}',memberName(x.qcBy||qcWho(x))))}${x.qcAt?` · <span dir="ltr">${esc(new Date(x.qcAt).toLocaleDateString(loc(),{day:'numeric',month:'short'}))}</span>`:''}`
  :s==='wait'?`<span class="qc qc-wait">${SHIELD}<span>${esc(t('qcWait'))}</span></span> ${esc(t('qcWaitBy').replace('{n}',who))}`
  :`<span class="qc qc-need">${SHIELD}<span>${esc(t('qcShort'))}</span></span> ${esc(t('qcNeedTip').replace('{n}',who))}`;
 const decide=canQc(x)&&s==='wait';
 return `<div class="qc-panel qc-p-${s}"><div class="qc-line">${line}</div>
  ${decide?`<textarea class="in" id="qc-note" maxlength="2000" placeholder="${esc(t('qcNotePh'))}"></textarea>
  <div class="qc-acts"><button type="button" class="btn ok-btn" data-act="qc-ok" data-id="${esc(id)}">✓ ${esc(t('qcPass'))}</button><button type="button" class="btn" data-act="qc-back" data-id="${esc(id)}">↩ ${esc(t('qcReturn'))}</button></div>`:''}</div>`}
async function qcDecide(id,decision,quick){
 const n=$('#qc-note');const note=quick?'':(n?n.value.trim():'');
 if(decision==='back'&&!note){toast(t('qcNoteReq'));if(n)n.focus();return}
 try{await api('task_qc',{id,decision,note});if(!quick)closeModal();toast(t(decision==='ok'?'qcPassedT':'qcReturnedT'));refresh()}catch(e){writeErr(e)}
}
function qcAct(a){
 switch(a.kind){
  case 'qc_on':return esc(t('act_qc_on'));
  case 'qc_off':return esc(t('act_qc_off'));
  case 'qc_ok':return `<span class="qc qc-ok">${SHIELD}</span> ${esc(t('act_qc_ok'))}`;
  case 'qc_back':return `${esc(t('act_qc_back'))}${a.detail?`: <b>${esc(a.detail)}</b>`:''}`;
  case 'reviewer':return a.detail?`${esc(t('act_reviewer'))} <b>${esc(memberName(a.detail))}</b>`:esc(t('act_reviewer_def'));
 }
 return'';
}

/* ---------- v2.9: home page ---------- */
const HM_DESC={clients:'hm_clients',company:'hm_company',planner:'hm_planner',org:'hm_org',timer:'hm_timer',tasks:'hm_tasks',projects:'hm_projects',files:'hm_files',notes:'hm_notes',tags:'hm_tags',leave:'hm_leave',team:'hm_team',approvals:'hm_approvals',capacity:'hm_capacity',reports:'hm_reports',payroll:'hm_payroll'};
/** Late for the engineer: past due and still being worked on. A task waiting for control is the checker's wait, not the engineer's delay. */
const lateEng=(x,tk)=>!!x.due&&x.due<tk&&(x.status==='todo'||x.status==='doing');
function homeHtml(){
 const tk=todayK(),wk=addDays(tk,7),team=seesTeam();
 const all=Object.entries(S.tasks).map(([id,x])=>({...x,id}));
 const scope=team?all.filter(leadSees):all.filter(x=>x.assignee===S.uid);
 const open=scope.filter(x=>x.status!=='done');
 const late=open.filter(x=>lateEng(x,tk));
 const qcMine=all.filter(x=>x.needsQc&&x.status==='review'&&canQc(x)&&x.assignee!==S.uid).sort(byPrioDue);
 const qcAll=team?scope.filter(x=>x.needsQc&&x.status==='review'):qcMine;
 const weekAgo=Date.now()-7*864e5;const done7=scope.filter(x=>x.status==='done'&&x.doneAt&&x.doneAt>=weekAgo).length;
 const projs=projList();const active=projs.filter(p=>p.status==='active');
 const me=S.members[S.uid]||{};const first=String(me.name||'').trim().split(/\s+/)[0]||'';
 const myOpen=all.filter(x=>x.assignee===S.uid&&x.status!=='done').length;
 const fileTotal=Object.values(S.fileCounts||{}).reduce((a,b)=>a+b,0);
 const cnt={tasks:myOpen,projects:active.length,files:fileTotal,approvals:S.pending||0};
 const run=myE().running;
 /* hero */
 const hero=`<div class="hm-hero"><div><div class="eyebrow">${esc(fmtDay(tk))}</div><h2>${esc(t('hmHello').replace('{n}',first))}</h2>
   <div class="sub">${esc(late.length?t(team?'hmSubLateTeam':'hmSubLate').replace('{n}',late.length):t(team?'hmSubOkTeam':'hmSubOk'))}</div></div>
  <div class="hm-quick">${run?`<button type="button" class="btn run" data-go="timer"><span class="dot"></span> <span data-tick="${run.start}" dir="ltr">${clock(srvNow()-run.start)}</span></button>`:`<button type="button" class="btn" data-go="timer">▶ ${esc(t('hmStartTimer'))}</button>`}
   ${canAddTasks()&&!S.readOnly?`<button type="button" class="btn primary" data-act="new-task"${projList().length?'':' disabled'}>+ ${esc(t('newTask'))}</button>`:''}
   ${canAddProjects()&&!S.readOnly?`<button type="button" class="btn" data-act="new-project">+ ${esc(t('newProject'))}</button>`:''}</div></div>`;
 /* shortcuts */
 const tiles=`<nav class="hm-tiles" aria-label="${esc(t('hmShortcuts'))}">${tabsFor().filter(k=>k!=='home'&&k!=='profile').map(k=>{const c=cnt[k];
   return `<button type="button" class="hm-tile" data-go="${k}"><span class="hm-ic">${IC[k]}</span><span class="hm-tx"><b>${esc(t(tabLabel[k]))}</b><small>${esc(t(HM_DESC[k]||''))}</small></span>${c?`<span class="hm-c${k==='approvals'?' hot':''}">${c}</span>`:''}</button>`}).join('')}</nav>`;
 /* numbers */
 const kpi=(v,l,c,go)=>`<button type="button" class="kpi hm-k" ${go}><div class="v${c?' '+c:''}">${v}</div><div class="l">${esc(l)}</div></button>`;
 const kpis=`<div class="kpis hm-kpis">${kpi(active.length,t('hmActiveProj'),'','data-go="projects"')}${kpi(open.length,t(team?'hmOpenTeam':'openTasks'),'','data-act="hm-tasks"')}
  ${kpi(late.length,t('overdue'),late.length?'over':'','data-act="hm-late"')}${kpi(qcAll.length,t(team?'qcWaiting':'hmQcMine'),qcAll.length?'warn':'','data-act="hm-qc"')}${kpi(done7,t('hmDone7'),done7?'okv':'','data-act="hm-tasks"')}</div>`;
 return `<div class="hm">${pwaHomeCard()}${hero}${tiles}${kpis}
  ${homeEventsHtml()}${team?delaysHtml(all,tk,wk):myDelayHtml(all,tk)}
  ${qcMine.length?qcListHtml(qcMine):''}
  <div class="grid2 hm-g">${projOverviewHtml(projs,all,tk,team)}${upcomingHtml(open,tk,wk,team)}</div></div>`;
}
function hmTaskRow(x,tk,showWho){const d=x.due?dayDiff(x.due,tk):0;
 return `<div class="hm-t" role="button" tabindex="0" data-act="edit-task" data-id="${esc(x.id)}"><span class="ttl" dir="auto">${esc(x.title)}</span>
  <span class="row">${x.projectId?pChip(x.projectId):''}${qcBadge(x)}${showWho&&x.assignee?avatar(x.assignee,20):''}</span>
  <span class="hm-d${d>0&&lateEng(x,tk)?' over':''}">${x.due?esc(fmtShort(x.due)):''}${d>0&&lateEng(x,tk)?` · ${esc(t('hmDaysLate').replace('{n}',d))}`:''}</span></div>`}
/** Delays for each engineer: open, late, worst delay, due this week, waiting for control. */
function delaysHtml(all,tk,wk){
 const ids=new Set(Object.entries(S.members).filter(([u,m])=>m.active!==false&&m.sysRole!=='accountant'&&inMyScope(u)).map(([u])=>u));
 for(const x of all)if(x.assignee&&x.status!=='done'&&inMyScope(x.assignee))ids.add(x.assignee);
 const rows=[...ids].map(u=>{const mine=all.filter(x=>x.assignee===u&&x.status!=='done');const late=mine.filter(x=>lateEng(x,tk)).sort((a,b)=>a.due.localeCompare(b.due));
  return{u,open:mine.length,late,max:late.length?dayDiff(late[0].due,tk):0,days:late.reduce((s,x)=>s+dayDiff(x.due,tk),0),
   week:mine.filter(x=>x.due&&x.due>=tk&&x.due<=wk&&x.status!=='review').length,qc:mine.filter(x=>x.status==='review').length,
   ontime:mine.length-late.length-mine.filter(x=>x.status==='review').length}});
 rows.sort((a,b)=>b.late.length-a.late.length||b.max-a.max||b.open-a.open||memberName(a.u).localeCompare(memberName(b.u)));
 const un=all.filter(x=>!x.assignee&&lateEng(x,tk));
 const maxOpen=Math.max(1,...rows.map(r=>r.open));const totalLate=rows.reduce((s,r)=>s+r.late.length,0);
 const row=r=>{const m=S.members[r.u]||{};const away=leaveOn(r.u,tk);
  const bar=r.open?`<span class="hm-bar" title="${esc(t('hmBarTip'))}" style="--w:${Math.round(r.open/maxOpen*100)}%"><i class="b-late" style="flex:${r.late.length}"></i><i class="b-qc" style="flex:${r.qc}"></i><i class="b-ok" style="flex:${Math.max(0,r.ontime)}"></i></span>`:`<span class="muted hm-free">${esc(t('hmFree'))}</span>`;
  const head=`<span class="who">${avatar(r.u,28)}<span class="nm"><b dir="auto">${esc(memberName(r.u))}</b><small>${esc(m.discipline||'')}${m.role?' · '+esc(m.role):''}</small></span>${away?`<span class="pill mute">${esc(t('hmOnLeave'))}</span>`:''}</span>
   <span class="hm-n" title="${esc(t('openTasks'))}"><b>${r.open}</b><small>${esc(t('hmOpen'))}</small></span>
   <span class="hm-n${r.late.length?' bad':''}" title="${esc(t('overdue'))}"><b>${r.late.length}</b><small>${esc(t('hmLate'))}</small></span>
   <span class="hm-n${r.max?' bad':''}" title="${esc(t('hmWorst'))}"><b>${r.max?esc(t('hmDaysShort').replace('{n}',r.max)):'—'}</b><small>${esc(t('hmWorst'))}</small></span>
   <span class="hm-n" title="${esc(t('thisWeek'))}"><b>${r.week}</b><small>${esc(t('hmWeek'))}</small></span>
   <span class="hm-n${r.qc?' warn':''}" title="${esc(t('qcWaiting'))}"><b>${r.qc}</b><small>${esc(t('hmInQc'))}</small></span>${bar}`;
  const all2=`<button type="button" class="btn ghost sm" data-act="hm-person" data-id="${esc(r.u)}">${esc(t('hmAllTasks'))}</button>`;
  return r.late.length?`<details class="hm-p has-late"><summary>${head}<span class="hm-chev" aria-hidden="true"></span></summary><div class="hm-pl">${r.late.map(x=>hmTaskRow(x,tk,false)).join('')}<div class="hm-pa">${all2}</div></div></details>`
   :`<div class="hm-p"><div class="hm-ps">${head}<span class="hm-chev none" aria-hidden="true"></span></div></div>`};
 return `<section class="sheet hm-delays"><div class="sheet-h"><h3>${IC.capacity}<span>${esc(t('hmDelays'))}</span></h3>
   ${totalLate?`<span class="pill bad">${esc(t('hmLateTotal').replace('{n}',totalLate))}</span>`:`<span class="pill ok">${esc(t('hmNoLate'))}</span>`}</div>
  <div class="muted hm-note">${esc(t('hmDelaysHint'))}</div>
  <div class="hm-legend"><span><i class="b-late"></i>${esc(t('hmLate'))}</span><span><i class="b-qc"></i>${esc(t('hmInQc'))}</span><span><i class="b-ok"></i>${esc(t('hmOnTime'))}</span></div>
  <div class="hm-plist">${rows.map(row).join('')}
  ${un.length?`<details class="hm-p has-late"><summary><span class="who"><span class="av" style="background:var(--ink-3)">?</span><span class="nm"><b>${esc(t('unassigned'))}</b><small>${esc(t('hmUnassignedLate'))}</small></span></span><span class="hm-n bad"><b>${un.length}</b><small>${esc(t('hmLate'))}</small></span><span class="hm-chev" aria-hidden="true"></span></summary><div class="hm-pl">${un.map(x=>hmTaskRow(x,tk,false)).join('')}</div></details>`:''}
  </div></section>`;
}
function myDelayHtml(all,tk){
 const late=all.filter(x=>x.assignee===S.uid&&lateEng(x,tk)).sort((a,b)=>a.due.localeCompare(b.due));
 return `<section class="sheet hm-delays"><div class="sheet-h"><h3>${IC.capacity}<span>${esc(t('hmMyDelays'))}</span></h3>${late.length?`<span class="pill bad">${late.length}</span>`:`<span class="pill ok">${esc(t('hmNoLate'))}</span>`}</div>
  ${late.length?late.map(x=>hmTaskRow(x,tk,false)).join(''):`<div class="empty"><span>${esc(t('hmMyNoLate'))}</span></div>`}</section>`;
}
function qcListHtml(list){
 return `<section class="sheet hm-qc"><div class="sheet-h"><h3>${SHIELD}<span>${esc(t('qcForYou'))}</span></h3><span class="pill warn">${list.length}</span></div>
  ${list.map(x=>`<div class="hm-t qc-row"><span class="ttl" role="button" tabindex="0" data-act="edit-task" data-id="${esc(x.id)}" dir="auto">${esc(x.title)}</span>
   <span class="row">${x.projectId?pChip(x.projectId):''}${x.assignee?`<span class="who">${avatar(x.assignee,20)}<span class="nm">${esc(memberName(x.assignee))}</span></span>`:''}</span>
   <span class="qc-acts"><button type="button" class="btn sm ok-btn" data-act="qc-quick" data-id="${esc(x.id)}">✓ ${esc(t('qcPass'))}</button><button type="button" class="btn sm" data-act="edit-task" data-id="${esc(x.id)}">${esc(t('qcOpen'))}</button></span></div>`).join('')}</section>`;
}
function projOverviewHtml(projs,all,tk,team){
 const list=projs.filter(p=>p.status!=='closed');
 const row=p=>{const ts=all.filter(x=>x.projectId===p.id);const done=ts.filter(x=>x.status==='done').length;const late=ts.filter(x=>lateEng(x,tk)).length;const qc=ts.filter(x=>x.needsQc&&x.status==='review').length;
  const next=ts.filter(x=>x.status!=='done'&&x.due&&x.due>=tk).map(x=>x.due).sort()[0];const pc=ts.length?Math.round(done/ts.length*100):0;
  const spent=team?(S.team.p||{})[p.id]||0:0;const bud=num(p.budget);const over=bud&&spent/60>bud;
  return `<div class="hm-pr" role="button" tabindex="0" data-act="hm-proj" data-id="${esc(p.id)}">
   <span class="hm-prh">${pChip(p.id)}${p.status==='hold'?`<span class="pill warn">${esc(t('hold'))}</span>`:''}</span>
   <span class="hm-prog"><span class="hm-pb"><i style="width:${pc}%"></i></span><span class="code" dir="ltr">${done}/${ts.length}</span></span>
   <span class="hm-prm">${late?`<span class="pill bad">${late} ${esc(t('hmLate'))}</span>`:''}${qc?`<span class="qc qc-wait">${SHIELD}<span>${qc}</span></span>`:''}
    ${next?`<span class="muted">${esc(t('hmNext'))}: ${esc(fmtShort(next))}</span>`:''}${team&&(bud||spent)?`<span class="muted${over?' over':''}" dir="ltr">${h1(spent)}${bud?' / '+bud:''} ${esc(t('hrsUnit'))}</span>`:''}</span></div>`};
 return `<section class="sheet hm-projs"><div class="sheet-h"><h3>${IC.projects}<span>${esc(t('hmProjects'))}</span></h3><span class="code">${list.length}</span></div>
  ${list.map(row).join('')||`<div class="empty"><span>${esc(t('noProjects'))}</span></div>`}</section>`;
}
function upcomingHtml(open,tk,wk,team){
 const list=open.filter(x=>x.due&&x.due>=tk&&x.due<=wk).sort((a,b)=>a.due.localeCompare(b.due)||byPrioDue(a,b));
 return `<section class="sheet hm-up"><div class="sheet-h"><h3>${IC.tasks}<span>${esc(t(team?'hmUpTeam':'hmUpMine'))}</span></h3><span class="code">${list.length}</span></div>
  ${list.slice(0,10).map(x=>hmTaskRow(x,tk,team)).join('')||`<div class="empty"><span>${esc(t('hmNothingSoon'))}</span></div>`}
  ${list.length>10?`<div class="hm-pa"><button type="button" class="btn ghost sm" data-act="hm-tasks">${esc(t('hmMore').replace('{n}',list.length-10))}</button></div>`:''}</section>`;
}
/** Jumps from the home page into the task views with a filter set. */
function goTasks(view,patch){S.tf=Object.assign({project:'',person:'',q:'',hideDone:false,tags:[],qc:''},patch||{});S.tab='tasks';S.tv=view;
 try{localStorage.setItem('tdesk-tab','tasks');localStorage.setItem('tdesk-tv',view)}catch(e){}renderTabs();renderMainNow();window.scrollTo(0,0)}

/* ---------- v2.10: notifications (bell, Telegram, email) ---------- */
const BELL=svg('<path d="M6 10a6 6 0 0 1 12 0c0 4.5 1.8 6.2 2.5 7H3.5c.7-.8 2.5-2.5 2.5-7z"/><path d="M10 20a2.2 2.2 0 0 0 4 0"/>');
const TGIC='<svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M21.4 4.2 2.9 11.3c-1.3.5-1.2 1.3-.2 1.6l4.7 1.5 1.8 5.6c.2.6.4.8.8.8.4 0 .6-.2.9-.5l2.3-2.2 4.8 3.5c.9.5 1.5.2 1.7-.8l3.1-14.7c.3-1.3-.5-1.9-1.4-1.5zM8.3 14l9.6-6.1c.5-.3.9-.1.5.2l-8.1 7.3-.3 3.4z"/></svg>';
function bellBtn(){const n=S.notifUnread||0;
 return `<button type="button" class="icon-btn bell${n?' has':''}" data-act="notifs" aria-label="${esc(t('notifTitle'))}${n?' ('+n+')':''}" title="${esc(t('notifTitle'))}">${BELL}${n?`<span class="bell-n">${n>99?'99+':n}</span>`:''}</button>`}
const NIC={mom_sent:'📝',mom_action:'✅',reply:'↪️',event_invite:'📅',event_change:'🔁',event_cancel:'🚫',project_lead:'🏗',task_assigned:'📌',task_due:'📅',task_done:'✔️',qc_sent:'🛡',qc_ok:'✅',qc_back:'↩️',comment:'💬',mention:'📣',leave_req:'🏖',leave_lead:'🟡',leave_ok:'✅',leave_no:'❌',week_ok:'✅',week_no:'❌'};
/** One notification as text in the viewer's language, built from what was saved with it. */
function notifLine(n){const d=n.data||{};const by=d.by||memberName(n.actor);const b=s=>`<b dir="auto">${esc(s)}</b>`;
 const rng=d.s?` <span class="nt-d" dir="ltr">${esc(fmtShort(d.s))}${d.e&&d.e!==d.s?' – '+esc(fmtShort(d.e)):''}</span>`:'';
 const tx=k=>esc(t(k)).replace('{by}',b(by)).replace('{t}',b(d.t||'')).replace('{who}',b(d.who||by)).replace('{ws}',`<span dir="ltr">${esc(fmtShort(d.ws||''))}</span>`).replace('{due}',`<span dir="ltr">${esc(fmtShort(d.due||''))}</span>`).replace('{p}',b(d.p||''));
 let main;
 switch(n.kind){
  case 'comment':main=d.t?tx('n_comment'):tx('n_comment_p');break;
  case 'mention':main=tx('n_mention');break;
  case 'reply':main=d.t?tx('n_reply'):tx('n_reply').replace(/ (في|on) .*$/,'');break;
  default:main=T[LANG]['n_'+n.kind]||T.en['n_'+n.kind]?tx('n_'+n.kind):esc(n.kind);
 }
 const extra=d.body?`<span class="nt-q" dir="auto">«${esc(d.body)}»</span>`:d.note?`<span class="nt-q" dir="auto">${esc(d.note)}</span>`:'';
 return {main:main+(['leave_req','leave_lead','leave_ok','leave_no'].includes(n.kind)?rng:''),extra,proj:d.p||''};
}
function notifItem(n){const l=notifLine(n);
 return `<button type="button" class="nt${n.read?'':' unread'}" data-act="nt-open" data-id="${esc(n.id)}"><span class="nt-ic" aria-hidden="true">${NIC[n.kind]||'🔔'}</span>
  <span class="nt-b"><span class="nt-m">${l.main}</span>${l.extra}<span class="nt-f">${l.proj?`<span dir="auto">${esc(l.proj)}</span> · `:''}<span>${esc(ago(n.at))}</span></span></span>${n.read?'':'<i class="nt-dot" aria-hidden="true"></i>'}</button>`}
function ago(ms){const s=Math.max(0,(srvNow()-ms)/1000);if(s<60)return t('agoNow');if(s<3600)return t('agoMin').replace('{n}',Math.floor(s/60));if(s<86400)return t('agoHr').replace('{n}',Math.floor(s/3600));
 if(s<7*86400)return t('agoDay').replace('{n}',Math.floor(s/86400));return new Date(ms).toLocaleDateString(loc(),{day:'numeric',month:'short'})}
/** How the person gets notified: Telegram link and email switch. */
function notifPrefsHtml(){const g=S.tg||{};const me=S.members[S.uid]||{};
 const tg=!g.ready?`<div class="muted np-l">${esc(t(S.isOwner?'tgNotReadyAdmin':'tgNotReady'))}</div>`
  :g.linked?`<div class="np-row"><span class="np-ok">${TGIC}<span>${esc(t('tgLinked'))}</span></span>
     <label class="chk"><input type="checkbox" id="np-tg"${g.on?' checked':''}> ${esc(t('tgOn'))}</label>
     <span class="np-btns"><button type="button" class="btn sm" data-act="tg-test">${esc(t('tgTest'))}</button><button type="button" class="btn ghost sm danger" data-act="tg-unlink">${esc(t('tgUnlink'))}</button></span></div>`
  :S.tgWait?`<div class="np-row np-wait"><span>${esc(t('tgWaitTxt'))}</span><span class="np-btns"><a class="btn sm" href="${esc(S.tgWait)}" target="_blank" rel="noopener">${TGIC} ${esc(t('tgOpenAgain'))}</a><button type="button" class="btn primary sm" data-act="tg-check">${esc(t('tgDone'))}</button></span></div>`
  :`<div class="np-row"><span class="muted np-l">${esc(t('tgWhy'))}</span><button type="button" class="btn tg-btn sm" data-act="tg-link">${TGIC} ${esc(t('tgLink'))}</button></div>`;
 const mob=(S.push||{}).ready?`<div class="np-h">📱 ${esc(t('mobLbl'))}</div><div class="np-row"><span class="muted np-l">${esc((S.push.devices?t('mobOn').replace('{n}',S.push.devices):t('mobOff')))}</span><button type="button" class="btn sm" data-go="profile">${esc(t('mobSet'))}</button></div>`:'';
 return `<details class="np"${S.npOpen?' open':''}><summary>${esc(t('notifHow'))}</summary><div class="np-b">${mob}
  <div class="np-h">${TGIC} Telegram</div>${tg}
  <div class="np-h">🔔 ${esc(t('remLbl'))}</div><label class="chk"><input type="checkbox" id="np-email"${me.notify!==false?' checked':''}> ${esc(t('remOn'))}</label>
  <div class="muted np-l">${esc(t('emailWhich'))}</div></div></details>`;
}
function notifBody(){const l=S.notifs;
 if(!l)return `<div class="loading">${esc(t('loading'))}</div>`;
 return notifPrefsHtml()+(l.length?`<div class="nt-list">${l.map(notifItem).join('')}</div>`:`<div class="empty"><h4>${esc(t('notifNone'))}</h4><span>${esc(t('notifNoneSub'))}</span></div>`);
}
function drawNotifs(){const b=$('#nt-body');if(b)b.innerHTML=notifBody();if(S.screen==='app'&&S.tab==='profile'&&!editingInMain())renderMainNow()}
async function notifsDialog(){
 S.notifs=null;
 openModal(dlg(t('notifTitle'),`<div id="nt-body">${notifBody()}</div>`,`<button type="button" class="btn" data-act="nt-all">${esc(t('notifAllRead'))}</button><button type="button" class="btn primary" data-act="close">${esc(t('close'))}</button>`));
 S.modal={kind:'notifs'};
 try{const d=await api('notif_list');S.notifs=d.items||[];S.notifUnread=d.unread||0;drawNotifs();renderTop()}catch(e){writeErr(e)}
}
async function notifRead(id,all){
 try{const d=await api('notif_read',all?{all:true}:{id});S.notifUnread=d.unread||0;if(S.notifs)for(const n of S.notifs)if(all||n.id===id)n.read=true;drawNotifs();renderTop()}catch(e){writeErr(e)}
}
/** Opening a notification marks it read and goes to what it is about. */
function notifOpen(id){const n=(S.notifs||[]).find(x=>x.id===id);if(!n)return;if(!n.read)notifRead(id);const d=n.data||{};
 if(/^mom_/.test(n.kind)&&d.mid){closeModal();openMom(d.mid);return}
 if(/^event_/.test(n.kind)){closeModal();S.tab='planner';try{localStorage.setItem('tdesk-tab','planner')}catch(e){}renderTabs();renderMainNow();if(d.eid&&n.kind!=='event_cancel')openEvent(d.eid);return}
 if(n.kind==='project_lead'){closeModal();S.tab='projects';renderTabs();renderMainNow();return}
 if(n.taskId&&S.tasks[n.taskId]){closeModal();taskModal(n.taskId);return}
 const go=tab=>{closeModal();S.tab=tab;try{localStorage.setItem('tdesk-tab',tab)}catch(e){}renderTabs();renderMainNow();window.scrollTo(0,0)};
 if(n.kind==='leave_req')return go(seesTeam()?'approvals':'leave');
 if(/^leave_/.test(n.kind))return go('leave');
 if(/^week_/.test(n.kind))return go('timer');
 if((n.kind==='comment'||n.kind==='mention'||n.kind==='reply')&&d.pid&&S.projects[d.pid]){closeModal();notesDialog('project',d.pid);return}
 if(n.taskId){toast(t('notifGone'))}
}
async function tgLink(){
 const w=window.open('','_blank');
 try{const d=await api('tg_link',{});S.tgWait=d.url;if(w){w.location.href=d.url}else{location.href=d.url}S.npOpen=true;drawNotifs()}catch(e){if(w)w.close();writeErr(e)}
}
async function tgCheck(){
 try{const d=await api('tg_check',{});if(d.linked){S.tgWait=null;S.tg=Object.assign({},S.tg,{linked:true,on:true});toast(t('tgLinkedT'))}else toast(t('tgNotYet'));drawNotifs()}catch(e){writeErr(e)}
}
async function tgUnlink(){try{await api('tg_unlink',{});S.tg=Object.assign({},S.tg,{linked:false});S.tgWait=null;toast(t('saved'));drawNotifs()}catch(e){writeErr(e)}}
async function tgTest(){try{await api('tg_test',{});toast(t('tgTestSent'))}catch(e){writeErr(e)}}
async function notifPrefs(){const em=$('#np-email'),tg=$('#np-tg');const email=em?em.checked:true,on=tg?tg.checked:!!(S.tg||{}).on;
 try{await api('notif_prefs',{email,tg:on});const m=S.members[S.uid];if(m)m.notify=email;S.tg=Object.assign({},S.tg,{on});toast(t('saved'))}catch(e){writeErr(e)}}
/** Admin: Telegram bot status and the button that points the bot at this site. */
function tgAdminHtml(){const a=S.admin;if(!a||!S.isOwner)return'';const linked=Object.values(S.members).filter(m=>m.tg&&m.active!==false).length;const total=Object.values(S.members).filter(m=>m.active!==false).length;
 return `<section class="sheet"><div class="sheet-h"><h3>${TGIC}<span>${esc(t('tgAdmin'))}</span></h3>${a.tgReady?`<span class="pill ok" dir="ltr">@${esc(a.tgBot)}</span>`:`<span class="pill warn">${esc(t('tgOff'))}</span>`}</div>
  <div class="sheet-b stack" style="gap:10px">${a.tgReady?`<div class="muted" style="font-size:13px">${esc(t('tgLinkedCount').replace('{n}',linked).replace('{m}',total))}</div>
   ${a.https?`<div class="np-row"><span class="muted" style="font-size:12.5px">${esc(t('tgHookHint'))}</span><button type="button" class="btn sm" data-act="tg-setup">${esc(t('tgHook'))}</button></div>`:`<div class="muted" style="font-size:12.5px">${esc(t('tgNoHttps'))}</div>`}`
  :`<div class="muted" style="font-size:13px;white-space:pre-line">${esc(t('tgSetupSteps'))}</div>`}</div></section>`;
}
async function tgSetup(){try{await api('tg_setup',{});toast(t('tgHookOk'))}catch(e){writeErr(e)}}

/* ---------- v2.11: organisation tree ---------- */
const DCOL={ARC:'#2F7FB5',STR:'#B5652F',MEP:'#3E9B6A',COORD:'#8A5BC7',DOC:'#6B7785',PM:'#C9466B'};
const teamList=()=>Object.values(S.teams||{}).sort((a,b)=>(a.sort-b.sort)||a.name.localeCompare(b.name));
const kidsOf=pid=>teamList().filter(t=>(t.parentId||'')===(pid||''));
/** Teams a person leads and every team below them. */
function ledTeams(uid){const out=new Set();const st=teamList().filter(t=>t.leadId===uid).map(t=>t.id);
 while(st.length){const x=st.pop();if(out.has(x))continue;out.add(x);kidsOf(x).forEach(k=>st.push(k.id))}return out}
/** People a team leader is responsible for. */
function myMembers(uid){uid=uid||S.uid;const ts=ledTeams(uid);return new Set(Object.entries(S.members).filter(([u,m])=>u!==uid&&m.teamId&&ts.has(m.teamId)).map(([u])=>u))}
/** Who the viewer sees as "their people": everyone for an Admin, their engineers for a team leader. */
const inMyScope=uid=>pm('see_all')||allP()||!isLead()||uid===S.uid||myMembers().has(uid);
function teamPath(id){const out=[];let x=S.teams[id];let g=0;while(x&&g++<30){out.unshift(x.name);x=x.parentId?S.teams[x.parentId]:null}return out.join(' › ')}
function teamOptions(sel,exclude){const ex=exclude||new Set();const rows=[];
 const walk=(pid,depth)=>kidsOf(pid).forEach(t=>{if(ex.has(t.id))return;rows.push(`<option value="${esc(t.id)}"${t.id===sel?' selected':''}>${'— '.repeat(depth)}${esc(t.name)}</option>`);walk(t.id,depth+1)});
 walk('',0);return rows.join('')}
function descOf(id){const out=new Set([id]);const st=[id];while(st.length){const x=st.pop();kidsOf(x).forEach(k=>{if(!out.has(k.id)){out.add(k.id);st.push(k.id)}})}return out}
const discBadge=d=>`<span class="dbadge" style="--dc:${esc(DCOL[d]||'#6B7785')}" title="${esc(t(d))}">${esc(d)}</span>`;

function orgStats(uid,tk){const open=Object.values(S.tasks).filter(x=>x.assignee===uid&&x.status!=='done');return{open:open.length,late:open.filter(x=>lateEng(x,tk)).length}}
function orgMember(u,tk,lead){const m=S.members[u]||{};const st=orgStats(u,tk);const f=S.orgDisc;const dim=f&&m.discipline!==f;const away=leaveOn(u,tk);
 const click=seesTeam()&&inMyScope(u);
 return `<${click?'button type="button" data-act="hm-person" data-id="'+esc(u)+'"':'div'} class="om${lead?' om-lead':''}${dim?' dim':''}${u===S.uid?' me':''}" style="--dc:${esc(DCOL[m.discipline]||'#6B7785')}">
  ${avatar(u,lead?34:28)}<span class="om-t"><b dir="auto">${esc(m.name||'')}</b><small dir="auto">${esc(m.role||t(ROLE_KEY[m.sysRole]||'roleEng'))}</small></span>
  <span class="om-r">${discBadge(m.discipline||'ARC')}${away?`<span class="pill mute">${esc(t('hmOnLeave'))}</span>`:''}${st.open?`<span class="om-s${st.late?' bad':''}" title="${esc(t('openTasks'))}${st.late?' · '+esc(t('overdue'))+': '+st.late:''}">${st.open}${st.late?` · ${st.late}!`:''}</span>`:''}</span></${click?'button':'div'}>`}
function orgTeam(tm,tk,depth){
 const members=Object.entries(S.members).filter(([u,m])=>m.teamId===tm.id&&m.active!==false&&u!==tm.leadId).map(([u])=>u)
  .sort((a,b)=>(S.members[a].discipline||'').localeCompare(S.members[b].discipline||'')||memberName(a).localeCompare(memberName(b)));
 const all=[...members,...(tm.leadId?[tm.leadId]:[])];const late=all.reduce((s,u)=>s+orgStats(u,tk).late,0);const open=all.reduce((s,u)=>s+orgStats(u,tk).open,0);
 const mine=tm.leadId===S.uid||(S.members[S.uid]||{}).teamId===tm.id;const hit=S.orgDisc&&tm.discipline===S.orgDisc;
 const lead=tm.leadId&&S.members[tm.leadId]?orgMember(tm.leadId,tk,true):`<div class="om-nolead">${esc(t('orgNoLead'))}</div>`;
 const kids=kidsOf(tm.id);
 return `<li class="on"><div class="ot${mine?' mine':''}${hit?' hit':''}" style="--tc:${esc(tm.color||DCOL[tm.discipline]||'#2F7FB5')}">
  <div class="ot-h"><span class="ot-n"><b dir="auto">${esc(tm.name)}</b>${discBadge(tm.discipline)}${tm.administrative?`<span class="pill acc">${esc(t('adminDept'))}</span>`:''}${mine?`<span class="pill acc">${esc(t('orgYours'))}</span>`:''}</span>
   <span class="ot-c"><span title="${esc(t('orgMembers'))}">${IC.team}${all.length}</span><span title="${esc(t('openTasks'))}">${IC.tasks}${open}</span>${late?`<span class="bad" title="${esc(t('overdue'))}">! ${late}</span>`:''}</span>
   ${S.isOwner&&!S.readOnly?`<button type="button" class="btn ghost sm" data-act="team-edit" data-id="${esc(tm.id)}">${esc(t('edit'))}</button>`:''}</div>
  <div class="ot-l"><span class="ot-lbl">${esc(t('orgLeader'))}</span>${lead}</div>
  ${members.length?`<div class="ot-m">${members.map(u=>orgMember(u,tk,false)).join('')}</div>`:`<div class="muted ot-e">${esc(t('orgNoMembers'))}</div>`}
 </div>${kids.length?`<ul class="ok-l">${kids.map(k=>orgTeam(k,tk,depth+1)).join('')}</ul>`:''}</li>`}
function teamModal(id){
 if(!pm('team'))return;const tm=id?S.teams[id]:{name:'',discipline:'ARC',color:DCOL.ARC,leadId:'',parentId:''};if(!tm)return;
 const act=Object.entries(S.members).filter(([,m])=>m.active!==false);
 const leads=act.filter(([,m])=>m.sysRole==='lead'||m.sysRole==='owner');
 const pool=act.filter(([,m])=>m.sysRole!=='owner'&&m.sysRole!=='accountant').sort((a,b)=>(a[1].discipline||'').localeCompare(b[1].discipline||'')||a[1].name.localeCompare(b[1].name));
 const ex=id?descOf(id):new Set();
 openModal(dlg(id?t('orgEditTeam'):t('orgNewTeam'),`
  <label class="f">${esc(t('orgTeamName'))}<input class="in" id="tm-name" required maxlength="80" value="${esc(tm.name)}" placeholder="${esc(t('orgTeamPh'))}"></label>
  <div class="frow"><label class="f">${esc(t('discipline'))}<select class="in" id="tm-disc">${DISC.map(d=>`<option value="${d}"${d===tm.discipline?' selected':''}>${d} · ${esc(t(d))}</option>`).join('')}</select></label>
   <label class="f">${esc(t('color'))}<select class="in" id="tm-color">${[...new Set([tm.color,...Object.values(DCOL),...PCOLORS])].filter(Boolean).map(c=>`<option value="${c}"${c===tm.color?' selected':''} style="color:${c}">■ ${c}</option>`).join('')}</select></label></div>
  <div class="frow"><label class="f">${esc(t('orgLeader'))}<select class="in" id="tm-lead"><option value="">${esc(t('orgNoLeadOpt'))}</option>${leads.map(([u,m])=>`<option value="${esc(u)}"${u===tm.leadId?' selected':''}>${esc(m.name)} · ${esc(t(ROLE_KEY[m.sysRole]))}</option>`).join('')}</select></label>
   <label class="f">${esc(t('orgParent'))}<select class="in" id="tm-parent"><option value="">${esc(t('orgTopLevel'))}</option>${teamOptions(tm.parentId,ex)}</select></label></div>
  <div class="muted" style="font-size:12.5px">${esc(t('orgLeadHint'))}</div>
  <label class="chk"><input type="checkbox" id="tm-admin"${tm.administrative?' checked':''}> ${esc(t('tmAdmin'))}</label>
  <div class="muted" style="font-size:12px">${esc(t('tmAdminHint'))}</div>
  <fieldset class="tm-mem"><legend>${esc(t('orgMembers'))}</legend>
   ${pool.map(([u,m])=>{const other=m.teamId&&m.teamId!==id?S.teams[m.teamId]:null;return `<label class="tm-row"><input type="checkbox" class="tm-mb" value="${esc(u)}"${id&&m.teamId===id?' checked':''}>${avatar(u,22)}<span class="tm-nm" dir="auto">${esc(m.name)}</span>${discBadge(m.discipline||'ARC')}${m.sysRole==='lead'?`<span class="pill run">${esc(t('roleLeadN'))}</span>`:''}${other?`<span class="muted tm-o" dir="auto">${esc(other.name)}</span>`:''}</label>`}).join('')}
  </fieldset><div class="muted" style="font-size:12px">${esc(t('orgMoveHint'))}</div>`,footSave(id?'team-del':null)));
 S.modal={kind:'team',id};
}
const fv=id=>{const el=document.getElementById(id);return el?el.value.trim():''};
async function saveTeam(M){
 const name=fv('tm-name');if(!name)return;
 const body={id:M.id||null,name,discipline:fv('tm-disc'),color:fv('tm-color'),leadId:fv('tm-lead')||null,parentId:fv('tm-parent')||null,members:[...document.querySelectorAll('.tm-mb:checked')].map(i=>i.value),administrative:!!(document.getElementById('tm-admin')||{}).checked};
 try{await api('team_save',body)}catch(e){return dlgErr(errText(e))}
 closeModal();toast(t('saved'));refresh();
}

/* ---------- v2.12: organisation views (chart, tree, matrix, table) ---------- */
const OVIEWS=['people','chart','tree','matrix','table','skills','admin'];
const OV_LABEL={skills:'ovSkills',people:'ovPeople',admin:'ovAdmin',chart:'ovChart',tree:'ovTree',matrix:'ovMatrix',table:'ovTable'};
const OV_ICON={
 skills:'<svg width="14" height="14" viewBox="0 0 16 16" aria-hidden="true"><circle cx="3.5" cy="4" r="1.8" fill="currentColor"/><circle cx="8" cy="4" r="1.8" fill="currentColor" opacity=".55"/><circle cx="12.5" cy="4" r="1.8" fill="currentColor" opacity=".25"/><circle cx="3.5" cy="10" r="1.8" fill="currentColor" opacity=".55"/><circle cx="8" cy="10" r="1.8" fill="currentColor"/><circle cx="12.5" cy="10" r="1.8" fill="currentColor" opacity=".55"/></svg>',
 people:'<svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><circle cx="6" cy="5.5" r="2.5"/><path d="M1.5 14c.6-2.6 2.4-4 4.5-4s3.9 1.4 4.5 4"/><circle cx="11.5" cy="6" r="1.9"/><path d="M11.5 10c1.6 0 2.7 1 3.1 2.8"/></svg>',
 admin:'<svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M8 1.5l5.5 2v4.2c0 3.3-2.3 5.9-5.5 6.8-3.2-.9-5.5-3.5-5.5-6.8V3.5z"/><path d="M5.8 8l1.6 1.6 3-3"/></svg>',
 chart:'<svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><rect x="5.5" y="1.5" width="5" height="3.5" rx=".8"/><rect x="1" y="11" width="5" height="3.5" rx=".8"/><rect x="10" y="11" width="5" height="3.5" rx=".8"/><path d="M8 5v3M3.5 11V8h9v3"/></svg>',
 tree:'<svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><rect x="1.5" y="1.5" width="6" height="3" rx=".8"/><rect x="6.5" y="6.5" width="8" height="3" rx=".8"/><rect x="6.5" y="11.5" width="8" height="3" rx=".8"/><path d="M3.5 4.5V13h3M3.5 8h3"/></svg>',
 matrix:'<svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><rect x="1.5" y="1.5" width="13" height="13" rx="1.5"/><path d="M1.5 6h13M1.5 10.5h13M6 1.5v13M10.5 1.5v13"/></svg>',
 table:'<svg width="14" height="14" viewBox="0 0 16 16" aria-hidden="true"><path d="M5.5 4h9M5.5 8h9M5.5 12h9" stroke="currentColor" stroke-width="1.6"/><circle cx="2.3" cy="4" r="1.1" fill="currentColor"/><circle cx="2.3" cy="8" r="1.1" fill="currentColor"/><circle cx="2.3" cy="12" r="1.1" fill="currentColor"/></svg>'};
try{S.orgView=localStorage.getItem('tdesk-ov')||'';S.orgPeople=localStorage.getItem('tdesk-op')!=='0';S.orgZoom=+(localStorage.getItem('tdesk-oz')||1)}catch(e){S.orgPeople=true;S.orgZoom=1}
if(!OVIEWS.includes(S.orgView))S.orgView='people';
S.orgSort=S.orgSort||{k:'team',d:1};S.orgQ=S.orgQ||'';
function orgSave(){try{localStorage.setItem('tdesk-ov',S.orgView);localStorage.setItem('tdesk-op',S.orgPeople?'1':'0');localStorage.setItem('tdesk-oz',String(S.orgZoom))}catch(e){}}
const teamMembersOf=tm=>Object.entries(S.members).filter(([u,m])=>m.teamId===tm.id&&m.active!==false&&u!==tm.leadId).map(([u])=>u)
 .sort((a,b)=>(S.members[a].discipline||'').localeCompare(S.members[b].discipline||'')||memberName(a).localeCompare(memberName(b)));
const orgPeopleAll=()=>Object.entries(S.members).filter(([,m])=>m.active!==false&&m.sysRole!=='owner'&&m.sysRole!=='accountant').map(([u])=>u);
const orgLoose=()=>orgPeopleAll().filter(u=>!(S.members[u]||{}).teamId&&!teamList().some(x=>x.leadId===u));

/* --- 1. org chart: boxes from the top down, joined by lines --- */
function ocPerson(u,tk,lead,label){const m=S.members[u]||{};const st=orgStats(u,tk);const dim=S.orgDisc&&m.discipline!==S.orgDisc;const click=seesTeam()&&inMyScope(u);
 return `<${click?`button type="button" data-act="hm-person" data-id="${esc(u)}"`:'div'} class="oc-p${lead?' lead':''}${dim?' dim':''}${u===S.uid?' me':''}" style="--dc:${esc(DCOL[m.discipline]||'#6B7785')}" title="${esc((m.name||'')+' · '+(m.role||''))}">
  ${avatar(u,lead?30:22)}<span class="oc-pt"><b dir="auto">${esc(m.name||'')}</b>${label?`<small>${esc(label)}</small>`:lead?`<small>${esc(t('orgLeader'))}</small>`:`<small dir="auto">${esc(m.role||'')}</small>`}</span>${discBadge(m.discipline||'ARC')}${st.late?`<span class="oc-late" title="${esc(t('overdue'))}">${st.late}</span>`:''}</${click?'button':'div'}>`}
function ocTeam(tm,tk){
 const mem=teamMembersOf(tm);const all=[...mem,...(tm.leadId?[tm.leadId]:[])];const late=all.reduce((s,u)=>s+orgStats(u,tk).late,0);
 const mine=tm.leadId===S.uid||(S.members[S.uid]||{}).teamId===tm.id;const hit=S.orgDisc&&tm.discipline===S.orgDisc;const kids=kidsOf(tm.id);
 const box=`<div class="oc-box oc-team${mine?' mine':''}${hit?' hit':''}" style="--tc:${esc(tm.color||DCOL[tm.discipline]||'#2F7FB5')}">
   <div class="oc-th"><b dir="auto">${esc(tm.name)}</b>${discBadge(tm.discipline)}${pm('team')&&!S.readOnly?`<button type="button" class="oc-ed" data-act="team-edit" data-id="${esc(tm.id)}" aria-label="${esc(t('edit'))}" title="${esc(t('edit'))}">✎</button>`:''}</div>
   ${tm.leadId&&S.members[tm.leadId]?ocPerson(tm.leadId,tk,true):`<div class="oc-nolead">${esc(t('orgNoLeadOpt'))}</div>`}
   ${S.orgPeople?(mem.length?`<div class="oc-ms">${mem.map(u=>ocPerson(u,tk,false)).join('')}</div>`:''):`<div class="oc-sum">${mem.length?`<span class="oc-avs">${mem.slice(0,5).map(u=>avatar(u,20)).join('')}</span>`:''}<span>${esc(t('ovNEng').replace('{n}',mem.length))}</span></div>`}
   <div class="oc-f"><span>${IC.team}${all.length}</span>${late?`<span class="bad">${esc(t('hmLateTotal').replace('{n}',late))}</span>`:''}${mine?`<span class="pill acc">${esc(t('orgYours'))}</span>`:''}</div></div>`;
 return `<li>${box}${kids.length?`<ul>${kids.map(k=>ocTeam(k,tk)).join('')}</ul>`:''}</li>`;
}
function orgChartHtml(tk,root,admins,fin){
 const tops=kidsOf('');const loose=orgLoose();
 const rootBox=`<div class="oc-box oc-root"><div class="oc-th"><span class="or-logo sm">T</span><b>TECTOVA</b></div><div class="oc-ms">${admins.map(u=>ocPerson(u,tk,true,t('roleAdmin'))).join('')}${fin.map(u=>ocPerson(u,tk,false,t('orgFinance'))).join('')}</div></div>`;
 const looseBox=loose.length?`<li><div class="oc-box oc-team oc-loose"><div class="oc-th"><b>${esc(t('orgLoose'))}</b></div>${S.orgPeople?`<div class="oc-ms">${loose.map(u=>ocPerson(u,tk,false)).join('')}</div>`:`<div class="oc-sum"><span>${esc(t('ovNEng').replace('{n}',loose.length))}</span></div>`}</div></li>`:'';
 const zoom=`<div class="oc-tools"><label class="chk"><input type="checkbox" id="oc-people"${S.orgPeople?' checked':''}> ${esc(t('ovShowEng'))}</label>
  <span class="oc-z"><button type="button" class="icon-btn" data-act="oc-zoom" data-d="-1" aria-label="${esc(t('ovZoomOut'))}">−</button><span class="code" dir="ltr">${Math.round(S.orgZoom*100)}%</span><button type="button" class="icon-btn" data-act="oc-zoom" data-d="1" aria-label="${esc(t('ovZoomIn'))}">+</button><button type="button" class="btn ghost sm" data-act="oc-zoom" data-d="0">${esc(t('ovFit'))}</button></span></div>`;
 return `${zoom}<div class="oc-wrap" id="oc-wrap"><div class="oc" style="zoom:${S.orgZoom}"><ul><li>${rootBox}${tops.length||loose.length?`<ul>${tops.map(x=>ocTeam(x,tk)).join('')}${looseBox}</ul>`:''}</li></ul></div></div>
  ${tops.length?'':`<div class="sheet"><div class="empty"><h4>${esc(t('orgNoTeams'))}</h4><span>${esc(t(S.isOwner?'orgNoTeamsAdmin':'orgNoTeamsSub'))}</span></div></div>`}<p class="muted hint">${esc(t('ovChartHint'))}</p>`;
}
/** Picks a zoom that fits the whole chart in the visible width. */
function ocFit(){const w=$('#oc-wrap'),c=w&&w.querySelector('.oc');if(!c)return;S.orgZoom=1;c.style.zoom=1;const need=c.scrollWidth,have=w.clientWidth-8;
 S.orgZoom=Math.max(.4,Math.min(1,Math.floor(have/need*20)/20));orgSave();renderMainNow()}

/* --- 3. matrix: teams down the side, disciplines across --- */
function orgMatrixHtml(tk){
 const rows=[];const walk=(pid,depth)=>kidsOf(pid).forEach(tm=>{rows.push([tm,depth]);walk(tm.id,depth+1)});walk('',0);
 const loose=orgLoose();
 const used=DISC.filter(d=>orgPeopleAll().some(u=>(S.members[u]||{}).discipline===d));
 const cell=list=>list.length?list.map(u=>{const m=S.members[u]||{};const st=orgStats(u,tk);return `<span class="mx-p${u===S.uid?' me':''}" title="${esc((m.role||'')+(st.open?' · '+t('openTasks')+': '+st.open:''))}">${avatar(u,20)}<span dir="auto">${esc(m.name||'')}</span>${st.late?`<i class="oc-late">${st.late}</i>`:''}</span>`}).join(''):'<span class="mx-0">—</span>';
 const tot={};
 const tr=(label,depth,lead,people,tm)=>{const by={};if(lead&&S.members[lead]){const ld=S.members[lead].discipline||'ARC';tot[ld]=(tot[ld]||0)+1}for(const u of people){const d=(S.members[u]||{}).discipline||'ARC';(by[d]=by[d]||[]).push(u);tot[d]=(tot[d]||0)+1}
  return `<tr${tm&&((S.members[S.uid]||{}).teamId===tm.id||tm.leadId===S.uid)?' class="mine"':''}><th scope="row" style="--tc:${esc(tm?tm.color||DCOL[tm.discipline]:'var(--ink-3)')}"><span class="mx-t" style="padding-inline-start:${depth*14}px">${depth?'<i class="mx-br">•</i>':''}<b dir="auto">${esc(label)}</b>${tm?discBadge(tm.discipline):''}</span></th>
   <td class="mx-l">${lead&&S.members[lead]?`<span class="mx-p lead">${avatar(lead,22)}<span dir="auto">${esc(memberName(lead))}</span></span>`:'<span class="mx-0">—</span>'}</td>
   ${used.map(d=>`<td class="${S.orgDisc===d?'hit':''}${S.orgDisc&&S.orgDisc!==d?' dim':''}">${cell(by[d]||[])}</td>`).join('')}<td class="n">${people.length+(lead?1:0)}</td></tr>`};
 const body=rows.map(([tm,depth])=>tr(tm.name,depth,tm.leadId,teamMembersOf(tm),tm)).join('')+(loose.length?tr(t('orgLoose'),0,null,loose,null):'');
 return `<div class="sheet"><div class="tbl-wrap"><table class="t mx"><thead><tr><th>${esc(t('orgTeamLbl'))}</th><th>${esc(t('orgLeader'))}</th>${used.map(d=>`<th class="${S.orgDisc===d?'hit':''}" style="--dc:${DCOL[d]}"><span class="mx-dh"><i></i>${esc(t(d))}</span></th>`).join('')}<th class="n">${esc(t('ovTotal'))}</th></tr></thead>
  <tbody>${body||`<tr><td colspan="${used.length+3}"><div class="empty"><span>${esc(t('orgNoTeams'))}</span></div></td></tr>`}</tbody>
  <tfoot><tr><th>${esc(t('ovTotal'))}</th><td></td>${used.map(d=>`<td class="n">${tot[d]||0}</td>`).join('')}<td class="n">${Object.values(tot).reduce((a,b)=>a+b,0)}</td></tr></tfoot></table></div></div>
  <p class="muted hint">${esc(t('ovMatrixHint'))}</p>`;
}

/* --- 4. table: one row per person, sortable --- */
function orgTableHtml(tk){
 const q=S.orgQ.trim().toLowerCase();const s=S.orgSort;
 const rows=Object.entries(S.members).filter(([,m])=>m.active!==false).map(([u,m])=>{const tm=m.teamId?S.teams[m.teamId]:null;const st=orgStats(u,tk);const leads=teamList().filter(x=>x.leadId===u).map(x=>x.name);
  return{u,m,name:m.name||'',disc:m.discipline||'',team:tm?teamPath(tm.id):'',lead:m.leadId?memberName(m.leadId):'',role:t(ROLE_KEY[m.sysRole]||'roleEng'),open:st.open,late:st.late,leads}})
  .filter(r=>(!S.orgDisc||r.disc===S.orgDisc)&&(!q||(r.name+' '+r.team+' '+(r.m.role||'')+' '+r.lead).toLowerCase().includes(q)));
 const key={name:r=>r.name,disc:r=>r.disc,team:r=>r.team||'￿',lead:r=>r.lead||'￿',role:r=>r.role,open:r=>r.open,late:r=>r.late}[s.k]||(r=>r.team);
 rows.sort((a,b)=>{const x=key(a),y=key(b);return (typeof x==='number'?x-y:String(x).localeCompare(String(y)))*s.d||a.name.localeCompare(b.name)});
 const th=(k,l,cls)=>`<th class="${cls||''}"><button type="button" class="srt${s.k===k?' on':''}" data-act="ot-sort" data-k="${k}">${esc(t(l))}${s.k===k?(s.d>0?' ▲':' ▼'):''}</button></th>`;
 return `<div class="filters"><input class="in" id="ot-q" placeholder="${esc(t('ovSearch'))}" value="${esc(S.orgQ)}"><span class="muted" style="font-size:13px">${esc(t('ovCount').replace('{n}',rows.length))}</span></div>
 <div class="sheet"><div class="tbl-wrap"><table class="t otbl"><thead><tr>${th('name','name')}${th('disc','discipline')}${th('team','orgTeamLbl')}${th('lead','orgLeader')}${th('role','sysRole')}${th('open','hmOpen','n')}${th('late','hmLate','n')}</tr></thead><tbody>
 ${rows.map(r=>{const click=seesTeam()&&inMyScope(r.u);return `<tr class="${r.u===S.uid?'me':''}${click?' clk':''}"${click?` data-act="hm-person" data-id="${esc(r.u)}"`:''}>
  <td><span class="who">${avatar(r.u,26)}<span class="nm" style="display:grid;line-height:1.25"><b dir="auto">${esc(r.name)}</b><small class="muted" dir="auto" style="font-weight:400;font-size:11.5px">${esc(r.m.role||'')}</small></span></span></td>
  <td>${discBadge(r.disc||'ARC')}</td><td dir="auto">${r.team?esc(r.team):`<span class="muted">${esc(t('orgNoTeamOpt'))}</span>`}${r.leads.length?` <span class="pill run">${esc(t('ovLeads'))}: ${esc(r.leads.join('، '))}</span>`:''}</td>
  <td dir="auto">${r.lead?esc(r.lead):'<span class="muted">—</span>'}</td><td>${esc(r.role)}</td><td class="n">${r.open}</td><td class="n${r.late?' over':''}">${r.late||'—'}</td></tr>`}).join('')||`<tr><td colspan="7"><div class="empty"><span>${esc(t('ovNone'))}</span></div></td></tr>`}
 </tbody></table></div></div>`;
}

function orgHtml(){
 const tk=todayK();const act=Object.entries(S.members).filter(([,m])=>m.active!==false);
 const admins=act.filter(([,m])=>m.sysRole==='owner').map(([u])=>u);const fin=act.filter(([,m])=>m.sysRole==='accountant').map(([u])=>u);
 const counts={};for(const[,m]of act)if(m.sysRole!=='owner'&&m.sysRole!=='accountant')counts[m.discipline]=(counts[m.discipline]||0)+1;
 const n=isLead()?myMembers().size:0;if(S.orgView==='admin'&&!(S.isOwner||S.isFin||pm('team')))S.orgView='people';const v=S.orgView;
 const seg=`<div class="tv-bar"><div class="seg" role="tablist" aria-label="${esc(t('ovViews'))}">${OVIEWS.filter(k=>k!=='admin'||S.isOwner||S.isFin||pm('team')).map(k=>`<button type="button" role="tab" aria-selected="${k===v}" data-act="ov" data-v="${k}">${OV_ICON[k]}<span>${esc(t(OV_LABEL[k]))}</span></button>`).join('')}</div></div>`;
 const chips=`<div class="org-f"><span class="muted">${esc(t('orgByDisc'))}</span><button type="button" class="dchip" data-act="org-disc" data-v="" aria-pressed="${!S.orgDisc}">${esc(t('orgAll'))}</button>${DISC.filter(d=>counts[d]).map(d=>`<button type="button" class="dchip" data-act="org-disc" data-v="${d}" aria-pressed="${S.orgDisc===d}" style="--dc:${DCOL[d]}"><i></i>${esc(t(d))} <span class="code">${counts[d]}</span></button>`).join('')}</div>`;
 let body;
 if(v==='people')body=teamHtml();
 else if(v==='admin')body=teamAdminHtml();
 else if(v==='skills')body=capMatrixHtml();
 else if(v==='tree'){
  const loose=orgLoose();const tops=kidsOf('');
  const root=`<div class="org-root"><div class="or-h"><span class="or-logo">${TV_MARK}</span><span><b>TECTOVA</b><small>${esc(t('orgRoot'))}</small></span></div>
   <div class="or-g"><div><span class="ot-lbl">${esc(t('roleAdmin'))}</span><div class="or-p">${admins.map(u=>orgMember(u,tk,true)).join('')}</div></div>
   ${fin.length?`<div><span class="ot-lbl">${esc(t('orgFinance'))}</span><div class="or-p">${fin.map(u=>orgMember(u,tk,false)).join('')}</div></div>`:''}</div></div>`;
  body=`<div class="org">${root}
   ${tops.length?`<ul class="ok-l ok-top">${tops.map(x=>orgTeam(x,tk,0)).join('')}</ul>`:`<div class="sheet"><div class="empty"><h4>${esc(t('orgNoTeams'))}</h4><span>${esc(t(S.isOwner?'orgNoTeamsAdmin':'orgNoTeamsSub'))}</span></div></div>`}
   ${loose.length?`<div class="ot loose"><div class="ot-h"><span class="ot-n"><b>${esc(t('orgLoose'))}</b><span class="code">${loose.length}</span></span></div><div class="muted ot-e">${esc(t('orgLooseHint'))}</div><div class="ot-m">${loose.map(u=>orgMember(u,tk,false)).join('')}</div></div>`:''}</div>`;
 }else if(v==='matrix')body=orgMatrixHtml(tk);
 else if(v==='table')body=orgTableHtml(tk);
 else body=orgChartHtml(tk,null,admins,fin);
 return `<div class="view-head"><h2>${esc(t('tabTeam'))}</h2>${pm('team')&&!S.readOnly?`<button class="btn primary" data-act="new-member">+ ${esc(t('addMember'))}</button><button class="btn" data-act="team-new">+ ${esc(t('orgNewTeam'))}</button>`:''}
  <div class="sub">${esc(isLead()?t('orgLeadSub').replace('{n}',n):t('orgSub'))}</div></div>${seg}${v==='admin'||v==='skills'?'':chips}${body}`;
}
/** Opens the chart centred on the top of the organisation, in both reading directions. */
function ocCenter(){const w=$('#oc-wrap');if(!w)return;const k=[S.orgZoom,S.orgPeople,S.orgDisc,LANG].join('|');
 if(S._ocKey===k&&S._ocSL!=null){w.scrollLeft=S._ocSL;w.scrollTop=S._ocST||0;return}
 S._ocKey=k;const d=(w.scrollWidth-w.clientWidth)/2;if(d>0)w.scrollLeft=document.documentElement.dir==='rtl'?-d:d;S._ocSL=w.scrollLeft;S._ocST=0}
document.addEventListener('scroll',ev=>{if(ev.target&&ev.target.id==='oc-wrap'){S._ocSL=ev.target.scrollLeft;S._ocST=ev.target.scrollTop}},true);

/* ---------- v2.13: project priority, team leaders per project, clients ---------- */
const PPRIO=['urgent','high','normal','low'];
const PPRIO_RANK={urgent:0,high:1,normal:2,low:3};
const PPRIO_PILL={urgent:'bad',high:'warn',normal:'mute',low:'mute lo'};
const pprioPill=p=>{p=p||'normal';return `<span class="pill pp-${p} ${PPRIO_PILL[p]}" title="${esc(t('ppLbl'))}">${p==='urgent'?'⚑ ':''}${esc(t('pp_'+p))}</span>`};
const leadsOf=pid=>((S.projects[pid]||{}).leads||[]);
/** Projects a team leader works in: the ones the Admin assigned them to, or that they created. */
const leadProj=pid=>{const p=S.projects[pid];return !!p&&(leadsOf(pid).includes(S.uid)||p._o===S.uid)};
/** Which tasks a team leader sees: their own, their engineers', and unassigned ones in their projects. */
function leadSees(x){if(allP()||pm('see_all')||!isLead())return true;
 return x.assignee===S.uid||(!!x.assignee&&myMembers().has(x.assignee))||x._o===S.uid||(!x.assignee&&leadProj(x.projectId))}
const isOwnTask=x=>isLead()&&x.assignee===S.uid;
function scopeHit(x){const s=S.tf.scope||'';if(!s||!isLead())return true;return s==='mine'?x.assignee===S.uid:x.assignee!==S.uid}
function scopeFilter(){if(!isLead()||allP()||tkTab()==='mine')return'';const s=S.tf.scope||'';
 return `<select class="in" id="tf-scope" aria-label="${esc(t('scLbl'))}">${[['',t('scAll')],['mine',t('scMine')],['team',t('scTeam')]].map(([k,l])=>`<option value="${k}"${k===s?' selected':''}>${esc(l)}</option>`).join('')}</select>`}
const ownBadge=x=>isOwnTask(x)?`<span class="own-b">${esc(t('ownTask'))}</span>`:'';
/* clients */
const clientList=()=>Object.values(S.clients||{}).sort((a,b)=>a.name.localeCompare(b.name));
const seesClients=()=>S.isOwner||S.isFin||isLead()||pm('clients')||allP();
const canEditClients=()=>!S.readOnly&&pm('clients');
const canAddClients=()=>!S.readOnly&&(pm('clients')||isLead()||allP());
const MAILIC='<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3.5 6.5L12 13l8.5-6.5"/></svg>';
function mailHref(email,subject){return 'mailto:'+encodeURIComponent(email).replace(/%40/g,'@')+(subject?'?subject='+encodeURIComponent(subject):'')}
function clientLine(p){const c=p.clientId&&S.clients[p.clientId];if(!c)return p.client?esc(p.client):'';
 return `<span class="cl-l">${esc(c.name)}${c.email?` <a class="mail-b" href="${esc(mailHref(c.email,(p.code?p.code+' · ':'')+p.name))}" title="${esc(t('clMail'))}: ${esc(c.email)}" aria-label="${esc(t('clMail'))}">${MAILIC}</a>`:''}</span>`}
function leadsChips(pid){const l=leadsOf(pid).filter(u=>S.members[u]);if(!l.length)return'';
 return `<div class="pl-leads"><span class="muted">${esc(t('pjLeads'))}:</span>${l.map(u=>`<span class="who">${avatar(u,20)}<span class="nm" dir="auto">${esc(memberName(u))}</span></span>`).join('')}</div>`}
function clientsHtml(){
 const q=(S.clq||'').trim().toLowerCase();
 const list=clientList().filter(c=>!q||(c.name+' '+(c.contact||'')+' '+(c.email||'')+' '+(c.country||'')).toLowerCase().includes(q));
 const projOf=cid=>projList(true).filter(p=>p.clientId===cid);
 const card=c=>{const ps=projOf(c.id);
  return `<article class="ccard"><div class="cc-h"><span class="cc-av">${esc(initials(c.name))}</span><div class="cc-n"><b dir="auto">${esc(c.name)}</b>${c.contact?`<small dir="auto">${esc(c.contact)}</small>`:''}</div>
   ${canEditClients()?`<button type="button" class="btn ghost sm" data-act="cl-edit" data-id="${esc(c.id)}">${esc(t('edit'))}</button>`:''}</div>
   <div class="cc-d">${c.email?`<a class="btn sm cc-mail" href="${esc(mailHref(c.email))}">${MAILIC}<span dir="ltr">${esc(c.email)}</span></a>`:`<span class="muted">${esc(t('clNoEmail'))}</span>`}
    ${c.phone?`<a class="lnk" href="tel:${esc(c.phone.replace(/[^+\d]/g,''))}" dir="ltr">☎ ${esc(c.phone)}</a>`:''}${c.website?`<a class="lnk" href="${esc(c.website)}" target="_blank" rel="noopener noreferrer" dir="ltr">↗ ${esc(c.website.replace(/^https?:\/\//,''))}</a>`:''}${c.country?`<span class="muted">${esc(c.country)}</span>`:''}</div>
   ${c.notes?`<div class="cc-notes" dir="auto">${esc(c.notes)}</div>`:''}
   <div class="cc-p"><span class="eyebrow">${esc(t('tabProjects'))} · ${ps.length}</span>${ps.map(p=>`<span class="cc-pr">${pChip(p.id)}${pprioPill(p.priority)}${c.email?`<a class="mail-b" href="${esc(mailHref(c.email,(p.code?p.code+' · ':'')+p.name))}" title="${esc(t('clMailAbout'))}">${MAILIC}</a>`:''}</span>`).join('')||`<span class="muted">${esc(t('clNoProjects'))}</span>`}</div></article>`};
 return `<div class="view-head"><h2>${esc(t('tabClients'))}</h2>${canAddClients()?`<button class="btn primary" data-act="cl-new">+ ${esc(t('clNew'))}</button>`:''}<div class="sub">${esc(t('clSub'))}</div></div>
 <div class="filters"><input class="in" id="cl-q" placeholder="${esc(t('clSearch'))}" value="${esc(S.clq||'')}">${clientsViewSeg()}</div>
 ${list.length?(clientsAltHtml(list)||`<div class="cgrid">${list.map(card).join('')}</div>`):`<div class="sheet"><div class="empty"><h4>${esc(t(clientList().length?'noMatch':'clNone'))}</h4><span>${esc(t('clNoneSub'))}</span></div></div>`}`;
}
function clientModal(id){
 const c=id?S.clients[id]:{name:'',contact:'',email:'',phone:'',country:'',website:'',notes:''};if(!c)return;
 const used=id?projList(true).filter(p=>p.clientId===id).length:0;
 openModal(dlg(id?t('clEdit'):t('clNew'),`
  <label class="f">${esc(t('clName'))}<input class="in" id="cl-name" required maxlength="160" value="${esc(c.name)}" placeholder="${esc(t('clNamePh'))}"></label>
  <div class="frow"><label class="f">${esc(t('clContact'))}<input class="in" id="cl-contact" maxlength="120" value="${esc(c.contact||'')}"></label>
   <label class="f">${esc(t('email'))}<input class="in" id="cl-email" type="email" maxlength="190" dir="ltr" value="${esc(c.email||'')}" placeholder="name@company.com"></label></div>
  <div class="frow"><label class="f">${esc(t('clPhone'))}<input class="in" id="cl-phone" maxlength="60" dir="ltr" value="${esc(c.phone||'')}" placeholder="+966 …"></label>
   <label class="f">${esc(t('clCountry'))}<input class="in" id="cl-country" maxlength="80" value="${esc(c.country||'')}"></label></div>
  <label class="f">${esc(t('clWebsite'))}<input class="in" id="cl-web" maxlength="300" dir="ltr" value="${esc(c.website||'')}" placeholder="https://"></label>
  <label class="f">${esc(t('note'))}<textarea class="in" id="cl-notes" maxlength="2000">${esc(c.notes||'')}</textarea></label>
  ${used?`<div class="muted" style="font-size:12.5px">${esc(t('clUsed').replace('{n}',used))}</div>`:''}`,footSave(id&&!used&&canEditClients()?'cl-del':null)));
 S.modal={kind:'client',id};
}
async function saveClient(M){
 const g=i=>{const e=document.getElementById(i);return e?e.value.trim():''};const name=g('cl-name');if(!name)return;
 const body={id:M.id||null,name,contact:g('cl-contact'),email:g('cl-email'),phone:g('cl-phone'),country:g('cl-country'),website:g('cl-web'),notes:g('cl-notes')};
 try{const r=await api('client_save',body);closeModal();toast(t('saved'));await refresh();if(M.after)M.after(r.id)}catch(e){dlgErr(errText(e))}
}
/** Quick add from the project form without leaving it. */
async function quickClient(){
 const i=$('#pj-newclient');const name=i?i.value.trim():'';if(!name)return;
 try{const r=await api('client_save',{name});S.clients[r.id]={id:r.id,name};const sel=$('#pj-clientid');if(sel){sel.add(new Option(name,r.id));sel.value=r.id}i.value='';toast(t('clAdded'))}catch(e){writeErr(e)}
}

/* ---------- v2.13: replies to comments ---------- */
/** Comments with their replies right under them, oldest reply first. */
function threadOrder(items){
 const ids=new Set(items.map(c=>c.id));const roots=[],kids={};
 for(const c of items){if(c.parentId&&ids.has(c.parentId))(kids[c.parentId]=kids[c.parentId]||[]).push(c);else roots.push(c)}
 for(const k in kids)kids[k].sort((a,b)=>a.at-b.at||(+a.id)-(+b.id));
 return {roots,kids};
}
function replyBox(id){return `<div class="rp-box" id="rp-${esc(id)}"><textarea class="in rp-ta" maxlength="2000" placeholder="${esc(t('replyPh'))}"></textarea><div class="cmt-add-f"><button type="button" class="btn ghost sm" data-act="rp-cancel" data-id="${esc(id)}">${esc(t('cancel'))}</button><button type="button" class="btn primary sm" data-act="rp-send" data-id="${esc(id)}">${esc(t('reply'))}</button></div></div>`}
function openReply(id){document.querySelectorAll('.rp-box').forEach(b=>b.remove());const el=document.querySelector(`.ni[data-cid="${CSS.escape(id)}"]`);if(!el)return;
 el.insertAdjacentHTML('beforeend',replyBox(id));const ta=el.querySelector('.rp-ta');if(ta){const who=el.dataset.who;if(who)ta.value='@'+who.split(/\s+/)[0]+' ';ta.focus();ta.setSelectionRange(ta.value.length,ta.value.length)}}
async function sendReply(id){
 const box=$('#rp-'+CSS.escape(id));const ta=box&&box.querySelector('.rp-ta');const body=ta?ta.value.trim():'';if(!body)return;
 ta.disabled=true;const ok=await guard(api('comment_add',{parentId:id,body}),t('replySent'));ta.disabled=false;
 if(ok){box.remove();if(S.modal&&(S.modal.kind==='notes'||S.modal.kind==='task'||S.modal.kind==='task-status'||S.modal.kind==='project'))loadComments(S.modal.id);S.feed=null;if(S.tab==='notes')loadFeed(false);refresh()}
}

/* ---------- v2.13: share of hours per engineer and project ---------- */
S.ws=S.ws||{period:'month',view:'eng',data:null,key:''};
function wsRange(p){const d=new Date();const k=dateKey(d);
 switch(p){case 'month':return[k.slice(0,8)+'01',k];case 'last':{const[a,b]=monthRange(shiftYm(ymOf(d),-1));return[a,b]}
  case 'q':return[monthRange(shiftYm(ymOf(d),-2))[0],k];case 'year':return[k.slice(0,4)+'-01-01',k];default:return['2000-01-01',k]}}
async function loadSplit(){const[a,b]=wsRange(S.ws.period);const key=S.ws.period+a+b;S.ws.key=key;S.ws.data=null;
 try{const d=await api('work_split',undefined,{from:a,to:b});if(S.ws.key===key){S.ws.data=d.items;schedule()}}catch(e){writeErr(e)}}
function workSplitHtml(){
 const W=S.ws;if(!W.data&&!W.loading){W.loading=true;loadSplit().finally(()=>{W.loading=false})}
 const items=W.data||[];const byU={},byP={};
 for(const r of items){(byU[r.u]=byU[r.u]||{})[r.p]=r.m;(byP[r.p]=byP[r.p]||{})[r.u]=r.m}
 const tot=o=>Object.values(o).reduce((a,b)=>a+b,0);const pct=(m,T)=>T?Math.round(m/T*1000)/10:0;
 const seg=(entries,T,colorOf,label)=>`<div class="ws-bar">${entries.map(([k,m])=>`<i style="flex:${m};background:${esc(colorOf(k))}" title="${esc(label(k))}: ${pct(m,T)}% · ${h1(m)} ${esc(t('hrsUnit'))}"></i>`).join('')}</div>
   <div class="ws-leg">${entries.map(([k,m])=>`<span><i style="background:${esc(colorOf(k))}"></i><span dir="auto">${esc(label(k))}</span><b dir="ltr">${pct(m,T)}%</b><small dir="ltr">${h1(m)}h</small></span>`).join('')}</div>`;
 let rows='';
 if(W.view==='eng'){
  rows=Object.keys(byU).sort((a,b)=>tot(byU[b])-tot(byU[a])).map(u=>{const T=tot(byU[u]);const ent=Object.entries(byU[u]).sort((a,b)=>b[1]-a[1]);
   return `<div class="ws-r"><div class="ws-h"><span class="who">${avatar(u,24)}<span class="nm" dir="auto">${esc(memberName(u))}</span></span><b dir="ltr">${h1(T)} ${esc(t('hrsUnit'))}</b></div>${seg(ent,T,pColor,pLabel)}</div>`}).join('');
 }else{
  rows=Object.keys(byP).sort((a,b)=>tot(byP[b])-tot(byP[a])).map(p=>{const T=tot(byP[p]);const ent=Object.entries(byP[p]).sort((a,b)=>b[1]-a[1]);
   return `<div class="ws-r"><div class="ws-h">${pChip(p)}${S.projects[p]?pprioPill(S.projects[p].priority):''}<b dir="ltr">${h1(T)} ${esc(t('hrsUnit'))}</b></div>${seg(ent,T,colorFor,memberName)}</div>`}).join('');
 }
 const per=[['month','wsMonth'],['last','wsLast'],['q','wsQ'],['year','wsYear'],['all','wsAll']];
 return `<section class="sheet ws"><div class="sheet-h"><h3>${esc(t('wsTitle'))}</h3>
   <div class="seg sm" role="tablist">${[['eng','wsByEng'],['proj','wsByProj']].map(([k,l])=>`<button type="button" role="tab" aria-selected="${W.view===k}" data-act="ws-view" data-v="${k}">${esc(t(l))}</button>`).join('')}</div>
   <select class="in" id="ws-period" aria-label="${esc(t('wsPeriod'))}">${per.map(([k,l])=>`<option value="${k}"${W.period===k?' selected':''}>${esc(t(l))}</option>`).join('')}</select></div>
  <div class="muted ws-n">${esc(t(W.view==='eng'?'wsEngHint':'wsProjHint'))}</div>
  <div class="ws-list">${W.data?(rows||`<div class="empty"><span>${esc(t('wsNone'))}</span></div>`):`<div class="loading">${esc(t('loading'))}</div>`}</div></section>`;
}

/* ---------- v2.13: planner (meetings and events) ---------- */
S.pl=S.pl||{ym:ymOf(new Date()),items:null,key:''};
const RSVP_IC={yes:'✓',no:'✕',maybe:'?',pending:'…'};
function plRange(){const[a,b]=monthRange(S.pl.ym);const gs=weekStartOf(a),ge=addDays(weekStartOf(b),6);const from=utc(gs).getTime()-86400000,to=utc(ge).getTime()+2*86400000;return[from,to]}
async function loadEvents(force){const[from,to]=plRange();const key=from+'-'+to;if(!force&&S.pl.key===key&&S.pl.items)return;S.pl.key=key;
 try{const d=await api('events_list',undefined,{from:Math.min(from,Date.now()-3600000),to:Math.max(to,Date.now()+30*86400000)});if(S.pl.key===key){S.pl.items=d.items;schedule()}}catch(e){writeErr(e)}}
const evById=id=>(S.pl.items||[]).find(e=>e.id===id)||(S.upcoming||[]).find(e=>e.id===id);
const myResp=e=>{const g=(e.guests||[]).find(x=>x.userId===S.uid);return e.createdBy===S.uid?'host':g?g.response:'pending'};
const evTime=e=>`${hhmm(e.start)}–${hhmm(e.end)}`;
function evChip(e){const r=myResp(e);return `<div class="ev-c ev-${r}" role="button" tabindex="0" data-act="ev-open" data-id="${esc(e.id)}" style="--pc:${esc(e.projectId?pColor(e.projectId):'var(--accent)')}" title="${esc(e.title)}"><span class="ev-t" dir="ltr">${hhmm(e.start)}</span><span dir="auto">${esc(e.title)}</span>${e.meet?'<i class="ev-m">🎥</i>':''}</div>`}
function plannerHtml(){
 if(S.plView==='mom')return momPage();
 loadEvents(false);
 const ym=S.pl.ym;const[a,b]=monthRange(ym);const tk=todayK();const gs=weekStartOf(a),ge=addDays(weekStartOf(b),6);
 const items=S.pl.items||[];const byDay={};for(const e of items){const k=dateKey(new Date(e.start));(byDay[k]=byDay[k]||[]).push(e)}
 let cells='';for(let d=gs;d<=ge;d=addDays(d,1)){const l=(byDay[d]||[]).sort((x,y)=>x.start-y.start);
  cells+=`<div class="cal-c pl-c${d<a||d>b?' out':''}${d===tk?' today':''}${dowOf(d)===5?' off':''}" data-pday="${d}"><div class="cal-d">${+d.slice(8)}</div>${l.map(evChip).join('')}</div>`}
 const now=Date.now();const up=items.filter(e=>e.end>=now).sort((x,y)=>x.start-y.start).slice(0,12);
 const waiting=items.filter(e=>e.end>=now&&myResp(e)==='pending');
 const upRow=e=>{const r=myResp(e);const d=dateKey(new Date(e.start));
  return `<div class="ev-r" role="button" tabindex="0" data-act="ev-open" data-id="${esc(e.id)}"><div class="ev-d"><b>${+d.slice(8)}</b><small>${esc(monShort(d))}</small></div>
   <div class="ev-b"><b dir="auto">${esc(e.title)}</b><span class="muted"><span dir="ltr">${evTime(e)}</span>${e.location?' · '+esc(e.location):''}${e.projectId?' · '+esc(pLabel(e.projectId)):''}</span>
   <span class="ev-g">${avatar(e.createdBy,18)}${(e.guests||[]).slice(0,6).map(g=>avatar(g.userId,18)).join('')}${(e.guests||[]).length>6?`<small>+${e.guests.length-6}</small>`:''}</span></div>
   <span class="ev-s ev-${r}">${esc(t(r==='host'?'evHost':'rs_'+r))}</span>${e.meet?`<a class="btn sm meet-b" href="${esc(e.meet)}" target="_blank" rel="noopener noreferrer">🎥 ${esc(t('evJoin'))}</a>`:''}</div>`};
 return `<div class="view-head"><h2>${esc(t('tabPlanner'))}</h2>${S.readOnly?'':`<button class="btn primary" data-act="ev-new">+ ${esc(t('evNew'))}</button>`}<div class="sub">${esc(t('plSub'))}</div></div>${plSeg()}
 ${waiting.length?`<div class="note-box pl-wait"><b>${esc(t('evWaiting').replace('{n}',waiting.length))}</b><span>${waiting.map(e=>`<button type="button" class="lnk-btn" data-act="ev-open" data-id="${esc(e.id)}">${esc(e.title)}</button>`).join(' · ')}</span></div>`:''}
 <div class="pl-grid"><div class="stack"><div class="cal-bar">${monthNav('pl-month',ym)}<button type="button" class="btn sm" data-act="pl-today">${esc(t('today'))}</button><span class="muted hint">${esc(t('plHint'))}</span></div>
  <div class="cal pl-cal">${WEEK_ORDER.map(w=>`<div class="cal-h">${esc(dowName(w))}</div>`).join('')}${cells}</div>
  <div class="cal-ag">${Object.keys(byDay).filter(d=>d>=a&&d<=b).sort().map(d=>`<div class="ag-d${d===tk?' today':''}"><div class="ag-h">${esc(fmtDay(d))}</div>${byDay[d].map(evChip).join('')}</div>`).join('')||`<div class="sheet"><div class="empty"><span>${esc(t('evNoneMonth'))}</span></div></div>`}</div></div>
  <section class="sheet pl-up"><div class="sheet-h"><h3>${esc(t('evUpcoming'))}</h3></div>${S.pl.items?(up.map(upRow).join('')||`<div class="empty"><h4>${esc(t('evNone'))}</h4><span>${esc(t('evNoneSub'))}</span></div>`):`<div class="loading">${esc(t('loading'))}</div>`}</section></div>`;
}
function guestPicker(sel){const set=new Set(sel||[]);
 const people=Object.entries(S.members).filter(([u,m])=>m.active!==false&&u!==S.uid).sort((a,b)=>a[1].name.localeCompare(b[1].name));
 const quick=[['ev-g-my',t('evMyTeam'),isLead()||(S.members[S.uid]||{}).teamId],...teamList().map(x=>['ev-g-team:'+x.id,x.name,true]),['ev-g-all',t('evAll'),true],['ev-g-none',t('evNoneSel'),true]].filter(q=>q[2]);
 return `<fieldset class="tm-mem ev-gp"><legend>${esc(t('evGuests'))} <span class="code" id="ev-gn">${set.size}</span></legend>
  <div class="ev-q">${quick.map(([k,l])=>`<button type="button" class="dchip" data-act="ev-gq" data-v="${esc(k)}">${esc(l)}</button>`).join('')}</div>
  ${people.map(([u,m])=>`<label class="tm-row"><input type="checkbox" class="ev-gu" value="${esc(u)}"${set.has(u)?' checked':''}>${avatar(u,22)}<span class="tm-nm" dir="auto">${esc(m.name)}</span>${discBadge(m.discipline||'ARC')}${m.teamId&&S.teams[m.teamId]?`<span class="muted tm-o" dir="auto">${esc(S.teams[m.teamId].name)}</span>`:''}</label>`).join('')}</fieldset>`}
function eventModal(id,day){
 const e=id?evById(id):null;if(id&&!e)return;
 if(e&&e.createdBy!==S.uid)return eventView(e);
 const d0=day||todayK();const st=e?new Date(e.start):null,en=e?new Date(e.end):null;
 const date=e?dateKey(st):d0,from=e?hhmm(e.start):'10:00',to=e?hhmm(e.end):'11:00';
 openModal(dlg(e?t('evEdit'):t('evNew'),`
  <label class="f">${esc(t('evTitle'))}<input class="in" id="ev-title" required maxlength="200" value="${esc(e?e.title:'')}" placeholder="${esc(t('evTitlePh'))}"></label>
  <div class="frow"><label class="f">${esc(t('date'))}<input type="date" class="in" id="ev-date" required value="${esc(date)}"></label>
   <label class="f">${esc(t('from'))}<input type="time" class="in" id="ev-from" required value="${esc(from)}"></label>
   <label class="f">${esc(t('to'))}<input type="time" class="in" id="ev-to" required value="${esc(to)}"></label></div>
  <label class="f">${esc(t('evMeet'))}<span class="copyrow"><input class="in" id="ev-meet" type="url" dir="ltr" maxlength="500" value="${esc(e?e.meet:'')}" placeholder="https://meet.google.com/abc-defg-hij"><a class="btn sm" href="https://meet.google.com/new" target="_blank" rel="noopener noreferrer" title="${esc(t('evMeetNewHint'))}">🎥 ${esc(t('evMeetNew'))}</a></span><span class="muted" style="font-size:12px;font-weight:400">${esc(t('evMeetHint'))}</span></label>
  <div class="frow"><label class="f">${esc(t('evLocation'))}<input class="in" id="ev-loc" maxlength="200" value="${esc(e?e.location:'')}" placeholder="${esc(t('evLocPh'))}"></label>
   <label class="f">${esc(t('project'))}<select class="in" id="ev-proj"><option value="">${esc(t('evNoProject'))}</option>${projList().map(p=>`<option value="${esc(p.id)}"${e&&e.projectId===p.id?' selected':''}>${esc((p.code?p.code+' · ':'')+p.name)}</option>`).join('')}</select></label></div>
  ${guestPicker(e?(e.guests||[]).map(g=>g.userId):[])}
  <label class="f">${esc(t('evDescr'))}<textarea class="in" id="ev-descr" maxlength="4000" placeholder="${esc(t('evDescrPh'))}">${esc(e?e.descr:'')}</textarea></label>
  ${e?`<div><button type="button" class="btn" data-act="mom-from-ev" data-id="${esc(e.id)}">📝 ${esc(t('momFromEv'))}</button></div>`:''}
  ${e&&(e.guests||[]).length?`<div class="ev-resp">${(e.guests||[]).map(g=>`<span class="ev-s ev-${g.response}">${avatar(g.userId,18)} ${esc(memberName(g.userId))} ${RSVP_IC[g.response]}</span>`).join('')}</div>`:''}`,
  footSave(e?'ev-del':null)));
 S.modal={kind:'event',id:e?e.id:null};
}
function eventView(e){const r=myResp(e);
 openModal(dlg(t('evInvite'),`<div class="stack" style="gap:10px"><b style="font-size:17px" dir="auto">${esc(e.title)}</b>
  <div class="muted">${esc(fmtDay(dateKey(new Date(e.start))))} · <span dir="ltr">${evTime(e)}</span>${e.location?' · '+esc(e.location):''}</div>
  ${e.projectId?`<div>${pChip(e.projectId)}</div>`:''}
  <div class="muted" style="font-size:13px">${esc(t('evBy'))}: ${avatar(e.createdBy,18)} ${esc(memberName(e.createdBy))}</div>
  ${e.meet?`<a class="btn primary meet-big" href="${esc(e.meet)}" target="_blank" rel="noopener noreferrer">🎥 ${esc(t('evJoinMeet'))}</a><div class="muted" dir="ltr" style="font-size:12px">${esc(e.meet)}</div>`:''}
  ${e.descr?`<div class="spec" dir="auto">${esc(e.descr)}</div>`:''}
  <div><div class="eyebrow" style="margin-bottom:6px">${esc(t('evYourAnswer'))}</div><div class="seg">${['yes','maybe','no'].map(k=>`<button type="button" data-act="ev-rsvp" data-id="${esc(e.id)}" data-v="${k}" aria-selected="${r===k}">${esc(t('rs_'+k))}</button>`).join('')}</div></div>
  <div class="ev-resp">${[{userId:e.createdBy,response:'host'},...(e.guests||[])].map(g=>`<span class="ev-s ev-${g.response}">${avatar(g.userId,18)} ${esc(memberName(g.userId))} ${g.response==='host'?'★':RSVP_IC[g.response]}</span>`).join('')}</div></div>`,
  `<button type="button" class="btn" data-act="mom-from-ev" data-id="${esc(e.id)}">📝 ${esc(t('momFromEv'))}</button><button type="button" class="btn" data-act="ev-ics" data-id="${esc(e.id)}">⤓ ${esc(t('evIcs'))}</button><button type="button" class="btn primary" data-act="close">${esc(t('close'))}</button>`));
 S.modal={kind:'event-view',id:e.id};
}
async function saveEvent(M){
 const g=i=>{const e=document.getElementById(i);return e?e.value.trim():''};
 const title=g('ev-title'),date=g('ev-date'),from=g('ev-from'),to=g('ev-to');if(!title||!date||!from||!to)return;
 const[y,mo,d]=date.split('-').map(Number);const[fh,fm]=from.split(':').map(Number);const[th,tm]=to.split(':').map(Number);
 const start=new Date(y,mo-1,d,fh,fm).getTime(),end=new Date(y,mo-1,d,th,tm).getTime();if(!(end>start))return dlgErr(t('errTime'));
 const meet=g('ev-meet');if(meet&&!/^https:\/\//i.test(meet))return dlgErr(t('evMeetBad'));
 const body={id:M.id,title,start,end,meet,location:g('ev-loc'),projectId:g('ev-proj')||null,descr:g('ev-descr'),guests:[...document.querySelectorAll('.ev-gu:checked')].map(i=>i.value)};
 try{await api('event_save',body);closeModal();toast(t(body.guests.length?'evSent':'saved'));S.pl.key='';loadEvents(true);refresh()}catch(e){dlgErr(errText(e))}
}
function guestQuick(v){const boxes=[...document.querySelectorAll('.ev-gu')];let ids=null;
 if(v==='ev-g-all')ids=boxes.map(b=>b.value);
 else if(v==='ev-g-none'){boxes.forEach(b=>b.checked=false)}
 else if(v==='ev-g-my'){const m=isLead()?myMembers():new Set(Object.entries(S.members).filter(([u,x])=>x.teamId&&x.teamId===(S.members[S.uid]||{}).teamId).map(([u])=>u));const l=(S.members[S.uid]||{}).leadId;if(l)m.add(l);ids=[...m]}
 else if(v.startsWith('ev-g-team:')){const tid=v.slice(10);const tm=S.teams[tid];const set=new Set(Object.entries(S.members).filter(([,m])=>m.teamId&&descOf(tid).has(m.teamId)).map(([u])=>u));if(tm&&tm.leadId)set.add(tm.leadId);ids=[...set]}
 if(ids)boxes.forEach(b=>{if(ids.includes(b.value))b.checked=true});
 const n=$('#ev-gn');if(n)n.textContent=document.querySelectorAll('.ev-gu:checked').length}
async function rsvp(id,v){try{await api('event_rsvp',{id,response:v});const e=evById(id);if(e){const g=(e.guests||[]).find(x=>x.userId===S.uid);if(g)g.response=v}toast(t('saved'));const e2=evById(id);if(e2&&S.modal&&S.modal.kind==='event-view')eventView(e2);schedule()}catch(e){writeErr(e)}}
/** A calendar file people can open in Outlook, Google Calendar or Apple Calendar. */
function downloadIcs(id){const e=evById(id);if(!e)return;
 const f=ms=>new Date(ms).toISOString().replace(/[-:]/g,'').replace(/\.\d{3}/,'');const x=s=>String(s||'').replace(/[\\;,]/g,m=>'\\'+m).replace(/\n/g,'\\n');
 const ics=['BEGIN:VCALENDAR','VERSION:2.0','PRODID:-//TECTOVA//Team Desk//EN','BEGIN:VEVENT','UID:td-'+e.id+'@tectova','DTSTAMP:'+f(Date.now()),'DTSTART:'+f(e.start),'DTEND:'+f(e.end),
  'SUMMARY:'+x(e.title),'DESCRIPTION:'+x((e.descr||'')+(e.meet?'\n'+e.meet:'')),e.meet?'URL:'+e.meet:'','LOCATION:'+x(e.location||(e.meet?'Google Meet':'')),'END:VEVENT','END:VCALENDAR'].filter(Boolean).join('\r\n');
 const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([ics],{type:'text/calendar'}));a.download=(e.title.replace(/[^\w؀-ۿ -]+/g,'').trim()||'event')+'.ics';document.body.appendChild(a);a.click();setTimeout(()=>{URL.revokeObjectURL(a.href);a.remove()},500)}
/** Today's and the next days' meetings on the home page. */
function homeEventsHtml(){const now=Date.now();const l=(S.upcoming||[]).filter(e=>e.end>=now).slice(0,4);if(!l.length)return'';
 return `<section class="sheet hm-ev"><div class="sheet-h"><h3>${IC.planner}<span>${esc(t('evUpcoming'))}</span></h3><button type="button" class="btn ghost sm" data-go="planner">${esc(t('tabPlanner'))}</button></div>
  ${l.map(e=>{const d=dateKey(new Date(e.start));return `<div class="hm-t" role="button" tabindex="0" data-act="ev-open" data-id="${esc(e.id)}"><span class="ttl" dir="auto">${esc(e.title)}</span><span class="hm-d">${d===todayK()?esc(t('today')):esc(fmtShort(d))} · <span dir="ltr">${evTime(e)}</span></span>${e.meet?`<a class="btn sm meet-b" href="${esc(e.meet)}" target="_blank" rel="noopener noreferrer">🎥 ${esc(t('evJoin'))}</a>`:''}</div>`}).join('')}</section>`}

/* ---------- v2.13: company files ---------- */
const CFILE_CATS=['logos','profiles','legal','templates','presentations','hr','other'];
const CFILE_EXTRA=['svg','ai','eps','psd','indd'];
const catsFor=pid=>pid==='company'?CFILE_CATS:FILE_CATS;
const canUploadTo=pid=>!S.readOnly&&(pid!=='company'||pm('company'));
S.fCats=S.fCats||{};S.fFilter=S.fFilter||{};S.fVis=S.fVis||'all';
const curCat=pid=>{const c=S.fCats[pid];return catsFor(pid).includes(c)?c:catsFor(pid)[0]};
function companyHtml(){
 if(!S.files.company)setTimeout(()=>loadFiles('company'),0);
 return `<div class="view-head"><h2>${esc(t('tabCompany'))}</h2><div class="sub">${esc(t(S.isFin?'coSubAdmin':'coSub'))}</div></div>
 <section class="sheet sheet-b stack fpanel">${filesPanel('company')}</section>`;
}
function openEvent(id){if((S.pl.items||[]).some(e=>e.id===id)){eventModal(id);return}S.pl.key='';loadEvents(true).then(()=>{if(evById(id))eventModal(id);else toast(t('notifGone'))})}
function taskProjOptions(sel){if(allP()||!isLead())return projOptions(sel,true);
 return `<option value="">${esc(t('chooseProject'))}</option>`+projList(true).filter(p=>leadProj(p.id)||p.id===sel).map(p=>`<option value="${esc(p.id)}"${p.id===sel?' selected':''}>${esc((p.code?p.code+' · ':'')+p.name)}</option>`).join('')}
function leadsPicker(p){const leads=Object.entries(S.members).filter(([,m])=>m.sysRole==='lead'&&m.active!==false);const cur=new Set(p.leads||[]);
 return `<div class="f pj-leads" role="group" aria-labelledby="pj-leads-l"><span class="tp-l" id="pj-leads-l">${esc(t('pjLeads'))}</span><div class="muted" style="font-size:12px">${esc(t('pjLeadsHint'))}</div><div class="tm-mem">
  ${leads.map(([u,m])=>`<label class="tm-row"><input type="checkbox" class="pj-lead" value="${esc(u)}"${cur.has(u)?' checked':''}>${avatar(u,22)}<span class="tm-nm" dir="auto">${esc(m.name)}</span>${discBadge(m.discipline||'ARC')}${m.teamId&&S.teams[m.teamId]?`<span class="muted tm-o" dir="auto">${esc(S.teams[m.teamId].name)}</span>`:''}</label>`).join('')||`<span class="muted">${esc(t('pjNoLeads'))}</span>`}</div></div>`}
function clientPicker(p){const cl=clientList();
 return `<label class="f">${esc(t('client'))}<select class="in" id="pj-clientid"><option value="">${esc(t('clNoneOpt'))}</option>${cl.map(c=>`<option value="${esc(c.id)}"${c.id===p.clientId?' selected':''}>${esc(c.name)}</option>`).join('')}</select>
  ${canAddClients()?`<span class="copyrow"><input class="in" id="pj-newclient" maxlength="160" placeholder="${esc(t('clQuickPh'))}"><button type="button" class="btn sm" data-act="pj-client-add">+ ${esc(t('add'))}</button></span>`:''}</label>`}
/* files: categories chosen first, filter by category, quick re-categorise */
function fileRow(f){
 const co=f.scope==='company';const cats=co?CFILE_CATS:FILE_CATS;const pre=co?'cfc_':'fc_';
 if(S.fEdit===f.id)return `<div class="frow-f fedit" data-id="${esc(f.id)}">${fileBadge(f)}<div class="fedit-in">
   <input class="in" id="fe-title" maxlength="200" required value="${esc(f.title)}" aria-label="${esc(t('title'))}">
   ${f.kind==='link'?`<input class="in" id="fe-url" type="url" dir="ltr" maxlength="500" required value="${esc(f.url)}" aria-label="URL">`:''}
   <div class="fedit-r"><select class="in" id="fe-cat">${cats.map(c=>`<option value="${c}"${c===f.category?' selected':''}>${esc(t(pre+c))}</option>`).join('')}</select>
   ${co?`<select class="in" id="fe-vis"><option value="all"${f.visibility!=='admin'?' selected':''}>${esc(t('visAll'))}</option><option value="admin"${f.visibility==='admin'?' selected':''}>${esc(t('visAdmin'))}</option></select>`:''}
   <input class="in" id="fe-note" maxlength="255" value="${esc(f.note)}" placeholder="${esc(t('fileNotePh'))}"></div></div>
   <div class="fr-a"><button type="button" class="btn ghost sm" data-act="f-edit-cancel">${esc(t('cancel'))}</button><button type="button" class="btn primary sm" data-act="f-save" data-id="${esc(f.id)}">${esc(t('save'))}</button></div></div>`;
 const e=extOf(f.name);const view=f.kind==='file'&&INLINE_EXT.includes(e);
 const href=f.kind==='link'?f.url:fileHref(f,view);
 const meta=f.kind==='link'?`<span dir="ltr" class="f-url">${esc(f.url.replace(/^https?:\/\//,'').slice(0,70))}</span>`:`<span dir="auto">${esc(f.name)}</span><span dir="ltr">${esc(fmtSize(f.size))}</span>`;
 const mine=canDelFile(f);
 return `<div class="frow-f">${fileBadge(f)}<div class="fr-m"><a class="fr-t" href="${esc(href)}" target="_blank" rel="noopener noreferrer" data-file="${esc(f.id)}" dir="auto">${esc(f.title)}</a>${f.visibility==='admin'?` <span class="pill warn">${esc(t('visAdminShort'))}</span>`:''}
   <div class="fr-s">${meta}<span>${avatar(f.userId,16)} ${esc(memberName(f.userId))}</span><span title="${esc(fullTime(f.at))}">${esc(relTime(f.at))}</span></div>${f.note?`<div class="fr-n" dir="auto">${esc(f.note)}</div>`:''}</div>
  <div class="fr-a">${mine?`<select class="in f-rcat" data-fid="${esc(f.id)}" aria-label="${esc(t('category'))}" title="${esc(t('fMove'))}">${cats.map(c=>`<option value="${c}"${c===f.category?' selected':''}>${esc(t(pre+c))}</option>`).join('')}</select>`:''}
   ${f.kind==='file'?`<a class="btn ghost sm" href="${esc(fileHref(f,false))}" data-file="${esc(f.id)}" download>${esc(t('download'))}</a>`:''}
   ${mine?`<button type="button" class="btn ghost sm" data-act="f-edit" data-id="${esc(f.id)}">${esc(t('edit'))}</button><button type="button" class="btn ghost sm danger" data-act="f-del" data-id="${esc(f.id)}">${esc(t('delete'))}</button>`:''}</div></div>`;
}
function filesPanelInner(pid){
 const F=S.files[pid]||{items:[],loading:true};const q=(S.fq[pid]||[]);const lim=S.maxUpload||0;const co=pid==='company';const cats=catsFor(pid);const cc=curCat(pid);const pre=co?'cfc_':'fc_';
 const exts=co?FILE_EXT.concat(CFILE_EXTRA):FILE_EXT;
 const add=!canUploadTo(pid)?'':`<div class="fadd">
   <div class="fcat-pick"><span class="fcp-l">${esc(t('fStep1'))}</span>${cats.map(c=>`<button type="button" class="dchip" data-act="f-cat-pick" data-v="${c}" aria-pressed="${c===cc}">${esc(t(pre+c))}</button>`).join('')}
    ${co?`<label class="fcp-v">${esc(t('fVis'))}<select class="in" id="f-vis"><option value="all"${S.fVis!=='admin'?' selected':''}>${esc(t('visAll'))}</option><option value="admin"${S.fVis==='admin'?' selected':''}>${esc(t('visAdmin'))}</option></select></label>`:''}</div>
   <label class="fdrop" id="fdrop"><input type="file" id="f-input" multiple hidden accept="${exts.map(x=>'.'+x).join(',')}">
    <span class="fdrop-ic">${CLIP}</span><span><b>${esc(t('dropFiles'))}</b><small><span class="f-into">${esc(t('fInto'))} <b>${esc(t(pre+cc))}</b></span> · ${esc(t(co?'cFileTypes':'fileTypes'))}${lim?` · ${esc(t('maxSize'))} <bdi dir="ltr">${fmtSize(lim)}</bdi>`:''}</small></span></label>
   <div class="fl-add" id="fl-form"><input class="in" id="fl-url" type="url" dir="ltr" maxlength="500" required placeholder="${co?'https://drive.google.com/…':'https://acc.autodesk.com/…'}" aria-label="URL">
    <input class="in" id="fl-title" maxlength="200" placeholder="${esc(t('linkTitlePh'))}" aria-label="${esc(t('title'))}"><button type="button" class="btn sm" data-act="fl-add">${LINKIC}<span>${esc(t('addLink'))}</span></button></div></div>`;
 const queue=q.length?`<div class="fq">${q.map(u=>`<div class="fq-i${u.err?' err':''}"><span dir="auto">${esc(u.name)}</span><span class="fq-bar"><i style="width:${Math.round((u.p||0)*100)}%"></i></span><span class="fq-s">${u.err?esc(u.err):u.done?'✓':Math.round((u.p||0)*100)+'%'}</span></div>`).join('')}</div>`:'';
 const fl=S.fFilter[pid]||'';const items=F.items.filter(f=>!fl||f.category===fl);
 const tabs=F.items.length?`<div class="ffilt" role="tablist">${[['',t('orgAll'),F.items.length],...cats.map(c=>[c,t(pre+c),F.items.filter(f=>f.category===c).length]).filter(x=>x[2])].map(([k,l,n])=>`<button type="button" class="dchip" data-act="f-filter" data-v="${k}" aria-pressed="${fl===k}">${esc(l)} <span class="code">${n}</span></button>`).join('')}</div>`:'';
 const groups=cats.map(c=>[c,items.filter(f=>f.category===c)]).filter(g=>g[1].length);
 const list=groups.length?groups.map(([c,l])=>`<div class="fg"><div class="fg-h">${esc(t(pre+c))} <span class="code">${l.length}</span></div>${l.map(fileRow).join('')}</div>`).join('')
  :F.loading?`<div class="loading">${esc(t('loading'))}</div>`:`<div class="empty"><h4>${esc(t(co?'coNone':'noFiles'))}</h4><span>${esc(t(co?(S.isFin?'coNoneAdmin':'coNoneSub'):'noFilesSub'))}</span></div>`;
 return add+queue+tabs+`<div class="flist">${list}</div>`;
}
async function quickCat(fid,cat){const pid=($('#files-panel')||{dataset:{}}).dataset.pid;const f=((S.files[pid]||{}).items||[]).find(x=>x.id===fid);if(!f)return;
 const old=f.category;f.category=cat;drawFiles();
 try{await api('file_update',{id:fid,category:cat});toast(t('fMoved').replace('{c}',t((f.scope==='company'?'cfc_':'fc_')+cat)))}catch(e){f.category=old;drawFiles();writeErr(e)}}
/** Each reply sits right under the comment it answers, at any depth. */
function threadHtml(items,kind,keepOrder){const{roots,kids}=threadOrder(items);
 const one=(c,d)=>noteItem(c,kind)+((kids[c.id]||[]).length?`<div class="ni-replies${d>=3?' flat':''}">${kids[c.id].map(r=>one(r,d+1)).join('')}</div>`:'');
 return (keepOrder?roots:roots.slice().reverse()).map(c=>one(c,1)).join('')}
const canReplyTo=c=>!S.readOnly&&(c.taskId?(S.tasks[c.taskId]?canCommentTask(S.tasks[c.taskId]):false):true);

/* ---------- v2.16: AI minutes of meeting (MoM) ---------- */
S.mom=S.mom||{list:null,actions:[],cur:null,acts:[],busy:'',parts:[],filter:'open',mine:false};
async function loadMoms(){try{const d=await api('mom_list');S.mom.list=d.items;S.mom.actions=d.actions;schedule()}catch(e){writeErr(e)}}
async function openMom(id){S.tab='planner';S.plView='mom';S.mom.openId=id;S.mom.cur=null;S.mom.parts=[];renderTabs();renderMainNow();
 try{const d=await api('mom_get',undefined,{id});S.mom.cur=d.item;S.mom.acts=d.actions;S.mom.seq=d.parts||0;S.mom.fresh=true;renderMainNow();window.scrollTo(0,0)}catch(e){writeErr(e);S.mom.cur=null;renderMainNow()}}
/** A new minutes sheet; from an event it takes the title, time, project and everyone invited. */
async function newMom(eventId){
 const e=eventId?evById(eventId):null;
 const body={title:e?e.title:t('momUntitled'),meetingAt:e?e.start:Date.now(),eventId:e?e.id:null,projectId:e?e.projectId:null,
  attendees:e?[e.createdBy,...(e.guests||[]).filter(g=>g.response!=='no').map(g=>g.userId)]:[S.uid],lang:LANG==='ar'?'ar':'en',transcript:''};
 try{const r=await api('mom_save',body);closeModal();S.mom.list=null;openMom(r.id)}catch(e){writeErr(e)}
}
const momForEvent=eid=>(S.mom.list||[]).find(m=>m.eventId===eid);
const momCanEdit=m=>!!m&&!S.readOnly&&(m.createdBy===S.uid||S.isOwner);
const ownerLabel=a=>a.ownerId?memberName(a.ownerId):(a.ownerName||'—');
function momListHtml(){
 if(!S.mom.list){loadMoms();return `<div class="loading">${esc(t('loading'))}</div>`}
 const L=S.mom.list,A=S.mom.actions||[];const tk=todayK();
 const acts=A.filter(a=>(S.mom.filter==='all'||!a.done)&&(!S.mom.mine||a.ownerId===S.uid));
 const momOf=id=>L.find(m=>m.id===id)||{};
 const card=m=>`<button type="button" class="mom-c" data-act="mom-open" data-id="${esc(m.id)}"><span class="mom-d"><b>${+dateKey(new Date(m.meetingAt)).slice(8)}</b><small>${esc(monShort(dateKey(new Date(m.meetingAt))))}</small></span>
  <span class="mom-b"><b dir="auto">${esc(m.title)}</b><span class="row">${m.projectId?pChip(m.projectId):''}<span class="pill ${m.status==='final'?'ok':'warn'}">${esc(t(m.status==='final'?'momFinal':'momDraft'))}</span><span class="muted">${(m.attendees||[]).length} ${esc(t('momPeople'))}</span></span>
  ${m.summary?`<span class="mom-s" dir="auto">${esc(m.summary)}</span>`:''}</span></button>`;
 const arow=a=>{const m=momOf(a.momId);const late=a.due&&!a.done&&a.due<tk;const can=!S.readOnly&&(a.ownerId===S.uid||momCanEdit(m));
  return `<div class="ma-r${a.done?' done':''}"><label class="ma-chk"><input type="checkbox" data-act="ma-done" data-id="${esc(a.id)}"${a.done?' checked':''}${can?'':' disabled'}></label>
   <div class="ma-b"><span dir="auto">${esc(a.text)}</span><span class="muted">${a.ownerId?avatar(a.ownerId,16)+' ':''}${esc(ownerLabel(a))}${a.due?` · <span class="${late?'over':''}">${esc(fmtShort(a.due))}</span>`:''} · <button type="button" class="lnk-btn" data-act="mom-open" data-id="${esc(a.momId)}">${esc(m.title||'')}</button></span></div></div>`};
 return `<div class="mom-grid"><section class="sheet"><div class="sheet-h"><h3>${esc(t('momList'))}</h3><span class="code">${L.length}</span></div>
   ${L.map(card).join('')||`<div class="empty"><h4>${esc(t('momNone'))}</h4><span>${esc(t('momNoneSub'))}</span></div>`}</section>
  <section class="sheet"><div class="sheet-h"><h3>${esc(t('momTracker'))}</h3>
   <select class="in" id="ma-f"><option value="open"${S.mom.filter==='open'?' selected':''}>${esc(t('maOpen'))}</option><option value="all"${S.mom.filter==='all'?' selected':''}>${esc(t('maAll'))}</option></select>
   <label class="chk"><input type="checkbox" id="ma-mine"${S.mom.mine?' checked':''}> ${esc(t('maMine'))}</label></div>
   ${acts.map(arow).join('')||`<div class="empty"><span>${esc(t('maNone'))}</span></div>`}</section></div>`;
}
/* ----- the editor ----- */
function lines(a){return (a||[]).join('\n')}
function momEditorHtml(){
 const m=S.mom.cur;if(!m)return `<div class="loading">${esc(t('loading'))}</div>`;
 momSnapshot();
 const ed=momCanEdit(m);const c=m.content||{};const busy=S.mom.busy;
 const people=Object.entries(S.members).filter(([u,x])=>(x.active!==false&&!x.deleted)||(m.attendees||[]).includes(u)).sort((a,b)=>a[1].name.localeCompare(b[1].name));
 const att=new Set(m.attendees||[]);
 const ownerOpts=a=>`<option value="">${esc(t('maOther'))}</option>${people.filter(([u])=>att.has(u)||u===a.ownerId).map(([u,x])=>`<option value="${esc(u)}"${a.ownerId===u?' selected':''}>${esc(x.name)}</option>`).join('')}`;
 if(!ed)return momReadHtml(m);
 const src=`<section class="sheet mom-src"><div class="sheet-h"><h3>① ${esc(t('momSource'))}</h3>${m.transcript?`<span class="muted">${esc(t('momWords').replace('{n}',m.transcript.trim().split(/\s+/).length))}</span>`:''}</div><div class="sheet-b stack">
  <label class="f">${esc(t('momTranscript'))}<textarea class="in mom-tr" id="mom-tr" placeholder="${esc(t('momTrPh'))}">${esc(m.transcript||'')}</textarea></label></div></section>`;
 const meta=`<section class="sheet"><div class="sheet-b stack">
  <div class="frow"><label class="f">${esc(t('evTitle'))}<input class="in" id="mom-title" maxlength="200" value="${esc(m.title)}"></label>
   <label class="f">${esc(t('date'))}<input class="in" type="datetime-local" id="mom-at" value="${esc(toLocalInput(m.meetingAt))}"></label></div>
  <div class="frow"><label class="f">${esc(t('project'))}<select class="in" id="mom-proj"><option value="">${esc(t('evNoProject'))}</option>${projList(true).map(p=>`<option value="${esc(p.id)}"${m.projectId===p.id?' selected':''}>${esc((p.code?p.code+' · ':'')+p.name)}</option>`).join('')}</select></label>
   <label class="f">${esc(t('momLang'))}<select class="in" id="mom-lang">${[['auto','momLangAuto'],['ar','momLangAr'],['en','momLangEn']].map(([k,l])=>`<option value="${k}"${m.lang===k?' selected':''}>${esc(t(l))}</option>`).join('')}</select></label></div>
  <details class="mom-att"><summary>${esc(t('momAttendees'))}: ${[...att].map(u=>avatar(u,20)).join('')} <span class="code">${att.size}</span></summary>
   <div class="ev-gp">${people.map(([u,x])=>`<label class="tm-row"><input type="checkbox" class="mom-au" value="${esc(u)}"${att.has(u)?' checked':''}${u===m.createdBy?' disabled':''}>${avatar(u,22)}<span class="tm-nm" dir="auto">${esc(x.name)}</span>${discBadge(x.discipline||'ARC')}</label>`).join('')}</div></details>
  <label class="f">${esc(t('momExt'))}<input class="in" id="mom-ext" maxlength="500" value="${esc(m.guestsExt||'')}" placeholder="${esc(t('momExtPh'))}"></label></div></section>`;
 const acts=S.mom.acts||[];
 const minutes=`<section class="sheet mom-ed"><div class="sheet-h"><h3>② ${esc(t('momMinutes'))}</h3>${m.status==='final'?`<span class="pill ok">${esc(t('momFinal'))}${m.sentAt?' · '+esc(fmtShort(dateKey(new Date(m.sentAt)))):''}</span>`:`<span class="pill warn">${esc(t('momDraft'))}</span>`}</div><div class="sheet-b stack">
  <label class="f">${esc(t('momSummary'))}<textarea class="in" id="mom-sum" rows="4">${esc(c.summary||'')}</textarea></label>
  <div class="f"><span>${esc(t('momTopics'))}</span><div id="mom-topics" class="stack" style="gap:8px">${(c.topics||[]).map((tp,i)=>topicRow(tp,i)).join('')}</div><button type="button" class="btn sm" data-act="mom-topic-add">+ ${esc(t('momTopicAdd'))}</button></div>
  <label class="f">${esc(t('momDecisions'))} <small class="muted">${esc(t('oneLine'))}</small><textarea class="in" id="mom-dec" rows="4">${esc(lines(c.decisions))}</textarea></label>
  <div class="f"><span>${esc(t('momActions'))}</span><div class="ma-ed" id="mom-acts">${acts.map((a,i)=>actRow(a,ownerOpts(a))).join('')}</div><button type="button" class="btn sm" data-act="mom-act-add">+ ${esc(t('maAdd'))}</button></div>
  <label class="f">${esc(t('momIssues'))} <small class="muted">${esc(t('oneLine'))}</small><textarea class="in" id="mom-iss" rows="3">${esc(lines(c.open_issues))}</textarea></label>
  <label class="f">${esc(t('momNext'))}<input class="in" id="mom-next" maxlength="500" value="${esc(c.next_meeting||'')}"></label></div></section>`;
 return `<div class="view-head"><button type="button" class="btn ghost sm" data-act="mom-back">${LANG==='ar'?'→':'←'} ${esc(t('momList'))}</button><h2 dir="auto">${esc(m.title)}</h2>
  <div class="mom-acts"><button type="button" class="btn" data-act="mom-save"${busy?' disabled':''}>${esc(t('momSaveDraft'))}</button><button type="button" class="btn" data-act="mom-print">⎙ ${esc(t('printReport'))}</button>
  <button type="button" class="btn primary" data-act="mom-final"${busy?' disabled':''}>✉ ${esc(t(m.status==='final'?'momResend':'momSend'))}</button><button type="button" class="btn ghost danger" data-act="mom-del">${esc(t('delete'))}</button></div></div>
 <div class="mom-wrap">${meta}${src}${minutes}</div>`;
}
const topicRow=(tp,i)=>`<div class="mom-tp"><input class="in tp-t" maxlength="300" value="${esc(tp.title||'')}" placeholder="${esc(t('momTopicPh'))}"><textarea class="in tp-p" rows="3" placeholder="${esc(t('oneLine'))}">${esc(lines(tp.points))}</textarea><button type="button" class="icon-btn" data-act="mom-row-del" aria-label="${esc(t('delete'))}">✕</button></div>`;
const actRow=(a,opts)=>`<div class="ma-e" data-aid="${esc(a.id||'')}"><input type="checkbox" class="ma-d"${a.done?' checked':''} aria-label="${esc(t('done'))}"><input class="in ma-t" maxlength="500" value="${esc(a.text||'')}" placeholder="${esc(t('maTextPh'))}" dir="auto">
 <select class="in ma-o">${opts}</select><input class="in ma-n" maxlength="120" value="${esc(a.ownerId?'':(a.ownerName||''))}" placeholder="${esc(t('maNamePh'))}"${a.ownerId?' hidden':''}><input type="date" class="in ma-due" value="${esc(a.due||'')}"><button type="button" class="icon-btn" data-act="mom-row-del" aria-label="${esc(t('delete'))}">✕</button></div>`;
function toLocalInput(ms){const d=new Date(ms);return `${dateKey(d)}T${hhmm(ms)}`}
function momReadHtml(m){const c=m.content||{};const acts=S.mom.acts||[];
 const L=a=>(a||[]).length?`<ul>${a.map(x=>`<li dir="auto">${esc(x)}</li>`).join('')}</ul>`:'<p class="muted">—</p>';
 return `<div class="view-head"><button type="button" class="btn ghost sm" data-act="mom-back">${LANG==='ar'?'→':'←'} ${esc(t('momList'))}</button><h2 dir="auto">${esc(m.title)}</h2><button type="button" class="btn" data-act="mom-print">⎙ ${esc(t('printReport'))}</button></div>
 <section class="sheet mom-read"><div class="sheet-b stack">${momDocBody(m,acts,true)}</div></section>`}
function momDocBody(m,acts,interactive){const c=m.content||{};
 const L=a=>(a||[]).length?`<ul>${a.map(x=>`<li dir="auto">${esc(x)}</li>`).join('')}</ul>`:'<p class="muted">—</p>';
 return `<table class="pd-meta mom-meta"><tr><td>${esc(t('date'))}</td><td>${esc(fmtDay(dateKey(new Date(m.meetingAt))))} · <span dir="ltr">${hhmm(m.meetingAt)}</span></td></tr>${m.projectId?`<tr><td>${esc(t('project'))}</td><td>${esc(pLabel(m.projectId))}</td></tr>`:''}
  <tr><td>${esc(t('momAttendees'))}</td><td>${(m.attendees||[]).map(u=>esc(memberName(u))).join('، ')}${m.guestsExt?'، '+esc(m.guestsExt):''}</td></tr><tr><td>${esc(t('momBy'))}</td><td>${esc(memberName(m.createdBy))}</td></tr></table>
  <h3>${esc(t('momSummary'))}</h3><p dir="auto" style="white-space:pre-line">${esc(c.summary||'—')}</p>
  ${(c.topics||[]).length?`<h3>${esc(t('momTopics'))}</h3>${c.topics.map(tp=>`<h4 dir="auto">${esc(tp.title)}</h4>${L(tp.points)}`).join('')}`:''}
  <h3>${esc(t('momDecisions'))}</h3>${L(c.decisions)}
  <h3>${esc(t('momActions'))}</h3>${acts.length?`<table class="t mom-at"><thead><tr><th></th><th>${esc(t('maText'))}</th><th>${esc(t('maOwner'))}</th><th>${esc(t('due'))}</th></tr></thead><tbody>${acts.map(a=>`<tr${a.done?' class="is-done"':''}><td>${interactive?`<input type="checkbox" data-act="ma-done" data-id="${esc(a.id)}"${a.done?' checked':''}${!S.readOnly&&(a.ownerId===S.uid||momCanEdit(m))?'':' disabled'}>`:(a.done?'☑':'☐')}</td><td dir="auto">${esc(a.text)}</td><td>${esc(ownerLabel(a))}</td><td dir="ltr">${esc(a.due||'')}</td></tr>`).join('')}</tbody></table>`:'<p class="muted">—</p>'}
  ${(c.open_issues||[]).length?`<h3>${esc(t('momIssues'))}</h3>${L(c.open_issues)}`:''}${c.next_meeting?`<h3>${esc(t('momNext'))}</h3><p dir="auto">${esc(c.next_meeting)}</p>`:''}`}
/** Reads the editor back into the minutes and action items. */
function momCollect(){const m=S.mom.cur;if(!m)return null;const g=i=>{const e=document.getElementById(i);return e?e.value:''};const ls=v=>v.split('\n').map(x=>x.trim()).filter(Boolean);
 const at=g('mom-at');const ms=at?new Date(at).getTime():m.meetingAt;
 const attendees=[...document.querySelectorAll('.mom-au')].filter(i=>i.checked||i.disabled).map(i=>i.value);
 const topics=[...document.querySelectorAll('.mom-tp')].map(r=>({title:r.querySelector('.tp-t').value.trim(),points:ls(r.querySelector('.tp-p').value)})).filter(x=>x.title||x.points.length);
 const actions=[...document.querySelectorAll('.ma-e')].map(r=>({id:r.dataset.aid||null,text:r.querySelector('.ma-t').value.trim(),ownerId:r.querySelector('.ma-o').value||null,ownerName:r.querySelector('.ma-n').value.trim(),due:r.querySelector('.ma-due').value||null,done:r.querySelector('.ma-d').checked})).filter(a=>a.text);
 const content={summary:g('mom-sum').trim(),topics,decisions:ls(g('mom-dec')),open_issues:ls(g('mom-iss')),next_meeting:g('mom-next').trim()};
 return {id:m.id,title:g('mom-title').trim()||m.title,meetingAt:isFinite(ms)?ms:m.meetingAt,projectId:g('mom-proj')||null,lang:g('mom-lang')||m.lang,attendees,guestsExt:g('mom-ext').trim(),
  transcript:g('mom-tr'),content,actions,eventId:m.eventId}}
async function momSave(quiet){const b=momCollect();if(!b)return false;
 try{await api('mom_save',b);const d=await api('mom_get',undefined,{id:b.id});S.mom.cur=d.item;S.mom.acts=d.actions;S.mom.list=null;S.mom.fresh=true;if(!quiet)toast(t('saved'));return true}catch(e){writeErr(e);return false}}
async function momFinal(){if(!await momSave(true))return;S.mom.busy='send';renderMainNow();
 try{const r=await api('mom_finalize',{id:S.mom.cur.id,notify:true});toast(t('momSent').replace('{n}',r.sent));const d=await api('mom_get',undefined,{id:S.mom.cur.id});S.mom.cur=d.item;S.mom.acts=d.actions;S.mom.list=null;S.mom.fresh=true}catch(e){writeErr(e)}
 S.mom.busy='';renderMainNow()}
function momPrint(){const m=S.mom.cur;if(!m)return;const live=momCanEdit(m)?momCollect():null;const mm=live?Object.assign({},m,live,{content:live.content}):m;
 const acts=live?live.actions:(S.mom.acts||[]);
 printDoc(`<div class="pd mom-pd"><header class="pd-h"><div><div class="pd-co">TECTOVA BIM &amp; Engineering Consulting</div><h1>${esc(t('momDocTitle'))}</h1><div dir="auto" style="font-size:15px;font-weight:600">${esc(mm.title)}</div></div></header>${momDocBody(mm,acts,false)}</div>`)}
async function maToggle(id,done){const a=(S.mom.actions||[]).find(x=>x.id===id)||(S.mom.acts||[]).find(x=>x.id===id);
 try{await api('mom_action',{id,done});for(const l of [S.mom.actions||[],S.mom.acts||[]]){const x=l.find(y=>y.id===id);if(x)x.done=done}toast(t('saved'));schedule()}catch(e){writeErr(e)}}
function momPage(){
 if(S.mom.openId)return momEditorHtml();
 return `<div class="view-head"><h2>${esc(t('tabPlanner'))}</h2>${S.readOnly?'':`<button class="btn primary" data-act="mom-new">+ ${esc(t('momNew'))}</button>`}<div class="sub">${esc(t('momSub'))}</div></div>${plSeg()}${momListHtml()}`;
}

/** Before the editor is drawn again (a refresh, a new row), keep what was typed. */
function momSnapshot(){const m=S.mom.cur;if(S.mom.fresh){S.mom.fresh=false;return}if(!m||!$('#mom-sum')||!momCanEdit(m))return;const b=momCollect();if(!b)return;
 Object.assign(m,{title:b.title,meetingAt:b.meetingAt,projectId:b.projectId,lang:b.lang,attendees:b.attendees,guestsExt:b.guestsExt,transcript:b.transcript,content:b.content});S.mom.acts=b.actions}
function momAddRow(kind){momSnapshot();const m=S.mom.cur;if(!m)return;
 if(kind==='topic'){m.content=m.content||{};(m.content.topics=m.content.topics||[]).push({title:'',points:[]})}else (S.mom.acts=S.mom.acts||[]).push({text:'',ownerId:null,ownerName:'',due:'',done:false});
 S.mom.fresh=true;renderMainNow();const rows=document.querySelectorAll(kind==='topic'?'.mom-tp .tp-t':'.ma-e .ma-t');if(rows.length)rows[rows.length-1].focus()}
async function momFromEvent(eid){if(!S.mom.list)await loadMoms();const m=momForEvent(eid);closeModal();if(m)openMom(m.id);else newMom(eid)}
function plSeg(){const v=S.plView==='mom'?'mom':'cal';return `<div class="tv-bar"><div class="seg" role="tablist">${[['cal','plCal','📅'],['mom','momTab','📝']].map(([k,l,i])=>`<button type="button" role="tab" aria-selected="${v===k}" data-act="pl-view" data-v="${k}">${i} <span>${esc(t(l))}</span></button>`).join('')}</div></div>`}

/* ---------- v2.17: permissions, mine/all tabs, capability matrix, roles, clients views, capacity ---------- */
const pm=k=>!!(S.P&&S.P.has(k));
const allP=()=>pm('projects');
const PERM_KEYS=['lead','projects','see_all','approve','finance','clients','company','team','holidays'];
const builtinPerms=r=>r==='owner'?PERM_KEYS:((S.rolePerms||{})[r]||[]);
const builtinChanged=r=>{const a=builtinPerms(r),b=((S.rolePermsDef||{})[r]||[]);return a.length!==b.length||a.some(k=>!b.includes(k))};
const customRole=uid=>{const m=S.members[uid];return m&&m.roleId?(S.roles||[]).find(r=>r.id===m.roleId):null};
function memberRolePill(uid){const r=customRole(uid);if(r)return `<span class="pill role-c" style="--rc:${esc(r.color||'#5B6B7A')}">${esc(r.name)}</span>`;return rolePill(roleOf(uid))}

/* --- sub tabs (Projects, Tasks) --- */
function subTabs(act,cur,items){return `<div class="subtabs" role="tablist">${items.map(([k,l,n])=>`<button type="button" role="tab" aria-selected="${k===cur}" data-act="${act}" data-v="${k}">${esc(l)}${n!=null?`<span class="st-n">${n}</span>`:''}</button>`).join('')}</div>`}
function isMyProject(p){if(!p)return false;const u=S.uid;if(p._o===u||leadsOf(p.id).includes(u))return true;
 if(((myE().totals||{}).p||{})[p.id])return true;return Object.values(S.tasks).some(x=>x.projectId===p.id&&x.assignee===u)}
function pjTab(){if(!S.pjTab){const mine=projList(true).filter(isMyProject).length;S.pjTab=mine||!allP()&&!S.isFin?'mine':'all'}return S.pjTab}
const pjTabHit=p=>pjTab()!=='mine'||isMyProject(p);
function pjTabsHtml(){const all=projList(true).filter(tagHitProject);const n=all.filter(isMyProject).length;
 return subTabs('pj-tab',pjTab(),[['mine',t('pjMine'),n],['all',t('pjAll'),all.length]])}
function tkTab(){if(!S.tkTab)S.tkTab=seesTeam()?'all':'mine';return S.tkTab}
const tkTabHit=x=>tkTab()!=='mine'||x.assignee===S.uid;
function tkTabsHtml(){const open=Object.entries(S.tasks).map(([id,x])=>({...x,id})).filter(x=>x.status!=='done'&&leadSees(x));
 const allLbl=isLead()&&!allP()?t('tkTeam'):t('tkAll');
 return subTabs('tk-tab',tkTab(),[['mine',t('tkMine'),open.filter(x=>x.assignee===S.uid).length],['all',allLbl,open.length]])}

/* --- weekly contract hours --- */
const weeklyOf=uid=>{const m=S.members[uid]||{};const w=num(m.weeklyHours);return w||Math.round((num(m.dailyHours)||8)*((m.workDays||[]).length||6)*10)/10};

/* --- Team Capability Matrix --- */
const LV_COLORS=['var(--lv0)','var(--lv1)','var(--lv2)','var(--lv3)','var(--lv4)'];
const SKILL_SUGGEST={_:['Revit','Navisworks','ACC / BIM 360','AutoCAD','Dynamo','IFC / openBIM','Clash detection','Quantity take-off','BIM coordination','Project management'],
 ARC:['Rhino','Enscape / Twinmotion','Family creation'],STR:['Tekla Structures','Robot / ETABS','Rebar detailing'],MEP:['Revit MEP','MagiCAD','HVAC design'],
 COORD:['BCF / issue tracking','Solibri','ISO 19650'],DOC:['Sheets & documentation','Bluebeam'],PM:['MS Project','Primavera P6','Contract management']};
function myLedTeams(){const out=new Set();const st=Object.values(S.teams).filter(x=>x.leadId===S.uid).map(x=>x.id);
 while(st.length){const id=st.pop();if(out.has(id))continue;out.add(id);for(const x of Object.values(S.teams))if(x.parentId===id)st.push(x.id)}return out}
const canSkill=tid=>!S.readOnly&&(pm('team')||(isLead()&&myLedTeams().has(tid)));
const skillsOf=tid=>(S.skills||[]).filter(k=>k.teamId===tid).sort((a,b)=>a.sort-b.sort||(+a.id)-(+b.id));
const lvOf=(u,k)=>+(((S.skillLv||{})[u]||{})[k]||0);
function teamPeople(tid){const tm=S.teams[tid];if(!tm)return[];
 const ids=Object.entries(S.members).filter(([,m])=>m.active!==false&&!m.deleted&&m.teamId===tid).map(([u])=>u);
 if(tm.leadId&&S.members[tm.leadId]&&!ids.includes(tm.leadId))ids.unshift(tm.leadId);
 return ids.sort((a,b)=>(b===tm.leadId)-(a===tm.leadId)||memberName(a).localeCompare(memberName(b)))}
function capTeam(){const ts=Object.values(S.teams).sort((a,b)=>(a.sort||0)-(b.sort||0)||a.name.localeCompare(b.name));
 if(S.capTeam&&S.teams[S.capTeam])return S.capTeam;
 const mine=(S.members[S.uid]||{}).teamId;const led=[...myLedTeams()][0];const any=ts.find(x=>skillsOf(x.id).length&&teamPeople(x.id).length)||ts.find(x=>teamPeople(x.id).length)||ts[0]||{};S.capTeam=(led&&S.teams[led]?led:mine&&S.teams[mine]?mine:any.id)||'';return S.capTeam}
function capMatrixHtml(){
 const ts=Object.values(S.teams).sort((a,b)=>(a.sort||0)-(b.sort||0)||a.name.localeCompare(b.name));
 if(!ts.length)return `<div class="sheet"><div class="empty"><h4>${esc(t('orgNoTeams'))}</h4><span>${esc(t('cmNoTeams'))}</span></div></div>`;
 const tid=capTeam();const tm=S.teams[tid];const ed=canSkill(tid);const sk=skillsOf(tid);const ppl=teamPeople(tid);
 const pick=`<div class="cm-teams">${ts.map(x=>`<button type="button" class="cm-tb" data-act="cm-team" data-id="${esc(x.id)}" aria-pressed="${x.id===tid}" style="--tc:${esc(x.color||'#2F7FB5')}"><i></i><span dir="auto">${esc(x.name)}</span><small>${teamPeople(x.id).length} · ${skillsOf(x.id).length}</small></button>`).join('')}</div>`;
 const legend=`<div class="cm-leg">${[0,1,2,3,4].map(l=>`<span><i class="sl lv${l}">${l}</i>${esc(t('lv'+l))}</span>`).join('')}</div>`;
 const add=ed?`<form class="cm-add" id="cm-add-form"><input class="in" id="cm-new" maxlength="80" placeholder="${esc(t('cmAddPh'))}"><button class="btn" type="submit">+ ${esc(t('cmAdd'))}</button>
   <button type="button" class="btn ghost" data-act="cm-suggest">${esc(t('cmSuggest'))}</button></form>`:'';
 let body;
 if(!sk.length)body=`<div class="empty"><h4>${esc(t('cmNoSkills'))}</h4><span>${esc(t(ed?'cmNoSkillsEd':'cmNoSkillsSub'))}</span>${ed?`<button type="button" class="btn primary" data-act="cm-suggest">${esc(t('cmSuggest'))}</button>`:''}</div>`;
 else if(!ppl.length)body=`<div class="empty"><h4>${esc(t('cmNoPeople'))}</h4><span>${esc(t('cmNoPeopleSub'))}</span></div>`;
 else{
  const head=`<tr><th class="cm-who">${esc(t('employee'))}</th>${sk.map(k=>`<th class="cm-k">${ed?`<button type="button" class="cm-kb" data-act="cm-skill" data-id="${esc(k.id)}" title="${esc(t('edit'))}">`:'<span class="cm-kb">'}<span dir="auto">${esc(k.name)}</span>${ed?'</button>':'</span>'}</th>`).join('')}<th class="cm-sum">${esc(t('cmStrong'))}</th></tr>`;
  const rows=ppl.map(u=>{const lvs=sk.map(k=>lvOf(u,k.id));const strong=lvs.filter(l=>l>=3).length;
   return `<tr><td class="cm-who"><div class="who">${avatar(u,26)}<div style="min-width:0"><div class="nm" dir="auto">${esc(memberName(u))}${u===tm.leadId?` <span class="pill run">${esc(t('cmLead'))}</span>`:''}</div><div class="rl" dir="auto">${esc((S.members[u]||{}).role||'')}</div></div></div></td>
    ${sk.map((k,i)=>{const l=lvs[i];return `<td class="cm-c">${ed?`<button type="button" class="sl lv${l}" data-act="cm-lv" data-u="${esc(u)}" data-k="${esc(k.id)}" title="${esc(memberName(u))} · ${esc(k.name)}: ${esc(t('lv'+l))}" aria-label="${esc(k.name)}: ${esc(t('lv'+l))}">${l||'·'}</button>`:`<span class="sl lv${l}" title="${esc(k.name)}: ${esc(t('lv'+l))}">${l||'·'}</span>`}</td>`}).join('')}
    <td class="cm-sum"><b>${strong}</b><small>/ ${sk.length}</small></td></tr>`}).join('');
  const foot=`<tr class="cm-f"><td class="cm-who">${esc(t('cmCover'))}</td>${sk.map(k=>{const n=ppl.filter(u=>lvOf(u,k.id)>=3).length;const avg=ppl.reduce((s,u)=>s+lvOf(u,k.id),0)/ppl.length;
    return `<td class="cm-c"><span class="cm-cv${n===0?' gap':n===1?' thin':''}" title="${esc(t('cmCoverHint'))}">${n}</span><small>${avg.toFixed(1)}</small></td>`}).join('')}<td></td></tr>`;
  body=`<div class="tbl-wrap cm-wrap"><table class="t cm-t"><thead>${head}</thead><tbody>${rows}</tbody><tfoot>${foot}</tfoot></table></div>`;
 }
 const gaps=sk.filter(k=>ppl.length&&!ppl.some(u=>lvOf(u,k.id)>=3));
 const thin=sk.filter(k=>ppl.filter(u=>lvOf(u,k.id)>=3).length===1);
 const notes=sk.length&&ppl.length?`<div class="cm-notes">${gaps.length?`<div class="cm-n bad"><b>${esc(t('cmGaps'))}</b> ${gaps.map(k=>`<span dir="auto">${esc(k.name)}</span>`).join(' · ')}</div>`:`<div class="cm-n ok"><b>${esc(t('cmNoGaps'))}</b></div>`}
  ${thin.length?`<div class="cm-n warn"><b>${esc(t('cmThin'))}</b> ${thin.map(k=>`<span dir="auto">${esc(k.name)}</span>`).join(' · ')}</div>`:''}</div>`:'';
 return `<div class="cm">${pick}<section class="sheet"><div class="sheet-h"><h3><span class="cm-dot" style="background:${esc(tm.color||'#2F7FB5')}"></span><span dir="auto">${esc(tm.name)}</span> · Capability Matrix</h3>
  ${sk.length&&ppl.length?`<button type="button" class="btn sm ghost" data-act="cm-csv">CSV</button>`:''}</div>
  <div class="sheet-b stack" style="gap:12px"><div class="muted cm-sub">${esc(t(ed?'cmSubEd':'cmSub'))}</div>${legend}${add}</div>${body}${notes}</section></div>`;
}
function cmLvMenu(btn){
 document.querySelectorAll('.lv-menu').forEach(x=>x.remove());
 const u=btn.dataset.u,k=btn.dataset.k;const cur=lvOf(u,k);
 const m=document.createElement('div');m.className='lv-menu';m.setAttribute('role','menu');
 m.innerHTML=[0,1,2,3,4].map(l=>`<button type="button" role="menuitemradio" aria-checked="${l===cur}" data-act="cm-set" data-u="${esc(u)}" data-k="${esc(k)}" data-v="${l}"><i class="sl lv${l}">${l}</i>${esc(t('lv'+l))}</button>`).join('');
 document.body.appendChild(m);const r=btn.getBoundingClientRect();const mw=m.offsetWidth,mh=m.offsetHeight;
 let x=r.left+r.width/2-mw/2,y=r.bottom+6;if(y+mh>innerHeight-8)y=r.top-mh-6;x=Math.max(8,Math.min(innerWidth-mw-8,x));
 m.style.left=x+'px';m.style.top=(y+scrollY)+'px';const f=m.querySelector('[aria-checked="true"]');if(f)f.focus();
}
async function cmSet(u,k,v){document.querySelectorAll('.lv-menu').forEach(x=>x.remove());
 const old=lvOf(u,k);(S.skillLv[u]=S.skillLv[u]||{})[k]=v;renderMainNow();
 try{await api('skill_level',{userId:u,skillId:k,level:v})}catch(e){S.skillLv[u][k]=old;renderMainNow();writeErr(e)}}
async function cmAdd(names){const tid=capTeam();if(!names.length)return;
 try{const r=await api('skill_save',{teamId:tid,names});const i=$('#cm-new');if(i){i.value='';i.blur()}toast(r.added?t('cmAdded').replace('{n}',r.added):t('cmExists'));await refresh();renderMainNow()}catch(e){writeErr(e)}}
function cmSuggest(){const tm=S.teams[capTeam()];const list=[...SKILL_SUGGEST._,...(SKILL_SUGGEST[tm&&tm.discipline]||[])];
 openModal(dlg(t('cmSuggest'),`<div class="muted" style="font-size:13px">${esc(t('cmSuggestHint'))}</div><div class="cm-sug">${list.map((n,i)=>{const has=skillsOf(tm.id).some(k=>k.name.toLowerCase()===n.toLowerCase());
  return `<label class="chk"><input type="checkbox" class="cm-sg" value="${esc(n)}" ${has?'disabled checked':i<8?'checked':''}> <span dir="ltr">${esc(n)}</span></label>`}).join('')}</div>`,footSave(null)));
 S.modal={kind:'cm-sug'};
}
function cmSkillModal(id){const k=(S.skills||[]).find(x=>x.id===id);if(!k)return;
 openModal(dlg(t('cmEditSkill'),`<label class="f">${esc(t('name'))}<input class="in" id="cm-sk-name" maxlength="80" required value="${esc(k.name)}"></label>
  <div class="cm-mv"><button type="button" class="btn sm" data-act="cm-move" data-id="${esc(k.id)}" data-v="-1">${LANG==='ar'?'→':'←'} ${esc(t('cmMoveBack'))}</button><button type="button" class="btn sm" data-act="cm-move" data-id="${esc(k.id)}" data-v="1">${esc(t('cmMoveFwd'))} ${LANG==='ar'?'←':'→'}</button></div>
  <div class="muted" style="font-size:12.5px">${esc(t('cmDelHint'))}</div>`,footSave('cm-del')));
 S.modal={kind:'cm-skill',id};
}
function cmCsv(){const tid=capTeam();const sk=skillsOf(tid);const ppl=teamPeople(tid);
 const q=v=>{v=String(v);return /[",;\n]/.test(v)?'"'+v.replace(/"/g,'""')+'"':v};
 const rows=[[t('employee'),...sk.map(k=>k.name)],...ppl.map(u=>[memberName(u),...sk.map(k=>lvOf(u,k.id))])];
 const a=document.createElement('a');a.href=URL.createObjectURL(new Blob(['﻿'+rows.map(r=>r.map(q).join(',')).join('\n')],{type:'text/csv'}));
 a.download='capability-matrix-'+(S.teams[tid]||{}).name+'.csv';document.body.appendChild(a);a.click();setTimeout(()=>{URL.revokeObjectURL(a.href);a.remove()},500)}

/* --- roles and permissions (Team → Permissions) --- */
function rolesHtml(){
 const ed=S.isOwner&&!S.readOnly;const roles=S.roles||[];
 const count=r=>Object.values(S.members).filter(m=>m.active!==false&&!m.deleted&&(m.sysRole||'employee')===r&&!m.roleId).length;
 const countC=id=>Object.values(S.members).filter(m=>m.active!==false&&!m.deleted&&m.roleId===id).length;
 const built=['owner','lead','accountant','employee'];
 const head=`<tr><th>${esc(t('rlPerm'))}</th>${built.map(r=>`<th class="c">${rolePill(r)}<div class="code">${count(r)}</div>${r==='owner'?`<div class="rl-lock">🔒 ${esc(t('rlAllShort'))}</div>`:ed&&builtinChanged(r)?`<button type="button" class="lnk-btn rl-reset" data-act="role-reset" data-v="${r}">${esc(t('rlReset'))}</button>`:''}</th>`).join('')}
  ${roles.map(r=>`<th class="c rl-c">${ed?`<button type="button" class="pill role-c rl-name" data-act="role-edit" data-id="${esc(r.id)}" style="--rc:${esc(r.color)}" title="${esc(t('edit'))}">${esc(r.name)} ✎</button>`:`<span class="pill role-c" style="--rc:${esc(r.color)}">${esc(r.name)}</span>`}<div class="code">${countC(r.id)}</div></th>`).join('')}
  ${ed?`<th class="c"><button type="button" class="btn sm primary" data-act="role-new">+ ${esc(t('rlNew'))}</button></th>`:''}</tr>`;
 const rows=PERM_KEYS.map(k=>`<tr><td><b>${esc(t('pk_'+k))}</b><div class="muted rl-h">${esc(t('pk_'+k+'_h'))}</div></td>
  ${built.map(r=>{const has=builtinPerms(r).includes(k);
   if(r==='owner')return `<td class="c"><span class="yes" title="${esc(t('rlAdminAll'))}" aria-label="yes">✓</span></td>`;
   if(k==='lead')return `<td class="c"><span class="${has?'yes':'no'}" title="${esc(t('rlLeadFixed'))}">${has?'✓':'—'}</span></td>`;
   return `<td class="c">${ed?`<input type="checkbox" class="rl-ckb" data-r="${r}" data-k="${k}" ${has?'checked':''} aria-label="${esc(t(ROLE_KEY[r]))}: ${esc(t('pk_'+k))}">`:has?'<span class="yes">✓</span>':'<span class="no">—</span>'}</td>`}).join('')}
  ${roles.map(r=>`<td class="c">${ed?`<input type="checkbox" class="rl-ck" data-id="${esc(r.id)}" data-k="${k}" ${r.perms.includes(k)?'checked':''} aria-label="${esc(r.name)}: ${esc(t('pk_'+k))}">`:r.perms.includes(k)?'<span class="yes">✓</span>':'<span class="no">—</span>'}</td>`).join('')}${ed?'<td></td>':''}</tr>`).join('');
 const always=`<tr class="rl-always"><td colspan="${5+roles.length+(ed?1:0)}">${esc(t('rlAlways'))}</td></tr>`;
 return `<section class="sheet"><div class="sheet-h"><h3>${esc(t('rlTitle'))}</h3></div>
  <div class="sheet-b"><div class="muted" style="font-size:13px">${esc(t(ed?'rlSubEd':'rlSub'))}</div></div>
  <div class="tbl-wrap"><table class="t perms rl-t"><thead>${head}</thead><tbody>${rows}${always}</tbody></table></div>
  <div class="muted" style="font-size:12px;padding:8px 16px 12px">${esc(t('rlNote'))}</div></section>`;
}
const ROLE_COLORS=['#5B6B7A','#2F7FB5','#1BAF7A','#E0A100','#D0542F','#8E5BD0','#C2477E','#0E8C8C'];
function roleModal(id){const r=id?(S.roles||[]).find(x=>x.id===id):{name:'',color:ROLE_COLORS[1],perms:[]};if(!r)return;
 const used=id?Object.values(S.members).filter(m=>!m.deleted&&m.roleId===id).length:0;
 openModal(dlg(id?t('rlEdit'):t('rlNew'),`<label class="f">${esc(t('rlName'))}<input class="in" id="rl-name" maxlength="80" required value="${esc(r.name)}" placeholder="${esc(t('rlNamePh'))}"></label>
  <div class="f">${esc(t('rlColor'))}<div class="rl-cols">${ROLE_COLORS.map(c=>`<label><input type="radio" name="rl-color" value="${c}" ${c===r.color?'checked':''}><i style="background:${c}"></i></label>`).join('')}</div></div>
  <fieldset class="rl-perms"><legend>${esc(t('rlPerms'))}</legend>${PERM_KEYS.map(k=>`<label class="rl-p"><input type="checkbox" class="rl-pk" value="${k}" ${r.perms.includes(k)?'checked':''}><span><b>${esc(t('pk_'+k))}</b><small>${esc(t('pk_'+k+'_h'))}</small></span></label>`).join('')}</fieldset>
  ${used?`<div class="muted" style="font-size:12.5px">${esc(t('rlUsed').replace('{n}',used))}</div>`:''}`,footSave(id&&!used?'role-del':null)));
 S.modal={kind:'role',id};
}
async function saveRole(M){const name=($('#rl-name')||{}).value||'';if(!name.trim())return;
 const c=document.querySelector('input[name="rl-color"]:checked');
 try{await api('role_save',{id:M.id||null,name:name.trim(),color:c?c.value:ROLE_COLORS[0],perms:[...document.querySelectorAll('.rl-pk:checked')].map(i=>i.value)});closeModal();toast(t('saved'));refresh()}catch(e){dlgErr(errText(e))}}
async function roleBuiltin(r,k,on){const cur=builtinPerms(r).filter(x=>x!=='lead');const perms=on?[...new Set([...cur,k])]:cur.filter(x=>x!==k);
 try{await api('role_builtin_save',{role:r,perms});toast(t('saved'));if(document.activeElement)document.activeElement.blur();await refresh();renderMainNow()}catch(e){writeErr(e);renderMainNow()}}
async function roleToggle(id,k,on){const r=(S.roles||[]).find(x=>x.id===id);if(!r)return;const perms=on?[...new Set([...r.perms,k])]:r.perms.filter(x=>x!==k);
 try{await api('role_save',{id,name:r.name,color:r.color,perms});r.perms=perms;toast(t('saved'));if(document.activeElement)document.activeElement.blur();await refresh();renderMainNow()}catch(e){writeErr(e);renderMainNow()}}

/* --- clients: several views --- */
const CLV=['cards','table','country','projects'];
function clientsViewSeg(){const v=S.clv||'cards';return `<div class="seg sm" role="tablist" aria-label="${esc(t('clView'))}">${CLV.map(k=>`<button type="button" role="tab" aria-selected="${k===v}" data-act="cl-view" data-v="${k}">${esc(t('clv_'+k))}</button>`).join('')}</div>`}
function clStats(c){const ps=projList(true).filter(p=>p.clientId===c.id);const act=ps.filter(p=>p.status!=='closed');
 const min=ps.reduce((s,p)=>s+spentOn('p',p.id),0);const open=Object.values(S.tasks).filter(x=>x.status!=='done'&&ps.some(p=>p.id===x.projectId)).length;return{ps,act,min,open}}
function clientsAltHtml(list){const v=S.clv||'cards';const st={};for(const c of list)st[c.id]=clStats(c);
 const mail=c=>c.email?`<a class="mail-b" href="${esc(mailHref(c.email))}" title="${esc(t('clMail'))}: ${esc(c.email)}">${MAILIC}</a>`:'';
 const edit=c=>canEditClients()?`<button type="button" class="btn ghost sm" data-act="cl-edit" data-id="${esc(c.id)}">${esc(t('edit'))}</button>`:'';
 if(v==='table'){
  const sk=S.clSort||'name',dir=S.clDir||1;const val=c=>({name:c.name.toLowerCase(),country:(c.country||'').toLowerCase(),projects:st[c.id].act.length,hours:st[c.id].min,open:st[c.id].open})[sk];
  const rows=[...list].sort((a,b)=>{const x=val(a),y=val(b);return (x<y?-1:x>y?1:0)*dir});
  const th=(k,l,n)=>`<th class="${n?'n':''}"><button type="button" class="th-sort" data-act="cl-sort" data-v="${k}" aria-sort="${sk===k?(dir>0?'ascending':'descending'):'none'}">${esc(l)}${sk===k?(dir>0?' ▲':' ▼'):''}</button></th>`;
  return `<section class="sheet"><div class="tbl-wrap"><table class="t cl-t"><thead><tr>${th('name',t('clName'))}<th>${esc(t('clContact'))}</th><th>${esc(t('email'))}</th><th>${esc(t('clPhone'))}</th>${th('country',t('clCountry'))}${th('projects',t('clActiveP'),1)}${th('open',t('clOpenT'),1)}${seesTeam()?th('hours',t('hours'),1):''}<th></th></tr></thead>
   <tbody>${rows.map(c=>`<tr><td><div class="who"><span class="cc-av sm">${esc(initials(c.name))}</span><b dir="auto">${esc(c.name)}</b></div></td><td dir="auto">${esc(c.contact||'—')}</td>
    <td>${c.email?`<a class="lnk" href="${esc(mailHref(c.email))}" dir="ltr">${esc(c.email)}</a>`:'<span class="muted">—</span>'}</td><td dir="ltr">${c.phone?`<a class="lnk" href="tel:${esc(c.phone.replace(/[^+\d]/g,''))}">${esc(c.phone)}</a>`:'—'}</td>
    <td>${esc(c.country||'—')}</td><td class="n">${st[c.id].act.length}<small class="muted"> / ${st[c.id].ps.length}</small></td><td class="n">${st[c.id].open}</td>${seesTeam()?`<td class="n">${h1(st[c.id].min)}</td>`:''}<td style="white-space:nowrap">${mail(c)}${edit(c)}</td></tr>`).join('')}</tbody></table></div></section>`;
 }
 if(v==='country'){
  const g={};for(const c of list)(g[c.country||'—']=g[c.country||'—']||[]).push(c);
  const keys=Object.keys(g).sort((a,b)=>g[b].length-g[a].length||a.localeCompare(b));
  return `<div class="cl-cty">${keys.map(k=>{const act=g[k].reduce((s,c)=>s+st[c.id].act.length,0);
   return `<section class="sheet"><div class="sheet-h"><h3 dir="auto">${esc(k==='—'?t('clNoCountry'):k)}</h3><span class="muted">${g[k].length} ${esc(t('clN'))} · ${act} ${esc(t('clActiveP'))}</span></div>
    <div class="cl-mini">${g[k].map(c=>`<div class="clm"><span class="cc-av sm">${esc(initials(c.name))}</span><div class="clm-n"><b dir="auto">${esc(c.name)}</b><small dir="auto">${esc(c.contact||'')}</small></div><span class="pill mute">${st[c.id].act.length}</span>${mail(c)}${edit(c)}</div>`).join('')}</div></section>`}).join('')}</div>`;
 }
 if(v==='projects'){
  const pill={active:'ok',hold:'warn',closed:'mute'};
  const ord=[...list].sort((a,b)=>st[b.id].act.length-st[a.id].act.length||a.name.localeCompare(b.name));
  return `<div class="stack">${ord.map(c=>{const s=st[c.id];
   return `<section class="sheet cl-pj"><div class="sheet-h"><div class="who"><span class="cc-av">${esc(initials(c.name))}</span><div><b dir="auto">${esc(c.name)}</b><div class="muted" style="font-size:12px" dir="auto">${esc([c.contact,c.country].filter(Boolean).join(' · '))}</div></div></div>
    <div class="cl-k"><span><b>${s.act.length}</b>${esc(t('clActiveP'))}</span><span><b>${s.open}</b>${esc(t('clOpenT'))}</span>${seesTeam()?`<span><b>${h1(s.min)}</b>${esc(t('hrsUnit'))}</span>`:''}${mail(c)}${edit(c)}</div></div>
    ${s.ps.length?`<div class="tbl-wrap"><table class="t"><tbody>${s.ps.map(p=>{const used=spentOn('p',p.id),bud=num(p.budget)*60,r=bud?used/bud:0;const op=Object.values(S.tasks).filter(x=>x.projectId===p.id&&x.status!=='done').length;
     return `<tr><td>${pChip(p.id)}</td><td>${pprioPill(p.priority)}</td><td><span class="pill ${pill[p.status||'active']}">${esc(t(p.status==='closed'?'closed':(p.status||'active')))}</span></td><td>${leadsOf(p.id).filter(u=>S.members[u]).map(u=>avatar(u,20)).join('')}</td>
      <td class="n">${op} ${esc(t('tabTasks'))}</td>${seesTeam()?`<td style="min-width:140px">${bud?`<div class="meter${r>=1?' over':r>=.8?' warn':''}"><i style="width:${Math.min(100,pct(used,bud))}%"></i></div>`:''}<small class="muted">${h1(used)}${bud?' / '+num(p.budget):''} ${esc(t('hrsUnit'))}</small></td>`:''}</tr>`}).join('')}</tbody></table></div>`:`<div class="sheet-b muted">${esc(t('clNoProjects'))}</div>`}</section>`}).join('')}</div>`;
 }
 return null;
}

/* --- capacity, explained --- */
function capacityHtml(){
 const today=dateKey(new Date());const W=S.capW||4;const w0=weekStartOf(today,'DE');const weeks=[...Array(W)].map((_,i)=>addDays(w0,7*i));const end=addDays(weeks[W-1],6);
 const ft=S.capTeamF||'';
 let people=Object.entries(S.members).filter(([u,m])=>m.active!==false&&!m.deleted&&inMyScope(u)&&!isAdminUser(u)&&(!ft||m.teamId===ft)).map(([u])=>u);
 const load={},avail={},full={},later={},unsched={},noest={},items={};
 for(const u of people){load[u]=weeks.map(()=>0);avail[u]=weeks.map(()=>0);full[u]=weeks.map(()=>0);later[u]=0;unsched[u]=[];noest[u]=[];items[u]=[];
  const dm=dailyMin(u);const m=S.members[u]||{};
  weeks.forEach((ws,i)=>{for(let d=ws;d<=addDays(ws,6);d=addDays(d,1)){if(d<today)continue;if((m.workDays||[6,0,1,2,3,4]).includes(dowOf(d)))full[u][i]+=dm;if(isWorkday(u,d))avail[u][i]+=dm}})}
 for(const[id,x]of Object.entries(S.tasks)){
  if(x.status==='done'||!x.assignee||!load[x.assignee])continue;const u=x.assignee;
  if(!num(x.estimate)){noest[u].push({...x,id});continue}
  const rem=Math.max(0,num(x.estimate)*60-((S.team.t||{})[id]||0));if(!rem)continue;
  if(!x.due){unsched[u].push({...x,id,rem});continue}
  const days=[];const last=x.due<today?today:x.due;for(let d=today;d<=last;d=addDays(d,1))if(isWorkday(u,d))days.push(d);if(!days.length)days.push(today);
  const per=rem/days.length;const wk=weeks.map(()=>0);let lt=0;
  for(const d of days){const i=weeks.findIndex(ws=>d>=ws&&d<=addDays(ws,6));if(i>=0){load[u][i]+=per;wk[i]+=per}else if(d>end){later[u]+=per;lt+=per}}
  items[u].push({...x,id,rem,wk,lt,od:x.due<today});
 }
 const sum=a=>a.reduce((s,v)=>s+v,0);
 const tA=sum(people.map(u=>sum(avail[u]))),tL=sum(people.map(u=>sum(load[u])));const over=people.filter(u=>avail[u].some((a,i)=>load[u][i]>a+1));
 const nNoEst=sum(people.map(u=>noest[u].length)),nUns=sum(people.map(u=>unsched[u].length));
 const kpi=(l,v,s,c)=>`<div class="kpi${c?' '+c:''}"><span>${esc(l)}</span><b>${v}</b>${s?`<small>${s}</small>`:''}</div>`;
 const util=tA?Math.round(tL/tA*100):0;
 const kpis=`<div class="kpis cap-k">${kpi(t('capAvail'),h1(tA)+' '+t('hrsUnit'),esc(t('capAvailS')))}${kpi(t('capPlanned'),h1(tL)+' '+t('hrsUnit'),esc(t('capPlannedS')))}
  ${kpi(t('capFree'),h1(Math.max(0,tA-tL))+' '+t('hrsUnit'),esc(t('capFreeS')))}${kpi(t('capUtil'),util+'%','',util>100?'bad':util>=80?'warn':'ok')}
  ${kpi(t('capOver'),over.length,over.map(u=>esc(memberName(u))).join(' · ')||esc(t('capNoOver')),over.length?'bad':'')}</div>`;
 const tms=Object.values(S.teams).filter(x=>Object.entries(S.members).some(([u,m])=>m.teamId===x.id&&inMyScope(u)));
 const ctrl=`<div class="filters cap-ctrl"><div class="seg sm" role="tablist" aria-label="${esc(t('capWeeks'))}">${[4,8,12].map(n=>`<button type="button" role="tab" aria-selected="${n===W}" data-act="cap-w" data-v="${n}">${n} ${esc(t('capWk'))}</button>`).join('')}</div>
  ${tms.length?`<select class="in" id="cap-team"><option value="">${esc(t('capAllTeams'))}</option>${tms.map(x=>`<option value="${esc(x.id)}"${x.id===ft?' selected':''}>${esc(x.name)}</option>`).join('')}</select>`:''}
  <button type="button" class="btn ghost sm" data-act="cap-help" aria-expanded="${!!S.capHelp}">ⓘ ${esc(t('capHow'))}</button></div>`;
 const help=S.capHelp?`<div class="note-box cap-help"><b>${esc(t('capHow'))}</b><ul>${['capH1','capH2','capH3','capH4','capH5'].map(k=>`<li>${esc(t(k))}</li>`).join('')}</ul></div>`:'';
 const cell=(u,i)=>{const a=avail[u][i],l=load[u][i],f=full[u][i];const r=a?l/a:(l?2:0);const cls=r>1.01?'bad':r>=.8?'warn':l?'ok':'mute';const off=f-a>1;
  return `<td class="cap ${cls}" title="${esc(t('load'))}: ${h1(l)} / ${esc(t('available'))}: ${h1(a)} ${esc(t('hrsUnit'))}${off?' · '+esc(t('capOff'))+': '+h1(f-a):''}"><b>${a?Math.round(r*100)+'%':l?'!':'—'}</b><span>${h1(l)} / ${h1(a)}${off?' <em>✈</em>':''}</span>${a?`<i style="width:${Math.min(100,Math.round(r*100))}%"></i>`:''}</td>`};
 const rows=people.sort((a,b)=>sum(load[b])/Math.max(1,sum(avail[b]))-sum(load[a])/Math.max(1,sum(avail[a]))).map(u=>{const A=sum(avail[u]),L=sum(load[u]);const r=A?L/A:0;const open=S.capOpen===u;
  const tm=S.teams[(S.members[u]||{}).teamId];
  return `<tr class="cap-r${open?' open':''}" data-act="cap-open" data-id="${esc(u)}" tabindex="0" aria-expanded="${open}"><td><div class="who">${avatar(u,26)}<div><div class="nm">${esc(memberName(u))}</div><div class="rl">${tm?`<span dir="auto">${esc(tm.name)}</span> · `:''}${weeklyOf(u)} ${esc(t('hrsUnit'))}/${esc(t('capWkS'))}</div></div></div></td>
   ${weeks.map((_,i)=>cell(u,i)).join('')}<td class="n cap-tot ${r>1.01?'over':''}"><b>${A?Math.round(r*100)+'%':'—'}</b><small>${h1(Math.max(0,A-L))} ${esc(t('capFreeShort'))}</small></td>
   <td class="n">${later[u]?h1(later[u]):'—'}</td></tr>
   ${open?`<tr class="cap-d"><td colspan="${W+3}">${capDetail(u,items[u],unsched[u],noest[u],weeks)}</td></tr>`:(unsched[u].length||noest[u].length)?`<tr class="sub"><td colspan="${W+3}">${unsched[u].length?`<span class="pill warn">${unsched[u].length} ${esc(t('capNoDue'))}</span> `:''}${noest[u].length?`<span class="pill mute">${noest[u].length} ${esc(t('capNoEst'))}</span>`:''}</td></tr>`:''}`}).join('');
 const warn=nNoEst||nUns?`<div class="cap-warn">${nUns?`<span class="pill warn">${nUns} ${esc(t('capNoDue'))}</span>`:''}${nNoEst?`<span class="pill mute">${nNoEst} ${esc(t('capNoEst'))}</span>`:''}<span class="muted">${esc(t('capWarnHint'))}</span></div>`:'';
 return `<div class="view-head"><h2>${esc(t('capTitle'))}</h2><div class="sub">${esc(t('capNote2'))}</div></div>${ctrl}${help}${kpis}${warn}
 <section class="sheet"><div class="tbl-wrap"><table class="t captbl"><thead><tr><th>${esc(t('employee'))}</th>${weeks.map(ws=>`<th class="n">${esc(fmtRange(ws,addDays(ws,6)))}</th>`).join('')}<th class="n">${esc(t('capTotal'))}</th><th class="n">${esc(t('later'))}</th></tr></thead><tbody>${rows||`<tr><td colspan="${W+3}" class="muted">${esc(t('noData'))}</td></tr>`}</tbody></table></div>
 <div class="legend" style="padding:10px 16px"><span><i style="background:var(--ok)"></i>&lt; 80%</span><span><i style="background:var(--warn)"></i>80–100%</span><span><i style="background:var(--bad)"></i>&gt; 100%</span><span>✈ ${esc(t('capOff'))}</span><span class="muted">${esc(t('capCellHint'))}</span></div></section>`;
}
function capDetail(u,its,uns,noest,weeks){
 const row=x=>`<tr><td><button type="button" class="lnk-btn" data-act="edit-task" data-id="${esc(x.id)}">${esc(x.title)}</button><div class="muted" style="font-size:11.5px">${esc(pLabel(x.projectId))}</div></td>
  <td class="n">${x.due?`<span class="${x.od?'over':''}">${esc(fmtShort(x.due))}</span>`:'—'}</td><td class="n">${h1(x.rem||0)}</td>${weeks.map((_,i)=>`<td class="n">${x.wk&&x.wk[i]?h1(x.wk[i]):''}</td>`).join('')}</tr>`;
 const list=its.sort((a,b)=>(a.due||'9').localeCompare(b.due||'9'));
 return `<div class="cap-dd">${list.length?`<table class="t mini"><thead><tr><th>${esc(t('task'))}</th><th class="n">${esc(t('due'))}</th><th class="n">${esc(t('capRemain'))}</th>${weeks.map(ws=>`<th class="n">${esc(fmtShort(ws))}</th>`).join('')}</tr></thead><tbody>${list.map(row).join('')}</tbody></table>`:`<div class="muted">${esc(t('capNoTasks'))}</div>`}
  ${uns.length?`<div class="cap-l"><b>${esc(t('capNoDue'))}:</b> ${uns.map(x=>`<button type="button" class="lnk-btn" data-act="edit-task" data-id="${esc(x.id)}">${esc(x.title)}</button> <small class="muted">(${h1(x.rem)} ${esc(t('hrsUnit'))})</small>`).join(' · ')}</div>`:''}
  ${noest.length?`<div class="cap-l"><b>${esc(t('capNoEst'))}:</b> ${noest.map(x=>`<button type="button" class="lnk-btn" data-act="edit-task" data-id="${esc(x.id)}">${esc(x.title)}</button>`).join(' · ')}</div>`:''}</div>`;
}

/* --- work split: the same hours against the contract hours --- */
function wsContract(m,u,ent,T){const E=m.expected(u,m.months);if(!E)return '';
 const D=Math.max(E,T);const pc=v=>Math.round(v/E*1000)/10;const free=E-T;
 const segs=ent.map(([p,v])=>`<i style="flex:${v};background:${esc(themed(pColor(p)))}" title="${esc(pLabel(p))}: ${pc(v)}% · ${esc(HU(v))}"></i>`).join('')+(free>0?`<i class="ws-free" style="flex:${free}" title="${esc(t('wsFree'))}: ${pc(free)}%"></i>`:'');
 return `<div class="ws-lbl">${esc(t('wsContract'))} <span class="muted">· ${esc(t('wsContractOf').replace('{h}',H(E)))}</span> <b class="${T>E?'over':''}" dir="ltr">${pc(T)}%</b></div>
  <div class="ws-bar ws-c">${segs}${T>E?`<span class="ws-mark" style="inset-inline-start:${E/D*100}%" title="100%"></span>`:''}</div>
  <div class="ws-leg">${ent.map(([p,v])=>`<span><i style="background:${esc(themed(pColor(p)))}"></i><span dir="auto">${esc(pLabel(p))}</span><b dir="ltr">${pc(v)}%</b></span>`).join('')}${free>0?`<span><i class="ws-free"></i>${esc(t('wsFree'))}<b dir="ltr">${pc(free)}%</b><small dir="ltr">${esc(H(free))}</small></span>`:T>E?`<span class="over">${esc(t('wsExtra'))}<b dir="ltr">+${pc(T-E)}%</b><small dir="ltr">${esc(H(T-E))}</small></span>`:''}</div>`;
}

/* ---------- v2.18: the app on the phone (PWA) and push notifications ---------- */
const PWA={bip:null,sub:null,swOk:false,busy:false};
const isStandalone=()=>{try{return matchMedia('(display-mode: standalone)').matches||navigator.standalone===true}catch(e){return false}};
const isIOS=()=>/iphone|ipad|ipod/i.test(navigator.userAgent)||(navigator.platform==='MacIntel'&&navigator.maxTouchPoints>1);
const isMobile=()=>isIOS()||/android|mobile/i.test(navigator.userAgent);
const pushCapable=()=>'serviceWorker' in navigator&&'PushManager' in window&&'Notification' in window;
function pwaInit(){
 const later=()=>{if(S.screen==='app')schedule()};
 window.addEventListener('beforeinstallprompt',e=>{e.preventDefault();PWA.bip=e;later()});
 window.addEventListener('appinstalled',()=>{PWA.bip=null;toast(t('pwaInstalled'));later()});
 if(!('serviceWorker' in navigator))return;
 const local=/^(localhost|127\.0\.0\.1)$/.test(location.hostname);
 if(location.protocol!=='https:'&&!local)return;
 navigator.serviceWorker.register('sw.js').then(()=>navigator.serviceWorker.ready).then(reg=>{PWA.swOk=true;return reg.pushManager?reg.pushManager.getSubscription():null})
  .then(s=>{PWA.sub=s||null;later()}).catch(()=>{});
 navigator.serviceWorker.addEventListener('message',ev=>{const d=ev.data||{};if(d.type==='td-open'){refresh();if(/notifs=1/.test(d.url||''))notifsDialog()}});
}
/** Opened from a notification or an app shortcut: ?notifs=1 or ?tab=… */
function pwaAfterBoot(){try{const q=new URLSearchParams(location.search);if(S.screen!=='app')return;
 const tab=q.get('tab');if(tab&&tabsFor().includes(tab)){S.tab=tab;renderAll()}
 if(q.get('notifs')==='1')setTimeout(()=>notifsDialog(),200);
 if(q.has('notifs')||q.has('tab')||q.has('source'))history.replaceState(null,'',location.pathname)}catch(e){}}
const b64ToBytes=s=>{const p='='.repeat((4-s.length%4)%4);const b=atob((s+p).replace(/-/g,'+').replace(/_/g,'/'));return Uint8Array.from(b,c=>c.charCodeAt(0))};
async function pushOn(){
 if(PWA.busy)return;PWA.busy=true;schedule();
 try{
  const perm=await Notification.requestPermission();if(perm!=='granted'){toast(t('pushDenied'));return}
  const reg=await navigator.serviceWorker.ready;
  let sub=await reg.pushManager.getSubscription();
  if(!sub)sub=await reg.pushManager.subscribe({userVisibleOnly:true,applicationServerKey:b64ToBytes(S.push.key)});
  const j=sub.toJSON();const r=await api('push_subscribe',{endpoint:j.endpoint,keys:j.keys,ua:deviceName()});
  PWA.sub=sub;S.push.devices=r.devices;toast(t('pushOnDone'));
 }catch(e){if(e instanceof ApiErr)writeErr(e);else toast(t('pushFail'))}
 finally{PWA.busy=false;schedule()}
}
async function pushOff(){
 try{const s=PWA.sub;if(s){const ep=s.endpoint;await s.unsubscribe().catch(()=>{});const r=await api('push_unsubscribe',{endpoint:ep});S.push.devices=r.devices}PWA.sub=null;toast(t('pushOffDone'))}catch(e){writeErr(e)}schedule()}
async function pushTest(){try{const r=await api('push_test',{});toast(r.sent?t('pushTestSent'):t('pushTestNone'))}catch(e){writeErr(e)}}
function deviceName(){const u=navigator.userAgent;return (isIOS()?'iPhone/iPad':/android/i.test(u)?'Android':/windows/i.test(u)?'Windows':/mac/i.test(u)?'Mac':'Browser')+(isStandalone()?' · App':' · '+(/edg\//i.test(u)?'Edge':/chrome/i.test(u)?'Chrome':/firefox/i.test(u)?'Firefox':/safari/i.test(u)?'Safari':''))}
/** Profile: install the app on this device, and phone notifications. */
function pwaHtml(){
 const P=S.push||{};const inst=isStandalone();
 let install;
 if(inst)install=`<div class="pf-ok">✓ <b>${esc(t('pwaIsInstalled'))}</b></div>`;
 else if(PWA.bip)install=`<div class="pwa-row"><span class="muted">${esc(t('pwaWhy'))}</span><button type="button" class="btn primary" data-act="pwa-install">⤓ ${esc(t('pwaInstall'))}</button></div>`;
 else if(isIOS())install=`<ol class="pwa-steps"><li>${esc(t('pwaIos1'))}</li><li>${esc(t('pwaIos2'))} <span class="pwa-ic" aria-hidden="true">⬆︎</span></li><li>${esc(t('pwaIos3'))}</li></ol>`;
 else install=`<ol class="pwa-steps"><li>${esc(t(isMobile()?'pwaAnd1':'pwaDesk1'))}</li><li>${esc(t(isMobile()?'pwaAnd2':'pwaDesk2'))}</li></ol>`;
 let push;
 if(!P.ready)push=`<div class="muted">${esc(t(S.isOwner?'pushNoServerAdmin':'pushNoServer'))}</div>`;
 else if(!pushCapable()||!PWA.swOk)push=`<div class="muted">${esc(t(isIOS()&&!inst?'pushIosFirst':'pushNoBrowser'))}</div>`;
 else if(Notification.permission==='denied')push=`<div class="note-box"><b>${esc(t('pushBlocked'))}</b><span>${esc(t('pushBlockedHow'))}</span></div>`;
 else if(PWA.sub)push=`<div class="pf-ok">🔔 <b>${esc(t('pushIsOn'))}</b></div><div class="pf-acts"><button type="button" class="btn sm" data-act="push-test">${esc(t('pushTest'))}</button><button type="button" class="btn ghost sm danger" data-act="push-off">${esc(t('pushOff'))}</button></div>`;
 else push=`<div class="pwa-row"><span class="muted">${esc(t('pushWhy'))}</span><button type="button" class="btn primary" data-act="push-on"${PWA.busy?' disabled':''}>🔔 ${esc(t('pushOn'))}</button></div>`;
 return `<section class="sheet pwa"><div class="sheet-h"><h3>📱 ${esc(t('pwaTitle'))}</h3>${P.devices?`<span class="pill ok">${P.devices} ${esc(t('pushDevices'))}</span>`:''}</div>
  <div class="sheet-b stack" style="gap:14px"><div class="pwa-app"><img src="icons/icon-192.png" alt="" width="48" height="48"><div><b>TECTOVA Team Desk</b><small class="muted">${esc(t('pwaSub'))}</small></div></div>
  <div class="np-h">${esc(t('pwaInstallH'))}</div>${install}<div class="np-h">${esc(t('pushH'))}</div>${push}</div></section>`;
}
/** A one-time card on the home page for phones that haven't installed it yet. */
function pwaHomeCard(){
 if(isStandalone()||!isMobile())return '';try{if(localStorage.getItem('tdesk-pwa-x'))return ''}catch(e){}
 return `<div class="pwa-card"><img src="icons/icon-192.png" alt="" width="40" height="40"><div><b>${esc(t('pwaCardT'))}</b><span>${esc(t('pwaCardS'))}</span></div>
  <div class="pwa-card-b">${PWA.bip?`<button type="button" class="btn primary sm" data-act="pwa-install">${esc(t('pwaInstall'))}</button>`:`<button type="button" class="btn primary sm" data-go="profile">${esc(t('pwaHow'))}</button>`}<button type="button" class="icon-btn" data-act="pwa-x" aria-label="${esc(t('close'))}">✕</button></div></div>`;
}

/* ---------- project phases editor ---------- */
const PHASE_TPL={hoai:['LP1 · Grundlagenermittlung','LP2 · Vorplanung','LP3 · Entwurfsplanung','LP4 · Genehmigungsplanung','LP5 · Ausführungsplanung','LP6 · Vorbereitung der Vergabe','LP7 · Mitwirkung bei der Vergabe','LP8 · Objektüberwachung','LP9 · Objektbetreuung'],
 bim:['BIM Modelling','Coordination & Clash Detection','Drawings & Documentation','Quantity Take-off','Model QA & Review']};
function phRow(h){return `<div class="ph-row" data-id="${esc(h.id||'')}"><input class="in ph-name" maxlength="120" placeholder="${esc(t('phaseName'))}" value="${esc(h.name||'')}"><input class="in num ph-bud" inputmode="decimal" placeholder="${esc(t('hrsUnit'))}" value="${esc(h.budget||'')}"><button type="button" class="btn ghost sm danger" data-act="ph-del" aria-label="${esc(t('delete'))}">✕</button></div>`}

/* ---------- accounting export ---------- */
async function exportAccounting(){
 const ym=(S.rp&&S.rp.to)||S.repYm;try{const d=await api('allocation',undefined,{ym});
  const rows=[['month','employee','email','country','project_code','project','client','phase','hours','share_percent','cost_eur']];
  for(const r of d.rows)rows.push([r.month,r.employee,r.email,r.country,r.projectCode,r.project,r.client,r.phase,r.hours,r.sharePercent,r.costEur==null?'':r.costEur]);
  exportCsv(`TECTOVA-allocation-${ym}.csv`,rows)}catch(e){writeErr(e)}
}

/* ---------- printable PDF report and payslip ---------- */
function printDoc(html){
 const el=$('#print');el.innerHTML=html;document.body.classList.add('printing');
 const done=()=>{document.body.classList.remove('printing');el.innerHTML='';window.removeEventListener('afterprint',done)};
 window.addEventListener('afterprint',done);setTimeout(()=>window.print(),60);
}
function docHead(title,uid,ym){const m=S.members[uid]||{};return `<header class="pd-h"><div><div class="pd-co">TECTOVA BIM &amp; Engineering Consulting</div><h1>${esc(title)}</h1></div>
 <table class="pd-meta"><tr><td>${esc(t('employee'))}</td><td><b>${esc(memberName(uid))}</b></td></tr><tr><td>${esc(t('role'))}</td><td>${esc(m.role||t(m.discipline||'ARC'))}</td></tr>
 <tr><td>${esc(t('country'))}</td><td>${esc(m.country?t(m.country):'')}</td></tr><tr><td>${esc(t('period'))}</td><td>${esc(fmtYm(ym))}</td></tr><tr><td>${esc(t('generated'))}</td><td>${esc(new Date().toLocaleDateString(loc()))}</td></tr></table></header>`}
const sigs=()=>`<footer class="pd-sig"><div>${esc(t('employeeSig'))}</div><div>${esc(t('managerSig'))}</div></footer>`;
function printReport(uid){
 const ym=S.repYm;const r=S.report[ym];if(!r||!r.items)return;const items=(r.items[uid]||[]).slice().sort((a,b)=>a.start-b.start);const s=summarize(items);
 const ex=expectedMin(uid,ym);const ap=approvedMin(uid,items,(r.weeks||{})[uid]);
 const byPh={};for(const e of items)if(e.phaseId){const k=e.projectId+'|'+e.phaseId;byPh[k]=(byPh[k]||0)+e.minutes}
 printDoc(`<div class="pd">${docHead(t('timeReport'),uid,ym)}
  <div class="pd-k"><div><span>${esc(t('totalHours'))}</span><b>${hm(s.total)}</b></div><div><span>${esc(t('apprCol'))}</span><b>${hm(ap)}</b></div><div><span>${esc(t('expected'))}</span><b>${hm(ex)}</b></div><div><span>${esc(t('util'))}</span><b>${ex?Math.round(s.total/ex*100)+'%':'—'}</b></div><div><span>${esc(t('days'))}</span><b>${s.days}</b></div></div>
  <h2>${esc(t('perProject'))}</h2><table><thead><tr><th>${esc(t('project'))}</th><th>${esc(t('phase'))}</th><th class="n">${esc(t('hours'))}</th><th class="n">${esc(t('share'))}</th></tr></thead><tbody>
  ${Object.entries(s.byP).sort((a,b)=>b[1]-a[1]).map(([pid,m])=>`<tr><td><b>${esc(pLabel(pid))}</b></td><td></td><td class="n">${hm(m)}</td><td class="n">${pct(m,s.total)}%</td></tr>${Object.entries(byPh).filter(([k])=>k.startsWith(pid+'|')).map(([k,mm])=>`<tr class="pd-sub"><td></td><td>${esc(phLabel(k.split('|')[1]))}</td><td class="n">${hm(mm)}</td><td class="n">${pct(mm,s.total)}%</td></tr>`).join('')}`).join('')}
  <tr class="pd-tot"><td>Σ</td><td></td><td class="n">${hm(s.total)}</td><td class="n">100%</td></tr></tbody></table>
  <h2>${esc(t('entriesList'))}</h2><table><thead><tr><th>${esc(t('date'))}</th><th>${esc(t('from'))}–${esc(t('to'))}</th><th>${esc(t('project'))}</th><th>${esc(t('task'))}</th><th>${esc(t('note'))}</th><th class="n">${esc(t('hours'))}</th></tr></thead><tbody>
  ${items.map(e=>`<tr><td>${esc(fmtShort(e.date))}</td><td dir="ltr">${hhmm(e.start)}–${hhmm(e.end)}</td><td>${esc(pLabel(e.projectId))}</td><td>${esc(e.taskId&&S.tasks[e.taskId]?S.tasks[e.taskId].title:'')}</td><td>${esc(e.note||'')}</td><td class="n">${hm(e.minutes)}</td></tr>`).join('')}</tbody></table>
  ${sigs()}</div>`);
}
function printPayslip(uid){
 const ym=S.repYm;const d=repData(ym);if(!d)return;const s=(d.people.find(p=>p.uid===uid))||{total:0,byP:{},days:0};const c=payCalc(uid,s);if(!c.set)return;
 const line=(a,b)=>`<tr><td>${a}</td><td class="n">${b}</td></tr>`;
 printDoc(`<div class="pd">${docHead(t('payslipTitle'),uid,ym)}
  <table class="pd-pay"><tbody>
   ${line(esc(t('payType')),esc(t(c.cfg.type)))}${line(esc(t('rate')),money(num(c.cfg.amount),c.cur)+(c.cfg.type==='hourly'?' / '+esc(t('hrsUnit')):''))}
   ${line(esc(t('hours')),hm(s.total))}${line(esc(t('expected')),hm(expectedMin(uid,ym)))}
   ${line(esc(t('base')),money(c.base,c.cur))}${line(esc(t('bonus')),money(num(c.pm.bonus),c.cur))}${line(esc(t('deduction')),'− '+money(num(c.pm.deduction),c.cur))}
   <tr class="pd-tot"><td>${esc(t('net'))}</td><td class="n">${money(c.net,c.cur)}</td></tr>
   ${c.cur!=='EUR'&&c.eur!=null?line(esc(t('eurEquiv'))+` <small>(${esc(t('fxUsed'))}: 1 EUR = ${c.fx} ${c.cur})</small>`,money(c.eur,'EUR')):''}
   ${line(esc(t('status')),esc(c.pm.paid?t('paid'):t('unpaidTotal')))}
  </tbody></table>${sigs()}</div>`);
}
/* =====================================================================
   REPORTS v3 — a hub of reports, each with a chart view and a table view.
   Charts are drawn here (inline SVG / HTML): the site's security policy
   allows no outside scripts. Colours: validated colour-blind-safe palette.
   ===================================================================== */
const CAT_L=['#2a78d6','#eb6834','#1baf7a','#eda100','#e87ba4','#008300','#6250d6','#e34948'];
const CAT_D=['#3987e5','#d95926','#199e70','#c98500','#d55181','#008300','#9085e9','#e66767'];
const SEQ_L=['#cde2fb','#9ec5f4','#6da7ec','#3987e5','#1c5cab'];
const SEQ_D=['#104281','#1c5cab','#2a78d6','#5598e7','#9ec5f4'];
const DIV_L=['#1c5cab','#86b6ef','#e3e2dc','#f0a3a3','#c23b3b'];
const DIV_D=['#3987e5','#1c5cab','#383835','#8f3535','#e66767'];
function isDark(){const a=document.documentElement.getAttribute('data-theme');if(a)return a==='dark';try{return matchMedia('(prefers-color-scheme: dark)').matches}catch(e){return false}}
function themed(hex){const h=String(hex||'').toLowerCase();const i=CAT_L.indexOf(h);return i>=0&&isDark()?CAT_D[i]:(hex||'#7D8A95')}
const seqColor=b=>(isDark()?SEQ_D:SEQ_L)[b];
const divColor=b=>(isDark()?DIV_D:DIV_L)[b];
const OTHER_C=()=>isDark()?'#5f6c76':'#a3adb5';
try{matchMedia('(prefers-color-scheme: dark)').addEventListener('change',()=>{if(S.screen==='app')renderMainNow()})}catch(e){}

/* ---------- formatting ---------- */
const H=m=>{const h=(m||0)/60;return h>=100?String(Math.round(h)):h.toFixed(1).replace(/\.0$/,'')};
const HU=m=>`${H(m)} ${t('hrsUnit')}`;
const PCT=(a,b)=>b?Math.round(a/b*100):0;
function niceStep(max,n){const raw=max/(n||4);const p=Math.pow(10,Math.floor(Math.log10(raw||1)));for(const k of[1,2,2.5,5,10])if(k*p>=raw)return k*p;return 10*p}
function nice(max){const st=niceStep(max||1,4);return{max:Math.max(st,Math.ceil((max||1)/st)*st),step:st}}
const fmtTick=v=>v>=10000?Math.round(v/1000)+'K':String(Math.round(v*10)/10);
/* main padding (2×16) + card border (2) + card body padding (2×16) */
function chartW(){const m=$('#main');return Math.max(260,Math.min(1100,(m?m.clientWidth:900)-68))}
const tipAttr=(title,rows)=>` data-tip="${esc(JSON.stringify({t:title,r:rows}))}" tabindex="0"`;

/* ---------- tooltip (one element, filled with textContent) ---------- */
let tipEl=null;
function tipShow(src,x,y){
 let d;try{d=JSON.parse(src.getAttribute('data-tip'))}catch(e){return}
 if(!tipEl){tipEl=document.createElement('div');tipEl.id='tip';tipEl.setAttribute('role','tooltip');document.body.appendChild(tipEl)}
 tipEl.textContent='';const h=document.createElement('div');h.className='tip-h';h.textContent=d.t||'';tipEl.appendChild(h);
 for(const r of d.r||[]){const row=document.createElement('div');row.className='tip-r';
  if(r[0]){const k=document.createElement('i');k.style.background=r[0];row.appendChild(k)}
  const v=document.createElement('b');v.textContent=r[2]??'';const l=document.createElement('span');l.textContent=r[1]??'';row.appendChild(v);row.appendChild(l);tipEl.appendChild(row)}
 tipEl.hidden=false;const w=tipEl.offsetWidth,hh=tipEl.offsetHeight;
 let left=x+14,top=y+14;if(left+w>innerWidth-8)left=Math.max(8,x-w-14);if(top+hh>innerHeight-8)top=Math.max(8,y-hh-14);
 tipEl.style.left=left+'px';tipEl.style.top=top+'px';
}
function tipHide(){if(tipEl)tipEl.hidden=true}
document.addEventListener('pointermove',ev=>{const el=ev.target.closest&&ev.target.closest('[data-tip]');if(el)tipShow(el,ev.clientX,ev.clientY);else tipHide()});
document.addEventListener('focusin',ev=>{const el=ev.target.closest&&ev.target.closest('[data-tip]');if(el){const r=el.getBoundingClientRect();tipShow(el,r.left+r.width/2,r.top+r.height/2)}});
document.addEventListener('focusout',tipHide);
document.addEventListener('scroll',tipHide,true);

/* ---------- chart primitives ---------- */
function legend(items,kind){return items.length<2?'':`<div class="ch-legend">${items.map(i=>`<span><i class="${kind==='line'?'lk':''}" style="background:${i.color}"></i>${esc(i.label)}</span>`).join('')}</div>`}
/** Horizontal bars (HTML, RTL-aware). rows: {label, labelHtml?, total, segs:[{v,color,name}], target?, valueText?, tip} */
function hBars(rows,o={}){
 if(!rows.length)return emptyBox();
 const max=o.max||Math.max(1,...rows.map(r=>Math.max(r.total,r.target||0)));
 return `<div class="hb${o.compact?' compact':''}">${rows.map(r=>`<div class="hb-row"${r.tip||''}>
  <div class="hb-l">${r.labelHtml||esc(r.label)}</div>
  <div class="hb-t">${r.segs.filter(s=>s.v>0).map(s=>`<i style="width:${(s.v/max*100).toFixed(2)}%;background:${s.color}"></i>`).join('')}${r.target?`<b class="hb-tg" style="inset-inline-start:${Math.min(100,r.target/max*100).toFixed(2)}%" title="${esc(t('expected'))}"></b>`:''}</div>
  <div class="hb-v">${esc(r.valueText??HU(r.total))}</div></div>`).join('')}</div>`;
}
/** One whole split into parts: tall segmented bar, names in the legend, share printed where it fits. */
function segBar(parts,total){
 if(!total)return emptyBox();
 return `<div class="sgb">${parts.map(p=>{const s=p.v/total*100;return `<i style="flex:${p.v} 1 0;background:${p.color}"${tipAttr(p.label,[[p.color,'',HU(p.v)+' · '+Math.round(s)+'%']])}>${s>=11?`<span class="${p.light?'dk':''}">${Math.round(s)}%</span>`:''}</i>`}).join('')}</div>${legend(parts.map(p=>({label:`${p.label} · ${HU(p.v)}`,color:p.color})))}`;
}
/** Stacked columns over time (SVG). xs:[{key,label,long}], stacks:[{key,label,color}], val(x,s)->minutes */
function colChart(xs,stacks,val,o={}){
 const W=o.w||chartW(),Hh=o.h||230,pl=44,pr=10,pt=18,pb=28,iw=W-pl-pr,ih=Hh-pt-pb;
 const tot=xs.map(x=>stacks.reduce((s,st)=>s+val(x.key,st.key),0));
 if(!tot.some(v=>v>0))return emptyBox();
 const unit=o.unit||(v=>v/60),fmt=o.fmt||(v=>HU(v));
 const {max,step}=nice(Math.max(...tot.map(unit)));
 const band=iw/xs.length,bw=Math.min(24,Math.max(6,band*.62)),y=v=>pt+ih-unit(v)/max*ih;
 let g='';for(let v=0;v<=max+1e-9;v+=step){const yy=pt+ih-v/max*ih;g+=`<line x1="${pl}" x2="${W-pr}" y1="${yy}" y2="${yy}" class="${v?'gl':'bl'}"/><text x="${pl-6}" y="${yy+4}" text-anchor="end">${fmtTick(v)}</text>`}
 const every=Math.max(1,Math.ceil(xs.length*46/iw));let bars='',hits='',labels='';
 const maxI=tot.indexOf(Math.max(...tot)),lastI=tot.length-1;
 xs.forEach((x,i)=>{const cx=pl+band*(i+.5),x0=cx-bw/2;let base=pt+ih;const segs=stacks.map(st=>({st,v:val(x.key,st.key)})).filter(s=>s.v>0);
  segs.forEach((s,j)=>{const h=unit(s.v)/max*ih;const top=base-h;const gap=j>0?2:0;const hh=Math.max(0,h-gap);
   if(j===segs.length-1){const r=Math.min(4,hh/2,bw/2);bars+=`<path d="M${x0},${base-gap} V${top+r} Q${x0},${top} ${x0+r},${top} H${x0+bw-r} Q${x0+bw},${top} ${x0+bw},${top+r} V${base-gap} Z" fill="${s.st.color}"/>`}
   else bars+=`<rect x="${x0}" y="${top}" width="${bw}" height="${hh}" fill="${s.st.color}"/>`;base=top});
  if(tot[i]&&(i===maxI||i===lastI))labels+=`<text x="${cx}" y="${y(tot[i])-6}" text-anchor="middle" class="cap">${esc(o.capFmt?o.capFmt(tot[i]):H(tot[i]))}</text>`;
  if(i%every===0)labels+=`<text x="${cx}" y="${Hh-8}" text-anchor="middle">${esc(x.label)}</text>`;
  hits+=`<rect class="hit" x="${pl+band*i}" y="${pt}" width="${band}" height="${ih}"${tipAttr(x.long||x.label,[...segs.map(s=>[s.st.color,s.st.label,fmt(s.v)]),['',t('total'),fmt(tot[i])]])}/>`});
 return `${legend(stacks,'rect')}<div class="ch-wrap"><svg class="ch" viewBox="0 0 ${W} ${Hh}" width="${W}" height="${Hh}" direction="ltr" role="img" aria-label="${esc(o.aria||'')}">${g}${bars}${labels}${hits}</svg></div>`;
}
/** Lines over time (SVG). series:[{label,color,vals:[number in hours]}], o.ref:{v,label} */
function lineChart(xs,series,o={}){
 const W=o.w||chartW(),Hh=o.h||230,pl=44,pr=o.endLabels===false?14:96,pt=18,pb=28,iw=W-pl-pr,ih=Hh-pt-pb;
 const all=series.flatMap(s=>s.vals).concat(o.ref?[o.ref.v]:[]);
 if(!all.some(v=>v>0))return emptyBox();
 const {max,step}=nice(Math.max(...all));const n=xs.length;
 const X=i=>pl+(n<=1?iw/2:iw*i/(n-1)),Y=v=>pt+ih-v/max*ih;const fmt=o.fmt||(v=>`${Math.round(v*10)/10} ${t('hrsUnit')}`);
 let g='';for(let v=0;v<=max+1e-9;v+=step){const yy=Y(v);g+=`<line x1="${pl}" x2="${W-pr}" y1="${yy}" y2="${yy}" class="${v?'gl':'bl'}"/><text x="${pl-6}" y="${yy+4}" text-anchor="end">${fmtTick(v)}</text>`}
 let ref='';if(o.ref){const yy=Y(o.ref.v);ref=`<line x1="${pl}" x2="${W-pr}" y1="${yy}" y2="${yy}" class="ref"/><text x="${W-pr+6}" y="${yy+4}" class="cap">${esc(o.ref.label)}</text>`}
 let paths='',ends='';const endYs=[];
 for(const s of series){const pts=s.vals.map((v,i)=>[X(i),Y(v)]);const d=pts.map((p,i)=>(i?'L':'M')+p[0].toFixed(1)+','+p[1].toFixed(1)).join(' ');
  if(o.area&&series.length===1)paths+=`<path d="${d} L${X(n-1)},${Y(0)} L${X(0)},${Y(0)} Z" fill="${s.color}" fill-opacity=".1"/>`;
  paths+=`<path d="${d}" fill="none" stroke="${s.color}" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/>`;
  const lp=pts[pts.length-1];ends+=`<circle cx="${lp[0]}" cy="${lp[1]}" r="4" fill="${s.color}" class="dot"/>`;
  if(o.endLabels!==false&&series.length<=4){let ly=lp[1]+4;if(endYs.some(e=>Math.abs(e-ly)<13))continue;endYs.push(ly);ends+=`<text x="${lp[0]+8}" y="${ly}" class="cap">${esc(s.short||s.label)}</text>`}}
 const every=Math.max(1,Math.ceil(n*46/iw));let xl='',hits='';const band=n<=1?iw:iw/(n-1);
 xs.forEach((x,i)=>{if(i%every===0||i===n-1)xl+=`<text x="${X(i)}" y="${Hh-8}" text-anchor="middle">${esc(x.label)}</text>`;
  const rows=series.map(s=>[s.color,s.label,fmt(s.vals[i])]);if(o.ref)rows.push(['',o.ref.label,fmt(o.ref.v)]);
  hits+=`<g class="xh"><line x1="${X(i)}" x2="${X(i)}" y1="${pt}" y2="${pt+ih}"/><rect class="hit" x="${Math.max(pl-band/2,X(i)-band/2)}" y="${pt}" width="${band}" height="${ih}"${tipAttr(x.long||x.label,rows)}/></g>`});
 return `${legend(series,'line')}<div class="ch-wrap"><svg class="ch" viewBox="0 0 ${W} ${Hh}" width="${W}" height="${Hh}" direction="ltr" role="img" aria-label="${esc(o.aria||'')}">${g}${ref}${paths}${ends}${xl}${hits}</svg></div>`;
}
/** Sparkline for small multiples (no text inside; scales to its box). */
function spark(vals,color,shared){const n=vals.length,max=shared||Math.max(1,...vals);if(n<2)return '';const X=i=>i/(n-1)*100,Y=v=>38-v/max*34;
 const d=vals.map((v,i)=>(i?'L':'M')+X(i).toFixed(2)+','+Y(v).toFixed(2)).join(' ');
 return `<svg class="spark" viewBox="0 0 100 40" preserveAspectRatio="none" aria-hidden="true"><path d="${d} L100,40 L0,40 Z" fill="${color}" fill-opacity=".1"/><path d="${d}" fill="none" stroke="${color}" stroke-width="2" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></svg>`}
function emptyBox(){return `<div class="empty">${esc(t('noData'))}</div>`}
function seqBin(v,max){if(!v)return -1;const r=v/(max||1);return r<=.2?0:r<=.4?1:r<=.6?2:r<=.8?3:4}
function seqLegend(max,fmt){return `<div class="ch-legend seq"><span>${esc(t('less'))}</span>${[0,1,2,3,4].map(b=>`<i style="background:${seqColor(b)}"></i>`).join('')}<span>${esc(t('more'))}${max?` (${esc(fmt(max))})`:''}</span></div>`}

/* ---------- state, period and data ---------- */
function rpInit(){if(S.rp)return;const ym=ymOf(new Date());S.rp={tab:'overview',preset:'m0',from:ym,to:ym,person:'',project:'',disc:'',view:{},data:null,key:'',loading:false}}
const monthsBetween=(a,b)=>{const out=[];for(let m=a;m<=b;m=shiftYm(m,1))out.push(m);return out};
function presetRange(p){const ym=ymOf(new Date());switch(p){case 'm1':return[shiftYm(ym,-1),shiftYm(ym,-1)];case 'q':return[shiftYm(ym,-2),ym];case 'h':return[shiftYm(ym,-5),ym];case 'y':return[shiftYm(ym,-11),ym];case 'ytd':return[ym.slice(0,4)+'-01',ym];default:return[ym,ym]}}
const PRESETS=['m0','m1','q','h','y','ytd','custom'];
async function rpLoad(force){
 const r=S.rp;const len=monthsBetween(r.from,r.to).length;const pf=shiftYm(r.from,-len);const key=pf+'|'+r.to;
 if(!force&&r.key===key&&r.data)return;if(r.loading===key)return;r.loading=key;
 try{const d=await api('report_data',undefined,{from:pf,to:r.to});if(S.rp.loading===key){S.rp.data=d;S.rp.key=key}}
 catch(e){writeErr(e)}finally{if(S.rp.loading===key)S.rp.loading=false;schedule()}
}
/** All the numbers every report needs, for the current period and the one before it. */
function rpModel(){
 const r=S.rp,d=r.data;if(!d)return null;
 const months=monthsBetween(r.from,r.to),prevFrom=shiftYm(r.from,-months.length),prevMonths=monthsBetween(prevFrom,shiftYm(r.from,-1));
 const inScope=new Set(d.users);const people=[...inScope].filter(u=>S.members[u]&&(!r.person||u===r.person)&&(S.members[u].active!==false||d.rows.some(x=>x[1]===u)));
 const discOf=(u,tk)=>(tk&&S.tasks[tk]&&S.tasks[tk].discipline)||(S.members[u]||{}).discipline||'ARC';
 const keep=x=>(!r.person||x[1]===r.person)&&(!r.project||x[2]===r.project)&&(!r.disc||discOf(x[1],x[4])===r.disc);
 const cur=[],prev=[];for(const x of d.rows){if(!keep(x))continue;const ym=x[0].slice(0,7);if(ym>=r.from&&ym<=r.to)cur.push(x);else if(ym>=prevFrom&&ym<r.from)prev.push(x)}
 const sum=a=>a.reduce((s,x)=>s+x[5],0);
 const by=(rows,f)=>{const o={};for(const x of rows){const k=f(x);o[k]=(o[k]||0)+x[5]}return o};
 const expected=(u,ms)=>ms.reduce((s,ym)=>s+expectedUpTo(u,ym),0);
 const approved=rows=>rows.reduce((s,x)=>{const w=((d.weeks||{})[x[1]]||{})[weekStartOf(x[0])];return s+(w==='approved'?x[5]:0)},0);
 const projTotals=by(cur,x=>x[2]);
 const projOrder=Object.keys(projTotals).sort((a,b)=>projTotals[b]-projTotals[a]);
 const prevFull=prevMonths.length>0&&prevMonths.every(ym=>prev.some(x=>x[0].startsWith(ym)));
 return{r,d,months,prevMonths,prevFull,people,cur,prev,sum,by,expected,approved,projTotals,projOrder,discOf,
  total:sum(cur),prevTotal:sum(prev),expTotal:people.reduce((s,u)=>s+expected(u,months),0),prevExp:people.reduce((s,u)=>s+expected(u,prevMonths),0)};
}
/** Expected minutes in a month, counted only up to today for the current month. */
function expectedUpTo(uid,ym){const[a,b]=monthRange(ym);const today=dateKey(new Date());if(a>today)return 0;const end=b<today?b:today;return workdays(uid,a,end)*dailyMin(uid)}
/** Up to 7 project series plus "Other", coloured by each project's own colour. */
function projStacks(m,limit){const lim=limit||7;const top=m.projOrder.slice(0,lim);const st=top.map(p=>({key:p,label:pLabel(p),color:themed(pColor(p))}));
 if(m.projOrder.length>lim)st.push({key:'__o',label:t('otherLbl'),color:OTHER_C()});return st}
const projKey=(m,p)=>{const lim=7;return m.projOrder.indexOf(p)<lim?p:'__o'};
const monthShort=ym=>{const[y,mo]=ym.split('-').map(Number);return new Date(y,mo-1,1).toLocaleDateString(loc(),{month:'short'})+(ym.endsWith('-01')?" '"+String(y).slice(2):'')};

/* ---------- the hub ---------- */
const rAll=()=>seesTeam()||S.isFin;
const RTABS=[['overview','rOverview'],['trends','rTrends'],['daily','rDaily'],['projects','rProjects'],['util','rUtil'],['breakdown','rBreakdown'],['tasks','rTasks'],['cost','rCost']];
function reportsHtml(){
 rpInit();const r=S.rp;rpLoad();
 const tabs=RTABS.filter(([k])=>k!=='cost'||S.isFin);if(!tabs.some(([k])=>k===r.tab))r.tab='overview';
 const people=Object.entries(S.members).filter(([u,m])=>m.active!==false&&(S.isFin||rAll()||u===S.uid));
 const head=`<div class="view-head"><h2>${esc(t('reportTitle'))}</h2><button class="btn" data-act="rp-refresh">↻ ${esc(t('refresh'))}</button><button class="btn" data-act="rp-print">⎙ ${esc(t('printReport'))}</button>${S.isFin?`<button class="btn" data-act="acc-export">⤓ ${esc(t('exportAcc'))}</button>`:''}${!rAll()?`<div class="sub">${esc(t('ownOnly'))}</div>`:''}</div>
 <nav class="rtabs" role="tablist">${tabs.map(([k,l])=>`<button role="tab" data-act="rp-tab" data-id="${k}" aria-selected="${r.tab===k}">${esc(t(l))}</button>`).join('')}</nav>
 <div class="rfilters">
  <label class="f">${esc(t('period'))}<select class="in" id="rp-preset">${PRESETS.map(p=>`<option value="${p}"${r.preset===p?' selected':''}>${esc(t('pr_'+p))}</option>`).join('')}</select></label>
  ${r.preset==='custom'?`<label class="f">${esc(t('from'))}<input class="in" type="month" id="rp-from" value="${r.from}" max="${ymOf(new Date())}"></label><label class="f">${esc(t('to'))}<input class="in" type="month" id="rp-to" value="${r.to}" max="${ymOf(new Date())}"></label>`:''}
   <div class="mnav rp-shift"><button class="icon-btn" data-act="rp-shift" data-d="-1" aria-label="prev">${LANG==='ar'?'›':'‹'}</button><strong>${esc(r.from===r.to?fmtYm(r.from):fmtYm(r.from)+' – '+fmtYm(r.to))}</strong><button class="icon-btn" data-act="rp-shift" data-d="1" aria-label="next" ${r.to>=ymOf(new Date())?'disabled':''}>${LANG==='ar'?'‹':'›'}</button></div>
  ${rAll()?`<label class="f">${esc(t('employee'))}<select class="in" id="rp-person"><option value="">${esc(t('allPeople'))}</option>${people.map(([u,m])=>`<option value="${esc(u)}"${r.person===u?' selected':''}>${esc(m.name)}</option>`).join('')}</select></label>`:''}
  <label class="f">${esc(t('project'))}<select class="in" id="rp-project"><option value="">${esc(t('allProjects'))}</option>${projList(true).map(p=>`<option value="${esc(p.id)}"${r.project===p.id?' selected':''}>${esc((p.code?p.code+' · ':'')+p.name)}</option>`).join('')}</select></label>
  <label class="f">${esc(t('discipline'))}<select class="in" id="rp-disc"><option value="">${esc(t('allDisc'))}</option>${DISC.map(d=>`<option value="${d}"${r.disc===d?' selected':''}>${esc(t(d))}</option>`).join('')}</select></label>
 </div>`;
 const m=rpModel();
 if(!m)return head+`<div class="loading">${esc(t('loading'))}</div>`;
 S.rtables={};
 const body=({overview:rOverview,trends:rTrends,daily:rDaily,projects:rProjects,util:rUtil,breakdown:rBreakdown,tasks:rTasks,cost:rCost})[r.tab](m);
 return head+`<div class="stack${r.loading?' rp-busy':''}" id="rp-body">${body}</div>`;
}
/** A report card with a chart/table switch and a CSV export of its table. */
function card(id,title,sub,chart,table,opts={}){
 const v=S.rp.view[id]||opts.def||'chart';if(table)S.rtables[id]={title,rows:table};
 const tbl=table?tableHtml(table,opts.tableExtra):'';
 return `<section class="sheet rcard${opts.half?' half':''}"><div class="sheet-h"><div class="rc-t"><h3>${esc(title)}</h3>${sub?`<span class="muted">${esc(sub)}</span>`:''}</div>
  ${table&&chart?`<div class="vt" role="group"><button data-act="rp-view" data-id="${id}" data-v="chart" aria-pressed="${v==='chart'}">${esc(t('vChart'))}</button><button data-act="rp-view" data-id="${id}" data-v="table" aria-pressed="${v==='table'}">${esc(t('vTable'))}</button></div>`:''}
  ${table?`<button class="btn ghost sm" data-act="rp-csv" data-id="${id}" title="CSV">⤓ CSV</button>`:''}</div>
  <div class="sheet-b">${v==='table'||!chart?tbl:chart}</div></section>`;
}
/** Table from rows: first row is the header. Numbers align to the end. */
function tableHtml(rows,extra){if(!rows||rows.length<2)return emptyBox();const[h,...b]=rows;const isN=v=>typeof v==='number'||/^[-+]?[\d.,:%]+( [^\d\s]+)?$/.test(String(v));
 return `<div class="tbl-wrap"><table class="t"><thead><tr>${h.map((c,i)=>`<th class="${i&&b.every(r=>r[i]===''||isN(r[i]))?'n':''}">${esc(c)}</th>`).join('')}${extra?'<th></th>':''}</tr></thead><tbody>${b.map((r,ri)=>`<tr class="${r.__total?'total':''}">${r.map((c,i)=>`<td class="${i&&isN(c)?'n':''}">${esc(c)}</td>`).join('')}${extra?`<td>${extra(ri)||''}</td>`:''}</tr>`).join('')}</tbody></table></div>`}
const totalRow=a=>{a.__total=true;return a};
function delta(cur,prev,unitFmt,ok){if(!prev||ok===false)return '';const d=cur-prev;const p=Math.round(d/prev*100);if(!p)return `<span class="dl">= ${esc(t('vsPrev'))}</span>`;return `<span class="dl ${d>0?'up':'down'}">${d>0?'▲':'▼'} ${Math.abs(p)}% ${esc(t('vsPrev'))}</span>`}
function kpi(v,l,dl,cls){return `<div class="kpi"><span class="v vt2${cls?' '+cls:''}">${esc(v)}</span><span class="l">${esc(l)}</span>${dl||''}</div>`}
const personLabel=u=>`<span class="who">${avatar(u,22)}<span class="nm">${esc(memberName(u))}</span></span>`;
const xsMonths=m=>m.months.map(ym=>({key:ym,label:monthShort(ym),long:fmtYm(ym)}));

/* ---------- 1. overview ---------- */
function rOverview(m){
 const ppl=m.people.filter(u=>m.cur.some(x=>x[1]===u)).length;const appr=m.approved(m.cur);
 const kp=`<div class="kpis">${kpi(HU(m.total),rAll()?t('teamHours'):(m.months.length>1?t('periodHours'):t('monthTotal')),delta(m.total,m.prevTotal,null,m.prevFull))}
  ${rAll()?kpi(String(ppl),t('people'),''):''}${kpi(m.expTotal?PCT(m.total,m.expTotal)+'%':'—',t('util'),m.prevExp?delta(m.total/m.expTotal,m.prevTotal/m.prevExp,null,m.prevFull):'')}
  ${kpi(m.total?PCT(appr,m.total)+'%':'—',t('approvedShare'),'')}${kpi(String(m.projOrder.length),t('projectsWorked'),'')}</div>`;
 const st=projStacks(m,5);const parts=st.map(s=>({label:s.label,color:s.color,v:s.key==='__o'?m.projOrder.slice(5).reduce((a,p)=>a+m.projTotals[p],0):m.projTotals[s.key],light:/#eda100|#1baf7a|#e87ba4/i.test(s.color)}));
 const share=card('ov-share',t('shareByProject'),'',segBar(parts,m.total),[[t('project'),t('hours'),t('share')],...m.projOrder.map(p=>[pLabel(p),H(m.projTotals[p]),PCT(m.projTotals[p],m.total)+'%'])]);
 const stacks=projStacks(m);const byUP={};for(const x of m.cur){const k=x[1]+'|'+projKey(m,x[2]);byUP[k]=(byUP[k]||0)+x[5]}
 const ut=m.by(m.cur,x=>x[1]);const people=m.people.filter(u=>ut[u]).sort((a,b)=>ut[b]-ut[a]);
 const rows=people.map(u=>({labelHtml:personLabel(u),total:ut[u],target:m.expected(u,m.months),segs:stacks.map(s=>({v:byUP[u+'|'+s.key]||0,color:s.color})),
  tip:tipAttr(memberName(u),[...stacks.filter(s=>byUP[u+'|'+s.key]).map(s=>[s.color,s.label,HU(byUP[u+'|'+s.key])]),['',t('expected'),HU(m.expected(u,m.months))]])}));
 const tb=[[t('employee'),t('hours'),t('expected'),t('util'),t('apprCol'),t('share')],...people.map(u=>{const rr=m.cur.filter(x=>x[1]===u);const ex=m.expected(u,m.months);return[memberName(u),H(ut[u]),H(ex),ex?PCT(ut[u],ex)+'%':'—',H(m.approved(rr)),PCT(ut[u],m.total)+'%']}),totalRow([t('total'),H(m.total),H(m.expTotal),m.expTotal?PCT(m.total,m.expTotal)+'%':'—',H(appr),'100%'])];
 const single=m.months.length===1;
 const pdf=single?(i=>i<people.length?`<button class="btn sm" data-act="rp-pdf" data-id="${esc(people[i])}">⎙ PDF</button>`:''):null;
 const byEmp=card('ov-emp',t('perEmployee'),t('targetTick'),legend(stacks,'rect')+hBars(rows),tb,{tableExtra:pdf});
 const trend=m.months.length>1?card('ov-trend',t('hoursPerMonth'),'',colChart(xsMonths(m),stacks,(ym,k)=>m.cur.reduce((s,x)=>s+(x[0].startsWith(ym)&&projKey(m,x[2])===k?x[5]:0),0)),
   [[t('month'),...stacks.map(s=>s.label),t('total')],...m.months.map(ym=>{const v=stacks.map(s=>m.cur.reduce((a,x)=>a+(x[0].startsWith(ym)&&projKey(m,x[2])===s.key?x[5]:0),0));return[fmtYm(ym),...v.map(H),H(v.reduce((a,b)=>a+b,0))]})])
  :weeklyCard(m,stacks);
 return kp+trend+`<div class="rgrid">${share}${byEmp}</div>`;
}
function weeklyCard(m,stacks){
 const[a,b]=monthRange(m.months[0]);const ws=[];for(let w=weekStartOf(a);w<=b;w=addDays(w,7))ws.push(w);
 const xs=ws.map(w=>({key:w,label:fmtShort(w),long:fmtRange(w,addDays(w,6))}));
 const val=(w,k)=>m.cur.reduce((s,x)=>s+(x[0]>=w&&x[0]<=addDays(w,6)&&projKey(m,x[2])===k?x[5]:0),0);
 return card('ov-week',t('hoursPerWeek'),'',colChart(xs,stacks,val),[[t('weekLbl'),...stacks.map(s=>s.label),t('total')],...ws.map(w=>{const v=stacks.map(s=>val(w,s.key));return[fmtRange(w,addDays(w,6)),...v.map(H),H(v.reduce((x,y)=>x+y,0))]})]);
}

/* ---------- 2. trends ---------- */
function rTrends(m){
 if(m.months.length<2)return `<div class="note-box"><b>${esc(t('trendNeedsRange'))}</b><button class="btn sm" data-act="rp-preset" data-id="h" style="justify-self:start">${esc(t('pr_h'))}</button></div>`+weeklyCard(m,projStacks(m));
 const stacks=projStacks(m);const xs=xsMonths(m);
 const val=(ym,k)=>m.cur.reduce((s,x)=>s+(x[0].startsWith(ym)&&projKey(m,x[2])===k?x[5]:0),0);
 const tot=m.months.map(ym=>m.cur.reduce((s,x)=>s+(x[0].startsWith(ym)?x[5]:0),0));
 const exp=m.months.map(ym=>m.people.reduce((s,u)=>s+expectedUpTo(u,ym),0));
 const c1=card('tr-stack',t('hoursPerMonth'),t('byProjectSub'),colChart(xs,stacks,val),[[t('month'),...stacks.map(s=>s.label),t('total')],...m.months.map((ym,i)=>[fmtYm(ym),...stacks.map(s=>H(val(ym,s.key))),H(tot[i])])]);
 const c2=card('tr-line',t('loggedVsExpected'),'',lineChart(xs,[{label:t('logged'),short:t('logged'),color:themed(CAT_L[0]),vals:tot.map(v=>v/60)},{label:t('expected'),short:t('expected'),color:themed(CAT_L[1]),vals:exp.map(v=>v/60)}]),
  [[t('month'),t('logged'),t('expected'),t('util')],...m.months.map((ym,i)=>[fmtYm(ym),H(tot[i]),H(exp[i]),exp[i]?PCT(tot[i],exp[i])+'%':'—'])]);
 const people=m.people.filter(u=>m.cur.some(x=>x[1]===u));
 const pm={};for(const x of m.cur){const k=x[1]+'|'+x[0].slice(0,7);pm[k]=(pm[k]||0)+x[5]}const shared=Math.max(1,...Object.values(pm))/60;
 const sm=people.map(u=>{const v=m.months.map(ym=>pm[u+'|'+ym]||0);const last=v[v.length-1],tt=v.reduce((a,b)=>a+b,0);
  return `<div class="smc"${tipAttr(memberName(u),m.months.map((ym,i)=>['',fmtYm(ym),HU(v[i])]))}><div class="smc-h">${personLabel(u)}<b>${esc(HU(tt))}</b></div>${spark(v.map(x=>x/60),themed(CAT_L[0]),shared)}<div class="smc-f"><span>${esc(monthShort(m.months[0]))}</span><span>${esc(monthShort(m.months[m.months.length-1]))}: ${esc(HU(last))}</span></div></div>`}).join('');
 const c3=rAll()&&people.length>1?card('tr-sm',t('perPersonTrend'),t('smallMultiples'),`<div class="smg">${sm}</div>`,[[t('employee'),...m.months.map(monthShort),t('total')],...people.map(u=>{const v=m.months.map(ym=>m.cur.reduce((s,x)=>s+(x[1]===u&&x[0].startsWith(ym)?x[5]:0),0));return[memberName(u),...v.map(H),H(v.reduce((a,b)=>a+b,0))]})]):'';
 return c1+c2+c3;
}

/* ---------- 3. daily heatmap ---------- */
function rDaily(m){
 const single=m.months.length===1;const ym=m.months[m.months.length-1];
 const people=m.people.filter(u=>rAll()||u===S.uid);
 let cols;if(single||m.months.length<=1){const[a,b]=monthRange(ym);cols=[];for(let d=a;d<=b;d=addDays(d,1))cols.push({key:d,label:String(+d.slice(8)),long:fmtDay(d),day:true})}
 else{const a=m.months[0]+'-01',b=monthRange(ym)[1];cols=[];for(let w=weekStartOf(a);w<=b;w=addDays(w,7))cols.push({key:w,label:`${+w.slice(8)}/${+w.slice(5,7)}`,long:fmtRange(w,addDays(w,6)),day:false})}
 const cell={};for(const x of m.cur){const k=cols[0].day?x[0]:weekStartOf(x[0]);const kk=x[1]+'|'+k;cell[kk]=(cell[kk]||0)+x[5]}
 const max=Math.max(1,...Object.values(cell));const today=dateKey(new Date());
 const rows=people.map(u=>{const mm=S.members[u]||{};const cc=mm.country||'DE';
  return `<div class="hx-l">${personLabel(u)}</div>${cols.map(c=>{const v=cell[u+'|'+c.key]||0;let cls='',mark='',state='';
   if(c.day){if(!(mm.workDays||[6,0,1,2,3,4]).includes(dowOf(c.key))){cls=' off';state=t('dayOff')}else if(isHoliday(cc,c.key)){cls=' hol';mark='H';state=t('holidayLbl')}else if(leaveOn(u,c.key)){cls=' lv';mark='L';state=t('leaveLbl')}else if(c.key>today){cls=' fut'}else if(!v){cls=' miss';state=t('noEntryDay')}}
   const b=seqBin(v,max);const style=b>=0?` style="background:${seqColor(b)}"`:'';
   return `<i class="hx-c${cls}${b>=3?' strong':''}"${style}${tipAttr(memberName(u)+' · '+c.long,[['',state||t('logged'),HU(v)]])}>${v&&c.day?'':mark}</i>`}).join('')}`}).join('');
 const mc=cols[0].day?22:30;const grid=`<div class="hx-wrap"><div class="hx" style="min-width:${130+cols.length*(mc+2)}px;grid-template-columns:minmax(120px,160px) repeat(${cols.length},minmax(${mc}px,1fr))"><div></div>${cols.map(c=>`<span class="hx-x${c.day&&dowOf(c.key)===5?' fri':''}">${esc(c.label)}</span>`).join('')}${rows}</div></div>
  ${seqLegend(max,HU)}<div class="ch-legend"><span><i class="sw-off"></i>${esc(t('dayOff'))}</span><span><i class="sw-hol">H</i>${esc(t('holidayLbl'))}</span><span><i class="sw-lv">L</i>${esc(t('leaveLbl'))}</span><span><i class="sw-miss"></i>${esc(t('noEntryDay'))}</span></div>`;
 const tb=[[t('employee'),...cols.map(c=>c.label),t('total')],...people.map(u=>{const v=cols.map(c=>cell[u+'|'+c.key]||0);return[memberName(u),...v.map(x=>x?H(x):''),H(v.reduce((a,b)=>a+b,0))]})];
 const missing=people.map(u=>{const mm=S.members[u]||{};let n=0;for(const c of cols)if(c.day&&c.key<=today&&isWorkday(u,c.key)&&!cell[u+'|'+c.key])n++;return[u,n]}).filter(x=>x[1]>0).sort((a,b)=>b[1]-a[1]);
 const miss=cols[0].day&&missing.length?card('dl-miss',t('missingDays'),t('missingSub'),hBars(missing.map(([u,n])=>({labelHtml:personLabel(u),total:n,segs:[{v:n,color:themed(CAT_L[1])}],valueText:`${n} ${t('daysUnit')}`})),{compact:true}),[[t('employee'),t('missingDays')],...missing.map(([u,n])=>[memberName(u),n])],{half:true}):'';
 return card('dl-heat',cols[0].day?t('dailyTitle'):t('weeklyTitle'),cols[0].day?fmtYm(ym):t('weeklySub'),grid,tb)+miss;
}

/* ---------- 4. projects ---------- */
function rProjects(m){
 const pid=S.rp.project||m.projOrder[0]||(projList()[0]||{}).id;
 if(!pid)return emptyBox();const p=S.projects[pid]||{};const rows=m.cur.filter(x=>x[2]===pid);const tot=m.sum(rows);
 const allTime=rAll()?((S.team.p||{})[pid]||0):(((myE().totals||{}).p||{})[pid]||0);const bud=num(p.budget)*60;
 const pick=S.rp.project?'':`<div class="note-box"><span>${esc(t('pickProjectHint'))}</span></div>`;
 const kp=`<div class="kpis">${kpi(HU(tot),t('inPeriod'),'')}${kpi(HU(allTime),t('allTimeHours'),'')}${kpi(bud?Math.round(allTime/bud*100)+'%':'—',t('budgetUsed'),'')}${kpi(bud?HU(Math.max(0,bud-allTime)):'—',t('budgetLeft'),'')}</div>`;
 // burn-up: cumulative hours by day (single month) or by month, starting from the hours logged before the period
 const after=m.d.rows.filter(x=>x[2]===pid&&x[0].slice(0,7)>m.r.to).reduce((s,x)=>s+x[5],0);
 const offset=(!S.rp.person&&!S.rp.disc)?Math.max(0,allTime-after-tot):0;
 let xs,vals;if(m.months.length===1){const[a,b]=monthRange(m.months[0]);const today=dateKey(new Date());xs=[];vals=[];let acc=offset;for(let d=a;d<=b&&d<=today;d=addDays(d,1)){acc+=rows.reduce((s,x)=>s+(x[0]===d?x[5]:0),0);xs.push({key:d,label:String(+d.slice(8)),long:fmtDay(d)});vals.push(acc/60)}}
 else{let acc=offset;xs=xsMonths(m);vals=m.months.map(ym=>{acc+=rows.reduce((s,x)=>s+(x[0].startsWith(ym)?x[5]:0),0);return acc/60})}
 const burn=card('pj-burn',t('burnUp'),offset?t('burnUpSub'):'',lineChart(xs,[{label:t('cumulative'),short:H(vals[vals.length-1]*60),color:themed(pColor(pid)),vals}],{area:true,ref:bud?{v:bud/60,label:t('budgetLbl')+' '+num(p.budget)}:null}),
  [[xs.length>12?t('date'):t('month'),t('cumulative')],...xs.map((x,i)=>[x.long,Math.round(vals[i]*10)/10])]);
 const phs=S.phasesBy[pid]||[];const phT=m.by(rows,x=>x[3]||'');
 const phRows=[...phs.map(h=>({labelHtml:esc(h.name),total:phT[h.id]||0,target:num(h.budget)*60||0,segs:[{v:phT[h.id]||0,color:themed(pColor(pid))}],valueText:HU(phT[h.id]||0)+(num(h.budget)?' / '+num(h.budget):''),tip:tipAttr(h.name,[['',t('inPeriod'),HU(phT[h.id]||0)],['',t('budget'),num(h.budget)?num(h.budget)+' '+t('hrsUnit'):'—'],['',t('allTimeHours'),HU((S.team.ph||{})[h.id]||0)]])})),
  ...(phT['']?[{labelHtml:esc(t('noPhaseLbl')),total:phT[''],segs:[{v:phT[''],color:OTHER_C()}]}]:[])];
 const ph=card('pj-phase',t('byPhase'),t('targetTickBudget'),hBars(phRows),[[t('phase'),t('inPeriod'),t('budget'),t('allTimeHours')],...phs.map(h=>[h.name,H(phT[h.id]||0),num(h.budget)||'—',H((S.team.ph||{})[h.id]||0)]),...(phT['']?[[t('noPhaseLbl'),H(phT['']),'—','—']]:[])],{half:true});
 const upT=m.by(rows,x=>x[1]);const ups=Object.keys(upT).sort((a,b)=>upT[b]-upT[a]);
 const pe=card('pj-people',t('byPerson'),'',hBars(ups.map(u=>({labelHtml:personLabel(u),total:upT[u],segs:[{v:upT[u],color:themed(pColor(pid))}],valueText:HU(upT[u])+' · '+PCT(upT[u],tot)+'%'}))),[[t('employee'),t('hours'),t('share')],...ups.map(u=>[memberName(u),H(upT[u]),PCT(upT[u],tot)+'%'])],{half:true});
 return pick+`<div class="pj-head">${pChip(pid)}${p.client?`<span class="muted">${esc(p.client)}</span>`:''}</div>`+kp+burn+`<div class="rgrid">${ph}${pe}</div>`+taskDumbbell(Object.entries(S.tasks).filter(([,x])=>x.projectId===pid).map(([id,x])=>({id,...x})),'pj-tasks');
}

/* ---------- 5. utilisation ---------- */
function rUtil(m){
 const people=m.people.filter(u=>rAll()||u===S.uid);
 const rows=people.map(u=>{const lg=m.cur.reduce((s,x)=>s+(x[1]===u?x[5]:0),0);const ex=m.expected(u,m.months);return{u,lg,ex,r:ex?lg/ex:0}}).sort((a,b)=>b.r-a.r);
 const max=Math.max(1,...rows.map(r=>Math.max(r.lg,r.ex)));
 const bars=hBars(rows.map(r=>({labelHtml:personLabel(r.u),total:r.lg,target:r.ex,segs:[{v:r.lg,color:themed(CAT_L[0])}],valueText:r.ex?`${Math.round(r.r*100)}%`:'—',tip:tipAttr(memberName(r.u),[['',t('logged'),HU(r.lg)],['',t('expected'),HU(r.ex)],['',t('util'),r.ex?Math.round(r.r*100)+'%':'—']])})),{max});
 const c1=card('ut-bar',t('utilTitle'),t('targetTick'),bars,[[t('employee'),t('logged'),t('expected'),t('util'),t('diffLbl')],...rows.map(r=>[memberName(r.u),H(r.lg),H(r.ex),r.ex?Math.round(r.r*100)+'%':'—',(r.lg-r.ex>=0?'+':'')+H(r.lg-r.ex)])]);
 const bin=p=>p==null?-1:p<70?0:p<90?1:p<=110?2:p<=130?3:4;
 const grid=`<div class="hx-wrap"><div class="hx ut" style="min-width:${130+m.months.length*56}px;grid-template-columns:minmax(120px,160px) repeat(${m.months.length},minmax(54px,1fr))"><div></div>${m.months.map(ym=>`<span class="hx-x">${esc(monthShort(ym))}</span>`).join('')}
  ${people.map(u=>`<div class="hx-l">${personLabel(u)}</div>${m.months.map(ym=>{const lg=m.cur.reduce((s,x)=>s+(x[1]===u&&x[0].startsWith(ym)?x[5]:0),0);const ex=expectedUpTo(u,ym);const p=ex?Math.round(lg/ex*100):null;const b=bin(p);
   return `<i class="hx-c num${b===0||b===4?' strong':''}" style="${b>=0?`background:${divColor(b)}`:''}"${tipAttr(memberName(u)+' · '+fmtYm(ym),[['',t('logged'),HU(lg)],['',t('expected'),HU(ex)]])}>${p==null?'':p+'%'}</i>`}).join('')}`).join('')}</div></div>
  <div class="ch-legend seq"><span>${esc(t('under'))}</span>${[0,1,2,3,4].map(b=>`<i style="background:${divColor(b)}" title="${['<70%','70–90%','90–110%','110–130%','>130%'][b]}"></i>`).join('')}<span>${esc(t('overtime'))}</span><span class="muted">&lt;70 · 70–90 · 90–110 · 110–130 · &gt;130 %</span></div>`;
 const c2=m.months.length>1?card('ut-heat',t('utilByMonth'),t('utilByMonthSub'),grid,[[t('employee'),...m.months.map(monthShort)],...people.map(u=>[memberName(u),...m.months.map(ym=>{const lg=m.cur.reduce((s,x)=>s+(x[1]===u&&x[0].startsWith(ym)?x[5]:0),0);const ex=expectedUpTo(u,ym);return ex?Math.round(lg/ex*100)+'%':'—'})])]):'';
 return c1+c2;
}

/* ---------- 6. breakdown ---------- */
function rBreakdown(m){
 const one=(id,title,map,labelOf,colorOf)=>{const ks=Object.keys(map).filter(k=>map[k]).sort((a,b)=>map[b]-map[a]);
  return card(id,title,'',hBars(ks.map(k=>({labelHtml:esc(labelOf(k)),total:map[k],segs:[{v:map[k],color:colorOf?colorOf(k):themed(CAT_L[0])}],valueText:HU(map[k])+' · '+PCT(map[k],m.total)+'%'}))),[[title,t('hours'),t('share')],...ks.map(k=>[labelOf(k),H(map[k]),PCT(map[k],m.total)+'%'])],{half:true})};
 const disc=m.by(m.cur,x=>m.discOf(x[1],x[4]));
 const country=m.by(m.cur,x=>(S.members[x[1]]||{}).country||'DE');
 const phase=m.by(m.cur,x=>x[3]?phLabel(x[3]):t('noPhaseLbl'));
 const task=m.by(m.cur,x=>x[4]?'task':'none');
 const c1=one('bd-disc',t('byDiscipline'),disc,k=>`${k} · ${t(k)}`);
 const c2=one('bd-country',t('byCountry'),country,k=>t(k));
 const c3=one('bd-phase',t('byPhaseAll'),phase,k=>k);
 const c4=card('bd-task',t('taskLinked'),t('taskLinkedSub'),segBar([{label:t('withTask'),v:task.task||0,color:themed(CAT_L[0])},{label:t('withoutTask'),v:task.none||0,color:OTHER_C()}],m.total),[[t('kind'),t('hours'),t('share')],[t('withTask'),H(task.task||0),PCT(task.task||0,m.total)+'%'],[t('withoutTask'),H(task.none||0),PCT(task.none||0,m.total)+'%']],{half:true});
 // matrix: people x projects
 const people=m.people.filter(u=>m.cur.some(x=>x[1]===u));const ps=m.projOrder;const cell=m.by(m.cur,x=>x[1]+'|'+x[2]);const max=Math.max(1,...Object.values(cell));
 const mx=rAll()&&people.length&&ps.length?card('bd-matrix',t('matrixTitle'),t('matrixSub'),`<div class="hx-wrap"><div class="hx mx" style="min-width:${130+ps.length*86}px;grid-template-columns:minmax(120px,160px) repeat(${ps.length},minmax(84px,1fr))"><div></div>${ps.map(p=>`<span class="hx-x lbl"><i style="background:${themed(pColor(p))}"></i>${esc((S.projects[p]||{}).code||pLabel(p))}</span>`).join('')}
  ${people.map(u=>`<div class="hx-l">${personLabel(u)}</div>${ps.map(p=>{const v=cell[u+'|'+p]||0;const b=seqBin(v,max);return `<i class="hx-c num${b>=3?' strong':''}" style="${b>=0?`background:${seqColor(b)}`:''}"${tipAttr(memberName(u)+' · '+pLabel(p),[['',t('hours'),HU(v)]])}>${v?H(v):''}</i>`}).join('')}`).join('')}</div></div>${seqLegend(max,HU)}`,
  [[t('employee'),...ps.map(p=>pLabel(p)),t('total')],...people.map(u=>[memberName(u),...ps.map(p=>H(cell[u+'|'+p]||0)),H(ps.reduce((s,p)=>s+(cell[u+'|'+p]||0),0))])]):'';
 return rSplit(m)+mx+`<div class="rgrid">${c1}${c2}${c3}${c4}</div>`;
}

/* ---------- v2.15: share of work in percent (Reports → Breakdown) ---------- */
function rSplit(m){
 const W=S.ws;const byU={},byP={};
 for(const x of m.cur){const u=x[1],p=x[2],v=x[5];(byU[u]=byU[u]||{})[p]=(byU[u][p]||0)+v;(byP[p]=byP[p]||{})[u]=(byP[p][u]||0)+v}
 const tot=o=>Object.values(o).reduce((a,b)=>a+b,0);const pc=(v,T)=>T?Math.round(v/T*1000)/10:0;
 const bar=(ent,T,colorOf,label)=>`<div class="ws-bar">${ent.map(([k,v])=>`<i style="flex:${v};background:${esc(colorOf(k))}" title="${esc(label(k))}: ${pc(v,T)}% · ${esc(HU(v))}"></i>`).join('')}</div>
   <div class="ws-leg">${ent.map(([k,v])=>`<span><i style="background:${esc(colorOf(k))}"></i><span dir="auto">${esc(label(k))}</span><b dir="ltr">${pc(v,T)}%</b><small dir="ltr">${esc(H(v))}</small></span>`).join('')}</div>`;
 const eng=W.view!=='proj';const src=eng?byU:byP;
 const keys=Object.keys(src).sort((a,b)=>tot(src[b])-tot(src[a]));
 const rows=keys.map(k=>{const T=tot(src[k]);const ent=Object.entries(src[k]).sort((a,b)=>b[1]-a[1]);
  return `<div class="ws-r"><div class="ws-h">${eng?personLabel(k):pChip(k)+(S.projects[k]?pprioPill(S.projects[k].priority):'')}<b dir="ltr">${esc(HU(T))}</b></div>${eng?`<div class="ws-lbl">${esc(t('wsActual'))}</div>`+bar(ent,T,p=>themed(pColor(p)),pLabel)+wsContract(m,k,ent,T):bar(ent,T,colorFor,memberName)}</div>`}).join('');
 const sw=`<div class="seg sm ws-sw" role="tablist">${[['eng','wsByEng'],['proj','wsByProj']].map(([k,l])=>`<button type="button" role="tab" aria-selected="${(W.view||'eng')===k}" data-act="ws-view" data-v="${k}">${esc(t(l))}</button>`).join('')}</div>`;
 const table=eng?[[t('employee'),t('project'),t('hours'),t('share')],...keys.flatMap(u=>{const T=tot(byU[u]);return Object.entries(byU[u]).sort((a,b)=>b[1]-a[1]).map(([p,v])=>[memberName(u),pLabel(p),H(v),pc(v,T)+'%'])})]
  :[[t('project'),t('employee'),t('hours'),t('share')],...keys.flatMap(p=>{const T=tot(byP[p]);return Object.entries(byP[p]).sort((a,b)=>b[1]-a[1]).map(([u,v])=>[pLabel(p),memberName(u),H(v),pc(v,T)+'%'])})];
 return card('bd-split',t('wsTitle'),t(eng?'wsEngHint2':'wsProjHint'),sw+`<div class="ws-list">${rows||`<div class="empty"><span>${esc(t('wsNone'))}</span></div>`}</div>`,table);
}

/* ---------- 7. tasks ---------- */
function taskDumbbell(list,id){
 const items=list.filter(x=>num(x.estimate)>0).map(x=>({x,est:num(x.estimate)*60,act:spentOn('t',x.id)})).sort((a,b)=>(b.act-b.est)-(a.act-a.est));
 if(!items.length)return '';const max=Math.max(1,...items.map(i=>Math.max(i.est,i.act)));
 const body=`<div class="db">${items.map(i=>{const a=i.est/max*100,b=i.act/max*100,lo=Math.min(a,b),hi=Math.max(a,b),over=i.act>i.est;
  return `<div class="db-row"${tipAttr(i.x.title,[['',t('estimate'),HU(i.est)],['',t('actual'),HU(i.act)],['',t('diffLbl'),(over?'+':'')+HU(i.act-i.est)]])}><div class="db-l"><button class="lnk-btn" data-act="edit-task" data-id="${esc(i.x.id)}">${esc(i.x.title)}</button>${i.x.assignee?`<span class="muted">${esc(memberName(i.x.assignee))}</span>`:''}</div>
   <div class="db-t"><b style="inset-inline-start:${lo}%;width:${hi-lo}%"></b><i class="est" style="inset-inline-start:${a}%"></i><i class="act" style="inset-inline-start:${b}%;background:${themed(CAT_L[0])}"></i></div>
   <div class="db-v">${esc(H(i.act))} / ${esc(H(i.est))}${over?` <span class="pill bad">▲ ${PCT(i.act-i.est,i.est)}%</span>`:''}</div></div>`}).join('')}</div>
  <div class="ch-legend"><span><i class="db-k est"></i>${esc(t('estimate'))}</span><span><i class="db-k act" style="background:${themed(CAT_L[0])}"></i>${esc(t('actual'))}</span></div>`;
 return card(id,t('estVsActual'),t('allTimeNote'),body,[[t('task'),t('assignee'),t('estimate'),t('actual'),t('diffLbl')],...items.map(i=>[i.x.title,i.x.assignee?memberName(i.x.assignee):'',H(i.est),H(i.act),(i.act>i.est?'+':'')+H(i.act-i.est)])]);
}
function rTasks(m){
 const f=S.rp;const list=Object.entries(S.tasks).map(([id,x])=>({id,...x})).filter(x=>(!f.project||x.projectId===f.project)&&(!f.person||x.assignee===f.person)&&(!f.disc||x.discipline===f.disc)&&(rAll()||x.assignee===S.uid));
 const cnt={};for(const x of list)cnt[x.status||'todo']=(cnt[x.status||'todo']||0)+1;
 const parts=STATUSES.map((s,i)=>({label:t(s),v:cnt[s]||0,color:themed(CAT_L[[0,3,6,2][i]]),light:i===1||i===3})).filter(p=>p.v);
 const tot=list.length;
 const seg=`<div class="sgb">${parts.map(p=>`<i style="flex:${p.v} 1 0;background:${p.color}"${tipAttr(p.label,[[p.color,'',p.v+' · '+PCT(p.v,tot)+'%']])}>${p.v/tot>=.1?`<span class="${p.light?'dk':''}">${p.v}</span>`:''}</i>`).join('')}</div>${legend(parts.map(p=>({label:`${p.label} · ${p.v}`,color:p.color})))}`;
 const c1=card('tk-status',t('tasksByStatus'),`${tot} ${t('tasksN')}`,tot?seg:'',[[t('status'),t('tasksN'),t('share')],...STATUSES.map(s=>[t(s),cnt[s]||0,PCT(cnt[s]||0,tot)+'%'])],{half:true});
 const today=dateKey(new Date());const od=list.filter(x=>x.due&&x.due<today&&x.status!=='done').sort((a,b)=>a.due.localeCompare(b.due));
 const c2=card('tk-overdue',t('overdueTitle'),`${od.length}`,'',[[t('task'),t('project'),t('assignee'),t('due'),t('daysLate')],...od.map(x=>[x.title,pLabel(x.projectId),x.assignee?memberName(x.assignee):'—',fmtShort(x.due),Math.round((utc(today)-utc(x.due))/864e5)])],{half:true,def:'table'});
 const byA={};for(const x of list)if(x.status!=='done'&&x.assignee){const r=Math.max(0,num(x.estimate)*60-spentOn('t',x.id));byA[x.assignee]=(byA[x.assignee]||0)+r}
 const as=Object.keys(byA).filter(u=>byA[u]).sort((a,b)=>byA[b]-byA[a]);
 const c3=rAll()&&as.length?card('tk-remain',t('remainingWork'),t('remainingWorkSub'),hBars(as.map(u=>({labelHtml:personLabel(u),total:byA[u],segs:[{v:byA[u],color:themed(CAT_L[6])}]}))),[[t('employee'),t('remainingWork')],...as.map(u=>[memberName(u),H(byA[u])])]):'';
 return `<div class="rgrid">${c1}${c2}</div>`+c3+taskDumbbell(list,'tk-db');
}

/* ---------- 8. cost (manager) ---------- */
function rCost(m){
 if(!S.isFin||!m.d.cost)return emptyBox();
 const rows=m.d.cost.filter(c=>c[0]>=m.r.from&&c[0]<=m.r.to&&(!m.r.person||c[1]===m.r.person)&&(!m.r.project||c[2]===m.r.project));
 const byP={};for(const c of rows)byP[c[2]]=(byP[c[2]]||0)+c[3];const order=Object.keys(byP).sort((a,b)=>byP[b]-byP[a]);
 const top=order.slice(0,7);const stacks=top.map(p=>({key:p,label:pLabel(p),color:themed(pColor(p))}));if(order.length>7)stacks.push({key:'__o',label:t('otherLbl'),color:OTHER_C()});
 const kOf=p=>top.includes(p)?p:'__o';const tot=rows.reduce((s,c)=>s+c[3],0);
 const val=(ym,k)=>rows.reduce((s,c)=>s+(c[0]===ym&&kOf(c[2])===k?c[3]:0),0);
 const eur=v=>money(v,'EUR');
 const hoursIn=m.total;
 const kp=`<div class="kpis">${kpi(eur(tot),t('laborCostTotal'),'')}${kpi(hoursIn?eur(tot/(hoursIn/60)):'—',t('costHr'),'')}${kpi(order.length?((S.projects[order[0]]||{}).name||pLabel(order[0])):'—',t('topCostProject'),order.length?`<span class="dl">${esc(eur(byP[order[0]]))} · ${PCT(byP[order[0]],tot)}%</span>`:'','txt')}</div>`;
 const c1=m.months.length>1?card('cs-month',t('costPerMonth'),t('byProjectSub'),colChart(xsMonths(m),stacks,val,{unit:v=>v,fmt:eur,capFmt:v=>fmtTick(Math.round(v))}),[[t('month'),...stacks.map(s=>s.label),t('total')],...m.months.map(ym=>{const v=stacks.map(s=>val(ym,s.key));return[fmtYm(ym),...v.map(x=>Math.round(x)),Math.round(v.reduce((a,b)=>a+b,0))]})]):'';
 const c2=card('cs-proj',t('costByProject'),'',hBars(order.map(p=>({labelHtml:`<span class="pl"><i style="background:${themed(pColor(p))}"></i>${esc(pLabel(p))}</span>`,total:byP[p],segs:[{v:byP[p],color:themed(pColor(p))}],valueText:eur(byP[p])}))),[[t('project'),t('cost'),t('share')],...order.map(p=>[pLabel(p),Math.round(byP[p]),PCT(byP[p],tot)+'%'])],{half:true});
 const byU={};for(const c of rows)byU[c[1]]=(byU[c[1]]||0)+c[3];const us=Object.keys(byU).sort((a,b)=>byU[b]-byU[a]);
 const c3=card('cs-person',t('costByPerson'),'',hBars(us.map(u=>({labelHtml:personLabel(u),total:byU[u],segs:[{v:byU[u],color:themed(CAT_L[0])}],valueText:eur(byU[u])}))),[[t('employee'),t('cost'),t('share')],...us.map(u=>[memberName(u),Math.round(byU[u]),PCT(byU[u],tot)+'%'])],{half:true});
 const perH=m.months.map(ym=>{const c=rows.reduce((s,x)=>s+(x[0]===ym?x[3]:0),0);const h=m.cur.reduce((s,x)=>s+(x[0].startsWith(ym)?x[5]:0),0)/60;return h?c/h:0});
 const c4=m.months.length>1?card('cs-rate',t('costHrTrend'),'',lineChart(xsMonths(m),[{label:t('costHr'),short:eur(perH[perH.length-1]),color:themed(CAT_L[0]),vals:perH}],{area:true,fmt:eur}),[[t('month'),t('costHr')],...m.months.map((ym,i)=>[fmtYm(ym),Math.round(perH[i]*100)/100])]):'';
 return kp+`<div class="note-box"><span>${esc(t('profitNote'))}</span></div>`+c1+`<div class="rgrid">${c2}${c3}</div>`+c4;
}

/* ---------- actions ---------- */
function rpSetRange(from,to){S.rp.from=from;S.rp.to=to;renderMainNow()}
function rpPrint(){
 const b=$('#rp-body');if(!b)return;const r=S.rp;const tab=(RTABS.find(x=>x[0]===r.tab)||[])[1];
 const filt=[r.person?memberName(r.person):'',r.project?pLabel(r.project):'',r.disc?t(r.disc):''].filter(Boolean).join(' · ');
 printDoc(`<div class="pd rp-print"><header class="pd-h"><div><div class="pd-co">TECTOVA BIM &amp; Engineering Consulting</div><h1>${esc(t('reportTitle'))} · ${esc(t(tab))}</h1></div>
  <table class="pd-meta"><tr><td>${esc(t('period'))}</td><td><b>${esc(r.from===r.to?fmtYm(r.from):fmtYm(r.from)+' – '+fmtYm(r.to))}</b></td></tr>${filt?`<tr><td>${esc(t('filters'))}</td><td>${esc(filt)}</td></tr>`:''}<tr><td>${esc(t('generated'))}</td><td>${esc(new Date().toLocaleDateString(loc()))}</td></tr></table></header>${b.innerHTML}</div>`);
}
function rpCsv(id){const tb=S.rtables&&S.rtables[id];if(!tb)return;const r=S.rp;exportCsv(`TECTOVA-${id}-${r.from}${r.to!==r.from?'_'+r.to:''}.csv`,tb.rows)}
async function rpPdf(uid){const ym=S.rp.to;S.repYm=ym;await loadReport(ym,true);printReport(uid)}
let rpResizeT;addEventListener('resize',()=>{clearTimeout(rpResizeT);rpResizeT=setTimeout(()=>{if(S.screen==='app'&&S.tab==='reports'&&!editingInMain())renderMainNow()},200)});


/* ---------- my profile: email, phone, Telegram, notifications, password ---------- */
function profileHtml(){
 const m=S.members[S.uid]||{};const me=S.me||{};const g=S.tg||{};
 const teamName=(()=>{try{const ts=S.teams;if(!ts||!m.teamId)return '';const tt=Array.isArray(ts)?ts.find(x=>x.id===m.teamId):ts[m.teamId];return tt?tt.name:''}catch(e){return ''}})();
 const idc=`<div class="pf-id">${avatar(S.uid,52)}<div class="pf-idt"><b>${esc(m.name||'')}</b><span>${esc(t(ROLE_KEY[me.role]||'roleEng'))}${teamName?' · '+esc(teamName):''}${m.country?' · '+esc(t(m.country)):''}</span><small class="muted">${esc(t('pfNameNote'))}</small></div></div>`;
 const form=`<form id="pf-form" class="stack" style="gap:12px" autocomplete="on">
  <label class="f">${esc(t('email'))}<input class="in" type="email" id="pf-email" required maxlength="190" value="${esc(m.email||me.email||'')}" dir="ltr" autocomplete="email"><span class="muted pf-h">${esc(t('pfEmailHint'))}</span></label>
  <label class="f" id="pf-pw-wrap" hidden>${esc(t('pfPassForEmail'))}<input class="in" type="password" id="pf-pass" maxlength="200" dir="ltr" autocomplete="current-password"></label>
  <label class="f">${esc(t('phone'))}<input class="in" type="tel" id="pf-phone" maxlength="24" value="${esc(m.phone||'')}" dir="ltr" autocomplete="tel" placeholder="+963 9xx xxx xxx" inputmode="tel"><span class="muted pf-h">${esc(t('pfPhoneHint'))} <bdi dir="ltr">+963 9xx xxx xxx</bdi></span></label>
  <div class="err" id="pf-err" hidden></div>
  <div><button class="btn primary" type="submit">${esc(t('pfSave'))}</button></div></form>`;
 const botUrl=g.bot?'https://t.me/'+encodeURIComponent(g.bot):'';
 let tg;
 if(!g.ready)tg=`<div class="muted">${esc(t(S.isOwner?'tgNotReadyAdmin':'tgNotReady'))}</div>`;
 else if(g.linked)tg=`<div class="pf-ok">${TGIC}<b>${esc(t('tgLinked'))}</b>${g.bot?`<span class="muted" dir="ltr">@${esc(g.bot)}</span>`:''}</div>
  <div class="pf-acts"><button type="button" class="btn sm" data-act="tg-test">${esc(t('tgTest'))}</button><button type="button" class="btn ghost sm danger" data-act="tg-unlink">${esc(t('tgUnlink'))}</button></div>`;
 else tg=`${S.tgWait?`<div class="note-box"><span>${esc(t('tgWaitTxt'))}</span><div class="pf-acts"><a class="btn sm" href="${esc(S.tgWait)}" target="_blank" rel="noopener">${TGIC} ${esc(t('tgOpenAgain'))}</a><button type="button" class="btn primary sm" data-act="tg-check">${esc(t('pfCheck'))}</button></div></div>`:''}
  <div class="pf-m"><b>${esc(t('pfTgM1'))}</b><span class="muted">${esc(t('pfTgM1Sub'))}</span><div><button type="button" class="btn tg-btn" data-act="tg-link">${TGIC} ${esc(t('tgLink'))}</button></div></div>
  <div class="pf-m"><b>${esc(t('pfTgM2'))}</b><span class="muted">${esc(t(m.phone?'pfTgM2Sub':'pfTgNeedPhone'))}</span>${m.phone&&botUrl?`<div class="pf-acts"><a class="btn sm" href="${esc(botUrl)}" target="_blank" rel="noopener">${TGIC} ${esc(t('pfOpenBot'))} <span dir="ltr">@${esc(g.bot)}</span></a><button type="button" class="btn ghost sm" data-act="tg-check">${esc(t('pfCheck'))}</button></div>`:''}</div>`;
 const notif=`<label class="chk"><input type="checkbox" id="pf-n-email"${m.notify!==false?' checked':''}> ${esc(t('remOn'))}</label>
  ${g.ready&&g.linked?`<label class="chk"><input type="checkbox" id="pf-n-tg"${g.on?' checked':''}> ${esc(t('pfTgOnLbl'))}</label>`:''}<div class="muted pf-h">${esc(t('emailWhich'))}</div>`;
 return `<div class="view-head"><h2>${esc(t('pfTitle'))}</h2></div>
 <div class="grid2"><div class="stack">
  <section class="sheet"><div class="sheet-h"><h3>${esc(t('pfMine'))}</h3></div><div class="sheet-b stack" style="gap:16px">${idc}${form}</div></section>
  <section class="sheet"><div class="sheet-h"><h3>${esc(t('pfSecurity'))}</h3></div><div class="sheet-b pf-row"><span class="muted">${esc(t('pfPwSub'))}</span><button type="button" class="btn" data-act="pw">${IC.key} ${esc(t('changePw'))}</button></div></section>
 </div><div class="stack">
  ${pwaHtml()}
  <section class="sheet"><div class="sheet-h"><h3>${TGIC} ${esc(t('pfTgTitle'))}</h3></div><div class="sheet-b stack" style="gap:14px">${tg}</div></section>
  <section class="sheet"><div class="sheet-h"><h3>${esc(t('pfNotifTitle'))}</h3></div><div class="sheet-b stack" style="gap:10px">${notif}</div></section>
 </div></div>`;
}
async function profileSave(){
 const err=$('#pf-err');err.hidden=true;const m=S.members[S.uid]||{};
 const email=$('#pf-email').value.trim(),phone=$('#pf-phone').value.trim(),pass=$('#pf-pass')?$('#pf-pass').value:'';
 try{await api('profile_save',{email,phone,password:pass});m.email=email;m.phone=phone;if(S.me)S.me.email=email;toast(t('pfSaved'));renderMainNow()}
 catch(e){err.textContent=errText(e);err.hidden=false}
}
async function profilePrefs(){const em=$('#pf-n-email'),tg=$('#pf-n-tg');const email=em?em.checked:true,on=tg?tg.checked:!!(S.tg||{}).on;
 try{await api('notif_prefs',{email,tg:on});const m=S.members[S.uid];if(m)m.notify=email;S.tg=Object.assign({},S.tg,{on});toast(t('saved'))}catch(e){writeErr(e)}}
/* ---------- modals ---------- */
function openModal(html){const m=$('#modal');m.innerHTML=html;m.hidden=false;const f=m.querySelector('input,select,textarea');if(f)setTimeout(()=>f.focus(),20)}
function closeModal(){const m=$('#modal');m.hidden=true;m.innerHTML='';if(pendingRender)renderMain()}
function dlg(title,body,foot){return `<div class="dlg" role="dialog" aria-modal="true" aria-label="${esc(title)}"><div class="dlg-h"><h3>${esc(title)}</h3><button class="icon-btn" data-act="close" aria-label="${esc(t('close'))}">✕</button></div><form id="dlg-form"><div class="dlg-b">${body}<div class="err" id="dlg-err" hidden></div></div><div class="dlg-f">${foot}</div></form></div>`}
const footSave=(del)=>`${del?`<button type="button" class="btn danger spacer" data-act="${del}">${esc(t('delete'))}</button>`:''}<button type="button" class="btn ghost" data-act="close">${esc(t('cancel'))}</button><button type="submit" class="btn primary">${esc(t('save'))}</button>`;
function dlgErr(m){const e=$('#dlg-err');if(e){e.textContent=m;e.hidden=false}}

function manualModal(pre){
 pre=pre||{};const d=pre.date||dateKey(new Date());
 openModal(dlg(t('manualTitle'),`
  ${pre.long?`<div class="note-box"><b>${esc(t('longRun'))}</b></div>`:''}
  <div class="frow"><label class="f">${esc(t('date'))}<input type="date" class="in" id="mn-date" value="${d}" required></label>
   <label class="f">${esc(t('from'))}<input type="time" class="in" id="mn-from" value="${pre.from||'09:00'}" required></label>
   <label class="f">${esc(t('to'))}<input type="time" class="in" id="mn-to" value="${pre.to||'13:00'}" required></label></div>
  <div class="frow"><label class="f">${esc(t('project'))}<select class="in" id="mn-project" data-link="mn-task">${projOptions(pre.projectId||S.sel.project)}</select></label>
   <label class="f">${esc(t('task'))}<select class="in" id="mn-task">${taskOptions(pre.projectId||S.sel.project,pre.taskId||'')}</select></label>
   <label class="f">${esc(t('phase'))}<select class="in" id="mn-phase">${phaseOptions(pre.projectId||S.sel.project,pre.phaseId||'')}</select></label></div>
  <label class="f">${esc(t('note'))}<input class="in" id="mn-note" maxlength="200" value="${esc(pre.note||'')}"></label>`,footSave(pre.long?'discard-run':null)));
 S.modal={kind:'manual',fromRun:!!pre.long};
}
function taskModal(id){
 const pre=S.newTaskPre||{};S.newTaskPre=null;
 const x=id?S.tasks[id]:{groupId:pre.groupId||'',status:'todo',priority:'normal',projectId:pre.projectId||S.tf.project||S.sel.project||'',assignee:'',discipline:(S.members[S.uid]||{}).discipline||'ARC'};
 if(!x)return;if(!id&&!canAddTasks())return;
 const spent=id?spentOn('t',id):0;
 const cmtBox=id?threadBox('task',id,canCommentTask(x)):'';
 const spentLine=id?`<div class="muted" style="font-size:12.5px">${esc(seesTeam()?t('hoursSpent'):t('myHours'))}: <span dir="ltr" class="code">${hm(spent)}</span>${x._o?` · ${esc(t('createdByLbl'))}: ${esc(memberName(x._o))}`:''}</div>`:'';
 if(id&&!canEditTask(x)){
  const mine=x.assignee===S.uid;
  openModal(dlg(t('readOnlyTask'),`
   <div class="stack" style="gap:8px"><b style="font-size:16px;overflow-wrap:anywhere">${esc(x.title)}</b>
    <div style="display:flex;flex-wrap:wrap;gap:6px;align-items:center">${x.projectId?pChip(x.projectId):''}${x.discipline?`<span class="badge">${esc(x.discipline)}</span>`:''}${x.lod?`<span class="badge">LOD ${esc(x.lod)}</span>`:''}<span class="pill ${x.priority==='high'?'bad':'mute'}">${esc(t(x.priority||'normal'))}</span></div>
    <div class="muted" style="font-size:13px">${esc(t('assignee'))}: ${x.assignee?esc(memberName(x.assignee)):esc(t('unassigned'))}${x.due?` · ${esc(t('due'))}: ${esc(fmtShort(x.due))}`:''}${x.estimate?` · ${esc(t('estimate'))}: <span dir="ltr">${esc(x.estimate)}</span>`:''}</div></div>
   ${x.phaseId&&phLabel(x.phaseId)?`<div class="muted" style="font-size:13px">${esc(t('phase'))}: ${esc(phLabel(x.phaseId))}</div>`:''}
   ${(x.tags||[]).length?`<div class="tgs">${tagChips(x.tags)}</div>`:''}
   ${x.spec?`<div><div class="eyebrow" style="margin-bottom:4px">${esc(t('spec'))}</div><div class="spec">${esc(x.spec)}</div></div>`:''}
   ${x.links?`<div class="links">${linkList(x.links)}</div>`:''}
   ${x.start||x.due?`<div class="muted" style="font-size:13px">${esc(t('startDate'))}: ${x.start?esc(fmtShort(x.start)):'—'} · ${esc(t('due'))}: ${x.due?`<span class="${isOverdue(x)?'over':''}">${esc(fmtShort(x.due))}</span>`:'—'}</div>`:''}
   ${subBox(id,canWork(x))}
   ${mine?`<label class="f">${esc(t('status'))}<select class="in" id="tk-status">${stOpts(x,x.status||'todo')}</select></label>`:`<div><span class="pill acc">${esc(t(x.status||'todo'))}</span></div>`}
   ${qcPanel(x,id)}${spentLine}${cmtBox}${actBox(id)}`,mine&&!S.readOnly?footSave(null):`<button type="button" class="btn" data-act="close">${esc(t('close'))}</button>`));
  S.modal={kind:'task-status',id,subEdit:canWork(x)};loadComments(id);loadActivity(id);return;
 }
 const people=Object.entries(S.members).filter(([u,m])=>(m.active!==false&&(!isLead()||allP()||inMyScope(u)))||u===x.assignee);
 openModal(dlg(id?t('editTask'):t('newTask'),`
  <label class="f">${esc(t('title'))}<input class="in" id="tk-title" required maxlength="140" value="${esc(x.title||'')}"></label>
  <div class="frow"><label class="f">${esc(t('project'))}<select class="in" id="tk-project" required>${taskProjOptions(x.projectId)}</select></label>
   <label class="f">${esc(t('assignee'))}<select class="in" id="tk-assignee"><option value="">${esc(t('unassigned'))}</option>${people.map(([u,m])=>`<option value="${esc(u)}"${u===x.assignee?' selected':''}>${esc(m.name)}</option>`).join('')}</select></label></div>
  <div class="frow"><label class="f">${esc(t('discipline'))}<select class="in" id="tk-disc">${DISC.map(d=>`<option value="${d}"${d===x.discipline?' selected':''}>${d} · ${esc(t(d))}</option>`).join('')}</select></label>
   <label class="f">${esc(t('lod'))}<select class="in" id="tk-lod"><option value="">—</option>${LODS.map(l=>`<option${l===x.lod?' selected':''}>${l}</option>`).join('')}</select></label></div>
  <div class="frow"><label class="f">${esc(t('status'))}<select class="in" id="tk-status">${STATUSES.map(s=>`<option value="${s}"${s===(x.status||'todo')?' selected':''}>${esc(t(s))}</option>`).join('')}</select></label>
   <label class="f">${esc(t('priority'))}<select class="in" id="tk-prio">${['low','normal','high'].map(s=>`<option value="${s}"${s===(x.priority||'normal')?' selected':''}>${esc(t(s))}</option>`).join('')}</select></label></div>
  <div class="frow"><label class="f">${esc(t('startDate'))}<input type="date" class="in" id="tk-start" value="${esc(x.start||'')}"></label>
   <label class="f">${esc(t('due'))}<input type="date" class="in" id="tk-due" value="${esc(x.due||'')}"></label></div>
  <div class="frow"><label class="f">${esc(t('estimate'))}<input class="in num" id="tk-est" inputmode="decimal" value="${esc(x.estimate||'')}" placeholder="0"></label>
   <label class="f">${esc(t('phase'))}<select class="in" id="tk-phase">${phaseOptions(x.projectId,x.phaseId||'')}</select></label></div>
  ${planTaskFields(x)}
  ${qcFields(x)}
  ${tagPicker(x.tags,'task')}
  <label class="f">${esc(t('spec'))}<textarea class="in" id="tk-spec" maxlength="6000" placeholder="${esc(t('specPh'))}">${esc(x.spec||'')}</textarea></label>
  <label class="f">${esc(t('links'))}<textarea class="in" id="tk-links" maxlength="4000" dir="ltr" style="min-height:64px" placeholder="https://acc.autodesk.com/…">${esc(x.links||'')}</textarea></label>
  ${subBox(id,!S.readOnly)}
  ${qcPanel(x,id)}${spentLine}${cmtBox}${actBox(id)}`,footSave(id?'del-task':null)));
 S.modal={kind:'task',id,draft:[],subEdit:!S.readOnly};if(id){loadComments(id);loadActivity(id)}
}
function projectModal(id){
 const p=id?S.projects[id]:{status:'active',color:PCOLORS[Object.keys(S.projects).length%PCOLORS.length]};if(!p)return;if(id?!canEditProject(p):!canAddProjects())return;
 const yr=new Date().getFullYear();
 openModal(dlg(id?t('editProject'):t('newProject'),`
  <div class="frow"><label class="f">${esc(t('code'))}<input class="in" id="pj-code" maxlength="24" value="${esc(p.code||'')}" placeholder="TEC-${yr}-001" dir="ltr"></label>
   <label class="f">${esc(t('status'))}<select class="in" id="pj-status">${['active','hold','closed'].map(s=>`<option value="${s}"${s===(p.status||'active')?' selected':''}>${esc(t(s))}</option>`).join('')}</select></label>
   <label class="f">${esc(t('ppLbl'))}<select class="in" id="pj-prio">${PPRIO.map(s=>`<option value="${s}"${s===(p.priority||'normal')?' selected':''}>${esc(t('pp_'+s))}</option>`).join('')}</select></label></div>
  <label class="f">${esc(t('pname'))}<input class="in" id="pj-name" required maxlength="120" value="${esc(p.name||'')}"></label>
  <div class="frow">${clientPicker(p)}
   <label class="f">${esc(t('location'))}<input class="in" id="pj-loc" maxlength="120" value="${esc(p.location||'')}"></label></div>
  <div class="frow"><label class="f">${esc(t('budget'))}<input class="in num" id="pj-budget" inputmode="decimal" value="${esc(p.budget||'')}" placeholder="0"></label>
   <label class="f">${esc(t('color'))}<select class="in" id="pj-color">${PCOLORS.map(c=>`<option value="${c}"${c===p.color?' selected':''} style="color:${c}">■ ${c}</option>`).join('')}</select></label></div>
  ${allP()?leadsPicker(p):''}
  ${tagPicker(p.tags,'project')}
  <label class="f">${esc(t('folder'))}<input class="in" type="url" id="pj-folder" maxlength="500" dir="ltr" value="${esc(p.folderUrl||'')}" placeholder="https://"></label>
  ${S.isFin?`<div class="frow"><label class="f">${esc(t('contract'))}<input class="in num" id="pj-contract" inputmode="decimal" value="${esc(p.contractValue||'')}" placeholder="0"></label>
   <label class="f">${esc(t('currency'))}<select class="in" id="pj-ccur">${CURS.map(x=>`<option${x===(p.contractCurrency||'EUR')?' selected':''}>${x}</option>`).join('')}</select></label></div>`:''}
  <div class="phases-ed"><div class="eyebrow">${esc(t('phases'))}</div><div id="ph-rows">${(S.phasesBy[id]||[]).map(h=>phRow(h)).join('')}</div>
   <div style="display:flex;gap:6px;flex-wrap:wrap"><button type="button" class="btn sm" data-act="ph-add">${esc(t('addPhase'))}</button><button type="button" class="btn sm ghost" data-act="ph-tpl" data-tpl="hoai">${esc(t('hoaiTpl'))}</button><button type="button" class="btn sm ghost" data-act="ph-tpl" data-tpl="bim">${esc(t('bimTpl'))}</button></div>
   <div class="muted" style="font-size:12px">${esc(t('phasesHint'))}</div></div>${id?threadBox('project',id,canCommentProject()):''}`,footSave(id?'del-project':null)));
 S.modal={kind:'project',id,ckind:'project'};if(id)loadComments(id);
}
function userModal(uid){
 if(!pm('team'))return;
 const m=uid?S.members[uid]:{name:'',email:'',country:'SY',discipline:'ARC',role:'',active:true,sysRole:'employee',workDays:[6,0,1,2,3,4],leadId:'',leaveAllowance:15};if(!m)return;
 const isSelf=uid===S.uid;const cur=m.roleId?'c'+m.roleId:(m.sysRole||'employee');if(!S.isOwner&&m.sysRole==='owner')return;
 openModal(dlg(uid?t('editMember'):t('addMember'),`
  <div class="frow"><label class="f">${esc(t('name'))}<input class="in" id="mb-name" required maxlength="120" value="${esc(m.name||'')}"></label>
   <label class="f">${esc(t('email'))}<input class="in" type="email" id="mb-email" required maxlength="190" value="${esc(m.email||'')}" dir="ltr" autocomplete="off"></label>
   <label class="f">${esc(t('phone'))}<input class="in" type="tel" id="mb-phone" maxlength="24" value="${esc(m.phone||'')}" dir="ltr" autocomplete="off" placeholder="+963 9xx xxx xxx"></label></div>
  <div class="frow"><label class="f">${esc(t('country'))}<select class="in" id="mb-country">${Object.keys(COUNTRIES).map(c=>`<option value="${c}"${c===m.country?' selected':''}>${esc(t(c))}</option>`).join('')}</select></label>
   <label class="f">${esc(t('discipline'))}<select class="in" id="mb-disc">${DISC.map(d=>`<option value="${d}"${d===m.discipline?' selected':''}>${esc(t(d))}</option>`).join('')}</select></label></div>
  <div class="frow"><label class="f">${esc(t('role'))}<input class="in" id="mb-role" maxlength="120" value="${esc(m.role||'')}" placeholder="BIM Modeler / Revit Engineer"></label>
   <label class="f">${esc(t('sysRole'))}<select class="in" id="mb-sys"${isSelf?' disabled':''}>${[['employee','roleEng','engHint'],['lead','roleLeadN','leadHint'],['accountant','roleAcc','accHint'],['owner','roleAdmin','adminHint']].filter(([v])=>v!=='owner'||S.isOwner).map(([v,l,h])=>`<option value="${v}"${v===cur?' selected':''}>${esc(t(l))} · ${esc(t(h))}</option>`).join('')}${(S.roles||[]).length?`<optgroup label="${esc(t('rlCustom'))}">${S.roles.map(r=>`<option value="c${esc(r.id)}"${'c'+r.id===cur?' selected':''}>${esc(r.name)}</option>`).join('')}</optgroup>`:''}</select>${isSelf?`<span class="muted" style="font-size:12px;font-weight:400">${esc(t('cantSelf'))}</span>`:''}</label></div>
  <label class="f">${esc(uid?t('resetPw'):t('tempPw'))}<span class="copyrow"><input class="in" type="text" id="mb-pass" ${uid?'':'required'} minlength="8" maxlength="200" dir="ltr" autocomplete="off" value="${uid?'':esc(tempPassword())}"><button type="button" class="btn sm" data-act="gen-pw">${esc(t('genPw'))}</button></span></label>
  <div class="frow"><label class="f">${esc(t('weeklyHours'))}<input class="in num" id="mb-weekly" inputmode="decimal" value="${esc(uid?weeklyOf(uid):40)}"><span class="muted" style="font-size:12px;font-weight:400">${esc(t('weeklyHint'))}</span></label><div></div></div>
  <div class="frow"><label class="f">${esc(t('orgTeamLbl'))}<select class="in" id="mb-team"><option value="">${esc(t('orgNoTeamOpt'))}</option>${teamOptions(m.teamId||'')}</select></label>
   <label class="f">${esc(t('annualAllowance'))}<input class="in num" id="mb-allow" inputmode="decimal" value="${esc(m.leaveAllowance??15)}"></label></div>
  <fieldset class="wdays"><legend>${esc(t('workDays'))}</legend>${WEEK_ORDER.map(d=>`<label><input type="checkbox" class="mb-wd" value="${d}" ${(m.workDays||[6,0,1,2,3,4]).includes(d)?'checked':''}> ${esc(t('d'+d))}</label>`).join('')}</fieldset>
  <label style="display:flex;gap:8px;align-items:center"><input type="checkbox" id="mb-notify" ${m.notify!==false?'checked':''} style="width:18px;height:18px;accent-color:var(--accent)"> ${esc(t('notifyLbl'))}</label>
  ${isSelf?'':`<label style="display:flex;gap:8px;align-items:center"><input type="checkbox" id="mb-active" ${m.active!==false?'checked':''} style="width:18px;height:18px;accent-color:var(--accent)"> ${esc(t('activeMember'))}</label>`}
  ${uid&&!isSelf?`<div class="muted del-hint">${esc(t('delMemberHint'))}</div>`:''}`,uid&&!isSelf?footSave('del-member').replace(esc(t('delete')),esc(t('delMember'))):footSave(null)));
 S.modal={kind:'user',id:uid};
}
function tempPassword(){const c='abcdefghjkmnpqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ23456789';const a=new Uint32Array(10);crypto.getRandomValues(a);return Array.from(a,x=>c[x%c.length]).join('')}
function pwModal(){openModal(dlg(t('changePw'),pwFields(true),footSave(null)));S.modal={kind:'pw'}}
function payModal(uid){
 const c=(S.pay.people||{})[uid]||{type:'monthly',currency:({SY:'USD',EG:'EGP',DE:'EUR'})[(S.members[uid]||{}).country]||'EUR',target:160};
 openModal(dlg(t('paySettings')+' · '+memberName(uid),`
  <div class="frow"><label class="f">${esc(t('payType'))}<select class="in" id="py-type"><option value="monthly"${c.type!=='hourly'?' selected':''}>${esc(t('monthly'))}</option><option value="hourly"${c.type==='hourly'?' selected':''}>${esc(t('hourly'))}</option></select></label>
   <label class="f">${esc(t('currency'))}<select class="in" id="py-cur">${CURS.map(x=>`<option${x===c.currency?' selected':''}>${x}</option>`).join('')}</select></label></div>
  <div class="frow"><label class="f">${esc(t('amount'))}<input class="in num" id="py-amount" inputmode="decimal" required value="${esc(c.amount||'')}" placeholder="0"></label>
   <div></div></div>`,footSave(null)));
 S.modal={kind:'pay',id:uid};
}

async function submitModal(){
 const M=S.modal;if(!M)return;const v=id=>{const el=document.getElementById(id);return el?el.value.trim():''};
 const done=async(p,msg)=>{const ok=await guard(p,msg);if(ok)refresh();return ok};
 if(M.kind==='manual'){
  const date=v('mn-date'),from=v('mn-from'),to=v('mn-to'),pid=v('mn-project');
  if(!pid)return dlgErr(t('errProject'));
  const[y,mo,d]=date.split('-').map(Number);const[fh,fm]=from.split(':').map(Number);const[th,tm]=to.split(':').map(Number);
  const st=new Date(y,mo-1,d,fh,fm).getTime(),en=new Date(y,mo-1,d,th,tm).getTime();
  if(!(en>st))return dlgErr(t('errTime'));
  const body={date,start:st,end:en,projectId:pid,taskId:v('mn-task')||null,phaseId:v('mn-phase')||null,note:v('mn-note'),fromTimer:!!M.fromRun};
  closeModal();return done(api('entry_add',body),t('saved'));
 }
 if(M.kind==='task'){
  const title=v('tk-title'),pid=v('tk-project');if(!title)return;if(!pid)return dlgErr(t('errProject'));
  const st0=v('tk-start'),du0=v('tk-due');if(st0&&du0&&st0>du0)return dlgErr(t('badRange'));
  const pend=$('#sub-new');if(pend&&pend.value.trim()&&!M.id)M.draft.push({title:pend.value.trim(),done:false});
  const body={id:M.id||null,tags:pickedTags(),start:st0,subtasks:M.id?undefined:M.draft.map(z=>z.title),title,projectId:pid,assignee:v('tk-assignee')||null,discipline:v('tk-disc'),lod:v('tk-lod'),status:v('tk-status'),priority:v('tk-prio'),estimate:v('tk-est'),due:v('tk-due'),spec:document.getElementById('tk-spec').value.slice(0,6000),phaseId:v('tk-phase')||null,links:document.getElementById('tk-links').value,needsQc:!!($('#tk-qc')||{}).checked,reviewer:v('tk-reviewer')||null,...($('#tk-group')?{groupId:v('tk-group')||null}:{}),milestone:!!($('#tk-ms')||{}).checked};
  closeModal();return done(api('task_save',body),t('saved'));
 }
 if(M.kind==='task-status'){const st=v('tk-status'),id=M.id;closeModal();if(!st)return;const x=S.tasks[id]||{};return done(api('task_status',{id,status:st}),t(x.needsQc&&st==='review'&&x.status!=='review'?'qcSent':'saved'))}
 if(M.kind==='project'){
  const name=v('pj-name');if(!name)return;
  const phases=[...document.querySelectorAll('#ph-rows .ph-row')].map(r=>({id:r.dataset.id||null,name:r.querySelector('.ph-name').value.trim(),budget:r.querySelector('.ph-bud').value.trim()})).filter(h=>h.name);
  const body={id:M.id||null,code:v('pj-code'),name,clientId:v('pj-clientid')||null,priority:v('pj-prio')||'normal',location:v('pj-loc'),budget:v('pj-budget'),color:v('pj-color'),status:v('pj-status'),folderUrl:v('pj-folder'),phases,tags:pickedTags()};
  if(S.isFin&&$('#pj-contract')){body.contractValue=v('pj-contract');body.contractCurrency=v('pj-ccur');body.leads=[...document.querySelectorAll('.pj-lead:checked')].map(i=>i.value)}
  try{await api('project_save',body)}catch(e){return dlgErr(errText(e))}
  closeModal();toast(t('saved'));refresh();return;
 }
 if(M.kind==='team')return saveTeam(M);
 if(M.kind==='client')return saveClient(M);
 if(M.kind==='role')return saveRole(M);
 if(M.kind==='cm-sug'){const n=[...document.querySelectorAll('.cm-sg:checked:not(:disabled)')].map(i=>i.value);closeModal();return cmAdd(n)}
 if(M.kind==='cm-skill'){const nm=v('cm-sk-name');if(!nm)return;try{await api('skill_save',{id:M.id,teamId:capTeam(),name:nm});closeModal();toast(t('saved'));refresh()}catch(e){dlgErr(errText(e))}return}
 if(M.kind==='event')return saveEvent(M);
 if(M.kind==='pgroup')return saveGroup(M);
 if(M.kind==='msp')return mspImport(M);
 if(M.kind==='user'){
  const pw=v('mb-pass');if(pw&&pw.length<8)return dlgErr(t('pwRule'));if(!M.id&&!pw)return dlgErr(t('pwRule'));
  const act=document.getElementById('mb-active');
  const body={id:M.id||null,name:v('mb-name'),email:v('mb-email'),phone:v('mb-phone'),country:v('mb-country'),discipline:v('mb-disc'),jobTitle:v('mb-role'),role:v('mb-sys')||'employee',active:act?act.checked:true,password:pw,weeklyHours:v('mb-weekly')||null,dailyHours:Math.min(16,Math.max(1,Math.round((num(v('mb-weekly'))||40)/Math.max(1,document.querySelectorAll('.mb-wd:checked').length)*10)/10)),notify:document.getElementById('mb-notify').checked,workDays:[...document.querySelectorAll('.mb-wd:checked')].map(i=>+i.value),teamId:v('mb-team')||null,leaveAllowance:v('mb-allow')||15};
  if(!body.workDays.length)return dlgErr(t('noWorkdays'));
  try{await api('user_save',body)}catch(e){return dlgErr(errText(e))}
  closeModal();toast(M.id?t('saved'):t('memberAdded'));refresh();
  if(pw)credDialog({name:body.name,email:body.email,pw,phone:body.phone});return;
 }
 if(M.kind==='pw'){
  const a=v('pw-new'),b=v('pw-new2');if(a.length<8)return dlgErr(t('pwRule'));if(a!==b)return dlgErr(t('pwMismatch'));
  try{await api('password_change',{old:document.getElementById('pw-old').value,new:a})}catch(e){return dlgErr(errText(e))}
  closeModal();toast(t('pwChanged'));return;
 }
 if(M.kind==='reject'){const note=v('rj-note');closeModal();return done(api('week_decide',{userId:M.uid,weekStart:M.ws,decision:'reject',note}),t('saved'))}
 if(M.kind==='pay'){
  const type=v('py-type'),currency=v('py-cur'),amount=num(v('py-amount')),target=0;const id=M.id;
  closeModal();S.pay.people=Object.assign({},S.pay.people,{[id]:{type,currency,amount,target}});schedule();
  return guard(api('pay_setting_save',{userId:id,type,amount,currency,target}),t('saved'));
 }
}
/* ---------- actions ---------- */
async function startTimer(){
 const pid=S.sel.project;if(!pid){toast(t('errProject'));return}
 const body={projectId:pid,taskId:S.sel.task||null,phaseId:S.sel.phase||null,note:S.sel.note||'',tz:new Date().getTimezoneOffset()};
 S.sel.note='';if(await guard(api('timer_start',body)))refresh();
}
async function stopTimer(){
 const r=myE().running;if(!r)return;
 const res=await guard(api('timer_stop',{tz:new Date(r.start).getTimezoneOffset()}));if(!res)return;
 if(res.long){const s=new Date(r.start);manualModal({long:true,date:dateKey(s),from:hhmm(r.start),to:hhmm(Math.min(srvNow(),new Date(s.getFullYear(),s.getMonth(),s.getDate(),23,59).getTime())),projectId:r.projectId,taskId:r.taskId,phaseId:r.phaseId,note:r.note});return}
 toast(t('saved'));refresh();
}
async function deleteEntry(id){if(await guard(api('entry_delete',{id}),t('deleted')))refresh()}
async function doLogin(){
 const err=$('#lg-err');err.hidden=true;
 try{const d=await api('login',{email:$('#lg-email').value.trim(),password:$('#lg-pass').value});S.csrf=d.csrf;await load();setMyMonth(ymOf(new Date()));renderAll()}
 catch(e){err.textContent=errText(e);err.hidden=false}
}
async function doForcedPw(){
 const err=$('#pwf-err');err.hidden=true;const a=$('#pw-new').value,b=$('#pw-new2').value;
 const fail=m=>{err.textContent=m;err.hidden=false};
 if(a.length<8)return fail(t('pwRule'));if(a!==b)return fail(t('pwMismatch'));
 try{await api('password_change',{old:$('#pw-old').value,new:a});await load();setMyMonth(ymOf(new Date()));toast(t('pwChanged'));renderAll()}
 catch(e){fail(errText(e))}
}
async function doLogout(){try{await api('logout',{})}catch(e){}location.reload()}
document.addEventListener('click',async ev=>{
 const el=ev.target.closest('[data-lang],[data-tab],[data-act],[data-go]');
 if(ev.target.id==='modal'){closeModal();return}
 if(ev.target.id==='scrim'){setDrawer(false);return}
 {const pd=ev.target.closest&&ev.target.closest('[data-pday]');if(pd&&!ev.target.closest('[data-act]')&&!S.readOnly){eventModal(null,pd.dataset.pday);return}}
 if(!el)return;
 if(S.skipClick){S.skipClick=false;return}
 if(el.dataset.act==='edit-task'&&ev.target.closest('select,input,label'))return;
 if(el.dataset.lang){LANG=el.dataset.lang;try{localStorage.setItem('tdesk-lang',LANG)}catch(e){}applyLang();renderAll();return}
 if(el.dataset.tab||el.dataset.go){setDrawer(false);S.tab=el.dataset.tab||el.dataset.go;S.arm=null;try{localStorage.setItem('tdesk-tab',S.tab)}catch(e){}renderTabs();pendingRender=false;$('#main').innerHTML=viewHtml();afterRender();window.scrollTo(0,0);return}
 const a=el.dataset.act,id=el.dataset.id;
 if(a!=='del-entry'&&S.arm){S.arm=null}
 switch(a){
  case 'close':closeModal();break;
  case 'start':startTimer();break;
  case 'stop':stopTimer();break;
  case 'manual':manualModal();break;
  case 'discard-run':closeModal();guard(api('timer_stop',{discard:true})).then(refresh);break;
  case 'appr-load':loadApprovals(true);break;
  case 'rp-tab':S.rp.tab=id;renderMainNow();break;
  case 'rp-view':S.rp.view[id]=el.dataset.v;renderMainNow();break;
  case 'rp-csv':rpCsv(id);break;
  case 'rp-refresh':rpLoad(true);break;
  case 'rp-print':rpPrint();break;
  case 'rp-pdf':rpPdf(id);break;
  case 'rp-preset':{const[a,b]=presetRange(id);S.rp.preset=id;rpSetRange(a,b);break}
  case 'rp-shift':{const n=monthsBetween(S.rp.from,S.rp.to).length*(+el.dataset.d);const ym=ymOf(new Date());let f=shiftYm(S.rp.from,n),to=shiftYm(S.rp.to,n);if(to>ym){f=shiftYm(f,-(monthsBetween(ym,to).length-1));to=ym}S.rp.preset='custom';rpSetRange(f,to);break}
  case 'del-entry':if(S.arm==='e:'+id){S.arm=null;deleteEntry(id)}else{S.arm='e:'+id;renderMain()}break;
  case 'my-month':setMyMonth(shiftYm(S.myMonth.ym,+el.dataset.d));break;
  case 'rep-month':S.repYm=shiftYm(S.repYm,+el.dataset.d);renderMain();break;
  case 'rep-refresh':loadReport(S.repYm,true);renderMain();break;
  case 'rep-export':exportReport();break;
  case 'pay-export':exportPayroll();break;
  case 'new-task':taskModal(null);break;
  case 'cl-new':clientModal(null);break;
  case 'cl-edit':clientModal(id);break;
  case 'cl-del':{const M=S.modal;if(el.classList.contains('armed')){closeModal();guard(api('client_delete',{id:M.id}),t('deleted')).then(ok=>{if(ok)refresh()})}else{el.classList.add('armed');el.textContent=t('confirmDel')}break}
  case 'pj-client-add':quickClient();break;
  case 'cmt-reply':openReply(id);break;
  case 'rp-send':sendReply(id);break;
  case 'rp-cancel':{const b=$('#rp-'+CSS.escape(id));if(b)b.remove();break}
  case 'ws-view':S.ws.view=el.dataset.v;renderMainNow();break;
  case 'pl-month':S.pl.ym=shiftYm(S.pl.ym,+el.dataset.d);S.pl.items=null;renderMainNow();break;
  case 'pl-today':S.pl.ym=ymOf(new Date());S.pl.items=null;renderMainNow();break;
  case 'ev-new':eventModal(null);break;
  case 'ev-open':openEvent(id);break;
  case 'ev-gq':guestQuick(el.dataset.v);break;
  case 'ev-rsvp':rsvp(id,el.dataset.v);break;
  case 'ev-ics':downloadIcs(id);break;
  case 'pl-view':S.plView=el.dataset.v;S.mom.openId=null;S.mom.cur=null;if(S.plView==='mom')S.mom.list=null;renderMainNow();break;
  case 'mom-new':newMom(null);break;
  case 'mom-open':openMom(id);break;
  case 'mom-back':S.mom.openId=null;S.mom.cur=null;S.mom.list=null;renderMainNow();break;
  case 'mom-from-ev':momFromEvent(id);break;
  case 'mom-save':momSave(false).then(()=>renderMainNow());break;
  case 'mom-final':momFinal();break;
  case 'mom-print':momPrint();break;
  case 'mom-topic-add':momAddRow('topic');break;
  case 'mom-act-add':momAddRow('act');break;
  case 'mom-row-del':{const r=el.closest('.mom-tp,.ma-e');if(r)r.remove();break}
  case 'mom-del':{if(el.classList.contains('armed')){guard(api('mom_delete',{id:S.mom.cur.id}),t('deleted')).then(ok=>{if(ok){S.mom.openId=null;S.mom.cur=null;S.mom.list=null;renderMainNow()}})}else{el.classList.add('armed');el.textContent=t('confirmDel')}break}
  case 'ev-del':{const M=S.modal;if(el.classList.contains('armed')){closeModal();guard(api('event_delete',{id:M.id}),t('deleted')).then(ok=>{if(ok){S.pl.key='';loadEvents(true);refresh()}})}else{el.classList.add('armed');el.textContent=t('confirmDel')}break}
  case 'f-cat-pick':{const p=$('#files-panel');if(p){S.fCats[p.dataset.pid]=el.dataset.v;drawFiles()}break}
  case 'f-filter':{const p=$('#files-panel');if(p){S.fFilter[p.dataset.pid]=el.dataset.v;drawFiles()}break}
  case 'qc-ok':qcDecide(id,'ok');break;
  case 'qc-back':qcDecide(id,'back');break;
  case 'qc-quick':qcDecide(id,'ok',true);break;
  case 'hm-tasks':goTasks(seesTeam()?'board':'mywork');break;
  case 'hm-late':goTasks(seesTeam()?'list':'mywork',{hideDone:true});break;
  case 'hm-qc':goTasks('list',{qc:'wait',hideDone:true});break;
  case 'hm-person':goTasks('list',{person:id,hideDone:true});break;
  case 'hm-proj':goTasks(seesTeam()?'board':'list',{project:id});break;
  case 'menu':setDrawer(!document.body.classList.contains('side-open'));break;
  case 'side-toggle':S.sideMini=!S.sideMini;try{localStorage.setItem('tdesk-mini',S.sideMini?'1':'0')}catch(e){}renderTop();break;
  case 'tf-tag':{const l=S.tf.tags;S.tf.tags=l.includes(id)?l.filter(z=>z!==id):[...l,id];renderMainNow();break}
  case 'tf-tag-clear':S.tf.tags=[];renderMainNow();break;
  case 'tg-toggle':el.setAttribute('aria-pressed',el.getAttribute('aria-pressed')==='true'?'false':'true');break;
  case 'tg-create':tagFromForm();break;
  case 'notes':notesDialog(el.dataset.kind,id);break;
  case 'files':filesDialog(id);break;
  case 'notifs':setDrawer(false);notifsDialog();break;
  case 'org-disc':S.orgDisc=el.dataset.v||'';renderMainNow();break;
  case 'ov':S.orgView=el.dataset.v;S._ocKey=null;orgSave();renderMainNow();break;
  case 'oc-zoom':{const d=+el.dataset.d;if(!d){ocFit();break}S.orgZoom=Math.max(.4,Math.min(1.5,Math.round((S.orgZoom+d*.1)*10)/10));orgSave();renderMainNow();break}
  case 'ot-sort':{const k=el.dataset.k;S.orgSort=S.orgSort.k===k?{k,d:-S.orgSort.d}:{k,d:k==='open'||k==='late'?-1:1};renderMainNow();break}
  case 'team-new':teamModal(null);break;
  case 'team-edit':teamModal(id);break;
  case 'team-del':{const M=S.modal;if(el.classList.contains('armed')){closeModal();guard(api('team_delete',{id:M.id}),t('orgDeleted')).then(ok=>{if(ok)refresh()})}else{el.classList.add('armed');el.textContent=t('confirmDel')}break}
  case 'nt-open':notifOpen(id);break;
  case 'nt-all':notifRead(null,true);break;
  case 'tg-link':tgLink();break;
  case 'tg-check':tgCheck();break;
  case 'tg-unlink':tgUnlink();break;
  case 'tg-test':tgTest();break;
  case 'tg-setup':tgSetup();break;
  case 'fp':S.fp=id;renderMainNow();break;
  case 'f-edit':S.fEdit=id;drawFiles();setTimeout(()=>{const i=$('#fe-title');if(i)i.focus()},20);break;
  case 'f-edit-cancel':S.fEdit=null;drawFiles();break;
  case 'f-del':delFile(el,id);break;
  case 'f-save':saveFileEdit(id);break;
  case 'fl-add':addLink();break;
  case 'nf-project':S.nf.project=S.nf.project===id&&!S.nf.task?'':id;S.nf.task='';S.feed=null;renderMainNow();break;
  case 'nf-task':S.nf.task=S.nf.task===id?'':id;S.feed=null;renderMainNow();break;
  case 'nf-clear':S.nf={project:'',task:'',kind:'',q:'',user:''};S.feed=null;renderMainNow();break;
  case 'nf-more':loadFeed(true);break;
  case 'tgx-color':if(await saveTag(id,{color:el.dataset.c}))renderMainNow();break;
  case 'tgx-newc':S.tagNew[id]=el.dataset.c;el.parentElement.querySelectorAll('.tm-c').forEach(b=>b.setAttribute('aria-pressed',String(b===el)));break;
  case 'tgx-open':openTagged(id);break;
  case 'tgx-del':if(el.classList.contains('armed')){if(await guard(api('tag_delete',{id}),t('deleted'))){delete S.tagsById[id];S.tf.tags=S.tf.tags.filter(z=>z!==id);for(const x of Object.values(S.tasks))x.tags=(x.tags||[]).filter(z=>z!==id);for(const p of Object.values(S.projects))p.tags=(p.tags||[]).filter(z=>z!==id);renderMainNow()}}else{el.classList.add('armed');el.textContent=t('confirmDel')}break;
  case 'tv':S.tv=el.dataset.v;try{localStorage.setItem('tdesk-tv',S.tv)}catch(e){}renderMainNow();break;
  case 'cal-month':S.calYm=shiftYm(S.calYm,+el.dataset.d);renderMainNow();break;
  case 'cal-today':S.calYm=ymOf(new Date());renderMainNow();break;
  case 'tl-shift':S.tlFrom=addDays(S.tlFrom||todayK(),+el.dataset.d);renderMainNow();break;
  case 'tl-today':S.tlFrom=addDays(weekStartOf(todayK()),-7);renderMainNow();break;
  case 'task-timer':startTaskTimer(id);break;
  case 'sub-add':addSub();break;
  case 'sub-del':delSub(id);break;
  case 'edit-task':taskModal(id);break;
  case 'new-project':projectModal(null);break;
  case 'edit-project':projectModal(id);break;
  case 'edit-member':userModal(id);break;
  case 'new-member':userModal(null);break;
  case 'pw':pwModal();break;
  case 'logout':doLogout();break;
  case 'retry':boot();break;
  case 'edit-pay':payModal(id);break;
  case 'week-submit':guard(api('week_submit',{weekStart:el.dataset.ws,tz:new Date().getTimezoneOffset()}),t('saved')).then(ok=>{if(ok)refresh()});break;
  case 'appr-approve':guard(api('week_decide',{userId:id,weekStart:el.dataset.ws,decision:'approve'}),t('saved')).then(ok=>{if(ok)refresh()});break;
  case 'appr-reject':openModal(dlg(t('reject')+' · '+memberName(id),`<div class="muted">${esc(fmtRange(el.dataset.ws,addDays(el.dataset.ws,6)))}</div><label class="f">${esc(t('rejectNote'))}<input class="in" id="rj-note" maxlength="250"></label>`,footSave(null)));S.modal={kind:'reject',uid:id,ws:el.dataset.ws};break;
  case 'leave-approve':guard(api('leave_decide',{id,decision:'approved'}),t('saved')).then(ok=>{if(ok)refresh()});break;
  case 'leave-decline':guard(api('leave_decide',{id,decision:'rejected'}),t('saved')).then(ok=>{if(ok)refresh()});break;
  case 'leave-cancel':guard(api('leave_cancel',{id}),t('deleted')).then(ok=>{if(ok)refresh()});break;
  case 'hol-del':guard(api('holiday_delete',{id}),t('deleted')).then(ok=>{if(ok)refresh()});break;
  case 'hol-seed':guard(api('holidays_seed_de',{year:S.holF.year}),t('saved')).then(ok=>{if(ok)refresh()});break;
  case 'ph-add':{const c=$('#ph-rows');if(c)c.insertAdjacentHTML('beforeend',phRow({}));break}
  case 'ph-del':{const r=el.closest('.ph-row');if(r)r.remove();break}
  case 'ph-tpl':{const c=$('#ph-rows');if(c){const have=new Set([...c.querySelectorAll('.ph-name')].map(i=>i.value.trim()));for(const n of PHASE_TPL[el.dataset.tpl]||[])if(!have.has(n))c.insertAdjacentHTML('beforeend',phRow({name:n}))}break}
  case 'cmt-send':sendComment(id);break;
  case 'cmt-del':guard(api('comment_delete',{id}),t('deleted')).then(ok=>{if(!ok)return;if(S.modal&&S.modal.id&&!$('#modal').hidden)loadComments(S.modal.id);S.feed=null;refresh()});break;
  case 'pdf-report':printReport(id);break;
  case 'payslip':printPayslip(id);break;
  case 'acc-export':exportAccounting();break;
  case 'copy':{const txt=el.dataset.copy;const done=()=>toast(t('copied'));try{navigator.clipboard.writeText(txt).then(done,()=>{selectText(el.previousElementSibling)})}catch(e){selectText(el.previousElementSibling)}break}
  case 'del-task':{const M=S.modal;if(el.classList.contains('armed')){closeModal();guard(api('task_delete',{id:M.id}),t('deleted')).then(ok=>{if(ok)refresh()})}else{el.classList.add('armed');el.textContent=t('confirmDel')}break}
  case 'del-project':{const M=S.modal;if(el.classList.contains('armed')){closeModal();guard(api('project_delete',{id:M.id}),t('deleted')).then(ok=>{if(ok)refresh()})}else{el.classList.add('armed');el.textContent=t('confirmDel')}break}
 }
});
document.addEventListener('submit',ev=>{
 ev.preventDefault();
 if(ev.target.id==='dlg-form')submitModal();
 else if(ev.target.id==='login-form')doLogin();
 else if(ev.target.id==='pw-form')doForcedPw();
 else if(ev.target.id==='pf-form')profileSave();
 else if(ev.target.id==='leave-form')submitLeave();
 else if(ev.target.id==='hol-form')submitHoliday();
 else if(ev.target.id==='cm-add-form'){const i=$('#cm-new');const n=i?i.value.split(/[,،;]/).map(x=>x.trim()).filter(Boolean):[];if(n.length)cmAdd(n)}
 else if(ev.target.classList.contains('tgx-add'))addTagFromPage(ev.target);
 else if(ev.target.id==='nc-form')submitNote();
});
document.addEventListener('change',ev=>{
 const el=ev.target;
 if(el.id==='tm-project'){S.sel.project=el.value;S.sel.task='';S.sel.phase='';const ts=$('#tm-task');if(ts)ts.innerHTML=taskOptions(el.value,'');const ph=$('#tm-phase');if(ph)ph.innerHTML=phaseOptions(el.value,'');const pw=$('#tm-phase-wrap');if(pw)pw.hidden=!(S.phasesBy[el.value]||[]).length;return}
 if(el.id==='tm-task'){S.sel.task=el.value;const x=S.tasks[el.value];if(x&&x.phaseId){S.sel.phase=x.phaseId;const ph=$('#tm-phase');if(ph)ph.value=x.phaseId}return}
 if(el.id==='tm-phase'){S.sel.phase=el.value;return}
 if(el.id==='mn-project'){const ts=$('#mn-task');if(ts)ts.innerHTML=taskOptions(el.value,'');const ph=$('#mn-phase');if(ph)ph.innerHTML=phaseOptions(el.value,'');return}
 if(el.id==='mn-task'){const x=S.tasks[el.value];const ph=$('#mn-phase');if(x&&x.phaseId&&ph)ph.value=x.phaseId;return}
 if(el.id==='tk-project'){const ph=$('#tk-phase');if(ph)ph.innerHTML=phaseOptions(el.value,'');const as=$('#tk-assignee');const l=leadsOf(el.value)[0];if(allP()&&as&&!as.value&&l&&[...as.options].some(o=>o.value===l))as.value=l;return}
 if(el.id==='lv-kind'||el.id==='lv-start'||el.id==='lv-end'){updateLeaveForm();return}
 if(el.id==='pf-n-email'||el.id==='pf-n-tg'){profilePrefs();return}
 if(el.id==='rp-preset'){S.rp.preset=el.value;if(el.value!=='custom'){const[a,b]=presetRange(el.value);S.rp.from=a;S.rp.to=b}renderMainNow();return}
 if(el.id==='rp-from'||el.id==='rp-to'){const f=$('#rp-from').value,to=$('#rp-to').value;if(/^\d{4}-\d{2}$/.test(f)&&/^\d{4}-\d{2}$/.test(to)){S.rp.from=f<to?f:to;S.rp.to=f<to?to:f;if(monthsBetween(S.rp.from,S.rp.to).length>12)S.rp.from=shiftYm(S.rp.to,-11)}renderMainNow();return}
 if(el.id==='rp-person'){S.rp.person=el.value;renderMainNow();return}
 if(el.id==='rp-project'){S.rp.project=el.value;renderMainNow();return}
 if(el.id==='rp-disc'){S.rp.disc=el.value;renderMainNow();return}
 if(el.id==='hf-country'){S.holF.country=el.value;renderMainNow();return}
 if(el.id==='hf-year'){S.holF.year=+el.value;renderMainNow();return}
 if(el.id==='tf-project'){S.tf.project=el.value;renderMainNow();return}
 if(el.dataset&&el.dataset.act==='ma-done'){maToggle(el.dataset.id,el.checked);return}
 if(el.id==='ma-f'){S.mom.filter=el.value;renderMainNow();return}
 if(el.id==='ma-mine'){S.mom.mine=el.checked;renderMainNow();return}
 if(el.classList&&el.classList.contains('ma-o')){const n=el.closest('.ma-e').querySelector('.ma-n');if(n)n.hidden=!!el.value;return}
 if(el.id==='tf-scope'){S.tf.scope=el.value;renderMainNow();return}
 if(el.id==='cap-team'){S.capTeamF=el.value;renderMainNow();return}
 if(el.classList&&el.classList.contains('rl-ck')){roleToggle(el.dataset.id,el.dataset.k,el.checked);return}
 if(el.classList&&el.classList.contains('rl-ckb')){roleBuiltin(el.dataset.r,el.dataset.k,el.checked);return}
 if(el.id==='ws-period'){S.ws.period=el.value;S.ws.data=null;renderMainNow();return}
 if(el.classList&&el.classList.contains('ev-gu')){const n=$('#ev-gn');if(n)n.textContent=document.querySelectorAll('.ev-gu:checked').length;return}
 if(el.id==='oc-people'){S.orgPeople=el.checked;orgSave();renderMainNow();return}
 if(el.id==='tm-disc'){const c=$('#tm-color');if(c&&DCOL[el.value]){if(![...c.options].some(o=>o.value===DCOL[el.value]))c.add(new Option('■ '+DCOL[el.value],DCOL[el.value]));c.value=DCOL[el.value]}return}
 if(el.id==='np-email'||el.id==='np-tg'){notifPrefs();return}
 if(el.id==='tf-qc'){S.tf.qc=el.value;renderMainNow();return}
 if(el.id==='tk-qc'){const w=$('#tk-rev-w');if(w)w.hidden=!el.checked;return}
 if(el.id==='tf-person'){S.tf.person=el.value;renderMainNow();return}
 if(el.id==='tf-hide'){S.tf.hideDone=el.checked;renderMainNow();return}
 if(el.id==='f-input'){const p=$('#files-panel');if(p&&el.files.length)startUploads(p.dataset.pid,[...el.files]);el.value='';return}
 if(el.id==='f-vis'){S.fVis=el.value;return}
 if(el.classList&&el.classList.contains('f-rcat')){quickCat(el.dataset.fid,el.value);return}
 if(el.id==='nf-project'){S.nf.project=el.value;S.nf.task='';S.feed=null;renderMainNow();return}
 if(el.id==='nf-kind'||el.id==='nf-user'){S.nf[el.id.slice(3)]=el.value;S.feed=null;renderMainNow();return}
 if(el.id==='nc-project'){const ts=$('#nc-task');if(ts){const pid=el.value;ts.disabled=!pid;ts.innerHTML=`<option value="">${esc(t('onProjectItself'))}</option>`+Object.entries(S.tasks).filter(([,x])=>x.projectId===pid&&x.status!=='done').map(([id,x])=>`<option value="${esc(id)}"${canCommentTask({...x,id})?'':' disabled'}>${esc(x.title)}</option>`).join('')}return}
 if(el.classList&&el.classList.contains('tgx-name')){const id=el.closest('.tgx-row').dataset.id;const g=S.tagsById[id];saveTag(id,{name:el.value}).then(ok=>{if(ok)renderMainNow();else if(g)el.value=g.name});return}
 if(el.dataset.st){const id=el.dataset.st;el.blur();setStatus(id,el.value);return}
 if(el.dataset.sub){toggleSub(el.dataset.sub,el.checked);return}
 if(el.dataset.fx){saveFx(el.dataset.fx,num(el.value));return}
 if(el.dataset.pay){const u=el.dataset.uid,f=el.dataset.pay;savePayMonth(u,f,f==='paid'?el.checked:num(el.value));return}
});
document.addEventListener('input',ev=>{
 if(ev.target.id==='pf-email'){const w=$('#pf-pw-wrap');const m=S.members[S.uid]||{};if(w)w.hidden=ev.target.value.trim().toLowerCase()===String(m.email||'').toLowerCase()}
 if(ev.target.id==='tm-note')S.sel.note=ev.target.value;
 if(ev.target.id==='nf-q'){S.nf.q=ev.target.value;clearTimeout(S._nq);S._nq=setTimeout(()=>{const pos=ev.target.selectionStart;S.feed=null;renderMainNow();const q=$('#nf-q');if(q){q.focus();try{q.setSelectionRange(pos,pos)}catch(e){}}},350)}
 if(ev.target.id==='cl-q'){S.clq=ev.target.value;clearTimeout(S._cq);S._cq=setTimeout(()=>{const pos=ev.target.selectionStart;renderMainNow();const q=$('#cl-q');if(q){q.focus();try{q.setSelectionRange(pos,pos)}catch(e){}}},200);return}
 if(ev.target.id==='ot-q'){S.orgQ=ev.target.value;clearTimeout(S._oq);S._oq=setTimeout(()=>{const pos=ev.target.selectionStart;renderMainNow();const q=$('#ot-q');if(q){q.focus();try{q.setSelectionRange(pos,pos)}catch(e){}}},200);return}
 if(ev.target.id==='tf-q'){S.tf.q=ev.target.value;clearTimeout(S._qt);S._qt=setTimeout(()=>{const pos=ev.target.selectionStart;renderMainNow();const q=$('#tf-q');if(q){q.focus();try{q.setSelectionRange(pos,pos)}catch(e){}}},250)}
});
document.addEventListener('keydown',ev=>{
 if(ev.key==='Escape'&&!$('#modal').hidden){closeModal();return}
 if(ev.key==='Escape'&&document.body.classList.contains('side-open')){setDrawer(false);return}
 if(ev.key==='Enter'&&(ev.ctrlKey||ev.metaKey)&&ev.target.id==='cmt-body'&&S.modal){ev.preventDefault();sendComment(S.modal.id);return}
 if(ev.key==='Enter'&&(ev.ctrlKey||ev.metaKey)&&ev.target.id==='nc-body'){ev.preventDefault();submitNote();return}
 if(ev.key==='Enter'&&(ev.ctrlKey||ev.metaKey)&&ev.target.classList&&ev.target.classList.contains('rp-ta')){ev.preventDefault();const b=ev.target.closest('.rp-box');if(b)sendReply(b.id.slice(3));return}
 if(ev.key==='Enter'&&(ev.target.id==='fl-url'||ev.target.id==='fl-title')){ev.preventDefault();addLink();return}
 if(ev.key==='Enter'&&/^fe-(title|url|note)$/.test(ev.target.id)){ev.preventDefault();const r=ev.target.closest('.fedit');if(r)saveFileEdit(r.dataset.id);return}
 if(ev.key==='Enter'&&ev.target.id==='tg-new'){ev.preventDefault();tagFromForm();return}
 if(ev.key==='Enter'&&ev.target.id==='sub-new'){ev.preventDefault();addSub();return}
 if((ev.key==='Enter'||ev.key===' ')&&ev.target.matches&&ev.target.matches('[role="button"][data-act]')){ev.preventDefault();ev.target.click()}
});
function renderMainNow(){pendingRender=false;$('#main').innerHTML=viewHtml();afterRender()}

let toastT;function toast(m){const el=$('#toast');el.innerHTML=`<div>${esc(m)}</div>`;el.hidden=false;clearTimeout(toastT);toastT=setTimeout(()=>{el.hidden=true},2600)}

setInterval(()=>{const n=srvNow();document.querySelectorAll('[data-tick]').forEach(el=>{el.textContent=clock(n-(+el.dataset.tick))})},1000);
setInterval(()=>{document.querySelectorAll('[data-tz]').forEach(el=>{el.textContent=localNow(el.dataset.tz)})},30000);

/* ---------- boot ---------- */
async function boot(){
 S.screen='loading';renderAll();
 try{await load();setMyMonth(S.myMonth.ym)}
 catch(e){S.screen=e.status===401?'login':e.code==='must_change_password'?'pw':'offline'}
 renderAll();pwaAfterBoot();
}
/* =====================================================================
   v2.14 — project schedule (import from / export to MS Project), task
   distribution, removing a member, and the sign-in message for new people
   ===================================================================== */
Object.assign(T.ar,{vPlan:'الجدول الزمني',plImport:'استيراد من MS Project',plExport:'تصدير لـ MS Project',plNewGroup:'مجموعة جديدة',plEditGroup:'تعديل المجموعة',plGroupName:'اسم المجموعة',plParent:'داخل المجموعة',plTop:'— المستوى الأعلى —',
 plBaseline:'حفظ خط الأساس',plBaselineHint:'خط الأساس = التواريخ المعتمدة للمقارنة. احفظه بعد اعتماد الجدول، فيظهر أي تأخير عنه.',plBaselineSaved:'تم حفظ خط الأساس: التواريخ الحالية صارت المرجع.',plPush:'تحريك المهام التابعة تلقائياً',
 plZoom:'المقياس',zd:'أيام',zw:'أسابيع',zm:'أشهر',plStart:'البداية',plFinish:'النهاية',plDays:'أيام',plPreds:'تعتمد على',plTask:'المهمة',
 plEmpty:'لا يوجد جدول زمني لهذا المشروع بعد.',plEmptySub:'استورد ملف MS Project، أو أضف المجموعات والمهام هنا.',plHowXml:'في MS Project: ملف ← حفظ باسم ← نوع الملف «XML Format (*.xml)»، ثم استورد الملف هنا.',
 plSel:'{n} محددة',plAssignTo:'إسناد إلى',plApply:'تطبيق',plClearSel:'إلغاء التحديد',plAssigned:'تم إسناد {n} مهام',plSkipped:'{n} مهام ليست ضمن صلاحيتك',plMoved:'تحرّكت {n} مهام تابعة',
 plPredsHint:'أرقام الصفوف مثل MS Project، مثلاً: 3 أو 5SS+2',plBadPreds:'اكتب أرقام صفوف المهام، مثلاً 3 أو ‎5SS+2‎.',plTasksN:'{n} مهمة',plUnassignedN:'{n} بلا مسؤول',plLateBase:'{n} متأخرة عن خط الأساس',
 plBase:'خط الأساس',plAddTask:'مهمة في هذه المجموعة',plDelGroup:'حذف المجموعة',plDelGroupHint:'عند الحذف تنتقل مهامها ومجموعاتها الفرعية للمستوى الأعلى.',plCollapse:'طي الكل',plExpand:'توسيع الكل',
 plGroupLbl:'المجموعة في الجدول الزمني',plNoGroup:'— بدون مجموعة —',plMilestone:'معلم (Milestone)',plReadOnly:'تعرض هنا الجدول الزمني. التعديل والتوزيع لقادة الفرق والـAdmin.',plVarTip:'الفرق عن خط الأساس بالأيام',
 mspTitle:'استيراد الجدول الزمني من MS Project',mspSummary:'{t} مهمة، {g} مجموعة، {l} ارتباط · من {a} إلى {b}',mspUpdate:'في هذا المشروع جدول مستورد سابقاً: المهام المطابقة تتحدّث تواريخها وساعاتها، ويبقى المسؤول والحالة والساعات المسجّلة والتعليقات كما هي. المهام الجديدة تُضاف.',
 mspNew:'ستُضاف كل المهام والمجموعات إلى هذا المشروع، وتُحفظ تواريخها كخط أساس.',mspPhases:'إنشاء مراحل المشروع من المجموعات الرئيسية',mspRes:'موارد MS Project ← المهندسون',mspResHint:'اختر المهندس المقابل لكل مورد فتُسند له مهامه مباشرة، أو اتركه وتوزّع المهام لاحقاً.',
 mspNoRes:'لا موارد في الملف. وزّع المهام بعد الاستيراد من عمود المسؤول.',mspGo:'استيراد',mspBad:'هذا ليس ملف MS Project بصيغة XML.',mspMpp:'ملف ‎.mpp‎ لا يُقرأ مباشرة. من MS Project احفظه بصيغة XML ثم استورده.',
 mspDone:'تم الاستيراد: {c} جديدة، {u} محدّثة، {l} ارتباط',mspMissing:'{n} مهام من استيراد سابق غير موجودة في هذا الملف، وبقيت كما هي.',mspExported:'تم التصدير. افتحه في MS Project من ملف ← فتح.',mspLeadNote:'قائد الفريق يستطيع الإسناد لمهندسي فريقه فقط.',
 dep_loop_e:'هذا الارتباط يصنع حلقة: المهمة تعتمد على نفسها بشكل غير مباشر.',cant_self_e:'لا يمكنك حذف حسابك بنفسك.',
 ovPeople:'الأعضاء',ovAdmin:'الصلاحيات والإعدادات',hm_team:'الأعضاء والهيكل التنظيمي',
 delMember:'حذف الموظف',delMemberHint:'الحذف يزيل الموظف من الفريق ويوقف دخوله ويحرّر بريده لاستخدامه من جديد. ساعاته السابقة تبقى في التقارير والرواتب، ومهامه المفتوحة تصبح بلا مسؤول.',memberDeleted:'تم حذف الموظف',
 genPw:'توليد',credTitle:'بيانات الدخول',credHint:'أرسلها للمهندس الآن: كلمة السر المؤقتة لا تظهر مرة ثانية بعد إغلاق النافذة. عند أول دخول يختار المهندس كلمة سر خاصة به.',credCopy:'نسخ الرسالة',credWa:'واتساب',credTg:'تلغرام',credMail:'بريد',credLang:'لغة الرسالة',
 credMsgAr:'مرحباً {n}،\nتم إنشاء حسابك على لوحة فريق TECTOVA.\n\nالرابط: {u}\nالبريد: {e}\nكلمة السر المؤقتة: {p}\n\nعند أول دخول ستختار كلمة سر خاصة بك.',
 credMsgEn:'Hello {n},\nyour TECTOVA Team Desk account is ready.\n\nLink: {u}\nEmail: {e}\nTemporary password: {p}\n\nYou will choose your own password the first time you sign in.',credSubject:'TECTOVA Team Desk – بيانات الدخول'});
Object.assign(T.en,{vPlan:'Schedule',plImport:'Import from MS Project',plExport:'Export to MS Project',plNewGroup:'New group',plEditGroup:'Edit group',plGroupName:'Group name',plParent:'Inside group',plTop:'— Top level —',
 plBaseline:'Set baseline',plBaselineHint:'The baseline is the agreed set of dates. Set it once the schedule is approved, and any slip shows against it.',plBaselineSaved:'Baseline set: the current dates are now the reference.',plPush:'Move linked tasks automatically',
 plZoom:'Scale',zd:'Days',zw:'Weeks',zm:'Months',plStart:'Start',plFinish:'Finish',plDays:'Days',plPreds:'Predecessors',plTask:'Task',
 plEmpty:'No schedule for this project yet.',plEmptySub:'Import an MS Project file, or add groups and tasks here.',plHowXml:'In MS Project: File → Save As → type “XML Format (*.xml)”, then import the file here.',
 plSel:'{n} selected',plAssignTo:'Assign to',plApply:'Apply',plClearSel:'Clear',plAssigned:'{n} tasks assigned',plSkipped:'{n} tasks are outside your permissions',plMoved:'{n} linked tasks moved',
 plPredsHint:'Row numbers as in MS Project, e.g. 3 or 5SS+2',plBadPreds:'Use task row numbers, e.g. 3 or 5SS+2.',plTasksN:'{n} tasks',plUnassignedN:'{n} unassigned',plLateBase:'{n} behind baseline',
 plBase:'Baseline',plAddTask:'Task in this group',plDelGroup:'Delete group',plDelGroupHint:'Its tasks and sub-groups move up one level.',plCollapse:'Collapse all',plExpand:'Expand all',
 plGroupLbl:'Schedule group',plNoGroup:'— No group —',plMilestone:'Milestone',plReadOnly:'This is the schedule. Team leaders and Admins edit it and hand out the tasks.',plVarTip:'Days against the baseline',
 mspTitle:'Import schedule from MS Project',mspSummary:'{t} tasks, {g} groups, {l} links · {a} to {b}',mspUpdate:'This project already has an imported schedule: matching tasks get the new dates and hours; assignee, status, logged hours and comments stay. New tasks are added.',
 mspNew:'All tasks and groups will be added to this project, and their dates saved as the baseline.',mspPhases:'Create project phases from the top-level groups',mspRes:'MS Project resources → engineers',mspResHint:'Pick the engineer for each resource and their tasks are assigned straight away, or leave it and hand out the tasks later.',
 mspNoRes:'No resources in the file. Hand out the tasks after the import, in the assignee column.',mspGo:'Import',mspBad:'This isn’t an MS Project XML file.',mspMpp:'An .mpp file can’t be read directly. Save it from MS Project as XML, then import it.',
 mspDone:'Imported: {c} new, {u} updated, {l} links',mspMissing:'{n} tasks from an earlier import aren’t in this file and were left as they are.',mspExported:'Exported. Open it in MS Project with File → Open.',mspLeadNote:'Team leaders can assign only to engineers in their team.',
 dep_loop_e:'That link makes a loop: the task would depend on itself.',cant_self_e:'You can’t remove your own account.',
 ovPeople:'Members',ovAdmin:'Roles & settings',hm_team:'Members and organisation',
 delMember:'Remove member',delMemberHint:'Removing takes the person off the team, stops their sign-in and frees their email for reuse. Their past hours stay in reports and payroll; their open tasks become unassigned.',memberDeleted:'Member removed',
 genPw:'Generate',credTitle:'Sign-in details',credHint:'Send these to the engineer now: the temporary password isn’t shown again once you close this window. They choose their own password the first time they sign in.',credCopy:'Copy message',credWa:'WhatsApp',credTg:'Telegram',credMail:'Email',credLang:'Message language',
 credMsgAr:'مرحباً {n}،\nتم إنشاء حسابك على لوحة فريق TECTOVA.\n\nالرابط: {u}\nالبريد: {e}\nكلمة السر المؤقتة: {p}\n\nعند أول دخول ستختار كلمة سر خاصة بك.',
 credMsgEn:'Hello {n},\nyour TECTOVA Team Desk account is ready.\n\nLink: {u}\nEmail: {e}\nTemporary password: {p}\n\nYou will choose your own password the first time you sign in.',credSubject:'TECTOVA Team Desk – sign-in details'});
Object.assign(ERRMSG,{dep_loop:'dep_loop_e',cant_self:'cant_self_e',no_project_hours:'noHoursErr'});
Object.assign(T.ar,{tmAdmin:'قسم إداري (بدون ساعات مشاريع)',tmAdminHint:'أعضاء القسم الإداري ما بيسجّلوا ساعات على المشاريع (مثل المحاسبة). بيظهروا بالهيكل والإجازات بس بدون تحميل ساعات ولا مهام.',adminDept:'إداري',noHoursErr:'القسم إداري، ما في تسجيل ساعات على المشاريع لأعضائه.'});
Object.assign(T.en,{tmAdmin:'Administrative department (no project hours)',tmAdminHint:'Members of an administrative department don’t log hours on projects (e.g. accounting). They still appear in the org and leave, just without time tracking or tasks.',adminDept:'Admin',noHoursErr:'This is an administrative department; its members don’t log hours on projects.'});
TVIEWS.push('plan');TV_LABEL.plan='vPlan';
TV_ICON.plan='<svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M1.5 3h3M1.5 8h3M1.5 13h3"/><rect x="6" y="1.8" width="5" height="2.4" rx=".6"/><rect x="9" y="6.8" width="5.5" height="2.4" rx=".6"/><path d="M11 4.2v2.6"/><path d="M13.5 12.5l-1.3-1.3v2.6z" fill="currentColor"/><path d="M6 13h6"/></svg>';

/** a file handed to the browser to save; the preview page replaces this */
function downloadText(name,text,type){
 const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([text],{type:type||'text/plain;charset=utf-8'}));a.download=name;
 document.body.appendChild(a);a.click();setTimeout(()=>{URL.revokeObjectURL(a.href);a.remove()},1000);
}

/* ---------- who may do what (the server checks the same rules) ---------- */
const canPlan=()=>!S.readOnly&&(allP()||isLead());
const canDatesP=x=>!S.readOnly&&(canEditTask(x)||canPlan());
const canAssignP=x=>!S.readOnly&&(allP()||(isLead()&&(canEditTask(x)||!x.assignee||x.assignee===S.uid)));
/** people a task may be handed to by the viewer */
function assignPool(cur){
 const ok=u=>{const m=S.members[u]||{};return m.active!==false&&!m.deleted};
 let ids=Object.keys(S.members).filter(ok);
if(!allP())ids=ids.filter(u=>u===S.uid||myMembers().has(u));
 if(cur&&!ids.includes(cur)&&S.members[cur])ids.push(cur);
 return ids.sort((a,b)=>memberName(a).localeCompare(memberName(b)));
}
const PL_PX={d:26,w:9,m:3.2};
try{S.planZoom=localStorage.getItem('tdesk-pz')||'w';S.planPush=localStorage.getItem('tdesk-pp')!=='0'}catch(e){S.planZoom='w';S.planPush=true}
if(!PL_PX[S.planZoom])S.planZoom='w';
S.planSel=new Set();S.planCol=new Set();
function planPid(){
 if(S.planP&&S.projects[S.planP])return S.planP;
 if(S.tf.project&&S.projects[S.tf.project])return S.tf.project;
 const ps=projList(true);const g=Object.values(S.groups||{});
 const best=ps.find(p=>g.some(x=>x.projectId===p.id))||ps.find(p=>Object.values(S.tasks).some(x=>x.projectId===p.id))||ps[0];
 return best?best.id:'';
}
/** Rows in MS Project order: groups and tasks, depth first, numbered like MS Project's ID column. */
function planTree(pid){
 const gs=Object.values(S.groups||{}).filter(g=>g.projectId===pid);
 const ts=Object.entries(S.tasks).filter(([,x])=>x.projectId===pid).map(([id,x])=>({...x,id}));
 const gOk=id=>id&&S.groups[id]&&S.groups[id].projectId===pid?id:'';
 const kids=gid=>[...gs.filter(g=>gOk(g.parentId)===gid).map(g=>({k:'g',o:g,s:g.sort||0})),...ts.filter(x=>gOk(x.groupId)===gid).map(x=>({k:'t',o:x,s:x.sort||0}))]
  .sort((a,b)=>a.s-b.s||(a.k===b.k?(+a.o.id)-(+b.o.id):a.k==='g'?-1:1));
 const rows=[];let n=0;
 const walk=(gid,depth,path)=>{for(const r of kids(gid)){r.n=++n;r.depth=depth;r.path=path;rows.push(r);if(r.k==='g'&&depth<30)walk(r.o.id,depth+1,[...path,r.o.id])}};
 walk('',0,[]);
 /* group roll-ups: dates, hours, progress */
 const agg={};for(const g of gs)agg[g.id]={s:'',e:'',est:0,spent:0,n:0,done:0};
 for(const r of rows)if(r.k==='t'){const x=r.o;const s=x.start||x.due,e=x.due||x.start;
  for(const gid of r.path){const a=agg[gid];if(!a)continue;if(s&&(!a.s||s<a.s))a.s=s;if(e&&(!a.e||e>a.e))a.e=e;a.est+=num(x.estimate);a.spent+=spentOn('t',x.id);a.n++;if(x.status==='done')a.done++}}
 return{rows,agg};
}
const depsOf=id=>(S.deps||[]).filter(d=>d.task===id);
function predText(id,rowN){return depsOf(id).map(d=>{const n=rowN[d.pred];if(!n)return'';const k=d.kind&&d.kind!=='FS';return n+(k||d.lag?d.kind:'')+(d.lag?(d.lag>0?'+':'')+d.lag:'')}).filter(Boolean).join(', ')}
function workdaysSpan(uid,a,b){if(!a||!b)return 0;const wd=((S.members[uid]||{}).workDays)||[6,0,1,2,3,4];let n=0;for(let d=a;d<=b&&n<4000;d=addDays(d,1))if(wd.includes(dowOf(d)))n++;return n}
function taskPct(x){if(x.status==='done')return 100;const p=subProg(x.id);if(p.total)return Math.round(p.done/p.total*100);const est=num(x.estimate)*60;return est?Math.min(95,Math.round(spentOn('t',x.id)/est*100)):(x.status==='review'?90:x.status==='doing'?30:0)}

function planHtml(){
 const pid=planPid();const plan=canPlan();
 const ps=projList(true);
 if(!ps.length)return `<div class="sheet"><div class="empty"><h4>${esc(t('noProjects'))}</h4></div></div>`;
 const {rows,agg}=planTree(pid);const f=S.tf;const q=f.q.trim().toLowerCase();const tk=todayK();
 const rowN={};for(const r of rows)if(r.k==='t')rowN[r.o.id]=r.n;
 /* filters from the bar above apply to tasks; a group shows when something inside it matches */
 const filtering=!!(f.person||q||f.hideDone||f.tags.length||f.qc);
 const hit=x=>(!f.person||(f.person==='me'?x.assignee===S.uid:x.assignee===f.person))&&(!q||(x.title+' '+(x.spec||'')).toLowerCase().includes(q))&&(!f.hideDone||x.status!=='done')&&tagHitTask(x)&&qcHit(x);
 const keepG=new Set();if(filtering)for(const r of rows)if(r.k==='t'&&hit(r.o))r.path.forEach(g=>keepG.add(g));
 const vis=rows.filter(r=>(r.k==='t'?(!filtering||hit(r.o)):(!filtering||keepG.has(r.o.id)))&&!r.path.some(g=>S.planCol.has(g)));
 const tasks=rows.filter(r=>r.k==='t').map(r=>r.o);
 /* time scale */
 let from='',to='';for(const x of tasks){const s=x.start||x.due,e=x.due||x.start;if(s&&(!from||s<from))from=s;if(e&&(!to||e>to))to=e;if(x.baseStart&&x.baseStart<from)from=x.baseStart;if(x.baseDue&&x.baseDue>to)to=x.baseDue}
 if(!from){from=addDays(tk,-7);to=addDays(tk,56)}
 if(tk<from)from=tk;if(tk>to)to=tk;
 from=addDays(weekStartOf(from),-7);to=addDays(to,14);let days=dayDiff(from,to)+1;if(days>1500){days=1500;to=addDays(from,days-1)}
 const px=PL_PX[S.planZoom];const W=Math.round(days*px);const idx=d=>dayDiff(from,d);
 /* header: months, then days or week starts */
 let hd='';for(let i=0;i<days;i++){const d=addDays(from,i);
  if(d.endsWith('-01')||i===0)hd+=`<span class="pl-hm" style="inset-inline-start:${i*px}px">${esc(monShort(d))} ${d.slice(2,4)}</span>`;
  if(S.planZoom==='d')hd+=`<span class="pl-hd${dowOf(d)===5?' off':''}${d===tk?' today':''}" style="inset-inline-start:${i*px}px;width:${px}px">${+d.slice(8)}</span>`;
  else if(S.planZoom==='w'&&dowOf(d)===6)hd+=`<span class="pl-hw" style="inset-inline-start:${i*px}px">${+d.slice(8)}/${+d.slice(5,7)}</span>`}
 const tl=`<i class="pl-today" style="inset-inline-start:${idx(tk)*px+px/2}px" title="${esc(t('today'))}"></i>`;
 /* rows */
 const pool=plan?assignPool(''):[];
 const asgOpts=(cur)=>`<option value="">${esc(t('unassigned'))}</option>`+assignPool(cur).map(u=>`<option value="${esc(u)}"${u===cur?' selected':''}>${esc(memberName(u))}</option>`).join('');
 let lateBase=0,unas=0;for(const x of tasks){if(x.baseDue&&x.due&&x.due>x.baseDue&&x.status!=='done')lateBase++;if(!x.assignee&&x.status!=='done')unas++}
 const left=[],right=[];
 for(const r of vis){
  if(r.k==='g'){const g=r.o,a=agg[g.id]||{};const col=S.planCol.has(g.id);
   left.push(`<tr class="pl-r pl-gr"><td></td><td class="pl-n">${r.n}</td>
    <td class="pl-nm"><span class="pl-ind" style="padding-inline-start:${r.depth*16}px"><button type="button" class="pl-tg" data-act="pl-col" data-id="${esc(g.id)}" aria-expanded="${!col}">${col?'▸':'▾'}</button><b dir="auto" title="${esc(g.name)}">${esc(g.name)}</b></span>
     ${plan?`<span class="pl-ga"><button type="button" class="pl-ib" data-act="pl-gtask" data-id="${esc(g.id)}" title="${esc(t('plAddTask'))}" aria-label="${esc(t('plAddTask'))}">+</button><button type="button" class="pl-ib" data-act="pl-gedit" data-id="${esc(g.id)}" title="${esc(t('plEditGroup'))}" aria-label="${esc(t('plEditGroup'))}">✎</button></span>`:''}</td>
    <td class="muted pl-sm">${a.n?esc(t('plTasksN').replace('{n}',a.n)):''}</td><td class="pl-dt">${a.s?esc(fmtShort(a.s)):''}</td><td class="pl-dt">${a.e?esc(fmtShort(a.e)):''}</td>
    <td class="n">${a.s&&a.e?workdaysSpan('',a.s,a.e):''}</td><td class="n pl-h">${a.n?`${h1(a.spent)}${a.est?' / '+Math.round(a.est):''}`:''}</td><td></td></tr>`);
   right.push(`<div class="pl-row pl-gr">${a.s&&a.e?`<i class="pl-sum" style="inset-inline-start:${idx(a.s)*px}px;width:${Math.max(px,(idx(a.e)-idx(a.s)+1)*px)}px" title="${esc(g.name)}"><i style="width:${a.n?Math.round(a.done/a.n*100):0}%"></i></i>`:''}</div>`);
   continue}
  const x=r.o;const s=x.start||x.due,e=x.due||x.start;const od=isOverdue(x);const dv=x.baseDue&&x.due?dayDiff(x.baseDue,x.due):0;
  const sel=S.planSel.has(x.id);const ed=canDatesP(x);const as=canAssignP(x);
  left.push(`<tr class="pl-r${x.status==='done'?' is-done':''}${sel?' sel':''}${x.assignee===S.uid?' mine':''}">
   <td>${as?`<input type="checkbox" data-psel="${esc(x.id)}"${sel?' checked':''} aria-label="${esc(x.title)}">`:''}</td><td class="pl-n">${r.n}</td>
   <td class="pl-nm"><span class="pl-ind" style="padding-inline-start:${r.depth*16+18}px">${x.milestone?'<i class="pl-md" aria-hidden="true">◆</i>':''}<button type="button" class="lnk-btn pl-tt" data-act="edit-task" data-id="${esc(x.id)}" dir="auto" title="${esc(x.title)}">${esc(x.title)}</button></span></td>
   <td>${as?`<select class="in pl-in" data-pasg="${esc(x.id)}" aria-label="${esc(t('assignee'))}">${asgOpts(x.assignee||'')}</select>`:x.assignee?`<span class="who">${avatar(x.assignee,20)}<span class="nm">${esc(memberName(x.assignee))}</span></span>`:`<span class="muted">${esc(t('unassigned'))}</span>`}</td>
   <td>${ed?`<input type="date" class="in pl-in pl-date" data-pd="${esc(x.id)}" data-k="start" value="${esc(x.start||'')}" aria-label="${esc(t('plStart'))}">`:`<span class="pl-dt">${x.start?esc(fmtShort(x.start)):'—'}</span>`}</td>
   <td><span class="pl-fin">${ed?`<input type="date" class="in pl-in pl-date${od?' over':''}" data-pd="${esc(x.id)}" data-k="due" value="${esc(x.due||'')}" aria-label="${esc(t('plFinish'))}">`:`<span class="pl-dt${od?' over':''}">${x.due?esc(fmtShort(x.due)):'—'}</span>`}${dv?`<span class="pl-var${dv>0?' bad':' ok'}" title="${esc(t('plVarTip'))}" dir="ltr">${dv>0?'+':''}${dv}</span>`:''}</span></td>
   <td class="n">${s&&e?workdaysSpan(x.assignee,s,e):''}</td><td class="n pl-h${num(x.estimate)&&spentOn('t',x.id)>num(x.estimate)*60?' over':''}">${h1(spentOn('t',x.id))}${num(x.estimate)?' / '+num(x.estimate):''}</td>
   <td>${ed?`<input class="in pl-in pl-pp" data-pp="${esc(x.id)}" value="${esc(predText(x.id,rowN))}" dir="ltr" placeholder="—" title="${esc(t('plPredsHint'))}" aria-label="${esc(t('plPreds'))}">`:`<span class="code">${esc(predText(x.id,rowN))}</span>`}</td></tr>`);
  let bar='';
  if(s){const si=idx(s),ei=idx(e);const pc=taskPct(x);const color=x.status==='done'?'var(--ok)':od?'var(--bad)':pColor(x.projectId);
   const base=x.baseStart||x.baseDue?(()=>{const bs=x.baseStart||x.baseDue,be=x.baseDue||x.baseStart;return bs===s&&be===e?'':`<i class="pl-base" style="inset-inline-start:${idx(bs)*px}px;width:${Math.max(3,(idx(be)-idx(bs)+1)*px)}px" title="${esc(t('plBase'))}: ${esc(fmtRange(bs,be))}"></i>`})():'';
   const tip=`${x.title} · ${s===e?fmtShort(s):fmtRange(s,e)}${x.assignee?' · '+memberName(x.assignee):''}`;
   bar=x.milestone?`<i class="pl-ms" style="inset-inline-start:${ei*px+px/2-7}px;--pc:${color}" data-act="edit-task" data-id="${esc(x.id)}" title="${esc(tip)}"></i>`
    :`<div class="tl-bar pl-bar${x.status==='done'?' is-done':''}${od?' is-over':''}" style="--pc:${color};inset-inline-start:${si*px}px;width:${Math.max(4,(ei-si+1)*px)}px" data-act="edit-task" data-id="${esc(x.id)}"${ed?` data-tl="${esc(x.id)}"`:''} title="${esc(tip)}"><i class="tl-fill" style="width:${pc}%"></i>${(ei-si+1)*px>70?`<span dir="auto">${esc(x.assignee?memberName(x.assignee).split(' ')[0]:x.title)}</span>`:''}${ed&&x.start&&x.due?'<b class="tl-h" data-tlh="1"></b>':''}</div>`;
   bar+=base}
  right.push(`<div class="pl-row${sel?' sel':''}" data-days="${days}">${bar}</div>`);
 }
 /* tool bar */
 const pOpts=ps.map(p=>`<option value="${esc(p.id)}"${p.id===pid?' selected':''}>${esc((p.code?p.code+' · ':'')+p.name)}</option>`).join('');
 const zoom=`<span class="pl-z" role="group" aria-label="${esc(t('plZoom'))}">${['d','w','m'].map(z=>`<button type="button" class="btn sm${S.planZoom===z?' on-z':''}" data-act="pl-zoom" data-v="${z}" aria-pressed="${S.planZoom===z}">${esc(t('z'+z))}</button>`).join('')}</span>`;
 const tools=`<div class="pl-bar-top">
  <select class="in" id="pl-project" aria-label="${esc(t('project'))}">${pOpts}</select>
  ${plan?`<button type="button" class="btn primary sm" data-act="pl-import">⤒ ${esc(t('plImport'))}</button><input type="file" id="pl-file" accept=".xml,.mpp,application/xml,text/xml" hidden>`:''}
  <button type="button" class="btn sm" data-act="pl-export"${tasks.length?'':' disabled'}>⤓ ${esc(t('plExport'))}</button>
  ${plan?`<button type="button" class="btn sm" data-act="pl-gnew">+ ${esc(t('plNewGroup'))}</button><button type="button" class="btn sm" data-act="pl-tnew">+ ${esc(t('newTask'))}</button><button type="button" class="btn ghost sm" data-act="pl-base" title="${esc(t('plBaselineHint'))}"${tasks.length?'':' disabled'}>${esc(t('plBaseline'))}</button>`:''}
  <span class="pl-sp"></span>${zoom}
 </div>
 <div class="pl-info"><span>${esc(t('plTasksN').replace('{n}',tasks.length))}</span>${unas?`<span class="pill warn">${esc(t('plUnassignedN').replace('{n}',unas))}</span>`:''}${lateBase?`<span class="pill bad">${esc(t('plLateBase').replace('{n}',lateBase))}</span>`:''}
  ${tasks.length?`<span class="muted" dir="ltr">${esc(fmtRange(tasks.reduce((m,x)=>{const s=x.start||x.due;return s&&(!m||s<m)?s:m},'')||tk,tasks.reduce((m,x)=>{const e=x.due||x.start;return e&&e>m?e:m},'')||tk))}</span>`:''}
  ${Object.values(S.groups||{}).some(g=>g.projectId===pid)?`<button type="button" class="btn ghost sm" data-act="pl-colall">${esc(t(S.planCol.size?'plExpand':'plCollapse'))}</button>`:''}
  ${canPlan()?`<label class="chk"><input type="checkbox" id="pl-push"${S.planPush?' checked':''}> ${esc(t('plPush'))}</label>`:''}</div>
 ${S.planSel.size?`<div class="pl-bulk"><b>${esc(t('plSel').replace('{n}',S.planSel.size))}</b><label class="pl-bl">${esc(t('plAssignTo'))}<select class="in" id="pl-bulk-to"><option value="">${esc(t('unassigned'))}</option>${pool.map(u=>`<option value="${esc(u)}">${esc(memberName(u))}</option>`).join('')}</select></label>
  <button type="button" class="btn primary sm" data-act="pl-bulk">${esc(t('plApply'))}</button><button type="button" class="btn ghost sm" data-act="pl-selnone">${esc(t('plClearSel'))}</button>${isLead()&&!allP()?`<span class="muted" style="font-size:12px">${esc(t('mspLeadNote'))}</span>`:''}</div>`:''}`;
 if(!rows.length)return tools+`<div class="sheet"><div class="empty"><h4>${esc(t('plEmpty'))}</h4><span>${esc(t('plEmptySub'))}</span><span class="muted" style="font-size:12.5px">${esc(t('plHowXml'))}</span></div></div>`;
 const allSel=vis.filter(r=>r.k==='t'&&canAssignP(r.o));
 return tools+`${plan?'':`<p class="muted hint">${esc(t('plReadOnly'))}</p>`}
 <div class="sheet pl-split">
  <div class="pl-left"><table class="t pl-t"><thead><tr><th>${allSel.length?`<input type="checkbox" id="pl-selall"${allSel.every(r=>S.planSel.has(r.o.id))?' checked':''} aria-label="all">`:''}</th><th class="pl-n">#</th><th>${esc(t('plTask'))}</th><th>${esc(t('assignee'))}</th><th>${esc(t('plStart'))}</th><th>${esc(t('plFinish'))}</th><th class="n">${esc(t('plDays'))}</th><th class="n">${esc(t('hrsUnit'))}</th><th title="${esc(t('plPredsHint'))}">${esc(t('plPreds'))}</th></tr></thead>
   <tbody>${left.join('')}</tbody></table></div>
  <div class="pl-right"><div class="pl-gi" style="width:${W}px"><div class="pl-head">${hd}</div>${right.join('')}${tl}</div></div>
 </div>
 <p class="muted hint">${esc(t('tlHint'))} · ${esc(t('plPredsHint'))}</p>`;
}

/** Keeps the Gantt where it was between redraws; the first time, shows today. */
function plCenter(){const w=document.querySelector('.pl-right');if(!w)return;const k=planPid()+'|'+S.planZoom;
 if(S._plKey===k&&S._plSL!=null){w.scrollLeft=S._plSL;return}
 S._plKey=k;const tl=w.querySelector('.pl-today');if(!tl)return;const x=parseFloat(tl.style.insetInlineStart)||0;const rtl=document.documentElement.dir==='rtl';
 w.scrollLeft=(rtl?-1:1)*Math.max(0,x-120);S._plSL=w.scrollLeft}
document.addEventListener('scroll',ev=>{if(ev.target&&ev.target.classList&&ev.target.classList.contains('pl-right'))S._plSL=ev.target.scrollLeft},true);
/* ---------- schedule groups ---------- */
function groupOptions(pid,sel,exclude){const ex=exclude||new Set();const rows=[];
 const gs=Object.values(S.groups||{}).filter(g=>g.projectId===pid);
 const walk=(par,dep)=>gs.filter(g=>(g.parentId||'')===(par||'')).sort((a,b)=>a.sort-b.sort).forEach(g=>{if(ex.has(g.id))return;rows.push(`<option value="${esc(g.id)}"${g.id===sel?' selected':''}>${'— '.repeat(dep)}${esc(g.name)}</option>`);walk(g.id,dep+1)});
 walk('',0);return rows.join('')}
function planTaskFields(x){
 const pid=x.projectId||'';const has=Object.values(S.groups||{}).some(g=>g.projectId===pid);
 return `<div class="frow"><label class="f" id="tk-group-w"${has?'':' hidden'}>${esc(t('plGroupLbl'))}<select class="in" id="tk-group"><option value="">${esc(t('plNoGroup'))}</option>${groupOptions(pid,x.groupId||'')}</select></label>
  <label class="chk" style="align-self:end;padding-bottom:8px"><input type="checkbox" id="tk-ms"${x.milestone?' checked':''}> ◆ ${esc(t('plMilestone'))}</label></div>`;
}
function groupDesc(id){const out=new Set([id]);let grew=true;while(grew){grew=false;for(const g of Object.values(S.groups||{}))if(g.parentId&&out.has(g.parentId)&&!out.has(g.id)){out.add(g.id);grew=true}}return out}
function groupModal(id){
 if(!canPlan())return;const pid=planPid();const g=id?S.groups[id]:{name:'',parentId:'',projectId:pid};if(!g)return;
 openModal(dlg(id?t('plEditGroup'):t('plNewGroup'),`<div class="nd-h">${pChip(g.projectId)}</div>
  <label class="f">${esc(t('plGroupName'))}<input class="in" id="pg-name" required maxlength="200" value="${esc(g.name)}"></label>
  <label class="f">${esc(t('plParent'))}<select class="in" id="pg-parent"><option value="">${esc(t('plTop'))}</option>${groupOptions(g.projectId,g.parentId||'',id?groupDesc(id):new Set())}</select></label>
  ${id?`<div class="muted" style="font-size:12.5px">${esc(t('plDelGroupHint'))}</div>`:''}`,id?footSave('pl-gdel').replace(esc(t('delete')),esc(t('plDelGroup'))):footSave(null)));
 S.modal={kind:'pgroup',id,pid:g.projectId};
}
async function saveGroup(M){
 const name=($('#pg-name')||{}).value||'';if(!name.trim())return;
 try{await api('group_save',{id:M.id||null,projectId:M.pid,name:name.trim(),parentId:($('#pg-parent')||{}).value||null})}catch(e){return dlgErr(errText(e))}
 closeModal();toast(t('saved'));refresh();
}

/* ---------- editing from the schedule ---------- */
function parsePreds(txt,pid){
 const {rows}=planTree(pid);const byN={};for(const r of rows)if(r.k==='t')byN[r.n]=r.o.id;
 const out=[];for(const part of String(txt||'').split(/[,;،\s]+/).filter(Boolean)){
  const m=/^(\d+)(FS|SS|FF|SF)?([+-]\d+)?[dDي]?$/i.exec(part);if(!m||!byN[+m[1]])return null;
  out.push({id:byN[+m[1]],kind:(m[2]||'FS').toUpperCase(),lag:m[3]?+m[3]:0})}
 return out;
}
async function planDates(id,k,val){
 const x=S.tasks[id];if(!x)return;let s=k==='start'?val:(x.start||''),e=k==='due'?val:(x.due||'');
 if(s&&e&&s>e){if(k==='start')e=addDays(e,dayDiff(x.start||s,s));else s=e}
 if(s&&e&&s>e)e=s;
 try{const r=await api('task_dates',{id,start:s,due:e,push:!!S.planPush});x.start=s;x.due=e;toast(t('datesChanged')+(r&&r.moved?' · '+t('plMoved').replace('{n}',r.moved):''));refresh()}catch(err){writeErr(err);renderMainNow()}
}
async function planPreds(id,txt){
 const x=S.tasks[id];if(!x)return;const list=parsePreds(txt,x.projectId);
 if(!list){toast(t('plBadPreds'));renderMainNow();return}
 try{const r=await api('task_deps_save',{id,preds:list,push:!!S.planPush});toast(t('saved')+(r&&r.moved?' · '+t('plMoved').replace('{n}',r.moved):''));refresh()}catch(err){writeErr(err);renderMainNow()}
}
async function planAssign(ids,to){
 if(!ids.length)return;
 try{const r=await api('task_assign',{ids,assignee:to||null});for(const id of ids)if(S.tasks[id]&&r.done)S.tasks[id].assignee=to||null;
  toast(t('plAssigned').replace('{n}',r.done)+(r.skipped?' · '+t('plSkipped').replace('{n}',r.skipped):''));S.planSel.clear();refresh()}catch(err){writeErr(err);renderMainNow()}
}

/* ---------- MS Project XML: read ---------- */
function parseMsp(text){
 const doc=new DOMParser().parseFromString(text,'application/xml');
 if(doc.getElementsByTagName('parsererror').length)throw new Error('bad');
 const root=doc.documentElement;if(!root||root.localName!=='Project')throw new Error('bad');
 const kids=(el,name)=>el?[...el.children].filter(c=>c.localName===name):[];
 const val=(el,name)=>{const c=kids(el,name)[0];return c?c.textContent.trim():''};
 const hrs=v=>{const m=/^-?P(?:(\d+)D)?T?(?:([\d.]+)H)?(?:([\d.]+)M)?(?:([\d.]+)S)?/.exec(v||'');if(!m)return 0;return (+m[1]||0)*8+(+m[2]||0)+(+m[3]||0)/60+(+m[4]||0)/3600};
 const res={};for(const r of kids(kids(root,'Resources')[0],'Resource')){const uid=val(r,'UID');const name=val(r,'Name');if(!name||uid==='0'||val(r,'IsNull')==='1')continue;res['r'+uid]={key:'r'+uid,name,email:val(r,'EmailAddress').toLowerCase()}}
 const asg={};for(const a of kids(kids(root,'Assignments')[0],'Assignment')){const tu=val(a,'TaskUID'),ru='r'+val(a,'ResourceUID');if(!res[ru])continue;(asg[tu]=asg[tu]||[]).push({k:ru,w:hrs(val(a,'Work'))})}
 const tasks=[];let links=0,groups=0,a='',b='';
 for(const x of kids(kids(root,'Tasks')[0],'Task')){
  const uid=val(x,'UID');const lvl=+val(x,'OutlineLevel');if(uid===''||val(x,'IsNull')==='1'||lvl===0||uid==='0')continue;
  const name=val(x,'Name');if(!name)continue;
  const summary=val(x,'Summary')==='1';const ms=val(x,'Milestone')==='1';
  const start=val(x,'Start').slice(0,10),finish=val(x,'Finish').slice(0,10);
  const work=hrs(val(x,'Work')),dur=hrs(val(x,'Duration'));
  const preds=kids(x,'PredecessorLink').map(l=>{const fmt=+val(l,'LagFormat');const lag=+val(l,'LinkLag')||0;return{uid:+val(l,'PredecessorUID'),type:val(l,'Type')===''?1:+val(l,'Type'),lag:Math.round(lag/([4,6,8,10,12].includes(fmt)?14400:4800))}});
  if(summary)groups++;else{links+=preds.length;if(start&&(!a||start<a))a=start;if(finish&&finish>b)b=finish}
  tasks.push({uid:+uid,level:lvl||1,name:name.slice(0,200),summary,milestone:ms,start,finish,hours:summary?null:Math.round((work>0?work:(ms?0:dur))*10)/10,pct:+val(x,'PercentComplete')||0,notes:val(x,'Notes').slice(0,6000),preds,res:(asg[uid]||[]).sort((p,q)=>q.w-p.w).map(z=>z.k)});
 }
 if(!tasks.length)throw new Error('empty');
 return{name:val(root,'Title')||val(root,'Name'),tasks,res:Object.values(res),links,groups,from:a,to:b};
}
/** best guess of the engineer behind an MS Project resource: same email, same name, then same first and last word */
function matchRes(r){
 const ids=assignPool('');const nm=s=>String(s||'').toLowerCase().replace(/\s+/g,' ').trim();
 if(r.email){const u=ids.find(u=>nm((S.members[u]||{}).email)===r.email);if(u)return u}
 const n=nm(r.name);let u=ids.find(u=>nm(memberName(u))===n);if(u)return u;
 const w=n.split(' ');if(w.length>1){u=ids.find(u=>{const m=nm(memberName(u)).split(' ');return m[0]===w[0]&&m[m.length-1]===w[w.length-1]});if(u)return u}
 u=ids.filter(u=>nm(memberName(u)).split(' ')[0]===w[0]);return u.length===1?u[0]:'';
}
async function mspFile(file){
 if(!file)return;if(/\.mpp$/i.test(file.name)){toast(t('mspMpp'));return}
 let d;try{d=parseMsp(await file.text())}catch(e){toast(t('mspBad'));return}
 const pid=planPid();const again=Object.values(S.tasks).some(x=>x.projectId===pid&&x.msUid!=null);const noPh=!(S.phasesBy[pid]||[]).length;
 const nTasks=d.tasks.filter(x=>!x.summary).length;
 const resRows=d.res.length?`<div class="tbl-wrap"><table class="t msp-res"><tbody>${d.res.map(r=>{const g=matchRes(r);return `<tr><td dir="auto"><b>${esc(r.name)}</b>${r.email?`<div class="muted" dir="ltr" style="font-size:11.5px">${esc(r.email)}</div>`:''}</td>
  <td><select class="in" data-mres="${esc(r.key)}"><option value="">— ${esc(t('unassigned'))} —</option>${assignPool('').map(u=>`<option value="${esc(u)}"${u===g?' selected':''}>${esc(memberName(u))}</option>`).join('')}</select></td></tr>`}).join('')}</tbody></table></div>`:`<div class="muted">${esc(t('mspNoRes'))}</div>`;
 openModal(dlg(t('mspTitle'),`<div class="nd-h">${pChip(pid)}<span class="code" dir="ltr">${esc(file.name)}</span></div>
  <div class="note-box"><b>${esc(t('mspSummary').replace('{t}',nTasks).replace('{g}',d.groups).replace('{l}',d.links).replace('{a}',d.from?fmtShort(d.from):'—').replace('{b}',d.to?fmtShort(d.to):'—'))}</b><span>${esc(t(again?'mspUpdate':'mspNew'))}</span></div>
  ${d.groups?`<label class="chk"><input type="checkbox" id="msp-ph"${noPh?' checked':''}> ${esc(t('mspPhases'))}</label>`:''}
  <div class="eyebrow">${esc(t('mspRes'))}</div><div class="muted" style="font-size:12.5px">${esc(t('mspResHint'))}${isLead()&&!allP()?' '+esc(t('mspLeadNote')):''}</div>${resRows}`,
  `<button type="button" class="btn ghost" data-act="close">${esc(t('cancel'))}</button><button type="submit" class="btn primary">⤒ ${esc(t('mspGo'))}</button>`));
 S.modal={kind:'msp',pid,data:d};
}
async function mspImport(M){
 const assign={};document.querySelectorAll('[data-mres]').forEach(s=>{if(s.value)assign[s.dataset.mres]=s.value});
 const btn=document.querySelector('#dlg-form button[type=submit]');if(btn)btn.disabled=true;
 try{const r=await api('schedule_import',{projectId:M.pid,tasks:M.data.tasks,assign,phases:!!($('#msp-ph')||{}).checked});
  closeModal();S.planP=M.pid;S.planCol.clear();
  toast(t('mspDone').replace('{c}',r.created).replace('{u}',r.updated).replace('{l}',r.links));
  if(r.missing&&r.missing.length)setTimeout(()=>toast(t('mspMissing').replace('{n}',r.missing.length)),2800);
  refresh()}
 catch(e){if(btn)btn.disabled=false;dlgErr(errText(e))}
}

/* ---------- MS Project XML: write ---------- */
function mspXml(pid){
 const p=S.projects[pid]||{};const {rows}=planTree(pid);const tk=todayK();
 const X=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&apos;'}[c]));
 const H=h=>{const m=Math.max(0,Math.round(h*60));return `PT${Math.floor(m/60)}H${m%60}M0S`};
 let maxU=0;for(const r of rows)if(r.o.msUid!=null)maxU=Math.max(maxU,r.o.msUid);
 const uid={};for(const r of rows){const key=r.k+r.o.id;uid[key]=r.o.msUid!=null?r.o.msUid:++maxU}
 const tUid={};for(const r of rows)if(r.k==='t')tUid[r.o.id]=uid['t'+r.o.id];
 /* outline numbers like 1, 1.1, 1.2.3 */
 const cnt=[];const outline=[];for(const r of rows){cnt.length=r.depth+1;cnt[r.depth]=(cnt[r.depth]||0)+1;outline.push(cnt.slice(0,r.depth+1).join('.'))}
 const agg={};for(const r of rows)if(r.k==='t'){const s=r.o.start||r.o.due,e=r.o.due||r.o.start;for(const g of r.path){const a=agg[g]=agg[g]||{s:'',e:''};if(s&&(!a.s||s<a.s))a.s=s;if(e&&(!a.e||e>a.e))a.e=e}}
 const people=[...new Set(rows.filter(r=>r.k==='t'&&r.o.assignee).map(r=>r.o.assignee))];const rUid={};people.forEach((u,i)=>rUid[u]=i+1);
 let start='';for(const r of rows){const s=r.k==='t'?(r.o.start||r.o.due):(agg[r.o.id]||{}).s;if(s&&(!start||s<start))start=s}start=start||tk;
 const kindN={FF:0,FS:1,SF:2,SS:3};
 const task=(r,i)=>{const o=r.o;const g=r.k==='g';const a=g?(agg[o.id]||{}):null;
  const s=g?a.s:(o.start||o.due),e=g?a.e:(o.due||o.start);const wd=s&&e?workdaysSpan(g?'':o.assignee,s,e):0;
  const est=g?0:num(o.estimate),spent=g?0:spentOn('t',o.id)/60;const pc=g?0:taskPct(o);
  return `<Task><UID>${uid[r.k+o.id]}</UID><ID>${i+1}</ID><Name>${X(g?o.name:o.title)}</Name><Active>1</Active><Manual>0</Manual><IsNull>0</IsNull>
<WBS>${outline[i]}</WBS><OutlineNumber>${outline[i]}</OutlineNumber><OutlineLevel>${r.depth+1}</OutlineLevel>${s?`<Start>${s}T08:00:00</Start>`:''}${e?`<Finish>${e}T17:00:00</Finish>`:''}
<Duration>${H((o.milestone?0:Math.max(wd,s?1:0))*8)}</Duration><DurationFormat>7</DurationFormat>${g?'':`<Work>${H(est)}</Work>${spent?`<ActualWork>${H(spent)}</ActualWork>`:''}`}
<Milestone>${!g&&o.milestone?1:0}</Milestone><Summary>${g?1:0}</Summary><PercentComplete>${pc}</PercentComplete>${!g&&s?`<ConstraintType>4</ConstraintType><ConstraintDate>${s}T08:00:00</ConstraintDate>`:''}
${!g&&o.spec?`<Notes>${X(o.spec)}</Notes>`:''}${g?'':depsOf(o.id).filter(d=>tUid[d.pred]!=null).map(d=>`<PredecessorLink><PredecessorUID>${tUid[d.pred]}</PredecessorUID><Type>${kindN[d.kind]??1}</Type><CrossProject>0</CrossProject><LinkLag>${(d.lag||0)*4800}</LinkLag><LagFormat>7</LagFormat></PredecessorLink>`).join('')}</Task>`};
 const xml=`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Project xmlns="http://schemas.microsoft.com/project">
<SaveVersion>14</SaveVersion><Name>${X((p.code?p.code+' ':'')+(p.name||''))}.xml</Name><Title>${X(p.name||'')}</Title><Company>TECTOVA BIM &amp; Engineering</Company>
<ScheduleFromStart>1</ScheduleFromStart><StartDate>${start}T08:00:00</StartDate><CurrentDate>${tk}T08:00:00</CurrentDate><MinutesPerDay>480</MinutesPerDay><MinutesPerWeek>2400</MinutesPerWeek><DaysPerMonth>20</DaysPerMonth><DefaultTaskType>0</DefaultTaskType>
<Tasks>
<Task><UID>0</UID><ID>0</ID><Name>${X(p.name||'')}</Name><OutlineLevel>0</OutlineLevel><Summary>1</Summary><Start>${start}T08:00:00</Start></Task>
${rows.map(task).join('\n')}
</Tasks>
<Resources>
<Resource><UID>0</UID><ID>0</ID><Type>1</Type><IsNull>0</IsNull></Resource>
${people.map(u=>{const m=S.members[u]||{};return `<Resource><UID>${rUid[u]}</UID><ID>${rUid[u]}</ID><Name>${X(memberName(u))}</Name><Type>1</Type><IsNull>0</IsNull>${m.email?`<EmailAddress>${X(m.email)}</EmailAddress>`:''}<Group>${X(m.discipline||'')}</Group><MaxUnits>1</MaxUnits></Resource>`}).join('\n')}
</Resources>
<Assignments>
${rows.filter(r=>r.k==='t'&&r.o.assignee).map((r,i)=>`<Assignment><UID>${i+1}</UID><TaskUID>${tUid[r.o.id]}</TaskUID><ResourceUID>${rUid[r.o.assignee]}</ResourceUID><Units>1</Units><Work>${H(num(r.o.estimate))}</Work></Assignment>`).join('\n')}
</Assignments>
</Project>`;
 return{name:`${(p.code||p.name||'schedule').replace(/[^\w؀-ۿ.-]+/g,'-')}-schedule.xml`,xml};
}

/* ---------- removing a member, and the sign-in message ---------- */
function credText(c,lang){return t(lang==='en'?'credMsgEn':'credMsgAr').replace('{n}',c.name).replace('{u}',c.url).replace('{e}',c.email).replace('{p}',c.pw)}
function siteUrl(){return location.origin+location.pathname.replace(/[^/]*$/,'')}
function credDialog(c){
 c=Object.assign({url:siteUrl()},c);S.cred=c;const lang=S.credLang||LANG;const msg=credText(c,lang);
 const phone=String(c.phone||'').replace(/[^\d]/g,'').replace(/^00/,'');
 openModal(dlg(t('credTitle')+' · '+c.name,`<div class="muted" style="font-size:13px">${esc(t('credHint'))}</div>
  <div class="cred-l"><span class="muted">${esc(t('credLang'))}</span><span class="lang" role="group"><button type="button" data-act="cred-lang" data-v="ar" aria-pressed="${lang==='ar'}">عربي</button><button type="button" data-act="cred-lang" data-v="en" aria-pressed="${lang==='en'}">EN</button></span></div>
  <textarea class="in cred-msg" id="cred-msg" readonly dir="${lang==='en'?'ltr':'rtl'}">${esc(msg)}</textarea>
  <div class="cred-a"><button type="button" class="btn primary" data-act="cred-copy">${esc(t('credCopy'))}</button>
   <a class="btn" href="https://wa.me/${phone}?text=${encodeURIComponent(msg)}" target="_blank" rel="noopener noreferrer">${esc(t('credWa'))}</a>
   <a class="btn" href="https://t.me/share/url?url=${encodeURIComponent(c.url)}&text=${encodeURIComponent(msg)}" target="_blank" rel="noopener noreferrer">${esc(t('credTg'))}</a>
   <a class="btn" href="mailto:${encodeURIComponent(c.email)}?subject=${encodeURIComponent(t('credSubject'))}&body=${encodeURIComponent(msg)}">${esc(t('credMail'))}</a></div>`,
  `<button type="button" class="btn" data-act="close">${esc(t('close'))}</button>`));
 S.modal={kind:'cred'};
}

/* ---------- events for this block ---------- */
document.addEventListener('click',async ev=>{
 const el=ev.target.closest&&ev.target.closest('[data-act]');if(!el)return;const a=el.dataset.act,id=el.dataset.id;
 switch(a){
  case 'pl-import':{const f=$('#pl-file');if(f)f.click();break}
  case 'pl-export':{const {name,xml}=mspXml(planPid());downloadText(name,xml,'application/xml');toast(t('mspExported'));break}
  case 'pl-zoom':S.planZoom=el.dataset.v;try{localStorage.setItem('tdesk-pz',S.planZoom)}catch(e){}renderMainNow();break;
  case 'pl-col':if(S.planCol.has(id))S.planCol.delete(id);else S.planCol.add(id);renderMainNow();break;
  case 'pl-colall':if(S.planCol.size)S.planCol.clear();else Object.values(S.groups||{}).filter(g=>g.projectId===planPid()).forEach(g=>S.planCol.add(g.id));renderMainNow();break;
  case 'pl-gnew':groupModal(null);break;
  case 'pl-gedit':groupModal(id);break;
  case 'pl-gtask':{const g=S.groups[id];if(g){S.newTaskPre={projectId:g.projectId,groupId:id};taskModal(null)}break}
  case 'pl-tnew':S.newTaskPre={projectId:planPid()};taskModal(null);break;
  case 'pl-gdel':{const M=S.modal;if(el.classList.contains('armed')){closeModal();guard(api('group_delete',{id:M.id}),t('deleted')).then(ok=>{if(ok)refresh()})}else{el.classList.add('armed');el.textContent=t('confirmDel')}break}
  case 'pl-base':if(await guard(api('schedule_baseline',{projectId:planPid()}),t('plBaselineSaved')))refresh();break;
  case 'pl-bulk':{const to=($('#pl-bulk-to')||{}).value||'';planAssign([...S.planSel],to);break}
  case 'pl-selnone':S.planSel.clear();renderMainNow();break;
  case 'del-member':{const M=S.modal;if(el.classList.contains('armed')){closeModal();guard(api('user_delete',{id:M.id}),t('memberDeleted')).then(ok=>{if(ok)refresh()})}else{el.classList.add('armed');el.textContent=t('confirmDel')}break}
  case 'gen-pw':{const i=$('#mb-pass');if(i){i.value=tempPassword();i.focus();i.select()}break}
  case 'cred-lang':S.credLang=el.dataset.v;if(S.cred)credDialog(S.cred);break;
  case 'cred-copy':{const ta=$('#cred-msg');const txt=ta?ta.value:'';const done=()=>toast(t('copied'));try{navigator.clipboard.writeText(txt).then(done,()=>{if(ta){ta.focus();ta.select()}})}catch(e){if(ta){ta.focus();ta.select()}}break}
 }
});
document.addEventListener('change',ev=>{
 const el=ev.target;
 if(el.id==='pl-project'){S.planP=el.value;S.planSel.clear();S.planCol.clear();renderMainNow();return}
 if(el.id==='pl-file'){const f=el.files&&el.files[0];el.value='';mspFile(f);return}
 if(el.id==='pl-push'){S.planPush=el.checked;try{localStorage.setItem('tdesk-pp',el.checked?'1':'0')}catch(e){}return}
 if(el.id==='pl-selall'){const {rows}=planTree(planPid());for(const r of rows)if(r.k==='t'&&canAssignP(r.o)){if(el.checked)S.planSel.add(r.o.id);else S.planSel.delete(r.o.id)}renderMainNow();return}
 if(el.dataset&&el.dataset.psel){if(el.checked)S.planSel.add(el.dataset.psel);else S.planSel.delete(el.dataset.psel);renderMainNow();return}
 if(el.dataset&&el.dataset.pasg){const id=el.dataset.pasg;el.blur();planAssign([id],el.value);return}
 if(el.dataset&&el.dataset.pd){const id=el.dataset.pd;el.blur();planDates(id,el.dataset.k,el.value);return}
 if(el.dataset&&el.dataset.pp){const id=el.dataset.pp;el.blur();planPreds(id,el.value);return}
 if(el.id==='tk-project'){const g=$('#tk-group'),w=$('#tk-group-w');if(g){g.innerHTML=`<option value="">${esc(t('plNoGroup'))}</option>`+groupOptions(el.value,'');if(w)w.hidden=!Object.values(S.groups||{}).some(x=>x.projectId===el.value)}return}
});

setInterval(()=>{if(S.screen==='app'&&document.visibilityState==='visible'&&$('#modal').hidden)refresh()},45000);
document.addEventListener('visibilitychange',()=>{if(S.screen==='app'&&document.visibilityState==='visible')refresh()});
document.addEventListener('toggle',ev=>{const d=ev.target;if(d&&d.classList&&d.classList.contains('np'))S.npOpen=d.open},true);
boot();

/* v2.17 clicks */
document.addEventListener('click',ev=>{
 if(!(ev.target.closest&&ev.target.closest('.lv-menu,[data-act="cm-lv"]')))document.querySelectorAll('.lv-menu').forEach(x=>x.remove());
 const el=ev.target.closest&&ev.target.closest('[data-act]');if(!el)return;const a=el.dataset.act,id=el.dataset.id;
 switch(a){
  case 'pj-tab':S.pjTab=el.dataset.v;renderMainNow();break;
  case 'tk-tab':S.tkTab=el.dataset.v;if(S.tkTab==='mine'){S.tf.person='';S.tf.scope=''}renderMainNow();break;
  case 'cm-team':S.capTeam=id;renderMainNow();break;
  case 'cm-lv':cmLvMenu(el);break;
  case 'cm-set':cmSet(el.dataset.u,el.dataset.k,+el.dataset.v);break;
  case 'cm-suggest':cmSuggest();break;
  case 'cm-skill':cmSkillModal(id);break;
  case 'cm-csv':cmCsv();break;
  case 'cm-move':guard(api('skill_move',{id,dir:+el.dataset.v})).then(ok=>{if(ok)refresh()});break;
  case 'cm-del':{if(el.classList.contains('armed')){const M=S.modal;closeModal();guard(api('skill_delete',{id:M.id}),t('deleted')).then(ok=>{if(ok)refresh()})}else{el.classList.add('armed');el.textContent=t('confirmDel')}break}
  case 'role-new':roleModal(null);break;
  case 'role-reset':guard(api('role_builtin_save',{role:el.dataset.v,reset:true}),t('saved')).then(ok=>{if(ok)refresh()});break;
  case 'role-edit':roleModal(id);break;
  case 'role-del':{if(el.classList.contains('armed')){const M=S.modal;closeModal();guard(api('role_delete',{id:M.id}),t('deleted')).then(ok=>{if(ok)refresh()})}else{el.classList.add('armed');el.textContent=t('confirmDel')}break}
  case 'cl-view':S.clv=el.dataset.v;try{localStorage.setItem('tdesk-clv',S.clv)}catch(e){}renderMainNow();break;
  case 'cl-sort':{const k=el.dataset.v;if(S.clSort===k)S.clDir=-(S.clDir||1);else{S.clSort=k;S.clDir=k==='name'||k==='country'?1:-1}renderMainNow();break}
  case 'cap-w':S.capW=+el.dataset.v;renderMainNow();break;
  case 'cap-help':S.capHelp=!S.capHelp;renderMainNow();break;
  case 'cap-open':if(ev.target.closest('button,a')&&ev.target.closest('button,a')!==el)break;S.capOpen=S.capOpen===id?null:id;renderMainNow();break;
 }
});
document.addEventListener('keydown',ev=>{if(ev.key==='Escape')document.querySelectorAll('.lv-menu').forEach(x=>x.remove());
 if((ev.key==='Enter'||ev.key===' ')&&ev.target.classList&&ev.target.classList.contains('cap-r')){ev.preventDefault();ev.target.click()}});
try{S.clv=localStorage.getItem('tdesk-clv')||'cards'}catch(e){}

/* v2.18 */
pwaInit();
document.addEventListener('click',ev=>{const el=ev.target.closest&&ev.target.closest('[data-act]');if(!el)return;
 switch(el.dataset.act){
  case 'pwa-install':if(PWA.bip){PWA.bip.prompt();PWA.bip.userChoice.finally(()=>{PWA.bip=null;schedule()})}break;
  case 'pwa-x':try{localStorage.setItem('tdesk-pwa-x','1')}catch(e){}renderMainNow();break;
  case 'push-on':pushOn();break;
  case 'push-off':pushOff();break;
  case 'push-test':pushTest();break;
 }});
})();
