using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Pomelo.EntityFrameworkCore.MySql.Scaffolding.Internal;

namespace DBCONNECTION.Models;

public partial class InternshipContext : DbContext
{
    public InternshipContext()
    {
    }

    public InternshipContext(DbContextOptions<InternshipContext> options)
        : base(options)
    {
    }

    public virtual DbSet<CollegeTable> CollegeTables { get; set; }

    public virtual DbSet<EducationQualificationDatum> EducationQualificationData { get; set; }

    public virtual DbSet<ExperiencedProfessionalQualification> ExperiencedProfessionalQualifications { get; set; }

    public virtual DbSet<FresherProfessionalQualification> FresherProfessionalQualifications { get; set; }

    public virtual DbSet<JobHasPreference> JobHasPreferences { get; set; }

    public virtual DbSet<JobHasTimeslot> JobHasTimeslots { get; set; }

    public virtual DbSet<JobRoleDetail> JobRoleDetails { get; set; }

    public virtual DbSet<Jobcard> Jobcards { get; set; }

    public virtual DbSet<JobcardRole> JobcardRoles { get; set; }

    public virtual DbSet<PersonalInformation> PersonalInformations { get; set; }

    public virtual DbSet<Qualification> Qualifications { get; set; }

    public virtual DbSet<SelectedJob> SelectedJobs { get; set; }

    public virtual DbSet<StreamTable> StreamTables { get; set; }

    public virtual DbSet<Technology> Technologies { get; set; }

    public virtual DbSet<TechnologyExpertise> TechnologyExpertises { get; set; }

    public virtual DbSet<TechnologyFamiliar> TechnologyFamiliars { get; set; }

    public virtual DbSet<TimeSlotTable> TimeSlotTables { get; set; }

    public virtual DbSet<UserHasPreference> UserHasPreferences { get; set; }

    public virtual DbSet<UserJobDetail> UserJobDetails { get; set; }

