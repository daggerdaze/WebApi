--USE master
--GO

--IF NOT EXISTS (
--        SELECT *
--        FROM sys.databases
--        WHERE name = 'EmpDeptSystem'
--        )
--BEGIN
--    CREATE DATABASE [EmpDeptSystem]
--END
--GO

--USE [EmpDeptSystem ]
--GO


--IF NOT EXISTS (SELECT 1 FROM SYSOBJECTS WHERE [type] = 'U' AND [name] = 'Departments')
--BEGIN

--	PRINT 'CREATE TABLE  [dbo].[Departments`]'
	
--	CREATE TABLE  [dbo].[Departments](
--		[Id]				int IDENTITY(1,1),
--		[Name]				VARCHAR(100) NOT NULL,
--		[Location]			VARCHAR(100) NOT NULL
--		CONSTRAINT [PK_Department_Id] PRIMARY KEY CLUSTERED ([Id] ASC)
--	) ON [PRIMARY]
	 
--END
--GO

--IF NOT EXISTS (SELECT 1 FROM SYSOBJECTS WHERE [type] = 'U' AND [name] = 'Employees')
--BEGIN

--	PRINT 'CREATE TABLE  [dbo].[Employees`]'
	
--	CREATE TABLE  [dbo].[Employees](
--		[Id]				int IDENTITY(1,1),
--		[FName]			VARCHAR(100) NOT NULL,
--		[EmployeeNo]	VARCHAR(50) NOT NULL,
--		[HireDate]			DATE NOT NULL,
--		[Designation]		int NOT NULL,
--		CONSTRAINT [PK_Employees_Id] PRIMARY KEY CLUSTERED ([Id] ASC),
--		CONSTRAINT [FK_Employees_Departments] FOREIGN KEY ([DepartmentId]) REFERENCES [Departments] ([Id])
--	) ON [PRIMARY]
	 
--END
--GO

--IF EXISTS (SELECT 1 FROM SYSOBJECTS WHERE [type] = 'U' AND [name] = 'Departments')
--BEGIN
	
--	IF NOT EXISTS (SELECT 1 FROM [departments] WHERE	[Name] = 'Administration')
--	BEGIN
--		INSERT INTO departments ([Name], [Location]) VALUES ('Administration', 'India');
--	END

--	IF NOT EXISTS (SELECT 1 FROM [departments] WHERE	[Name] = 'Marketing')
--	BEGIN
--		INSERT INTO departments ([Name], [Location]) VALUES ('Marketing', 'Indiana');
--	END

--	IF NOT EXISTS (SELECT 1 FROM [departments] WHERE	[Name] = 'Human Resources')
--	BEGIN
--		INSERT INTO departments ([Name], [Location]) VALUES ('Human Resources', 'India');
--	END

--	IF NOT EXISTS (SELECT 1 FROM [departments] WHERE	[Name] = 'IT Support')
--	BEGIN
--			INSERT INTO departments ([Name], [Location]) VALUES ('IT Support', 'India');
--	END

--	IF NOT EXISTS (SELECT 1 FROM [departments] WHERE	[Name] = 'Product Engineering')
--	BEGIN
--			INSERT INTO departments ([Name], [Location]) VALUES ('Product Engineering', 'India');
--	END
	
--END

--IF EXISTS (SELECT 1 FROM SYSOBJECTS WHERE [type] = 'U' AND [name] = 'Employees')
--BEGIN
--	IF NOT EXISTS (SELECT 1 FROM [Employees] WHERE [EmployeeNumber] = 'EP001')
--	BEGIN
--		INSERT INTO [Employees] ([FirstName], [LastName], [EmployeeNumber], [HireDate], [DepartmentId]) 
--			VALUES ('Steven', 'King','EP001', '02-02-2020' ,1);
--	END

--	IF NOT EXISTS (SELECT 1 FROM [Employees] WHERE [EmployeeNumber] = 'EP002')
--	BEGIN
--		INSERT INTO [Employees] ([FirstName], [LastName], [EmployeeNumber], [HireDate], [DepartmentId]) 
--			VALUES ('Ashish', 'Shau','EP002', '03-11-2020' ,1);
--	END
--	IF NOT EXISTS (SELECT 1 FROM [Employees] WHERE [EmployeeNumber] = 'EP003')
--	BEGIN
--		INSERT INTO [Employees] ([FirstName], [LastName], [EmployeeNumber], [HireDate], [DepartmentId]) 
--			VALUES ('Rohit', 'Kumar','EP003', '04-22-2020' ,1);
--	END
--	IF NOT EXISTS (SELECT 1 FROM [Employees] WHERE [EmployeeNumber] = 'EP004')
--	BEGIN
--		INSERT INTO [Employees] ([FirstName], [LastName],[EmployeeNumber], [HireDate], [DepartmentId]) 
--			VALUES ('Mukund', 'Kumar', 'EP004','05-20-2020' ,1);
--	END
--END