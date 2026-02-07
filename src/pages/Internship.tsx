import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Check, Award, Clock, BookOpen, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { internshipCourses, internshipTestQuestions } from "@/data/internshipData";
import { useState } from "react";

const Internship = () => {
  const [testStarted, setTestStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [testCompleted, setTestCompleted] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});

  const handleAnswerSelect = (questionId: string, optionIndex: number) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionId]: optionIndex,
    });
  };

  const handleNextQuestion = () => {
    const currentQuestion = internshipTestQuestions[currentQuestionIndex];
    if (selectedAnswers[currentQuestion.id] === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestionIndex < internshipTestQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setTestCompleted(true);
    }
  };

  const handleStartTest = () => {
    setTestStarted(true);
    setCurrentQuestionIndex(0);
    setScore(0);
    setSelectedAnswers({});
    setTestCompleted(false);
  };

  const handleRestartTest = () => {
    handleStartTest();
  };

  const passPercentage = (score / internshipTestQuestions.length) * 100;
  const isPassed = passPercentage >= 70;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-32 pb-20">
        {!testStarted ? (
          // Courses View
          <div className="container px-4 md:px-6">
            {/* Page header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <span className="text-primary text-sm uppercase tracking-widest mb-4 block font-semibold">
                LAUNCH YOUR CAREER
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Internship <span className="gradient-text">Programs</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Gain hands-on experience, build your skills, and prove your expertise through our comprehensive internship programs. 
                Complete the courses and pass our assessment test to secure your internship position.
              </p>
            </motion.div>

            {/* Internship Courses Grid */}
            <div className="mb-20">
              <h2 className="text-3xl font-bold mb-12 text-center">Available Internship Tracks</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {internshipCourses.map((course, index) => (
                  <motion.div
                    key={course.id}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="h-full hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="text-5xl mb-4">{course.icon}</div>
                        <CardTitle>{course.title}</CardTitle>
                        <CardDescription className="line-clamp-2">{course.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        {/* Duration */}
                        <div className="flex items-center gap-2 text-sm">
                          <Clock className="w-4 h-4 text-primary" />
                          <span className="font-semibold">{course.duration}</span>
                        </div>

                        {/* Level */}
                        <div className="flex items-center gap-2 text-sm">
                          <BookOpen className="w-4 h-4 text-primary" />
                          <span className={`px-2 py-1 rounded text-xs font-semibold ${
                            course.level === "Beginner" ? "bg-green-100 text-green-800" :
                            course.level === "Intermediate" ? "bg-yellow-100 text-yellow-800" :
                            "bg-red-100 text-red-800"
                          }`}>
                            {course.level}
                          </span>
                        </div>

                        {/* Skills */}
                        <div>
                          <p className="text-sm font-semibold mb-2">Key Skills:</p>
                          <div className="flex flex-wrap gap-2">
                            {course.skills.slice(0, 3).map((skill) => (
                              <span key={skill} className="px-2 py-1 bg-muted rounded text-xs">
                                {skill}
                              </span>
                            ))}
                            {course.skills.length > 3 && (
                              <span className="px-2 py-1 bg-muted rounded text-xs text-muted-foreground">
                                +{course.skills.length - 3} more
                              </span>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Qualification Requirements */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-muted rounded-lg p-8 mb-16"
            >
              <h3 className="text-2xl font-bold mb-6">How to Qualify for an Internship</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h4 className="font-semibold text-lg mb-4">Requirements:</h4>
                  {[
                    "Complete the selected internship course",
                    "Score 70% or above on the assessment test",
                    "Demonstrate commitment and professionalism",
                    "Strong communication and teamwork skills",
                  ].map((req, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span>{req}</span>
                    </div>
                  ))}
                </div>
                <div className="space-y-4">
                  <h4 className="font-semibold text-lg mb-4">Benefits:</h4>
                  {[
                    "Real-world project experience",
                    "Mentorship from industry experts",
                    "Certificate upon completion",
                    "Potential full-time job offer",
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Award className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="text-3xl font-bold mb-4">Ready to Get Hired?</h3>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Take our assessment test to prove your skills and qualification for the internship program.
              </p>
              <Button size="lg" onClick={handleStartTest} className="bg-primary hover:bg-primary/90">
                Start the Assessment Test
              </Button>
            </motion.div>
          </div>
        ) : testCompleted ? (
          // Test Completed View
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl mx-auto"
            >
              <Card className="text-center">
                <CardHeader>
                  <div className="mb-6">
                    {isPassed ? (
                      <div className="text-6xl mb-4">🎉</div>
                    ) : (
                      <div className="text-6xl mb-4">📚</div>
                    )}
                  </div>
                  <CardTitle className="text-3xl">
                    {isPassed ? "Congratulations!" : "Assessment Complete"}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <p className="text-6xl font-bold text-primary">
                      {score}/{internshipTestQuestions.length}
                    </p>
                    <p className="text-xl text-muted-foreground mt-2">
                      {passPercentage.toFixed(1)}%
                    </p>
                  </div>

                  {isPassed ? (
                    <Alert className="border-green-500 bg-green-50">
                      <Check className="h-4 w-4 text-green-600" />
                      <AlertDescription className="text-green-800">
                        <strong>Excellent work!</strong> You have passed the assessment test. 
                        Our team will contact you soon with the next steps for your internship placement.
                      </AlertDescription>
                    </Alert>
                  ) : (
                    <Alert>
                      <AlertCircle className="h-4 w-4" />
                      <AlertDescription>
                        <strong>Keep Learning!</strong> You need a score of 70% or higher to qualify. 
                        Review the material and try again.
                      </AlertDescription>
                    </Alert>
                  )}

                  <div className="bg-muted p-6 rounded-lg">
                    <h4 className="font-semibold mb-4">Performance Breakdown:</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      You answered {score} out of {internshipTestQuestions.length} questions correctly.
                    </p>
                    <div className="space-y-2">
                      <p className="text-sm">Passing Score: 70% ({Math.ceil(internshipTestQuestions.length * 0.7)}/10)</p>
                      <p className="text-sm">Your Score: {passPercentage.toFixed(1)}%</p>
                    </div>
                  </div>

                  <div className="flex gap-4 justify-center pt-6">
                    {!isPassed && (
                      <Button 
                        onClick={handleRestartTest} 
                        className="bg-primary hover:bg-primary/90"
                      >
                        Retake Test
                      </Button>
                    )}
                    <Button 
                      onClick={() => setTestStarted(false)} 
                      variant="outline"
                    >
                      Back to Courses
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        ) : (
          // Test In Progress View
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto"
            >
              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold">
                    Question {currentQuestionIndex + 1} of {internshipTestQuestions.length}
                  </span>
                  <span className="text-muted-foreground">
                    {Math.round(((currentQuestionIndex + 1) / internshipTestQuestions.length) * 100)}%
                  </span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <motion.div
                    className="bg-primary h-2 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ 
                      width: `${((currentQuestionIndex + 1) / internshipTestQuestions.length) * 100}%` 
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </div>

              {/* Question Card */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="text-2xl">
                    {internshipTestQuestions[currentQuestionIndex].question}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Answer Options */}
                  <div className="space-y-3">
                    {internshipTestQuestions[currentQuestionIndex].options.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => 
                          handleAnswerSelect(
                            internshipTestQuestions[currentQuestionIndex].id,
                            index
                          )
                        }
                        className={`w-full p-4 text-left border-2 rounded-lg transition-all ${
                          selectedAnswers[internshipTestQuestions[currentQuestionIndex].id] === index
                            ? "border-primary bg-primary/10"
                            : "border-muted hover:border-muted-foreground/50"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                              selectedAnswers[internshipTestQuestions[currentQuestionIndex].id] === index
                                ? "border-primary bg-primary"
                                : "border-muted-foreground"
                            }`}
                          >
                            {selectedAnswers[internshipTestQuestions[currentQuestionIndex].id] === index && (
                              <Check className="w-4 h-4 text-white" />
                            )}
                          </div>
                          <span>{option}</span>
                        </div>
                      </button>
                    ))}
                  </div>

                  {/* Explanation (shown after selection) */}
                  {selectedAnswers[internshipTestQuestions[currentQuestionIndex].id] !== undefined && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-muted p-4 rounded-lg"
                    >
                      <p className="font-semibold mb-2">Explanation:</p>
                      <p className="text-sm text-muted-foreground">
                        {internshipTestQuestions[currentQuestionIndex].explanation}
                      </p>
                    </motion.div>
                  )}
                </CardContent>
              </Card>

              {/* Navigation Buttons */}
              <div className="flex gap-4 justify-center">
                <Button
                  variant="outline"
                  onClick={() => {
                    if (currentQuestionIndex > 0) {
                      setCurrentQuestionIndex(currentQuestionIndex - 1);
                    }
                  }}
                  disabled={currentQuestionIndex === 0}
                >
                  Previous
                </Button>
                <Button
                  onClick={handleNextQuestion}
                  disabled={selectedAnswers[internshipTestQuestions[currentQuestionIndex].id] === undefined}
                  className="bg-primary hover:bg-primary/90"
                >
                  {currentQuestionIndex === internshipTestQuestions.length - 1
                    ? "Submit Test"
                    : "Next Question"}
                </Button>
              </div>
            </motion.div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Internship;