    public virtual DbSet<Userdatum> Userdata { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see https://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseMySql("server=localhost;database=internship;user=root;password=vivek", Microsoft.EntityFrameworkCore.ServerVersion.Parse("8.0.36-mysql"));

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder
            .UseCollation("utf8mb4_0900_ai_ci")
            .HasCharSet("utf8mb4");

        modelBuilder.Entity<CollegeTable>(entity =>
        {
            entity.HasKey(e => e.CId).HasName("PRIMARY");

            entity.ToTable("college_table");

            entity.HasIndex(e => e.CId, "c_id_UNIQUE").IsUnique();

            entity.Property(e => e.CId)
                .ValueGeneratedNever()
                .HasColumnName("c_id");
            entity.Property(e => e.CollegeName)
                .HasMaxLength(80)
                .HasColumnName("college_name");
            entity.Property(e => e.DtCreated)
                .HasDefaultValueSql("CURRENT_TIMESTAMP")
                .HasColumnType("datetime")
                .HasColumnName("dt_created");
            entity.Property(e => e.DtModified)
                .ValueGeneratedOnAddOrUpdate()
                .HasDefaultValueSql("CURRENT_TIMESTAMP")
                .HasColumnType("datetime")
                .HasColumnName("dt_modified");
        });

        modelBuilder.Entity<EducationQualificationDatum>(entity =>
        {
            entity.HasKey(e => e.Email).HasName("PRIMARY");

            entity.ToTable("education_qualification_data");

            entity.HasIndex(e => e.CId, "c_id");

            entity.HasIndex(e => e.Email, "email_UNIQUE").IsUnique();

            entity.HasIndex(e => e.QId, "q_id");

            entity.HasIndex(e => e.SId, "s_id");

            entity.Property(e => e.Email)
                .HasMaxLength(20)
                .HasColumnName("email");
            entity.Property(e => e.CId).HasColumnName("c_id");
            entity.Property(e => e.CollegeLocation)
                .HasMaxLength(30)
                .HasColumnName("college_location");
            entity.Property(e => e.CollegeName)
                .HasMaxLength(100)
                .HasColumnName("college_name");
            entity.Property(e => e.DtCreated)
                .HasDefaultValueSql("CURRENT_TIMESTAMP")
                .HasColumnType("datetime")
                .HasColumnName("dt_created");
            entity.Property(e => e.DtModified)
                .ValueGeneratedOnAddOrUpdate()
                .HasDefaultValueSql("CURRENT_TIMESTAMP")
                .HasColumnType("datetime")
                .HasColumnName("dt_modified");
            entity.Property(e => e.PassingYear).HasColumnName("passing_Year");
            entity.Property(e => e.Percentage).HasColumnName("percentage");
            entity.Property(e => e.QId).HasColumnName("q_id");
            entity.Property(e => e.SId).HasColumnName("s_id");

            entity.HasOne(d => d.CIdNavigation).WithMany(p => p.EducationQualificationData)
                .HasForeignKey(d => d.CId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("education_qualification_data_ibfk_3");

            entity.HasOne(d => d.QIdNavigation).WithMany(p => p.EducationQualificationData)
                .HasForeignKey(d => d.QId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("education_qualification_data_ibfk_1");

            entity.HasOne(d => d.SIdNavigation).WithMany(p => p.EducationQualificationData)
                .HasForeignKey(d => d.SId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("education_qualification_data_ibfk_2");
        });

        modelBuilder.Entity<ExperiencedProfessionalQualification>(entity =>
        {
            entity.HasKey(e => e.Email).HasName("PRIMARY");

            entity.ToTable("experienced_professional_qualification");

            entity.HasIndex(e => e.Email, "email_UNIQUE").IsUnique();

            entity.Property(e => e.Email)
                .HasMaxLength(20)
                .HasColumnName("email");
            entity.Property(e => e.CurrentCtc).HasColumnName("current_CTC");
            entity.Property(e => e.DtCreated)
                .HasDefaultValueSql("CURRENT_TIMESTAMP")
                .HasColumnType("datetime")
                .HasColumnName("dt_created");
            entity.Property(e => e.DtModified)
                .ValueGeneratedOnAddOrUpdate()
                .HasDefaultValueSql("CURRENT_TIMESTAMP")
                .HasColumnType("datetime")
                .HasColumnName("dt_modified");
            entity.Property(e => e.Duration)
                .HasMaxLength(30)
                .HasColumnName("duration");
            entity.Property(e => e.EndDate).HasColumnName("end_date");
            entity.Property(e => e.ExpectedCtc).HasColumnName("expected_CTC");
            entity.Property(e => e.OnNoticePeriod).HasColumnName("on_notice_period");
            entity.Property(e => e.OtherTechnologies)
                .HasMaxLength(80)
                .HasColumnName("other_technologies");
            entity.Property(e => e.RoleApplied)
                .HasMaxLength(30)
                .HasColumnName("role_applied");
            entity.Property(e => e.TestAppeared).HasColumnName("test_appeared");
            entity.Property(e => e.YearsOfExperience).HasColumnName("years_of_experience");
        });

        modelBuilder.Entity<FresherProfessionalQualification>(entity =>
        {
            entity.HasKey(e => e.Email).HasName("PRIMARY");

            entity.ToTable("fresher_professional_qualification");

            entity.HasIndex(e => e.Email, "email_UNIQUE").IsUnique();

            entity.Property(e => e.Email)
                .HasMaxLength(20)
                .HasColumnName("email");
            entity.Property(e => e.DtCreated)
                .HasDefaultValueSql("CURRENT_TIMESTAMP")
                .HasColumnType("datetime")
                .HasColumnName("dt_created");
            entity.Property(e => e.DtModified)
                .ValueGeneratedOnAddOrUpdate()
                .HasDefaultValueSql("CURRENT_TIMESTAMP")
                .HasColumnType("datetime")
                .HasColumnName("dt_modified");
            entity.Property(e => e.OtherTechnologies)
                .HasMaxLength(80)
                .HasColumnName("other_technologies");
            entity.Property(e => e.RoleApplied)
                .HasMaxLength(30)
                .HasColumnName("role_applied");
            entity.Property(e => e.TestAppeared).HasColumnName("test_appeared");
        });

        modelBuilder.Entity<JobHasPreference>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("job_has_preferences");

            entity.HasIndex(e => e.Id, "idx_key");

            entity.HasIndex(e => e.JobNumber, "job_number");

            entity.HasIndex(e => e.JobRoleId, "job_role_id");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.DtCreated)
                .HasDefaultValueSql("CURRENT_TIMESTAMP")
                .HasColumnType("datetime")
                .HasColumnName("dt_created");
            entity.Property(e => e.DtModified)
                .ValueGeneratedOnAddOrUpdate()
                .HasDefaultValueSql("CURRENT_TIMESTAMP")
                .HasColumnType("datetime")
                .HasColumnName("dt_modified");
            entity.Property(e => e.JobNumber).HasColumnName("job_number");
            entity.Property(e => e.JobRoleId).HasColumnName("job_role_id");

            entity.HasOne(d => d.JobNumberNavigation).WithMany(p => p.JobHasPreferences)
                .HasForeignKey(d => d.JobNumber)
                .HasConstraintName("job_has_preferences_ibfk_2");

            entity.HasOne(d => d.JobRole).WithMany(p => p.JobHasPreferences)
                .HasForeignKey(d => d.JobRoleId)
                .HasConstraintName("job_has_preferences_ibfk_1");
        });

        modelBuilder.Entity<JobHasTimeslot>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("job_has_timeslot");

            entity.HasIndex(e => e.Id, "idx_key");

            entity.HasIndex(e => e.JobNumber, "job_number");

            entity.HasIndex(e => e.TimeSlotId, "time_slot_id");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.DtCreated)
                .HasDefaultValueSql("CURRENT_TIMESTAMP")
                .HasColumnType("datetime")
                .HasColumnName("dt_created");
            entity.Property(e => e.DtModified)
                .ValueGeneratedOnAddOrUpdate()
                .HasDefaultValueSql("CURRENT_TIMESTAMP")
                .HasColumnType("datetime")
                .HasColumnName("dt_modified");
            entity.Property(e => e.JobNumber).HasColumnName("job_number");
            entity.Property(e => e.TimeSlotId).HasColumnName("time_slot_id");

            entity.HasOne(d => d.JobNumberNavigation).WithMany(p => p.JobHasTimeslots)
                .HasForeignKey(d => d.JobNumber)
                .HasConstraintName("job_has_timeslot_ibfk_2");

            entity.HasOne(d => d.TimeSlot).WithMany(p => p.JobHasTimeslots)
                .HasForeignKey(d => d.TimeSlotId)
                .HasConstraintName("job_has_timeslot_ibfk_1");
        });

        modelBuilder.Entity<JobRoleDetail>(entity =>
        {
            entity.HasKey(e => e.JobRoleId).HasName("PRIMARY");

            entity.ToTable("job_role_details");

            entity.HasIndex(e => e.JobRoleId, "idx_key");

            entity.Property(e => e.JobRoleId)
                .ValueGeneratedNever()
                .HasColumnName("job_role_id");
            entity.Property(e => e.DtCreated)
                .HasDefaultValueSql("CURRENT_TIMESTAMP")
                .HasColumnType("datetime")
                .HasColumnName("dt_created");
            entity.Property(e => e.DtModified)
                .ValueGeneratedOnAddOrUpdate()
                .HasDefaultValueSql("CURRENT_TIMESTAMP")
                .HasColumnType("datetime")
                .HasColumnName("dt_modified");
            entity.Property(e => e.GrossCompensation).HasColumnName("gross_compensation");
            entity.Property(e => e.JobIcons)
                .HasMaxLength(200)
                .HasColumnName("job_icons");
            entity.Property(e => e.JobRoles)
                .HasMaxLength(100)
                .HasColumnName("job_roles");
            entity.Property(e => e.Requirement)
                .HasColumnType("text")
                .HasColumnName("requirement");
            entity.Property(e => e.RoleDescription)
                .HasColumnType("text")
                .HasColumnName("role_description");
        });

        modelBuilder.Entity<Jobcard>(entity =>
        {
            entity.HasKey(e => e.Srno).HasName("PRIMARY");

            entity.ToTable("jobcard");

            entity.HasIndex(e => e.Srno, "idx_key").IsUnique();

            entity.Property(e => e.Srno).HasColumnName("srno");
            entity.Property(e => e.Dateandtime)
                .HasMaxLength(40)
                .HasColumnName("dateandtime");
            entity.Property(e => e.DtCreated)
                .HasDefaultValueSql("CURRENT_TIMESTAMP")
                .HasColumnType("datetime")
                .HasColumnName("dt_created");
            entity.Property(e => e.DtModified)
                .ValueGeneratedOnAddOrUpdate()
                .HasDefaultValueSql("CURRENT_TIMESTAMP")
                .HasColumnType("datetime")
                .HasColumnName("dt_modified");
            entity.Property(e => e.GeneralInstruction)
                .HasColumnType("text")
                .HasColumnName("general_instruction");
            entity.Property(e => e.Instructions)
                .HasColumnType("text")
                .HasColumnName("instructions");
            entity.Property(e => e.JobTitle)
                .HasMaxLength(100)
                .HasColumnName("jobTitle");
            entity.Property(e => e.Location)
                .HasMaxLength(20)
                .HasColumnName("location");
            entity.Property(e => e.ProcessInfo)
                .HasColumnType("text")
                .HasColumnName("process_info");
            entity.Property(e => e.SystemRequirement)
                .HasColumnType("text")
                .HasColumnName("system_requirement");
        });

        modelBuilder.Entity<JobcardRole>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("jobcard_roles");

            entity.HasIndex(e => e.Id, "id_UNIQUE").IsUnique();

            entity.HasIndex(e => e.JobRoleId, "jobcard_roles_ibfk_1");

            entity.HasIndex(e => e.JobNumber, "jobcard_roles_ibfk_2");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.DtCreated)
                .HasDefaultValueSql("CURRENT_TIMESTAMP")
                .HasColumnType("datetime")
                .HasColumnName("dt_created");
            entity.Property(e => e.DtModified)
                .ValueGeneratedOnAddOrUpdate()
                .HasDefaultValueSql("CURRENT_TIMESTAMP")
                .HasColumnType("datetime")
                .HasColumnName("dt_modified");
            entity.Property(e => e.JobNumber).HasColumnName("jobNumber");
            entity.Property(e => e.JobRoleId).HasColumnName("job_role_id");

            entity.HasOne(d => d.JobNumberNavigation).WithMany(p => p.JobcardRoles)
                .HasForeignKey(d => d.JobNumber)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("jobcard_roles_ibfk_2");

            entity.HasOne(d => d.JobRole).WithMany(p => p.JobcardRoles)
                .HasForeignKey(d => d.JobRoleId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("jobcard_roles_ibfk_1");
        });

        modelBuilder.Entity<PersonalInformation>(entity =>
        {
            entity.HasKey(e => e.Email).HasName("PRIMARY");

            entity.ToTable("personal_information");

            entity.HasIndex(e => e.Email, "idx_key");

            entity.Property(e => e.Email)
                .HasMaxLength(20)
                .HasColumnName("email");
            entity.Property(e => e.DtCreated)
                .HasDefaultValueSql("CURRENT_TIMESTAMP")
                .HasColumnType("datetime")
                .HasColumnName("dt_created");
            entity.Property(e => e.DtModified)
                .ValueGeneratedOnAddOrUpdate()
                .HasDefaultValueSql("CURRENT_TIMESTAMP")
                .HasColumnType("datetime")
                .HasColumnName("dt_modified");
            entity.Property(e => e.EmployeeReffered)
                .HasMaxLength(20)
                .HasColumnName("employee_Reffered");
            entity.Property(e => e.FirstName)
                .HasMaxLength(10)
                .HasColumnName("first_Name");
            entity.Property(e => e.IsEmailNotification)
                .HasDefaultValueSql("'1'")
                .HasColumnName("is_Email_Notification");
            entity.Property(e => e.LastName)
                .HasMaxLength(10)
                .HasColumnName("last_Name");
            entity.Property(e => e.PhoneNumber)
                .HasMaxLength(15)
                .HasColumnName("phone_Number");
            entity.Property(e => e.PortfolioUrl)
                .HasMaxLength(50)
                .HasColumnName("portfolio_Url");
            entity.Property(e => e.ResumeString)
                .HasMaxLength(50)
                .HasColumnName("resume_String");
        });

        modelBuilder.Entity<Qualification>(entity =>
        {
            entity.HasKey(e => e.QId).HasName("PRIMARY");

            entity.ToTable("qualification");

            entity.HasIndex(e => e.QId, "idx_key").IsUnique();

            entity.Property(e => e.QId)
                .ValueGeneratedNever()
                .HasColumnName("q_id");
            entity.Property(e => e.DtCreated)
                .HasDefaultValueSql("CURRENT_TIMESTAMP")
                .HasColumnType("datetime")
                .HasColumnName("dt_created");
            entity.Property(e => e.DtModified)
                .ValueGeneratedOnAddOrUpdate()
                .HasDefaultValueSql("CURRENT_TIMESTAMP")
                .HasColumnType("datetime")
                .HasColumnName("dt_modified");
            entity.Property(e => e.QualificationName)
                .HasMaxLength(80)
                .HasColumnName("qualification_name");
        });

        modelBuilder.Entity<SelectedJob>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("selected_jobs");

            entity.HasIndex(e => e.Email, "email");

            entity.HasIndex(e => e.Id, "id_UNIQUE").IsUnique();

            entity.HasIndex(e => e.JobRoleId, "job_role_id");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.DtCreated)
                .HasDefaultValueSql("CURRENT_TIMESTAMP")
                .HasColumnType("datetime")
                .HasColumnName("dt_created");
            entity.Property(e => e.DtModified)
                .ValueGeneratedOnAddOrUpdate()
                .HasDefaultValueSql("CURRENT_TIMESTAMP")
                .HasColumnType("datetime")
                .HasColumnName("dt_modified");
            entity.Property(e => e.Email)
                .HasMaxLength(20)
                .HasColumnName("email");
            entity.Property(e => e.JobRoleId).HasColumnName("job_role_id");

            entity.HasOne(d => d.EmailNavigation).WithMany(p => p.SelectedJobs)
                .HasForeignKey(d => d.Email)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("selected_jobs_ibfk_2");

            entity.HasOne(d => d.JobRole).WithMany(p => p.SelectedJobs)
                .HasForeignKey(d => d.JobRoleId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("selected_jobs_ibfk_1");
        });

        modelBuilder.Entity<StreamTable>(entity =>
        {
            entity.HasKey(e => e.SId).HasName("PRIMARY");

            entity.ToTable("stream_table");

            entity.HasIndex(e => e.SId, "idx_key").IsUnique();

            entity.Property(e => e.SId)
                .ValueGeneratedNever()
                .HasColumnName("s_id");
            entity.Property(e => e.DtCreated)
                .HasDefaultValueSql("CURRENT_TIMESTAMP")
                .HasColumnType("datetime")
                .HasColumnName("dt_created");
            entity.Property(e => e.DtModified)
                .ValueGeneratedOnAddOrUpdate()
                .HasDefaultValueSql("CURRENT_TIMESTAMP")
                .HasColumnType("datetime")
                .HasColumnName("dt_modified");
            entity.Property(e => e.StreamName)
                .HasMaxLength(80)
                .HasColumnName("stream_name");
        });

        modelBuilder.Entity<Technology>(entity =>
        {
            entity.HasKey(e => e.TechId).HasName("PRIMARY");

            entity.ToTable("technology");

            entity.HasIndex(e => e.TechId, "idx_key").IsUnique();

            entity.Property(e => e.TechId)
                .ValueGeneratedNever()
                .HasColumnName("tech_id");
            entity.Property(e => e.DtCreated)
                .HasDefaultValueSql("CURRENT_TIMESTAMP")
                .HasColumnType("datetime")
                .HasColumnName("dt_created");
            entity.Property(e => e.DtModified)
                .ValueGeneratedOnAddOrUpdate()
                .HasDefaultValueSql("CURRENT_TIMESTAMP")
                .HasColumnType("datetime")
                .HasColumnName("dt_modified");
            entity.Property(e => e.Technology1)
                .HasMaxLength(80)
                .HasColumnName("technology");
        });

        modelBuilder.Entity<TechnologyExpertise>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("technology_expertise");

            entity.HasIndex(e => e.Email, "email");

            entity.HasIndex(e => e.Id, "id_UNIQUE").IsUnique();

            entity.HasIndex(e => e.TechId, "tech_id");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.DtCreated)
                .HasDefaultValueSql("CURRENT_TIMESTAMP")
                .HasColumnType("datetime")
                .HasColumnName("dt_created");
            entity.Property(e => e.DtModified)
                .ValueGeneratedOnAddOrUpdate()
                .HasDefaultValueSql("CURRENT_TIMESTAMP")
                .HasColumnType("datetime")
                .HasColumnName("dt_modified");
            entity.Property(e => e.Email)
                .HasMaxLength(20)
                .HasColumnName("email");
            entity.Property(e => e.TechId).HasColumnName("tech_id");

            entity.HasOne(d => d.EmailNavigation).WithMany(p => p.TechnologyExpertises)
                .HasForeignKey(d => d.Email)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("technology_expertise_ibfk_1");

            entity.HasOne(d => d.Tech).WithMany(p => p.TechnologyExpertises)
                .HasForeignKey(d => d.TechId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("technology_expertise_ibfk_2");
        });

        modelBuilder.Entity<TechnologyFamiliar>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("technology_familiar");

            entity.HasIndex(e => e.Email, "email");

            entity.HasIndex(e => e.Id, "id_UNIQUE").IsUnique();

            entity.HasIndex(e => e.TechId, "tech_id");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.DtCreated)
                .HasDefaultValueSql("CURRENT_TIMESTAMP")
                .HasColumnType("datetime")
                .HasColumnName("dt_created");
            entity.Property(e => e.DtModified)
                .ValueGeneratedOnAddOrUpdate()
                .HasDefaultValueSql("CURRENT_TIMESTAMP")
                .HasColumnType("datetime")
                .HasColumnName("dt_modified");
            entity.Property(e => e.Email)
                .HasMaxLength(20)
                .HasColumnName("email");
            entity.Property(e => e.TechId).HasColumnName("tech_id");

            entity.HasOne(d => d.EmailNavigation).WithMany(p => p.TechnologyFamiliars)
                .HasForeignKey(d => d.Email)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("technology_familiar_ibfk_1");

            entity.HasOne(d => d.Tech).WithMany(p => p.TechnologyFamiliars)
                .HasForeignKey(d => d.TechId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("technology_familiar_ibfk_2");
        });

        modelBuilder.Entity<TimeSlotTable>(entity =>
        {
            entity.HasKey(e => e.TimeSlotId).HasName("PRIMARY");

            entity.ToTable("time_slot_table");

            entity.HasIndex(e => e.TimeSlotId, "idx_key").IsUnique();

            entity.Property(e => e.TimeSlotId)
                .ValueGeneratedNever()
                .HasColumnName("time_slot_id");
            entity.Property(e => e.DtCreated)
                .HasDefaultValueSql("CURRENT_TIMESTAMP")
                .HasColumnType("datetime")
                .HasColumnName("dt_created");
            entity.Property(e => e.DtModified)
                .ValueGeneratedOnAddOrUpdate()
                .HasDefaultValueSql("CURRENT_TIMESTAMP")
                .HasColumnType("datetime")
                .HasColumnName("dt_modified");
            entity.Property(e => e.TimeSlot)
                .HasMaxLength(20)
                .HasColumnName("time_slot");
        });

        modelBuilder.Entity<UserHasPreference>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("user_has_preferences");

            entity.HasIndex(e => e.Id, "id_UNIQUE").IsUnique();

            entity.HasIndex(e => e.JobRoleId, "job_role_id");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.DtCreated)
                .HasDefaultValueSql("CURRENT_TIMESTAMP")
                .HasColumnType("datetime")
                .HasColumnName("dt_created");
            entity.Property(e => e.DtModified)
                .ValueGeneratedOnAddOrUpdate()
                .HasDefaultValueSql("CURRENT_TIMESTAMP")
                .HasColumnType("datetime")
                .HasColumnName("dt_modified");
            entity.Property(e => e.Email)
                .HasMaxLength(20)
                .HasColumnName("email");
            entity.Property(e => e.JobRoleId).HasColumnName("job_role_id");
        });

        modelBuilder.Entity<UserJobDetail>(entity =>
        {
            entity.HasKey(e => e.Email).HasName("PRIMARY");

            entity.ToTable("user_job_details");

            entity.HasIndex(e => e.Email, "idx_key");

            entity.HasIndex(e => e.JobId, "job_id");

            entity.Property(e => e.Email)
                .HasMaxLength(20)
                .HasColumnName("email");
            entity.Property(e => e.DtCreated)
                .HasDefaultValueSql("CURRENT_TIMESTAMP")
                .HasColumnType("datetime")
                .HasColumnName("dt_created");
            entity.Property(e => e.DtModified)
                .ValueGeneratedOnAddOrUpdate()
                .HasDefaultValueSql("CURRENT_TIMESTAMP")
                .HasColumnType("datetime")
                .HasColumnName("dt_modified");
            entity.Property(e => e.JobId).HasColumnName("job_id");
            entity.Property(e => e.Resume)
                .HasMaxLength(100)
                .HasColumnName("resume");
            entity.Property(e => e.TimeSlotId).HasColumnName("time_slot_id");

            entity.HasOne(d => d.Job).WithMany(p => p.UserJobDetails)
                .HasForeignKey(d => d.JobId)
                .HasConstraintName("user_job_details_ibfk_1");
        });

        modelBuilder.Entity<Userdatum>(entity =>
        {
            entity.HasKey(e => e.Email).HasName("PRIMARY");

            entity.ToTable("userdata");

            entity.HasIndex(e => e.Email, "email_UNIQUE").IsUnique();

            entity.HasIndex(e => e.Srno, "srno_UNIQUE").IsUnique();

            entity.Property(e => e.Email)
                .HasMaxLength(20)
                .HasColumnName("email");
            entity.Property(e => e.DtCreated)
                .HasDefaultValueSql("CURRENT_TIMESTAMP")
                .HasColumnType("datetime")
                .HasColumnName("dt_created");
            entity.Property(e => e.DtModified)
                .ValueGeneratedOnAddOrUpdate()
                .HasDefaultValueSql("CURRENT_TIMESTAMP")
                .HasColumnType("datetime")
                .HasColumnName("dt_modified");
            entity.Property(e => e.IsAdmin).HasColumnName("isAdmin");
            entity.Property(e => e.Password)
                .HasMaxLength(20)
                .HasColumnName("password");
            entity.Property(e => e.Srno)
                .ValueGeneratedOnAdd()
                .HasColumnName("srno");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
